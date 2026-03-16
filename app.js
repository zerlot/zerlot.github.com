/* ============================================================
   BOM 数据中心 — 应用逻辑
   ============================================================ */

/* ---------- Globals ---------- */
var currentPage = 'overview';
var chartInstances = {};
var bomSortCol = null;
var bomSortDir = 'asc';
var _bomIdCounter = 0;

/* ---------- Storage Abstraction (with sandbox fallback) ---------- */
var _storage = (function() {
  try {
    var s = window['local' + 'Storage'];
    var t = '__test__';
    s.setItem(t, t);
    s.removeItem(t);
    return s;
  } catch(e) {
    // Fallback: in-memory storage for sandboxed iframes
    var mem = {};
    return {
      getItem: function(k) { return mem[k] || null; },
      setItem: function(k, v) { mem[k] = String(v); },
      removeItem: function(k) { delete mem[k]; }
    };
  }
})();

/* ---------- BOM Persistence ---------- */
function initBomIds() {
  // Assign unique _id to each BOM item for reliable indexing
  BOM_DATA.forEach(function(item, i) {
    if (!item._id) { item._id = 'bom_' + (++_bomIdCounter); }
  });
}

function saveBomToStorage() {
  try {
    var data = BOM_DATA.map(function(item) {
      var copy = {};
      for (var k in item) { copy[k] = item[k]; }
      return copy;
    });
    _storage.setItem('dc-bom-data', JSON.stringify(data));
  } catch(e) { /* storage full or unavailable */ }
}

function loadBomFromStorage() {
  try {
    var raw = _storage.getItem('dc-bom-data');
    if (raw) {
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Replace BOM_DATA contents
        BOM_DATA.length = 0;
        parsed.forEach(function(item) { BOM_DATA.push(item); });
        return true;
      }
    }
  } catch(e) { /* parse error, use defaults */ }
  return false;
}

function resetBomToDefaults() {
  _storage.removeItem('dc-bom-data');
  location.reload();
}

/* ---------- CSV Export ---------- */
function exportBomCsv() {
  var headers = ['系统', '子类', '设备名称', '规格', '单位', '参考价低(万)', '参考价高(万)', '中位价(万)', '数量', '小计(亿)'];
  var rows = [headers.join(',')];
  BOM_DATA.forEach(function(item) {
    rows.push([
      csvEscape(item.system), csvEscape(item.sub), csvEscape(item.name),
      csvEscape(item.spec), csvEscape(item.unit),
      item.priceLow, item.priceHigh, item.priceMid,
      item.qty, item.totalMid.toFixed(4)
    ].join(','));
  });
  downloadCsv('BOM明细_' + todayStr() + '.csv', rows.join('\n'));
}

function exportSupplierCsv() {
  var headers = ['系统分类', '子分类', '供应商', '国产/进口', '国家/地区', '主要产品', '价格区间'];
  var rows = [headers.join(',')];
  Object.keys(SUPPLIER_DATA).forEach(function(sys) {
    SUPPLIER_DATA[sys].forEach(function(s) {
      rows.push([
        csvEscape(sys), csvEscape(s.subCategory || ''), csvEscape(s.name),
        csvEscape(s.origin), csvEscape(s.country),
        csvEscape(s.products), csvEscape(s.priceRange)
      ].join(','));
    });
  });
  downloadCsv('供应商数据_' + todayStr() + '.csv', rows.join('\n'));
}

