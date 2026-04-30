// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('#compareTable tbody tr').forEach(row => {
      if (filter === 'all' || row.dataset.vendor === filter) {
        row.classList.remove('hidden');
      } else {
        row.classList.add('hidden');
      }
    });
  });
});

// Pricing Chart
const ctx = document.getElementById('pricingChart');
if (ctx) {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'GPT-5.4\nThinking', 'Claude\nOpus 4.6', 'Gemini\n3.1 Pro', 'GPT-5', 
        'GLM-5.1', 'MiMo-V2.5\nPro', 'GLM-5', 'GLM-4.7',
        'GPT-5\nmini', 'MiniMax\nM2.7', 'DeepSeek\nV4 Flash', 'GPT-5.4\nnano',
        'MiMo-V2\nFlash', 'DeepSeek\nV4 Pro'
      ],
      datasets: [
        {
          label: 'Input $/1M tokens',
          data: [2.50, 5.00, 2.00, 1.25, 1.40, 1.00, 1.00, 0.60, 0.25, 0.30, 0.14, 0.20, 0.09, 0.25],
          backgroundColor: 'rgba(6, 182, 212, 0.7)',
          borderColor: 'rgba(6, 182, 212, 1)',
          borderWidth: 1,
          borderRadius: 3,
        },
        {
          label: 'Output $/1M tokens',
          data: [15.00, 25.00, 12.00, 10.00, 4.40, 3.00, 3.20, 2.20, 2.00, 1.20, 0.28, 1.25, 0.29, 0.88],
          backgroundColor: 'rgba(168, 85, 247, 0.7)',
          borderColor: 'rgba(168, 85, 247, 1)',
          borderWidth: 1,
          borderRadius: 3,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Inter', size: 11 } }
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#e2e8f0',
          bodyColor: '#94a3b8',
          borderColor: '#334155',
          borderWidth: 1,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': $' + context.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#64748b', font: { size: 10, family: 'Inter' }, maxRotation: 0 },
          grid: { display: false }
        },
        y: {
          ticks: {
            color: '#64748b',
            font: { size: 10, family: 'JetBrains Mono' },
            callback: v => '$' + v
          },
          grid: { color: 'rgba(30,41,59,0.5)' }
        }
      }
    }
  });
}

// Context Window Bars
const contextData = [
  { name: 'GPT-5.4 Pro', tokens: 1100000, cls: 'bar-openai' },
  { name: 'Claude Opus/Sonnet 4.6', tokens: 1000000, cls: 'bar-anthropic' },
  { name: 'Gemini 3.1 Pro', tokens: 1000000, cls: 'bar-google' },
  { name: 'GPT-5.4 Thinking', tokens: 1000000, cls: 'bar-openai' },
  { name: 'MiMo-V2.5-Pro', tokens: 1000000, cls: 'bar-cn' },
  { name: 'GPT-5.4 mini', tokens: 400000, cls: 'bar-openai' },
  { name: 'Kimi K2.6', tokens: 262100, cls: 'bar-cn' },
  { name: 'MiMo-V2-Flash', tokens: 262000, cls: 'bar-cn' },
  { name: 'MiniMax M2.7', tokens: 205000, cls: 'bar-cn' },
  { name: 'GLM-4.7', tokens: 200000, cls: 'bar-cn' },
  { name: 'DeepSeek V4', tokens: 1000000, cls: 'bar-cn' },
  { name: 'GPT-5', tokens: 128000, cls: 'bar-openai' },
  { name: 'GLM-5.1', tokens: 128000, cls: 'bar-cn' },
];

const maxTokens = 1100000;
const barsContainer = document.getElementById('contextBars');
if (barsContainer) {
  contextData.forEach(d => {
    const pct = (d.tokens / maxTokens * 100).toFixed(1);
    const label = d.tokens >= 1000000 
      ? (d.tokens / 1000000).toFixed(1) + 'M' 
      : Math.round(d.tokens / 1000) + 'K';
    const row = document.createElement('div');
    row.className = 'ctx-row';
    row.innerHTML = `
      <div class="ctx-label">${d.name}</div>
      <div class="ctx-bar-wrap">
        <div class="ctx-bar ${d.cls}" style="width: ${pct}%">${label}</div>
      </div>
    `;
    barsContainer.appendChild(row);
  });
}