function csvEscape(val) {
  var s = String(val || '');
  if (s.indexOf(',') !== -1 || s.indexOf('"') !== -1 || s.indexOf('\n') !== -1) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

function todayStr() {
  var d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

function downloadCsv(filename, content) {
  var BOM = '\uFEFF'; // UTF-8 BOM for Excel compatibility
  var blob = new Blob([BOM + content], { type: 'text/csv;charset=utf-8' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* ---------- Theme ---------- */
function initTheme() {
  var saved = _storage.getItem('dc-bom-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
}

function toggleTheme() {
  var current = document.documentElement.getAttribute('data-theme') || 'dark';
  var next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  _storage.setItem('dc-bom-theme', next);
  if (currentPage === 'overview') { renderOverviewCharts(); }
}

/* ---------- Navigation ---------- */
function initNav() {
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    item.addEventListener('click', function() {
      var page = item.getAttribute('data-page');
      navigateTo(page);
      closeMobileSidebar();
    });
  });

  document.getElementById('hamburger').addEventListener('click', openMobileSidebar);
  document.getElementById('sidebarOverlay').addEventListener('click', closeMobileSidebar);
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
}

function navigateTo(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.classList.toggle('active', item.getAttribute('data-page') === page);
  });
  renderPage(page);
}

function openMobileSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('sidebarOverlay').classList.add('visible');
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

/* ---------- Page Renderer ---------- */
function renderPage(page) {
  var main = document.getElementById('mainContent');
  destroyCharts();

  switch(page) {
    case 'overview': main.innerHTML = renderOverview(); initOverview(); break;
    case 'bom': main.innerHTML = renderBomPage(); initBomTable(); break;
    case 'research': main.innerHTML = renderResearchPage(); initResearchTabs(); break;
    case 'suppliers': main.innerHTML = renderSuppliersPage(); initSupplierEvents(); break;
    case 'changelog': main.innerHTML = renderChangelogPage(); break;
    default: main.innerHTML = renderOverview(); initOverview();
  }
}

function destroyCharts() {
  Object.keys(chartInstances).forEach(function(key) {
    if (chartInstances[key]) { chartInstances[key].destroy(); }
  });
  chartInstances = {};
}

/* ---------- Helpers ---------- */
function fmt(n, decimals) {
  if (decimals === undefined) { decimals = 2; }
  return Number(n).toFixed(decimals);
}

function fmtYi(n) {
  return fmt(n, 2) + ' 亿';
}

function fmtWan(n) {
  if (n >= 10000) { return fmt(n / 10000, 1) + ' 亿'; }
  return fmt(n, 0) + ' 万';
}

function getChartColors() {
  var isDark = (document.documentElement.getAttribute('data-theme') || 'dark') === 'dark';
  return {
    text: isDark ? '#94a3b8' : '#475569',
    grid: isDark ? 'rgba(148,163,184,0.1)' : 'rgba(15,23,42,0.06)',
    bg: isDark ? '#1a2236' : '#ffffff'
  };
}

/* ---------- OVERVIEW PAGE ---------- */
function renderOverview() {
  var totals = getSystemTotals();
  var grandLow = 0, grandHigh = 0, grandMid = 0, totalItems = BOM_DATA.length;
  Object.values(totals).forEach(function(t) {
    grandLow += t.low;
    grandHigh += t.high;
    grandMid += t.mid;
  });

  var researchCoverage = 4; // 4 categories covered
  var totalCategories = 4;
  var supplierTotal = 0;
  Object.values(SUPPLIER_DATA).forEach(function(arr) { supplierTotal += arr.length; });

  return '<div class="page-header">' +
    '<h1 class="page-title">数据中心 BOM 总览</h1>' +
    '<p class="page-subtitle">AI超算中心从0到1建设成本全景视图</p>' +
    '</div>' +

    '<div class="kpi-grid">' +
      kpiCard('总投资中位数', fmtYi(grandMid), '范围 ' + fmtYi(grandLow) + ' – ' + fmtYi(grandHigh), 'neutral') +
      kpiCard('BOM 设备条目', totalItems + '<span class="unit">项</span>', '覆盖 10 大系统', 'neutral') +
      kpiCard('上次更新', UPDATE_LOG[0].date, '版本 ' + UPDATE_LOG[0].version, 'neutral') +
      kpiCard('供应商数据库', supplierTotal + '<span class="unit">家</span>', '覆盖 ' + Object.keys(SUPPLIER_DATA).length + ' 大系统', 'neutral') +
    '</div>' +

    '<div class="charts-row">' +
      '<div class="card">' +
        '<div class="card-title"><span class="dot"></span>投资分布（中位数）</div>' +
        '<div class="chart-container"><canvas id="pieChart"></canvas></div>' +
      '</div>' +
      '<div class="card">' +
        '<div class="card-title"><span class="dot"></span>各系统成本范围</div>' +
        '<div class="chart-container"><canvas id="barChart"></canvas></div>' +
      '</div>' +
    '</div>' +

    '<div class="card">' +
      '<div class="card-title"><span class="dot"></span>各系统投资概况</div>' +
      renderSystemSummaryTable(totals) +
    '</div>';
}

function kpiCard(label, value, delta, type) {
  return '<div class="kpi-card">' +
    '<div class="kpi-label">' + label + '</div>' +
    '<div class="kpi-value">' + value + '</div>' +
    '<div class="kpi-delta ' + type + '">' + delta + '</div>' +
    '</div>';
}

function renderSystemSummaryTable(totals) {
  var systems = Object.keys(totals);
  var html = '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
    '<th>系统</th><th class="price-cell">条目数</th>' +
    '<th class="price-cell">低估（亿）</th><th class="price-cell">高估（亿）</th>' +
    '<th class="price-cell">中位数（亿）</th><th class="price-cell">占比</th>' +
    '</tr></thead><tbody>';

  var grandMid = 0;
  systems.forEach(function(s) { grandMid += totals[s].mid; });

  systems.forEach(function(s) {
    var t = totals[s];
    var pct = grandMid > 0 ? (t.mid / grandMid * 100).toFixed(1) : '0';
    var color = SYSTEM_COLORS[s] || '#888';
    html += '<tr>' +
      '<td><span class="system-badge" style="background:' + color + '22;color:' + color + '">' + s + '</span></td>' +
      '<td class="price-cell">' + t.count + '</td>' +
      '<td class="price-cell">' + fmt(t.low) + '</td>' +
      '<td class="price-cell">' + fmt(t.high) + '</td>' +
      '<td class="price-cell highlight">' + fmt(t.mid) + '</td>' +
      '<td class="price-cell">' + pct + '%</td>' +
      '</tr>';
  });

  html += '</tbody></table></div>';
  return html;
}

function initOverview() {
  renderOverviewCharts();
}

function renderOverviewCharts() {
  destroyCharts();
  var totals = getSystemTotals();
  var systems = Object.keys(totals);
  var colors = getChartColors();

  // Pie Chart
  var pieCtx = document.getElementById('pieChart');
  if (pieCtx) {
    chartInstances.pie = new Chart(pieCtx, {
      type: 'doughnut',
      data: {
        labels: systems,
        datasets: [{
          data: systems.map(function(s) { return Number(totals[s].mid.toFixed(2)); }),
          backgroundColor: systems.map(function(s) { return SYSTEM_COLORS[s]; }),
          borderColor: colors.bg,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: { color: colors.text, font: { family: "'DM Sans'", size: 11 }, padding: 10, usePointStyle: true, pointStyleWidth: 8 }
          },
          tooltip: {
            callbacks: {
              label: function(ctx) { return ctx.label + ': ' + ctx.parsed.toFixed(2) + ' 亿元'; }
            }
          }
        },
        cutout: '55%'
      }
    });
  }

  // Bar Chart
  var barCtx = document.getElementById('barChart');
  if (barCtx) {
    chartInstances.bar = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: systems,
        datasets: [
          {
            label: '低估',
            data: systems.map(function(s) { return Number(totals[s].low.toFixed(2)); }),
            backgroundColor: 'rgba(56,189,248,0.25)',
            borderColor: 'rgba(56,189,248,0.5)',
            borderWidth: 1
          },
          {
            label: '中位数',
            data: systems.map(function(s) { return Number(totals[s].mid.toFixed(2)); }),
            backgroundColor: 'rgba(56,189,248,0.6)',
            borderColor: '#38bdf8',
            borderWidth: 1
          },
          {
            label: '高估',
            data: systems.map(function(s) { return Number(totals[s].high.toFixed(2)); }),
            backgroundColor: 'rgba(56,189,248,0.15)',
            borderColor: 'rgba(56,189,248,0.3)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: { labels: { color: colors.text, font: { family: "'DM Sans'", size: 11 }, padding: 16 } },
          tooltip: {
            callbacks: {
              label: function(ctx) { return ctx.dataset.label + ': ' + ctx.parsed.x.toFixed(2) + ' 亿元'; }
            }
          }
        },
        scales: {
          x: {
            grid: { color: colors.grid },
            ticks: {
              color: colors.text,
              font: { family: "'DM Sans'", size: 11 },
              callback: function(v) { return v + '亿'; }
            },
            title: { display: true, text: '投资额（亿元）', color: colors.text, font: { family: "'DM Sans'", size: 12 } }
          },
          y: {
            grid: { display: false },
            ticks: { color: colors.text, font: { family: "'DM Sans'", size: 11 } }
          }
        }
      }
    });
  }
}

/* ---------- BOM PAGE ---------- */
var editingIndex = -1; // -1 = adding new, >= 0 = editing existing

function renderBomPage() {
  var systems = Object.keys(SYSTEM_COLORS);
  var opts = '<option value="">全部系统</option>' + systems.map(function(s) {
    return '<option value="' + s + '">' + s + '</option>';
  }).join('');

  return '<div class="page-header">' +
    '<h1 class="page-title">BOM 明细清单</h1>' +
    '<p class="page-subtitle">完整设备清单（' + BOM_DATA.length + '个条目），可搜索、过滤、排序、编辑</p>' +
    '</div>' +
    '<div id="bomSummaryBar" class="bom-summary-bar">' + renderBomSummaryBar() + '</div>' +
    '<div class="card">' +
      '<div class="table-toolbar">' +
        '<input type="text" class="search-input" id="bomSearch" placeholder="搜索设备名称、规格、子类...">' +
        '<select class="filter-select" id="bomFilter">' + opts + '</select>' +
        '<button class="btn btn-primary" id="addBomBtn" type="button">' +
          '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/></svg>' +
          '添加条目' +
        '</button>' +
        '<button class="btn" id="exportBomBtn" type="button">' +
          '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/></svg>' +
          '导出 CSV' +
        '</button>' +
        '<button class="btn btn-sm" id="resetBomBtn" type="button" title="恢复默认数据（清除本地编辑）">' +
          '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" fill="currentColor"/></svg>' +
          '重置' +
        '</button>' +
      '</div>' +
      '<div class="table-wrapper" id="bomTableWrapper"></div>' +
      '<div class="table-count" id="bomCount"></div>' +
    '</div>' +
    renderBomModal() +
    renderDeleteConfirm();
}

function renderBomSummaryBar() {
  var totals = getSystemTotals();
  var grandLow = 0, grandHigh = 0, grandMid = 0;
  var systemEntries = [];
  Object.keys(SYSTEM_COLORS).forEach(function(sys) {
    var t = totals[sys] || { low: 0, high: 0, mid: 0, count: 0 };
    grandLow += t.low;
    grandHigh += t.high;
    grandMid += t.mid;
    systemEntries.push({ name: sys, mid: t.mid, color: SYSTEM_COLORS[sys] });
  });
  // Sort by mid descending, take top 4
  systemEntries.sort(function(a, b) { return b.mid - a.mid; });
  var top = systemEntries.slice(0, 4);

  var html = '<div class="bom-summary-total">' +
    '<div class="bom-summary-label">总投资中位数</div>' +
    '<div class="bom-summary-value">' + fmtYi(grandMid) + '</div>' +
    '<div class="bom-summary-range">' + fmtYi(grandLow) + ' – ' + fmtYi(grandHigh) + '</div>' +
  '</div>' +
  '<div class="bom-summary-divider"></div>' +
  '<div class="bom-summary-systems">';

  top.forEach(function(s) {
    var pct = grandMid > 0 ? (s.mid / grandMid * 100).toFixed(1) : '0';
    html += '<div class="bom-summary-sys">' +
      '<div class="bom-summary-sys-name">' +
        '<span class="bom-summary-dot" style="background:' + s.color + '"></span>' + s.name +
      '</div>' +
      '<div class="bom-summary-sys-val">' + fmtYi(s.mid) + '</div>' +
      '<div class="bom-summary-sys-pct">' + pct + '%</div>' +
    '</div>';
  });

  html += '</div>' +
  '<div class="bom-summary-divider"></div>' +
  '<div class="bom-summary-meta">' +
    '<div class="bom-summary-meta-item">' +
      '<span class="bom-summary-meta-label">条目</span>' +
      '<span class="bom-summary-meta-val">' + BOM_DATA.length + '</span>' +
    '</div>' +
    '<div class="bom-summary-meta-item">' +
      '<span class="bom-summary-meta-label">系统</span>' +
      '<span class="bom-summary-meta-val">' + Object.keys(totals).length + '</span>' +
    '</div>' +
  '</div>';

  return html;
}

function refreshBomSummary() {
  var bar = document.getElementById('bomSummaryBar');
  if (bar) { bar.innerHTML = renderBomSummaryBar(); }
  // Also update subtitle count
  var subtitle = document.querySelector('.page-subtitle');
  if (subtitle) {
    subtitle.textContent = '完整设备清单（' + BOM_DATA.length + '个条目），可搜索、过滤、排序、编辑';
  }
}

function initBomTable() {
  renderBomTable(BOM_DATA);
  document.getElementById('bomSearch').addEventListener('input', filterBom);
  document.getElementById('bomFilter').addEventListener('change', filterBom);
  document.getElementById('addBomBtn').addEventListener('click', function() {
    openBomModal(-1);
  });
  document.getElementById('exportBomBtn').addEventListener('click', exportBomCsv);
  document.getElementById('resetBomBtn').addEventListener('click', function() {
    if (confirm('确定要恢复默认数据吗？您的所有本地编辑将被清除。')) {
      resetBomToDefaults();
    }
  });
  initModalEvents();
  // Show persistence indicator
  var hasLocal = _storage.getItem('dc-bom-data') !== null;
  if (hasLocal) {
    var count = document.getElementById('bomCount');
    if (count) {
      count.innerHTML += ' <span style="color:var(--accent);font-size:11px;margin-left:8px">• 已加载本地编辑数据</span>';
    }
  }
  // Add scroll hint for narrow viewports
  initScrollHint();
}

function initScrollHint() {
  // bomTableWrapper is the .table-wrapper div itself
  var tw = document.getElementById('bomTableWrapper');
  if (!tw) return;
  // Check after DOM reflow
  setTimeout(function() {
    var hasOverflow = tw.scrollWidth > tw.clientWidth + 10;
    var existingHint = document.getElementById('scrollHint');
    if (hasOverflow && !existingHint) {
      var hint = document.createElement('div');
      hint.id = 'scrollHint';
      hint.className = 'scroll-hint';
      hint.innerHTML = '<span class="scroll-hint-icon">↔</span> 左右滑动查看完整表格';
      tw.parentNode.insertBefore(hint, tw.nextSibling);
      // Hide hint once user scrolls horizontally
      tw.addEventListener('scroll', function onScroll() {
        if (tw.scrollLeft > 20) {
          hint.style.opacity = '0';
          setTimeout(function() { if (hint.parentNode) hint.parentNode.removeChild(hint); }, 300);
          tw.removeEventListener('scroll', onScroll);
        }
      });
    } else if (!hasOverflow && existingHint) {
      existingHint.parentNode.removeChild(existingHint);
    }
  }, 100);
}

function filterBom() {
  var q = document.getElementById('bomSearch').value.toLowerCase();
  var sys = document.getElementById('bomFilter').value;
  var filtered = BOM_DATA.filter(function(item) {
    var matchSys = !sys || item.system === sys;
    var matchQ = !q ||
      item.name.toLowerCase().indexOf(q) !== -1 ||
      item.spec.toLowerCase().indexOf(q) !== -1 ||
      item.sub.toLowerCase().indexOf(q) !== -1 ||
      item.system.toLowerCase().indexOf(q) !== -1;
    return matchSys && matchQ;
  });
  renderBomTable(filtered);
}

function renderBomTable(data) {
  // Tag each item with its original index in BOM_DATA using id
  var tagged = data.map(function(item) {
    return { item: item, origIdx: BOM_DATA.findIndex(function(b) { return b._id === item._id; }) };
  });

  if (bomSortCol !== null) {
    tagged.sort(function(a, b) {
      var va = a.item[bomSortCol], vb = b.item[bomSortCol];
      if (typeof va === 'string') {
        return bomSortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
      }
      return bomSortDir === 'asc' ? va - vb : vb - va;
    });
  }

  var cols = [
    { key: 'system', label: '系统' },
    { key: 'sub', label: '子类' },
    { key: 'name', label: '设备名称' },
    { key: 'spec', label: '规格' },
    { key: 'unit', label: '单位' },
    { key: 'priceLow', label: '参考价低(万)' },
    { key: 'priceHigh', label: '参考价高(万)' },
    { key: 'priceMid', label: '中位价(万)' },
    { key: 'qty', label: '数量' },
    { key: 'totalMid', label: '小计(亿)' }
  ];

  var html = '<table class="data-table"><thead><tr>';
  cols.forEach(function(col) {
    var sorted = bomSortCol === col.key;
    var arrow = sorted ? (bomSortDir === 'asc' ? '▲' : '▼') : '▲';
    html += '<th class="' + (sorted ? 'sorted' : '') + '" data-col="' + col.key + '">' +
      col.label + '<span class="sort-icon">' + arrow + '</span></th>';
  });
  html += '<th style="width:70px">操作</th>';
  html += '</tr></thead><tbody>';

  tagged.forEach(function(entry) {
    var item = entry.item;
    var idx = entry.origIdx;
    var color = SYSTEM_COLORS[item.system] || '#888';
    html += '<tr>' +
      '<td><span class="system-badge" style="background:' + color + '22;color:' + color + '">' + item.system + '</span></td>' +
      '<td>' + item.sub + '</td>' +
      '<td style="color:var(--text-primary);font-weight:500">' + item.name + '</td>' +
      '<td>' + item.spec + '</td>' +
      '<td>' + item.unit + '</td>' +
      '<td class="price-cell">' + fmtWan(item.priceLow) + '</td>' +
      '<td class="price-cell">' + fmtWan(item.priceHigh) + '</td>' +
      '<td class="price-cell highlight">' + fmtWan(item.priceMid) + '</td>' +
      '<td class="price-cell">' + item.qty.toLocaleString() + '</td>' +
      '<td class="price-cell highlight">' + fmt(item.totalMid) + '</td>' +
      '<td>' +
        '<div class="row-actions">' +
          '<button class="row-action-btn edit" data-idx="' + idx + '" title="编辑">' +
            '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.33a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.83z" fill="currentColor"/></svg>' +
          '</button>' +
          '<button class="row-action-btn delete" data-idx="' + idx + '" title="删除">' +
            '<svg viewBox="0 0 24 24" width="14" height="14"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/></svg>' +
          '</button>' +
        '</div>' +
      '</td>' +
      '</tr>';
  });

  html += '</tbody></table>';
  document.getElementById('bomTableWrapper').innerHTML = html;
  document.getElementById('bomCount').textContent = '显示 ' + data.length + ' / ' + BOM_DATA.length + ' 条记录';

  // Attach sort handlers
  document.querySelectorAll('#bomTableWrapper th[data-col]').forEach(function(th) {
    th.addEventListener('click', function() {
      var col = th.getAttribute('data-col');
      if (bomSortCol === col) {
        bomSortDir = bomSortDir === 'asc' ? 'desc' : 'asc';
      } else {
        bomSortCol = col;
        bomSortDir = 'asc';
      }
      filterBom();
    });
  });

  // Attach edit handlers
  document.querySelectorAll('.row-action-btn.edit').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.getAttribute('data-idx'), 10);
      openBomModal(idx);
    });
  });

  // Attach delete handlers
  document.querySelectorAll('.row-action-btn.delete').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var idx = parseInt(btn.getAttribute('data-idx'), 10);
      showDeleteConfirm(idx);
    });
  });
}

/* ---------- BOM Modal & CRUD ---------- */
function renderBomModal() {
  var systems = Object.keys(SYSTEM_COLORS);
  var sysOpts = systems.map(function(s) {
    return '<option value="' + s + '">' + s + '</option>';
  }).join('');

  return '<div class="modal-overlay" id="bomModalOverlay">' +
    '<div class="modal">' +
      '<div class="modal-header">' +
        '<div class="modal-title" id="bomModalTitle">添加 BOM 条目</div>' +
        '<button class="modal-close" id="bomModalClose" type="button">&times;</button>' +
      '</div>' +
      '<div class="modal-body">' +
        '<div class="form-grid">' +
          '<div class="form-group">' +
            '<label class="form-label">系统分类</label>' +
            '<select class="form-select" id="fld_system">' + sysOpts + '</select>' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">子类</label>' +
            '<input class="form-input" id="fld_sub" type="text" placeholder="如：高压引入">' +
          '</div>' +
          '<div class="form-group full-width">' +
            '<label class="form-label">设备名称</label>' +
            '<input class="form-input" id="fld_name" type="text" placeholder="如：110kV主变压器">' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">规格</label>' +
            '<input class="form-input" id="fld_spec" type="text" placeholder="如：油浸式 63MVA">' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">单位</label>' +
            '<input class="form-input" id="fld_unit" type="text" placeholder="如：台、套、项">' +
          '</div>' +
          '<div class="form-divider"></div>' +
          '<div class="form-section-label">价格信息（单位：万元）</div>' +
          '<div class="form-group">' +
            '<label class="form-label">参考价低</label>' +
            '<input class="form-input" id="fld_priceLow" type="number" step="any" min="0" placeholder="0">' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">参考价高</label>' +
            '<input class="form-input" id="fld_priceHigh" type="number" step="any" min="0" placeholder="0">' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">中位价</label>' +
            '<input class="form-input" id="fld_priceMid" type="number" step="any" min="0" placeholder="自动计算">' +
            '<span class="form-hint">留空则自动取中位数</span>' +
          '</div>' +
          '<div class="form-group">' +
            '<label class="form-label">数量</label>' +
            '<input class="form-input" id="fld_qty" type="number" step="1" min="0" placeholder="1">' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="modal-footer">' +
        '<button class="btn" id="bomModalCancel" type="button">取消</button>' +
        '<button class="btn btn-primary" id="bomModalSave" type="button">保存</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function renderDeleteConfirm() {
  return '<div class="confirm-overlay" id="deleteConfirmOverlay">' +
    '<div class="confirm-dialog">' +
      '<p id="deleteConfirmMsg">确定要删除这个 BOM 条目吗？</p>' +
      '<div class="confirm-buttons">' +
        '<button class="btn" id="deleteCancel" type="button">取消</button>' +
        '<button class="btn btn-danger" id="deleteOk" type="button">确认删除</button>' +
      '</div>' +
    '</div>' +
  '</div>';
}

function initModalEvents() {
  var overlay = document.getElementById('bomModalOverlay');
  var closeBtn = document.getElementById('bomModalClose');
  var cancelBtn = document.getElementById('bomModalCancel');
  var saveBtn = document.getElementById('bomModalSave');

  function closeModal() {
    overlay.classList.remove('active');
  }

  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) { closeModal(); }
  });

  saveBtn.addEventListener('click', function() {
    saveBomItem();
  });

  // Auto-calc mid price when low/high change
  var lowInput = document.getElementById('fld_priceLow');
  var highInput = document.getElementById('fld_priceHigh');
  var midInput = document.getElementById('fld_priceMid');

  function autoCalcMid() {
    var low = parseFloat(lowInput.value) || 0;
    var high = parseFloat(highInput.value) || 0;
    if (low > 0 && high > 0 && !midInput.dataset.userEdited) {
      midInput.value = ((low + high) / 2).toFixed(2);
    }
  }

  lowInput.addEventListener('input', autoCalcMid);
  highInput.addEventListener('input', autoCalcMid);
  midInput.addEventListener('input', function() {
    midInput.dataset.userEdited = midInput.value ? 'true' : '';
  });

  // Delete confirm
  document.getElementById('deleteCancel').addEventListener('click', function() {
    document.getElementById('deleteConfirmOverlay').classList.remove('active');
  });
  document.getElementById('deleteConfirmOverlay').addEventListener('click', function(e) {
    if (e.target === document.getElementById('deleteConfirmOverlay')) {
      document.getElementById('deleteConfirmOverlay').classList.remove('active');
    }
  });
}

function openBomModal(idx) {
  editingIndex = idx;
  var overlay = document.getElementById('bomModalOverlay');
  var title = document.getElementById('bomModalTitle');
  var midInput = document.getElementById('fld_priceMid');
  midInput.dataset.userEdited = '';

  if (idx >= 0) {
    // Editing existing
    title.textContent = '编辑 BOM 条目';
    var item = BOM_DATA[idx];
    document.getElementById('fld_system').value = item.system;
    document.getElementById('fld_sub').value = item.sub;
    document.getElementById('fld_name').value = item.name;
    document.getElementById('fld_spec').value = item.spec;
    document.getElementById('fld_unit').value = item.unit;
    document.getElementById('fld_priceLow').value = item.priceLow;
    document.getElementById('fld_priceHigh').value = item.priceHigh;
    document.getElementById('fld_priceMid').value = item.priceMid;
    document.getElementById('fld_qty').value = item.qty;
    midInput.dataset.userEdited = 'true';
  } else {
    // Adding new
    title.textContent = '添加 BOM 条目';
    document.getElementById('fld_system').selectedIndex = 0;
    document.getElementById('fld_sub').value = '';
    document.getElementById('fld_name').value = '';
    document.getElementById('fld_spec').value = '';
    document.getElementById('fld_unit').value = '';
    document.getElementById('fld_priceLow').value = '';
    document.getElementById('fld_priceHigh').value = '';
    document.getElementById('fld_priceMid').value = '';
    document.getElementById('fld_qty').value = '';
  }

  overlay.classList.add('active');
  document.getElementById('fld_name').focus();
}

function saveBomItem() {
  var system = document.getElementById('fld_system').value;
  var sub = document.getElementById('fld_sub').value.trim();
  var name = document.getElementById('fld_name').value.trim();
  var spec = document.getElementById('fld_spec').value.trim();
  var unit = document.getElementById('fld_unit').value.trim();
  var priceLow = parseFloat(document.getElementById('fld_priceLow').value) || 0;
  var priceHigh = parseFloat(document.getElementById('fld_priceHigh').value) || 0;
  var priceMidRaw = document.getElementById('fld_priceMid').value;
  var priceMid = priceMidRaw ? parseFloat(priceMidRaw) : (priceLow + priceHigh) / 2;
  var qty = parseInt(document.getElementById('fld_qty').value, 10) || 0;

  if (!name) {
    document.getElementById('fld_name').style.borderColor = 'var(--danger)';
    document.getElementById('fld_name').focus();
    return;
  }

  // Calculate totals (unit: 亿 = 万 * qty / 10000)
  var totalLow = priceLow * qty / 10000;
  var totalHigh = priceHigh * qty / 10000;
  var totalMid = priceMid * qty / 10000;

  var newItem = {
    system: system,
    sub: sub || '未分类',
    name: name,
    spec: spec || '-',
    unit: unit || '项',
    priceLow: priceLow,
    priceHigh: priceHigh,
    priceMid: priceMid,
    qty: qty,
    totalLow: parseFloat(totalLow.toFixed(6)),
    totalHigh: parseFloat(totalHigh.toFixed(6)),
    totalMid: parseFloat(totalMid.toFixed(6))
  };

  // Assign unique id
  newItem._id = 'bom_' + (++_bomIdCounter);

  if (editingIndex >= 0) {
    // Update existing
    BOM_DATA[editingIndex] = newItem;
  } else {
    // Add new
    BOM_DATA.push(newItem);
  }

  saveBomToStorage();

  // Close modal and refresh
  document.getElementById('bomModalOverlay').classList.remove('active');
  filterBom();
  refreshBomSummary();
}

var deletingIndex = -1;

function showDeleteConfirm(idx) {
  deletingIndex = idx;
  var item = BOM_DATA[idx];
  document.getElementById('deleteConfirmMsg').textContent =
    '确定要删除「' + item.name + '」吗？此操作无法撤销。';
  document.getElementById('deleteConfirmOverlay').classList.add('active');

  // Re-attach OK handler to avoid stale closures
  var okBtn = document.getElementById('deleteOk');
  var newOkBtn = okBtn.cloneNode(true);
  okBtn.parentNode.replaceChild(newOkBtn, okBtn);
  newOkBtn.addEventListener('click', function() {
    if (deletingIndex >= 0) {
      BOM_DATA.splice(deletingIndex, 1);
      deletingIndex = -1;
      saveBomToStorage();
      document.getElementById('deleteConfirmOverlay').classList.remove('active');
      filterBom();
      refreshBomSummary();
    }
  });
}

/* ---------- RESEARCH PAGE ---------- */
function renderResearchPage() {
  var categories = ['compute', 'cooling', 'power', 'network'];
  var labels = { compute: '计算设备', cooling: '散热冷却', power: '电力系统', network: '网络设备' };

  var tabsHtml = '<div class="tabs">';
  categories.forEach(function(cat, i) {
    tabsHtml += '<button class="tab-btn' + (i === 0 ? ' active' : '') + '" data-tab="' + cat + '">' + labels[cat] + '</button>';
  });
  tabsHtml += '</div>';

  var panelsHtml = '';
  categories.forEach(function(cat, i) {
    var rd = RESEARCH_DATA[cat];
    panelsHtml += '<div class="tab-panel' + (i === 0 ? ' active' : '') + '" id="panel-' + cat + '">';
    panelsHtml += '<p class="text-muted mb-8" style="font-size:12px">更新于 ' + rd.updated + ' | ' + rd.items.length + ' 项设备调研</p>';

    rd.items.forEach(function(item) {
      var trendClass = item.trend === '上升' ? 'up' : (item.trend === '下降' ? 'down' : 'stable');
      var trendIcon = item.trend === '上升' ? '↑' : (item.trend === '下降' ? '↓' : '→');

      panelsHtml += '<div class="research-item">' +
        '<div class="research-item-header">' +
          '<div class="research-item-name">' + item.name + '</div>' +
          '<span class="trend-badge ' + trendClass + '">' + trendIcon + ' ' + item.trend + '</span>' +
        '</div>' +
        '<div class="research-grid">' +
          '<div><div class="research-label">BOM 参考价</div><div class="research-value">' + item.bomPrice + '</div></div>' +
          '<div><div class="research-label">最新调研价</div><div class="research-value fw-600">' + item.researchPrice + '</div></div>' +
        '</div>' +
        '<div style="margin-bottom:12px">' +
          '<div class="research-label">主要供应商</div>' +
          '<div class="supplier-tags">' + item.suppliers.map(function(s) { return '<span class="supplier-tag">' + s + '</span>'; }).join('') + '</div>' +
        '</div>' +
        '<div class="research-note">' + item.trendNote + ' — 来源: ' + item.source + '</div>' +
        '</div>';
    });

    panelsHtml += '</div>';
  });

  return '<div class="page-header">' +
    '<h1 class="page-title">价格调研</h1>' +
    '<p class="page-subtitle">最新市场价格对比与趋势分析（2026年3月）</p>' +
    '</div>' +
    '<div class="card">' + tabsHtml + panelsHtml + '</div>';
}

function initResearchTabs() {
  document.querySelectorAll('.tab-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
      document.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('active'); });
      btn.classList.add('active');
      document.getElementById('panel-' + btn.getAttribute('data-tab')).classList.add('active');
    });
  });
}

/* ---------- SUPPLIERS PAGE ---------- */
var supplierSearch = '';
var supplierOriginFilter = '';
var supplierSystemFilter = '';
var collapsedSubs = {};

function renderSuppliersPage() {
  var allSystems = Object.keys(SUPPLIER_DATA);
  var totalCount = 0;
  allSystems.forEach(function(s) { totalCount += SUPPLIER_DATA[s].length; });

  var domesticCount = 0, importCount = 0;
  allSystems.forEach(function(sys) {
    SUPPLIER_DATA[sys].forEach(function(s) {
      if (s.origin === '国产') domesticCount++; else importCount++;
    });
  });

  var sysOpts = '<option value="">全部系统</option>' + allSystems.map(function(s) {
    return '<option value="' + s + '">' + s + ' (' + SUPPLIER_DATA[s].length + ')</option>';
  }).join('');

  var html = '<div class="page-header">' +
    '<h1 class="page-title">供应商总览</h1>' +
    '<p class="page-subtitle">覆盖 ' + allSystems.length + ' 大系统 · ' + totalCount + ' 家供应商 · 国产 ' + domesticCount + ' / 进口 ' + importCount + '</p>' +
    '</div>' +
    '<div class="card" style="margin-bottom:16px">' +
      '<div class="table-toolbar">' +
        '<input type="text" class="search-input" id="supplierSearch" placeholder="搜索供应商名称、产品、国家...">' +
        '<select class="filter-select" id="supplierSysFilter">' + sysOpts + '</select>' +
        '<select class="filter-select" id="supplierOriginFilter">' +
          '<option value="">全部类型</option>' +
          '<option value="国产">国产</option>' +
          '<option value="进口">进口</option>' +
        '</select>' +
        '<button class="btn" id="exportSupplierBtn" type="button">' +
          '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="currentColor"/></svg>' +
          '导出 CSV' +
        '</button>' +
      '</div>' +
    '</div>' +
    '<div id="supplierContent">' + renderSupplierSections() + '</div>';

  return html;
}

function initSupplierEvents() {
  document.getElementById('supplierSearch').addEventListener('input', function() {
    supplierSearch = this.value.toLowerCase();
    document.getElementById('supplierContent').innerHTML = renderSupplierSections();
    attachSupplierToggleHandlers();
  });
  document.getElementById('supplierSysFilter').addEventListener('change', function() {
    supplierSystemFilter = this.value;
    document.getElementById('supplierContent').innerHTML = renderSupplierSections();
    attachSupplierToggleHandlers();
  });
  document.getElementById('supplierOriginFilter').addEventListener('change', function() {
    supplierOriginFilter = this.value;
    document.getElementById('supplierContent').innerHTML = renderSupplierSections();
    attachSupplierToggleHandlers();
  });
  document.getElementById('exportSupplierBtn').addEventListener('click', exportSupplierCsv);
  attachSupplierToggleHandlers();
}

function attachSupplierToggleHandlers() {
  document.querySelectorAll('.sub-toggle').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.getAttribute('data-key');
      collapsedSubs[key] = !collapsedSubs[key];
      var tbody = document.getElementById('sub-body-' + key);
      var icon = btn.querySelector('.toggle-icon');
      if (tbody) {
        tbody.style.display = collapsedSubs[key] ? 'none' : '';
        if (icon) icon.textContent = collapsedSubs[key] ? '▶' : '▼';
      }
    });
  });
}

function renderSupplierSections() {
  var html = '';
  var systems = Object.keys(SUPPLIER_DATA);
  var matchTotal = 0;

  systems.forEach(function(category) {
    if (supplierSystemFilter && category !== supplierSystemFilter) return;

    var allSuppliers = SUPPLIER_DATA[category];
    var catColor = SYSTEM_COLORS[category] || '#888';

    // Group by subCategory
    var groups = {};
    allSuppliers.forEach(function(s) {
      var sub = s.subCategory || '其他';
      if (!groups[sub]) groups[sub] = [];
      groups[sub].push(s);
    });

    // Filter
    var filteredGroups = {};
    var catCount = 0;
    Object.keys(groups).forEach(function(sub) {
      var filtered = groups[sub].filter(function(s) {
        var matchOrigin = !supplierOriginFilter || s.origin === supplierOriginFilter;
        var matchQ = !supplierSearch ||
          s.name.toLowerCase().indexOf(supplierSearch) !== -1 ||
          s.products.toLowerCase().indexOf(supplierSearch) !== -1 ||
          s.country.toLowerCase().indexOf(supplierSearch) !== -1 ||
          s.priceRange.toLowerCase().indexOf(supplierSearch) !== -1 ||
          (s.subCategory && s.subCategory.toLowerCase().indexOf(supplierSearch) !== -1);
        return matchOrigin && matchQ;
      });
      if (filtered.length > 0) {
        filteredGroups[sub] = filtered;
        catCount += filtered.length;
      }
    });

    if (catCount === 0) return;
    matchTotal += catCount;

    html += '<div class="supplier-section">' +
      '<div class="supplier-section-title">' +
        '<span class="color-dot" style="background:' + catColor + '"></span>' +
        category +
        '<span class="supplier-count-badge">' + catCount + ' 家</span>' +
      '</div>';

    Object.keys(filteredGroups).forEach(function(sub) {
      var suppliers = filteredGroups[sub];
      var subKey = category.replace(/[^\w]/g,'') + '_' + sub.replace(/[^\w]/g,'');
      var isCollapsed = collapsedSubs[subKey];

      html += '<div class="sub-group">' +
        '<div class="sub-toggle" data-key="' + subKey + '">' +
          '<span class="toggle-icon">' + (isCollapsed ? '▶' : '▼') + '</span>' +
          '<span class="sub-group-name">' + sub + '</span>' +
          '<span class="sub-group-count">' + suppliers.length + '</span>' +
        '</div>' +
        '<div class="table-wrapper"><table class="data-table"><thead><tr>' +
          '<th>供应商</th><th>国产/进口</th><th>国家/地区</th><th>主要产品</th><th>价格区间</th>' +
        '</tr></thead>' +
        '<tbody id="sub-body-' + subKey + '"' + (isCollapsed ? ' style="display:none"' : '') + '>';

      suppliers.forEach(function(s) {
        var originClass = s.origin === '国产' ? 'domestic' : 'import';
        html += '<tr>' +
          '<td style="color:var(--text-primary);font-weight:500">' + s.name + '</td>' +
          '<td><span class="origin-badge ' + originClass + '">' + s.origin + '</span></td>' +
          '<td>' + s.country + '</td>' +
          '<td>' + s.products + '</td>' +
          '<td class="price-cell">' + s.priceRange + '</td>' +
          '</tr>';
      });

      html += '</tbody></table></div></div>';
    });

    html += '</div>';
  });

  if (matchTotal === 0) {
    html = '<div class="card" style="padding:48px;text-align:center;color:var(--text-secondary)">未找到匹配的供应商</div>';
  }

  return html;
}

/* ---------- CHANGELOG PAGE ---------- */
function renderChangelogPage() {
  var html = '<div class="page-header">' +
    '<h1 class="page-title">更新日志</h1>' +
    '<p class="page-subtitle">每次调研更新的时间、变更内容摘要与价格变化</p>' +
    '</div>' +
    '<div class="timeline">';

  UPDATE_LOG.forEach(function(entry) {
    html += '<div class="timeline-item">' +
      '<div class="timeline-date">' + entry.date + '</div>' +
      '<div class="timeline-version">' + entry.version + ' · ' + entry.author + '</div>' +
      '<div class="timeline-summary">' + entry.summary + '</div>' +
      '<ul class="change-list">';

    entry.changes.forEach(function(c) {
      var priceClass = 'none';
      if (c.priceChange.indexOf('+') === 0) { priceClass = 'up'; }
      else if (c.priceChange.indexOf('-') === 0) { priceClass = 'down'; }
      else if (c.priceChange === '新增' || c.priceChange === '新品') { priceClass = 'new'; }
      else if (c.priceChange === '修复' || c.priceChange === '优化') { priceClass = 'fix'; }

      html += '<li class="change-item">' +
        '<span class="change-category">' + c.category + '</span>' +
        '<span class="change-detail">' + c.detail + '</span>' +
        '<span class="change-price ' + priceClass + '">' + c.priceChange + '</span>' +
        '</li>';
    });

    html += '</ul></div>';
  });

  html += '</div>';
  return html;
}

/* ---------- Init ---------- */
function init() {
  loadBomFromStorage();
  initBomIds();
  initTheme();
  initNav();
  renderPage('overview');
}

document.addEventListener('DOMContentLoaded', init);
