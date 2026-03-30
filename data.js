/* ============================================================
   BOM 数据中心 — 核心数据模块
   ============================================================ */

/* ---------- 系统颜色映射 ---------- */
const SYSTEM_COLORS = {
  '一次侧电气': '#3b82f6',
  '二次侧电气': '#6366f1',
  '散热冷却系统': '#06b6d4',
  '计算设备': '#f59e0b',
  '存储设备': '#10b981',
  '网络设备': '#8b5cf6',
  '消防系统': '#ef4444',
  '安防监控': '#ec4899',
  '土地基建': '#78716c',
  '软性成本': '#a3a3a3'
};

/* ---------- 78 条 BOM 明细 ---------- */
const BOM_DATA = [
  // === 一次侧电气 (5) ===
  { system:'一次侧电气', sub:'高压引入', name:'110kV输电线路接入', spec:'110kV双回路', unit:'项', priceLow:5000, priceHigh:15000, priceMid:10000, qty:2, totalLow:1, totalHigh:3, totalMid:2 },
  { system:'一次侧电气', sub:'变电站', name:'110kV专用变电站', spec:'含消防自动化', unit:'座', priceLow:8000, priceHigh:20000, priceMid:14000, qty:1, totalLow:0.8, totalHigh:2, totalMid:1.4 },
  { system:'一次侧电气', sub:'主变压器', name:'110kV主变压器63MVA', spec:'油浸式', unit:'台', priceLow:800, priceHigh:1500, priceMid:1150, qty:63, totalLow:5.04, totalHigh:9.45, totalMid:7.245 },
  { system:'一次侧电气', sub:'HV开关', name:'110kV GIS组合电器', spec:'SF6绝缘', unit:'组', priceLow:2000, priceHigh:6000, priceMid:4000, qty:4, totalLow:0.8, totalHigh:2.4, totalMid:1.6 },
  { system:'一次侧电气', sub:'高压电缆', name:'110kV高压电缆', spec:'XLPE铜芯', unit:'项', priceLow:500, priceHigh:2000, priceMid:1250, qty:6, totalLow:0.3, totalHigh:1.2, totalMid:0.75 },

  // === 二次侧电气 (11) ===
  { system:'二次侧电气', sub:'中压开关', name:'10kV开关柜', spec:'2N双母线', unit:'面', priceLow:15, priceHigh:40, priceMid:27.5, qty:120, totalLow:0.18, totalHigh:0.48, totalMid:0.33 },
  { system:'二次侧电气', sub:'中压变压器', name:'干式变压器2500kVA', spec:'N+1冗余', unit:'台', priceLow:40, priceHigh:80, priceMid:60, qty:56, totalLow:0.224, totalHigh:0.448, totalMid:0.336 },
  { system:'二次侧电气', sub:'柴油发电', name:'2-3MW发电机组', spec:'含ATS', unit:'台', priceLow:500, priceHigh:1200, priceMid:850, qty:56, totalLow:2.8, totalHigh:6.72, totalMid:4.76 },
  { system:'二次侧电气', sub:'柴油储罐', name:'柴油储油系统', spec:'12h满载', unit:'套', priceLow:100, priceHigh:300, priceMid:200, qty:3, totalLow:0.03, totalHigh:0.09, totalMid:0.06 },
  { system:'二次侧电气', sub:'直流电源', name:'巴拿马架构240V/336V', spec:'97%效率', unit:'套', priceLow:300, priceHigh:1000, priceMid:650, qty:63, totalLow:1.89, totalHigh:6.3, totalMid:4.095 },
  { system:'二次侧电气', sub:'UPS系统', name:'模块化UPS 500kVA', spec:'2N含电池', unit:'套', priceLow:200, priceHigh:400, priceMid:300, qty:274, totalLow:5.48, totalHigh:10.96, totalMid:8.22 },
  { system:'二次侧电气', sub:'锂电BESS', name:'磷酸铁锂储能', spec:'15分钟BMS', unit:'套', priceLow:2000, priceHigh:8000, priceMid:5000, qty:7, totalLow:1.4, totalHigh:5.6, totalMid:3.5 },
  { system:'二次侧电气', sub:'低压开关柜', name:'0.4kV配电柜', spec:'2N隔离', unit:'面', priceLow:8, priceHigh:25, priceMid:16.5, qty:150, totalLow:0.12, totalHigh:0.375, totalMid:0.2475 },
  { system:'二次侧电气', sub:'母线槽', name:'铜母线槽4000-5000A', spec:'A/B双路', unit:'条', priceLow:1, priceHigh:3, priceMid:2, qty:150, totalLow:0.015, totalHigh:0.045, totalMid:0.03 },
  { system:'二次侧电气', sub:'PDU', name:'智能PDU 40-120kW', spec:'Modbus/SNMP', unit:'台', priceLow:0.8, priceHigh:3, priceMid:1.9, qty:500, totalLow:0.04, totalHigh:0.15, totalMid:0.095 },
  { system:'二次侧电气', sub:'电缆桥架', name:'电缆与桥架', spec:'强弱电分离', unit:'项', priceLow:500, priceHigh:2000, priceMid:1250, qty:1, totalLow:0.05, totalHigh:0.2, totalMid:0.125 },
  // 补充: 接地防雷
  { system:'二次侧电气', sub:'接地防雷', name:'接地网与防雷', spec:'TN-S', unit:'项', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },

  // === 散热冷却系统 (16) ===
  { system:'散热冷却系统', sub:'一次侧冷源', name:'冷水机组5-8MW', spec:'N+1冗余', unit:'台', priceLow:1000, priceHigh:3000, priceMid:2000, qty:31, totalLow:3.1, totalHigh:9.3, totalMid:6.2 },
  { system:'散热冷却系统', sub:'一次侧冷源', name:'闭式冷却塔', spec:'含水处理', unit:'台', priceLow:50, priceHigh:200, priceMid:125, qty:31, totalLow:0.155, totalHigh:0.62, totalMid:0.3875 },
  { system:'散热冷却系统', sub:'一次侧冷源', name:'一次侧循环泵组', spec:'变频UPS', unit:'套', priceLow:100, priceHigh:500, priceMid:300, qty:31, totalLow:0.31, totalHigh:1.55, totalMid:0.93 },
  { system:'散热冷却系统', sub:'一次侧冷源', name:'蓄冷水罐', spec:'保温蓄水罐', unit:'个', priceLow:50, priceHigh:200, priceMid:125, qty:8, totalLow:0.04, totalHigh:0.16, totalMid:0.1 },
  { system:'散热冷却系统', sub:'一次侧管网', name:'A/B双路独立环网', spec:'全程保温', unit:'项', priceLow:500, priceHigh:2000, priceMid:1250, qty:2, totalLow:0.1, totalHigh:0.4, totalMid:0.25 },
  { system:'散热冷却系统', sub:'二次侧液冷', name:'液冷CDU 1-2MW', spec:'1+1冗余', unit:'台', priceLow:100, priceHigh:300, priceMid:200, qty:220, totalLow:2.2, totalHigh:6.6, totalMid:4.4 },
  { system:'散热冷却系统', sub:'二次侧液冷', name:'机房级环形二次管网', spec:'压力平衡', unit:'项', priceLow:200, priceHigh:800, priceMid:500, qty:2, totalLow:0.04, totalHigh:0.16, totalMid:0.1 },
  { system:'散热冷却系统', sub:'二次侧液冷', name:'机柜级歧管Manifold', spec:'SUS304', unit:'套', priceLow:2, priceHigh:8, priceMid:5, qty:2300, totalLow:0.46, totalHigh:1.84, totalMid:1.15 },
  { system:'散热冷却系统', sub:'二次侧液冷', name:'无滴漏盲插接头QD', spec:'史陶比尔', unit:'套', priceLow:0.3, priceHigh:1.5, priceMid:0.9, qty:9200, totalLow:0.276, totalHigh:1.38, totalMid:0.828 },
  { system:'散热冷却系统', sub:'冷却液', name:'电子级冷却液PG25', spec:'丙二醇', unit:'吨', priceLow:2, priceHigh:5, priceMid:3.5, qty:800, totalLow:0.16, totalHigh:0.4, totalMid:0.28 },
  { system:'散热冷却系统', sub:'冷板', name:'末端微通道冷板', spec:'紫铜冷板', unit:'套', priceLow:0.5, priceHigh:1.5, priceMid:1, qty:3920, totalLow:0.196, totalHigh:0.588, totalMid:0.392 },
  { system:'散热冷却系统', sub:'液冷组件', name:'机柜液冷组件', spec:'完整套件', unit:'套', priceLow:36, priceHigh:62, priceMid:49, qty:392, totalLow:1.4112, totalHigh:2.4304, totalMid:1.9208 },
  { system:'散热冷却系统', sub:'背板空调', name:'后门热交换器RDHx', spec:'15-20%残热', unit:'台', priceLow:5, priceHigh:20, priceMid:12.5, qty:120, totalLow:0.06, totalHigh:0.24, totalMid:0.15 },
  { system:'散热冷却系统', sub:'精密空调', name:'列间精密空调', spec:'N+2冗余', unit:'台', priceLow:10, priceHigh:30, priceMid:20, qty:60, totalLow:0.06, totalHigh:0.18, totalMid:0.12 },
  { system:'散热冷却系统', sub:'水质控制', name:'自动加药与脱气', spec:'UV杀菌', unit:'套', priceLow:50, priceHigh:200, priceMid:125, qty:6, totalLow:0.03, totalHigh:0.12, totalMid:0.075 },
  { system:'散热冷却系统', sub:'漏液检测', name:'三级漏液监测', spec:'全覆盖', unit:'套', priceLow:50, priceHigh:200, priceMid:125, qty:1, totalLow:0.005, totalHigh:0.02, totalMid:0.0125 },

  // === 计算设备 (5) ===
  { system:'计算设备', sub:'AI GPU服务器', name:'超节点整机柜系统', spec:'256GPU 320kW', unit:'柜', priceLow:10000, priceHigh:12000, priceMid:11000, qty:392, totalLow:392, totalHigh:470.4, totalMid:431.2 },
  { system:'计算设备', sub:'AI GPU服务器', name:'8卡GPU服务器', spec:'12kW', unit:'台', priceLow:200, priceHigh:350, priceMid:275, qty:0, totalLow:0, totalHigh:0, totalMid:0 },
  { system:'计算设备', sub:'CPU服务器', name:'CPU通用服务器', spec:'双路1-2kW', unit:'台', priceLow:3, priceHigh:10, priceMid:6.5, qty:20, totalLow:0.006, totalHigh:0.02, totalMid:0.013 },
  { system:'计算设备', sub:'机柜', name:'AI配套机柜', spec:'线缆管理', unit:'个', priceLow:1, priceHigh:10, priceMid:5.5, qty:30, totalLow:0.003, totalHigh:0.03, totalMid:0.0165 },
  { system:'计算设备', sub:'OCP架构', name:'OCP Power Shelf/BBU', spec:'DC锂电后备', unit:'套', priceLow:50, priceHigh:200, priceMid:125, qty:10, totalLow:0.05, totalHigh:0.2, totalMid:0.125 },

  // === 存储设备 (4) ===
  { system:'存储设备', sub:'高速存储', name:'全闪存NVMe阵列', spec:'PB级NVMe-oF', unit:'套', priceLow:500, priceHigh:3000, priceMid:1750, qty:2, totalLow:0.1, totalHigh:0.6, totalMid:0.35 },
  { system:'存储设备', sub:'并行文件系统', name:'分布式存储节点', spec:'Lustre/GPFS', unit:'台', priceLow:20, priceHigh:80, priceMid:50, qty:64, totalLow:0.128, totalHigh:0.512, totalMid:0.32 },
  { system:'存储设备', sub:'冷存储', name:'对象存储系统', spec:'S3兼容HDD+SSD', unit:'套', priceLow:300, priceHigh:1500, priceMid:900, qty:2, totalLow:0.06, totalHigh:0.3, totalMid:0.18 },
  { system:'存储设备', sub:'存储网络', name:'存储专用网络', spec:'RoCE交换机', unit:'台', priceLow:50, priceHigh:300, priceMid:175, qty:64, totalLow:0.32, totalHigh:1.92, totalMid:1.12 },

  // === 网络设备 (9) ===
  { system:'网络设备', sub:'GPU互联', name:'51.2T AI交换机', spec:'RoCE V2 Spine-Leaf', unit:'台', priceLow:25, priceHigh:40, priceMid:32, qty:1280, totalLow:3.2, totalHigh:5.12, totalMid:4.096 },
  { system:'网络设备', sub:'前端以太网', name:'ToR交换机100/400GbE', spec:'32-64端口', unit:'台', priceLow:10, priceHigh:40, priceMid:25, qty:640, totalLow:0.64, totalHigh:2.56, totalMid:1.6 },
  { system:'网络设备', sub:'光模块', name:'400G光模块OSFP', spec:'QSFP-DD', unit:'个', priceLow:0.4, priceHigh:1.2, priceMid:0.8, qty:50000, totalLow:2, totalHigh:6, totalMid:4 },
  { system:'网络设备', sub:'光模块', name:'800G光模块', spec:'单只', unit:'个', priceLow:1, priceHigh:2, priceMid:1.5, qty:8000, totalLow:0.8, totalHigh:1.6, totalMid:1.2 },
  { system:'网络设备', sub:'光模块', name:'100G光模块', spec:'单只', unit:'个', priceLow:0.15, priceHigh:0.5, priceMid:0.325, qty:20000, totalLow:0.3, totalHigh:1, totalMid:0.65 },
  { system:'网络设备', sub:'铜缆', name:'DAC高速铜缆', spec:'柜内互联', unit:'根', priceLow:0, priceHigh:0, priceMid:0, qty:3211264, totalLow:0, totalHigh:0, totalMid:0 },
  { system:'网络设备', sub:'光纤', name:'光纤布线系统', spec:'OS2 OM5 MPO/MTP', unit:'项', priceLow:500, priceHigh:3000, priceMid:1750, qty:1, totalLow:0.05, totalHigh:0.3, totalMid:0.175 },
  { system:'网络设备', sub:'外部互联', name:'运营商互联', spec:'暗光纤/多路冗余ISP', unit:'项', priceLow:500, priceHigh:3000, priceMid:1750, qty:1, totalLow:0.05, totalHigh:0.3, totalMid:0.175 },
  { system:'网络设备', sub:'网络安全', name:'防火墙DDoS IDS/IPS', spec:'边界安全', unit:'套', priceLow:100, priceHigh:500, priceMid:300, qty:2, totalLow:0.02, totalHigh:0.1, totalMid:0.06 },

  // === 消防系统 (9) ===
  { system:'消防系统', sub:'气体灭火', name:'IG541混合气体灭火', spec:'300-1000m²', unit:'区', priceLow:100, priceHigh:500, priceMid:300, qty:4, totalLow:0.04, totalHigh:0.2, totalMid:0.12 },
  { system:'消防系统', sub:'气体灭火', name:'七氟丙烷灭火', spec:'单防护区', unit:'区', priceLow:80, priceHigh:400, priceMid:240, qty:4, totalLow:0.032, totalHigh:0.16, totalMid:0.096 },
  { system:'消防系统', sub:'水雾灭火', name:'高压细水雾灭火', spec:'柴发区域', unit:'区', priceLow:50, priceHigh:300, priceMid:175, qty:2, totalLow:0.01, totalHigh:0.06, totalMid:0.035 },
  { system:'消防系统', sub:'火灾探测', name:'VESDA极早期烟感', spec:'吸气式', unit:'套', priceLow:30, priceHigh:150, priceMid:90, qty:1, totalLow:0.003, totalHigh:0.015, totalMid:0.009 },
  { system:'消防系统', sub:'喷淋系统', name:'自动喷淋灭火', spec:'辅助区域', unit:'区', priceLow:50, priceHigh:200, priceMid:125, qty:4, totalLow:0.02, totalHigh:0.08, totalMid:0.05 },
  { system:'消防系统', sub:'锂电消防', name:'机柜级灭火系统', spec:'锂电池柜', unit:'套', priceLow:20, priceHigh:100, priceMid:60, qty:20, totalLow:0.04, totalHigh:0.2, totalMid:0.12 },
  { system:'消防系统', sub:'泄压防烟', name:'泄压与防排烟', spec:'风机阀', unit:'项', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },
  { system:'消防系统', sub:'自动报警', name:'火灾自动报警', spec:'消防控制', unit:'项', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },
  { system:'消防系统', sub:'被动防火', name:'防火门卷帘封堵', spec:'阻燃防火', unit:'项', priceLow:200, priceHigh:1000, priceMid:600, qty:1, totalLow:0.02, totalHigh:0.1, totalMid:0.06 },

  // === 安防监控 (8) ===
  { system:'安防监控', sub:'视频监控', name:'CCTV高清监控', spec:'全覆盖', unit:'路', priceLow:0.5, priceHigh:2, priceMid:1.25, qty:100, totalLow:0.005, totalHigh:0.02, totalMid:0.0125 },
  { system:'安防监控', sub:'视频监控', name:'NVR网络录像机', spec:'智能分析', unit:'台', priceLow:5, priceHigh:20, priceMid:12.5, qty:4, totalLow:0.002, totalHigh:0.008, totalMid:0.005 },
  { system:'安防监控', sub:'门禁系统', name:'多因素门禁控制', spec:'生物识别', unit:'区', priceLow:50, priceHigh:300, priceMid:175, qty:8, totalLow:0.04, totalHigh:0.24, totalMid:0.14 },
  { system:'安防监控', sub:'周界防护', name:'周界入侵检测', spec:'微波对射', unit:'套', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },
  { system:'安防监控', sub:'动环监控', name:'动力环境监控', spec:'温湿度漏水', unit:'套', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },
  { system:'安防监控', sub:'DCIM', name:'DCIM中心系统', spec:'运维指挥', unit:'套', priceLow:200, priceHigh:1000, priceMid:600, qty:1, totalLow:0.02, totalHigh:0.1, totalMid:0.06 },
  { system:'安防监控', sub:'综合布线', name:'弱电综合布线', spec:'传感器光纤', unit:'项', priceLow:100, priceHigh:500, priceMid:300, qty:1, totalLow:0.01, totalHigh:0.05, totalMid:0.03 },
  { system:'安防监控', sub:'电子巡更', name:'巡更与人员定位', spec:'UWB蓝牙', unit:'套', priceLow:50, priceHigh:300, priceMid:175, qty:1, totalLow:0.005, totalHigh:0.03, totalMid:0.0175 },

  // === 土地基建 (4) ===
  { system:'土地基建', sub:'场地准备', name:'场地平整地基', spec:'土方排水', unit:'项', priceLow:500, priceHigh:2000, priceMid:1250, qty:1, totalLow:0.05, totalHigh:0.2, totalMid:0.125 },
  { system:'土地基建', sub:'建筑外壳', name:'数据中心主体建筑', spec:'钢混', unit:'m²', priceLow:0.3, priceHigh:0.8, priceMid:0.55, qty:10000, totalLow:0.3, totalHigh:0.8, totalMid:0.55 },
  { system:'土地基建', sub:'内装工程', name:'数据大厅装修', spec:'架高地板', unit:'项', priceLow:1000, priceHigh:5000, priceMid:3000, qty:1, totalLow:0.1, totalHigh:0.5, totalMid:0.3 },
  { system:'土地基建', sub:'道路围栏', name:'园区道路停车围栏', spec:'消防车道', unit:'项', priceLow:200, priceHigh:1000, priceMid:600, qty:1, totalLow:0.02, totalHigh:0.1, totalMid:0.06 },

  // === 软性成本 (6) ===
  { system:'软性成本', sub:'设计费', name:'建筑MEP IT设计', spec:'施工图', unit:'项', priceLow:500, priceHigh:2000, priceMid:1250, qty:1, totalLow:0.05, totalHigh:0.2, totalMid:0.125 },
  { system:'软性成本', sub:'许可审批', name:'建筑环境电力审批', spec:'环评', unit:'项', priceLow:300, priceHigh:1500, priceMid:900, qty:1, totalLow:0.03, totalHigh:0.15, totalMid:0.09 },
  { system:'软性成本', sub:'项目管理', name:'PM总包管理费', spec:'进度控制', unit:'项', priceLow:500, priceHigh:3000, priceMid:1750, qty:1, totalLow:0.05, totalHigh:0.3, totalMid:0.175 },
  { system:'软性成本', sub:'调试验收', name:'Commissioning测试', spec:'IST', unit:'项', priceLow:300, priceHigh:2000, priceMid:1150, qty:1, totalLow:0.03, totalHigh:0.2, totalMid:0.115 },
  { system:'软性成本', sub:'保险应急', name:'建设期保险应急', spec:'5-10%储备', unit:'项', priceLow:1000, priceHigh:8000, priceMid:4500, qty:1, totalLow:0.1, totalHigh:0.8, totalMid:0.45 },
  { system:'软性成本', sub:'运输物流', name:'大型设备运输吊装', spec:'变压器冷机', unit:'项', priceLow:0, priceHigh:0, priceMid:0, qty:1, totalLow:0, totalHigh:0, totalMid:0 }
];

/* ---------- 系统合计 ---------- */
function getSystemTotals() {
  const totals = {};
  BOM_DATA.forEach(item => {
    if (!totals[item.system]) {
      totals[item.system] = { low: 0, high: 0, mid: 0, count: 0 };
    }
    totals[item.system].low += item.totalLow;
    totals[item.system].high += item.totalHigh;
    totals[item.system].mid += item.totalMid;
    totals[item.system].count++;
  });
  return totals;
}

/* ---------- 价格调研数据 ---------- */
const RESEARCH_DATA = {
  compute: {
    title: '计算设备',
    updated: '2026-03-30',
    items: [
      {
        name: 'NVIDIA GB200 NVL72 超节点',
        bomPrice: '10000–12000万元/柜',
        researchPrice: '约2020–2450万元（$2.8M-$3.4M训练版，Tom\'s Hardware源）',
        suppliers: ['NVIDIA/Quanta(广达)', 'Dell', 'HPE', 'Supermicro', '联想', '浪潮'],
        trend: '平稳',
        trendNote: '训练版$2.8-3.4M；产能逐步向Vera Rubin迁移但仍是当前主力；HPE Store在售',
        source: 'Tom\'s Hardware 2026-03-24, HPE Store, tech-insider.org'
      },
      {
        name: 'NVIDIA GB300 NVL72 (Blackwell Ultra)',
        bomPrice: '参考GB200, 预计涨15%',
        researchPrice: '约4320–4680万元（$6.0M-$6.5M推理版，Tom\'s Hardware源）',
        suppliers: ['Dell', 'HPE', 'Supermicro', '联想', '浪潮'],
        trend: '上升',
        trendNote: '推理优化版定价远超训练版GB200；GB300 NVL72含37TB快速内存、130TB/s NVLink',
        source: 'Tom\'s Hardware 2026-03-24, NVIDIA官网'
      },
      {
        name: 'NVIDIA DGX H100/H200 8卡服务器',
        bomPrice: '200–350万元/台',
        researchPrice: 'H100约145万元($25-30K/卡)；H200约220万元($30-40K/卡)',
        suppliers: ['Dell PowerEdge XE9680', 'HPE ProLiant', 'Supermicro', '联想', '浪潮'],
        trend: '下降',
        trendNote: 'H100云租赁已降至$2/hr(vs发射$8/hr)；H200 $3.72-$10.60/hr(Jarvislabs$3.80最低)；Blackwell量产压低上代价格',
        source: 'Jarvislabs 2026-01, Spheron 2026-03-19'
      },
      {
        name: 'NVIDIA B200 8卡服务器',
        bomPrice: '200–350万元/台',
        researchPrice: '约280–370万元（~$40K/卡SXM；制造成本$6,400/卡,毛利84%）',
        suppliers: ['Dell', 'HPE', 'Supermicro', '联想', '浪潮'],
        trend: '平稳',
        trendNote: 'B200云租$6.03/hr(on-demand)/$2.25/hr(spot)；HBM3e占BOM 45%($2,900)；FP4推理性价比优于H100',
        source: 'Spheron 2026-03-19, Silicon Analysts 2026-03-02'
      },
      {
        name: 'AMD MI300X 8卡服务器',
        bomPrice: '——（替代方案参考）',
        researchPrice: '约115–175万元（$10K–$15K/卡）',
        suppliers: ['Dell XE9680', 'HPE', 'Supermicro AS-8125GS'],
        trend: '平稳',
        trendNote: '大模型推理性价比高于H100；已被MI350X/MI400替代为主推',
        source: 'SLYD, Supermicro Store'
      },
      {
        name: 'AMD MI350X/MI355X 8卡服务器',
        bomPrice: '——（替代方案参考）',
        researchPrice: '约180–475万元（$25K–$66K/卡，HSBC区间）',
        suppliers: ['Dell', 'HPE', 'Supermicro', '联想'],
        trend: '上升',
        trendNote: 'MI355X DLC机架128卡/36TB HBM3e/2.6 exaflops；MI400 H2 2026发布',
        source: 'AMD官网, ISSCC 2026, HSBC研报'
      },
      {
        name: 'AMD MI450 定制版（Meta）',
        bomPrice: '——（替代方案参考）',
        researchPrice: '约250万元/卡（$35K均价，Meta大单）',
        suppliers: ['AMD', 'Meta/Nebius(合作)', 'Celestica(代工)'],
        trend: '上升',
        trendNote: 'AMD-Meta $600亿5年协议(6GW级)；首批1GW Helios机架H2 2026交付；定制Venice CPU配合',
        source: 'AMD官网 2026-02-24, Yahoo Finance, Hyperight'
      },
      {
        name: '华为昇腾910B/910C 8卡服务器',
        bomPrice: '——（国产替代参考）',
        researchPrice: '910C约8.6万元/卡（$12K）；整机约110–150万元',
        suppliers: ['华为Atlas 800T', '高新发展', '华鲲振宇', '中科曙光'],
        trend: '上升',
        trendNote: '2026产量160万die(含60万片910C+100万片950)；910C推理性能约H200 60%(仅80% TPP)',
        source: 'Bloomberg, CFR研报, Tom\'s Hardware'
      },
      {
        name: '华为昇腾950 SuperPoD超节点',
        bomPrice: '——（国产替代参考）',
        researchPrice: '待定（2026年量产中）',
        suppliers: ['华为Atlas 950', '中科曙光', '华鲲振宇'],
        trend: '上升',
        trendNote: '2026年100万片950计划(与910C各半)；下一代TPP或低于910C；产能与良率是关键瓶颈',
        source: 'CFR 2025-12-15, 华为官网, Bernstein研报'
      },
      {
        name: '海光DCU深算系列（深算三号/四号）',
        bomPrice: '——（国产替代参考）',
        researchPrice: '约5–8万元/卡（估算）',
        suppliers: ['海光信息', '联想', '中科曙光', '浪潮'],
        trend: '上升',
        trendNote: '深算三号已交付，深算四号研发中；2026预计净利润超41亿(+60%)；市值突破6000亿；CUDA兼容度超99%',
        source: '东方财富, 电子工程专辑, 证券市场周刊'
      },
      {
        name: '寒武纪思元590/690 AI加速器',
        bomPrice: '——（国产替代参考）',
        researchPrice: '约5–8万元/卡（估算）',
        suppliers: ['寒武纪', '联想', '中科曙光', '浪潮'],
        trend: '上升',
        trendNote: '2026目标50万片(含30万片590/690)；SMIC N+2良率约20%；HBM供应链仍依赖韩国',
        source: 'Tom\'s Hardware, Bloomberg'
      },
      {
        name: 'NVIDIA Vera Rubin NVL72/NVL144/NVL576',
        bomPrice: '——（下一代参考）',
        researchPrice: 'VR200 NVL72: $5M-$7M(含$1M存储)；VR300 NVL144: $7M-$8.8M',
        suppliers: ['Supermicro', 'HPE', 'Azure', 'Nebius', 'CoreWeave', 'AWS', 'Google Cloud', 'OCI'],
        trend: '上升',
        trendNote: 'Tom\'s Hardware确认VR200报价$5-7M(较此前$3.5-4M大幅上修+43-75%)；VR300 NVL144报价$7-8.8M；含$1M 3D NAND存储；H2 2026部署；VR300需等2028H2(Rubin Ultra未tape-out)',
        source: 'Tom\'s Hardware 2026-03-24'
      },
      {
        name: 'NVIDIA Groq 3 LPU（推理协处理器）',
        bomPrice: '——（新品类参考）',
        researchPrice: 'LPX机架256颗LPU；目标$45/M tokens；Q3 2026出货',
        suppliers: ['NVIDIA/Groq', 'Samsung(代工)', 'AWS(首批部署)'],
        trend: '上升',
        trendNote: 'NVIDIA $200亿收购Groq；LPX机架+VR NVL72配合达35x tokens/MW；三星4nm代工',
        source: 'Tom\'s Hardware GTC 2026, PCMag, The Register'
      }
    ]
  },
  cooling: {
    title: '散热冷却',
    updated: '2026-03-30',
    items: [
      {
        name: '磁悬浮变频冷水机组 5-8MW',
        bomPrice: '1000–3000万元/台',
        researchPrice: '国产150–350万元/台；进口300–600万元/台',
        suppliers: ['Trane（特灵）','Carrier（开利）','York（约克）','格力','美的','海尔'],
        trend: '上升',
        trendNote: 'AI数据中心建设浪潮，交货期6-12个月；Vertiv年初至今股价+64%反映液冷需求',
        source: '格力官方授权商2026价格表, 特灵HSAG发布, MarketWatch'
      },
      {
        name: '液冷CDU 1-2MW',
        bomPrice: '100–300万元/台',
        researchPrice: '进口约$2-4K/kW(含安装)；国产约1100元/kW；DCX新品600kW-2.6MW ECDU',
        suppliers: ['Vertiv（维谛）','CoolIT','LiquidStack','英维克','曙光数创','比赫','纬地','台达','尼得科','LG','DCX'],
        trend: '上升',
        trendNote: 'Vertiv YTD+64%领涨液冷板块；DCX推出600kW至2.6MW ECDU系列；全球液冷市场2026年$60亿→2035年$271亿(CAGR 18.2%)',
        source: 'GM Insights, Fact.MR, DCX官网, MarketWatch Vertiv'
      },
      {
        name: 'NVL72机柜液冷组件套件',
        bomPrice: '36–62万元/套',
        researchPrice: 'GB300约36万元($49,860)；Vera Rubin约40万元($55,710,+17%)',
        suppliers: ['Cooler Master','AVC','Auras（双鸿）','英维克','飞荣达','精研科技'],
        trend: '上升',
        trendNote: 'Vera Rubin单柜液冷BOM $55,710(+17% vs GB300)；VR200 NVL72整柜报价$5-7M推高配套需求',
        source: 'Morgan Stanley, Yahoo Finance, Tom\'s Hardware 2026-03-24'
      },
      {
        name: '无滴漏盲插快速接头（QD/UQD）',
        bomPrice: '0.3–1.5万元/套',
        researchPrice: 'GB200: $130/对(108对/柜)；GB300: $70/对(216对/柜)；单对约400元',
        suppliers: ['Staubli（史陶比尔）','CPC','帕克(Parker)','丹佛斯','东莞序秋科技','比亚迪电子','英维克'],
        trend: '上升',
        trendNote: 'GB300用量翻倍至216对/柜；占液冷系统15%价值量；2026快接头市场145亿元',
        source: '天风证券, 东方财富, 九方智投液冷分析'
      },
      {
        name: '微通道冷板（GPU专用）',
        bomPrice: '0.5–1.5万元/套',
        researchPrice: 'GB200冷板$450/片(45片/柜)；GB300冷板$300-350/片(108片/柜)；ASP $300-500/片',
        suppliers: ['双鸿科技','奇鋐科技','Cooler Master','英维克','飞荣达','AVC','宝德','台达'],
        trend: '上升',
        trendNote: 'GB300冷板价值量1500→1800元/kW；Vera Rubin采用微通道技术；2026冷板市场214亿元',
        source: 'IDTechEx, 天风证券, 东方财富液冷分析'
      },
      {
        name: '闭式冷却塔',
        bomPrice: '50–200万元/台',
        researchPrice: '中型80–300万元/台；大型300–800万元/台',
        suppliers: ['BAC（美国）','Evapco（益美高）','马利/Johnson Controls','海鸥股份'],
        trend: '上升',
        trendNote: 'Evapco 2025全线涨价3-5%；AI数据中心高功率密度推动需求',
        source: '申万宏源深度报告, Evapco公告'
      }
    ]
  },
  power: {
    title: '电力系统',
    updated: '2026-03-30',
    items: [
      {
        name: '110kV主变压器 63MVA',
        bomPrice: '800–1500万元/台',
        researchPrice: '国产400–700万元/台；外资800–1400万元/台',
        suppliers: ['特变电工','中国西电','保变电气','ABB/日立能源','西门子','许继电气'],
        trend: '上升',
        trendNote: '铜/硅钢涨价推动，出口额同比+36%；AI数据中心大功率需求拉动',
        source: '覆盘网, 华创证券'
      },
      {
        name: '干式变压器 2500kVA',
        bomPrice: '40–80万元/台',
        researchPrice: '国产20–35万元/台；外资40–70万元/台',
        suppliers: ['特变电工','山东达驰','ABB/日立能源','金盘科技','扬电科技'],
        trend: '上升',
        trendNote: '铜价上涨影响显著（铜+硅钢占成本80%）',
        source: '博达干变价格解析, 行业参考'
      },
      {
        name: '柴油发电机组 2-3MW',
        bomPrice: '500–1200万元/台',
        researchPrice: '国产155–235万元/台；进口250–450万元/台',
        suppliers: ['Caterpillar(CAT)','Cummins(康明斯)','MTU(罗罗)','玉柴','潍柴重工'],
        trend: '上升',
        trendNote: '2025年市场规模125亿元，同比+53%；AI数据中心备电刚需',
        source: '东方财富AIDC柴发报告, 康明斯2025价格单'
      },
      {
        name: '模块化UPS 500kVA',
        bomPrice: '200–400万元/套',
        researchPrice: '国产20–35万元/套；外资25–50万元/套',
        suppliers: ['Vertiv（维谛）','Eaton（伊顿）','Schneider（施耐德）','华为'],
        trend: '平稳',
        trendNote: '锂电版本溢价30-60%；AI时代HVDC/巴拿马架构替代趋势明确',
        source: '施耐德白皮书, Introl设计指南'
      },
      {
        name: '磷酸铁锂储能(BESS)',
        bomPrice: '2000–8000万元/套',
        researchPrice: '电芯接近0.40元/Wh(314Ah头部)；2h系统均价0.61+元/Wh(较上周0.66下修)；碳酸锂跌至~15.5万/吨(-13.9%)',
        suppliers: ['宁德时代','比亚迪','亿纬锂能','国轩高科','赣锋锂电','中车株洲所','上能电气','许继电气'],
        trend: '下降',
        trendNote: '碳酸锂本周跌至~15.5万元/吨(较上周~18万跌13.9%)；314Ah电芯接近0.40元/Wh(较1月涨30%+但趋稳)；2h系统均价下修至0.61+元/Wh；宁德Q1 2026国内EV电池份额50.1%(5年新高)',
        source: 'Trading Economics 碳酸锂, Energy-Storage.News 2026-03, CATL Q1 2026'
      },
      {
        name: '巴拿马架构DC电源 800VDC',
        bomPrice: '300–1000万元/套',
        researchPrice: '约1.5–3.5元/W；800VDC效率98.5%；较传统UPS降30-40% CAPEX',
        suppliers: ['中恒电气','台达电子','维谛(Vertiv)','华为数字能源','SuperX(中恒合资)','伊顿(Eaton)','阳光电源'],
        trend: '上升',
        trendNote: 'GTC 2026 NVIDIA DSX架构强化800V路线；SuperX Panama-800VDC(98.5%/3.6MW)；Eaton+NVIDIA 800V参考架构',
        source: 'Engineering.com, CNESA, StorageReview GTC 2026'
      }
    ]
  },
  network: {
    title: '网络设备',
    updated: '2026-03-30',
    items: [
      {
        name: '51.2T AI交换机(Spine-Leaf)',
        bomPrice: '25–40万元/台',
        researchPrice: 'Leaf约80–200万元/台；Spine约300–2000万元/台',
        suppliers: ['Arista','Cisco','华为CloudEngine','Broadcom(芯片)','NVIDIA Spectrum-6'],
        trend: '下降',
        trendNote: '800G交换机每年降价约18%；51.2T成新建标配；102.4T(TH6)路线图中',
        source: 'Arista, network-switch.com, fibermall.com'
      },
      {
        name: '400G光模块 OSFP/QSFP-DD',
        bomPrice: '0.4–1.2万元/个',
        researchPrice: 'DR4约$80–120；FR4约$120–180',
        suppliers: ['中际旭创(InnoLight)','新易盛(Eoptolink)','Coherent','II-VI'],
        trend: '下降',
        trendNote: '400G持续下降，被800G/1.6T替代；中际旭创当前股价628元vs公允价值1016元(折价38%)',
        source: 'hytoptodevice, 国际电子商情, Simply Wall St'
      },
      {
        name: '800G光模块',
        bomPrice: '1–2万元/个',
        researchPrice: '2026预测$350–500；出货量上调至37M',
        suppliers: ['中际旭创','新易盛','Coherent','光迅科技'],
        trend: '下降',
        trendNote: '2026出货量上调37M；高盛上调中际旭创目标价至791元；NVIDIA为800G增加订单量',
        source: '高盛/中际旭创, Cignal AI, ip-fiber.com'
      },
      {
        name: 'DAC高速铜缆',
        bomPrice: '0（含在整柜BOM中）',
        researchPrice: '400G 1m约$105-115；800G 1m约$145-185',
        suppliers: ['Volex','Amphenol','TE Connectivity','国产厂商'],
        trend: '平稳',
        trendNote: '与铜价相关，AI集群规模量产后稳定',
        source: 'QSFPTEK, Volex产品页'
      },
      {
        name: '1.6T光模块（下一代）',
        bomPrice: '——（未列入当前BOM）',
        researchPrice: '导入期$1500–2500；2026预计销售超$20亿；正式进入规模量产商用',
        suppliers: ['中际旭创','新易盛','AOI','剑桥科技','光迅科技','C-Light'],
        trend: '下降',
        trendNote: '1.6T正式进入规模量产商用(C-Light确认)；CAGR 11.7%；CPO功耗较传统降3.5x；GTC 2026硅光互联路线',
        source: 'C-Light.com 2026-03, LinkedIn 1.6T报告, Naddod, StorageReview GTC 2026'
      }
    ]
  }
};

/* ========== 供应商数据（全10大系统，200+供应商） ========== */
const SUPPLIER_DATA = {
  "计算设备": [
    {
      "name": "NVIDIA",
      "origin": "进口",
      "country": "美国",
      "products": "DGX GB200/GB300 NVL72整机柜系统",
      "priceRange": "约2160万元/柜($3M)",
      "subCategory": "GPU超节点"
    },
    {
      "name": "广达 Quanta (QCT)",
      "origin": "进口",
      "country": "中国台湾",
      "products": "GB200 NVL36/NVL72 ODM整机柜",
      "priceRange": "约1296万元/柜起",
      "subCategory": "GPU超节点"
    },
    {
      "name": "Supermicro 超微",
      "origin": "进口",
      "country": "美国",
      "products": "GB200 NVL72 OEM整机柜方案",
      "priceRange": "1440-2160万元/柜",
      "subCategory": "GPU超节点"
    },
    {
      "name": "Dell Technologies 戴尔",
      "origin": "进口",
      "country": "美国",
      "products": "PowerEdge XE系列AI机架方案",
      "priceRange": "1440-2020万元/柜",
      "subCategory": "GPU超节点"
    },
    {
      "name": "HPE 惠普企业",
      "origin": "进口",
      "country": "美国",
      "products": "Cray XD AI超节点机架",
      "priceRange": "1800-2300万元/柜",
      "subCategory": "GPU超节点"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "CloudMatrix 384超节点(910C×384)",
      "priceRange": "约5000-8000万元/套",
      "subCategory": "GPU超节点"
    },
    {
      "name": "技嘉 Gigabyte",
      "origin": "进口",
      "country": "中国台湾",
      "products": "GB200 NVL72 OEM整机柜",
      "priceRange": "1800-2160万元/柜",
      "subCategory": "GPU超节点"
    },
    {
      "name": "富士通 Fujitsu",
      "origin": "进口",
      "country": "日本",
      "products": "PRIMERGY AI Cluster(含NVIDIA GPU)",
      "priceRange": "按项目定制",
      "subCategory": "GPU超节点"
    },
    {
      "name": "NVIDIA/Groq",
      "origin": "进口",
      "country": "美国",
      "products": "Groq 3 LPU推理协处理器/LPX机架(256 LPU)",
      "priceRange": "待定(Q3 2026出货)",
      "subCategory": "推理加速器"
    },
    {
      "name": "AMD/Meta",
      "origin": "进口",
      "country": "美国",
      "products": "MI450定制版+Helios机架(6GW大单)",
      "priceRange": "约250万/卡($35K均价)",
      "subCategory": "定制推理加速器"
    },
    {
      "name": "NVIDIA",
      "origin": "进口",
      "country": "美国",
      "products": "DGX B200(8×B200 SXM)",
      "priceRange": "约371万元/台($515K)",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "Supermicro 超微",
      "origin": "进口",
      "country": "美国",
      "products": "AS-8125GS 8卡GPU服务器",
      "priceRange": "172-288万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "Dell Technologies 戴尔",
      "origin": "进口",
      "country": "美国",
      "products": "PowerEdge XE9680(8×H100/B200)",
      "priceRange": "173-302万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "HPE 惠普企业",
      "origin": "进口",
      "country": "美国",
      "products": "ProLiant XL675d/XD685",
      "priceRange": "180-252万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "联想 Lenovo",
      "origin": "国产",
      "country": "中国",
      "products": "ThinkSystem SR680a V4(8×B300)",
      "priceRange": "158-274万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "浪潮 Inspur",
      "origin": "国产",
      "country": "中国",
      "products": "NF5688M7(8×B200 SXM)",
      "priceRange": "150-320万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "曙光 Sugon",
      "origin": "国产",
      "country": "中国",
      "products": "i9000G系列(8×GPU)",
      "priceRange": "150-280万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "新华三 H3C",
      "origin": "国产",
      "country": "中国",
      "products": "UniServer R4900 G6 AI",
      "priceRange": "100-250万元/台",
      "subCategory": "8卡GPU服务器"
    },
    {
      "name": "AMD",
      "origin": "进口",
      "country": "美国",
      "products": "Instinct MI300X/MI350X加速卡",
      "priceRange": "MI300X $10-15K/卡",
      "subCategory": "AMD GPU服务器"
    },
    {
      "name": "Supermicro 超微",
      "origin": "进口",
      "country": "美国",
      "products": "AS-8125GS(8×MI300X)",
      "priceRange": "约172万元/台起",
      "subCategory": "AMD GPU服务器"
    },
    {
      "name": "Dell Technologies 戴尔",
      "origin": "进口",
      "country": "美国",
      "products": "PowerEdge XE9680(8×MI300X)",
      "priceRange": "202-252万元/台",
      "subCategory": "AMD GPU服务器"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "昇腾910B/910C Atlas 800T",
      "priceRange": "910B约88-120万元; 910C约160-200万元",
      "subCategory": "国产AI加速器"
    },
    {
      "name": "寒武纪 Cambricon",
      "origin": "国产",
      "country": "中国",
      "products": "MLU580/思元590服务器",
      "priceRange": "约80-150万元/台",
      "subCategory": "国产AI加速器"
    },
    {
      "name": "海光 Hygon",
      "origin": "国产",
      "country": "中国",
      "products": "DCU8100/K100深度计算单元",
      "priceRange": "约80-150万元/台",
      "subCategory": "国产AI加速器"
    },
    {
      "name": "壁仞科技 Biren",
      "origin": "国产",
      "country": "中国",
      "products": "BR100 GPGPU加速卡",
      "priceRange": "约100-200万元/台(估算)",
      "subCategory": "国产AI加速器"
    },
    {
      "name": "摩尔线程 Moore Threads",
      "origin": "国产",
      "country": "中国",
      "products": "MTT S5000/MCCX D800",
      "priceRange": "约60-120万元/台",
      "subCategory": "国产AI加速器"
    },
    {
      "name": "Dell Technologies 戴尔",
      "origin": "进口",
      "country": "美国",
      "products": "PowerEdge R760/R7625",
      "priceRange": "0.6-5.8万元/台",
      "subCategory": "CPU通用服务器"
    },
    {
      "name": "HPE 惠普企业",
      "origin": "进口",
      "country": "美国",
      "products": "ProLiant DL380/DL385 Gen11",
      "priceRange": "0.3-5.8万元/台",
      "subCategory": "CPU通用服务器"
    },
    {
      "name": "联想 Lenovo",
      "origin": "国产",
      "country": "中国",
      "products": "ThinkSystem SR650/SR665 V3",
      "priceRange": "0.2-4.3万元/台",
      "subCategory": "CPU通用服务器"
    },
    {
      "name": "浪潮 Inspur",
      "origin": "国产",
      "country": "中国",
      "products": "NF5280M7(全球出货量第二)",
      "priceRange": "3-20万元/台",
      "subCategory": "CPU通用服务器"
    },
    {
      "name": "Intel",
      "origin": "进口",
      "country": "美国",
      "products": "Gaudi 3 AI加速卡/Xeon CPU",
      "priceRange": "Gaudi3 8卡约$125K",
      "subCategory": "AI加速器(其他)"
    }
  ],
  "存储设备": [
    {
      "name": "Pure Storage",
      "origin": "进口",
      "country": "美国",
      "products": "FlashArray//X/C/E全NVMe阵列",
      "priceRange": "1PB系统约500-1200万元",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "NetApp",
      "origin": "进口",
      "country": "美国",
      "products": "AFF A1K/A90全NVMe系列",
      "priceRange": "中端约100-2000万元/套",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "VAST Data",
      "origin": "进口",
      "country": "美国",
      "products": "VAST DataStore全闪AI数据湖",
      "priceRange": "PB级约1500-3000万元",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "OceanStor Dorado V7全闪阵列",
      "priceRange": "基础约28万元起",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "Dell EMC",
      "origin": "进口",
      "country": "美国",
      "products": "PowerStore/PowerMax全闪",
      "priceRange": "按需报价",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "IBM Storage",
      "origin": "进口",
      "country": "美国",
      "products": "Storage Scale System 6000",
      "priceRange": "PB级约2000-8000万元",
      "subCategory": "全闪存NVMe阵列"
    },
    {
      "name": "DDN (DataDirect)",
      "origin": "进口",
      "country": "美国",
      "products": "EXAScaler Lustre(AI/HPC主流)",
      "priceRange": "PB级约500-3000万元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "WEKA (WekaIO)",
      "origin": "进口",
      "country": "美国",
      "products": "WekaFS并行文件系统",
      "priceRange": "10PB约2000-5000万元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "IBM GPFS",
      "origin": "进口",
      "country": "美国",
      "products": "Spectrum Scale/GPFS",
      "priceRange": "硬件+软件约3000万-1亿元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "Hammerspace",
      "origin": "进口",
      "country": "美国",
      "products": "Hammerspace统一并行文件系统",
      "priceRange": "PB级约1500-4000万元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "OceanStor Pacific分布式存储",
      "priceRange": "100PB+约3000万-1.5亿元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "浪潮 Inspur",
      "origin": "国产",
      "country": "中国",
      "products": "AS13000分布式存储(Lustre/S3)",
      "priceRange": "PB级约1000-5000万元",
      "subCategory": "并行文件系统"
    },
    {
      "name": "MinIO",
      "origin": "进口",
      "country": "美国",
      "products": "ALStor开源对象存储(S3兼容)",
      "priceRange": "自建PB级约100-500万元",
      "subCategory": "对象存储"
    },
    {
      "name": "Pure Storage FlashBlade",
      "origin": "进口",
      "country": "美国",
      "products": "FlashBlade//S/E(NFS/S3)",
      "priceRange": "PB级约600-2000万元",
      "subCategory": "对象存储"
    },
    {
      "name": "Seagate",
      "origin": "进口",
      "country": "美国",
      "products": "Lyve Cloud/Exos HDD冷存储",
      "priceRange": "HDD约$15-25/TB",
      "subCategory": "对象存储"
    },
    {
      "name": "Arista Networks",
      "origin": "进口",
      "country": "美国",
      "products": "7050X4/7060 RoCE优化交换机",
      "priceRange": "7-13万元/台起",
      "subCategory": "存储专用网络"
    },
    {
      "name": "NVIDIA Networking",
      "origin": "进口",
      "country": "美国",
      "products": "Quantum InfiniBand QM9790(NDR 400G)",
      "priceRange": "29-58万元/台",
      "subCategory": "存储专用网络"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "CE8800系列RoCEv2交换机",
      "priceRange": "20-80万元/台",
      "subCategory": "存储专用网络"
    }
  ],
  "网络设备": [
    {
      "name": "Arista Networks",
      "origin": "进口",
      "country": "美国",
      "products": "7800R4 Spine(460T)/7170-64C(51.2T)",
      "priceRange": "Spine 36-86万元/台起",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "Cisco 思科",
      "origin": "进口",
      "country": "美国",
      "products": "Nexus 9808(57.6T)/Cisco 8223",
      "priceRange": "机箱+线卡 144-432万元",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "Juniper 瞻博",
      "origin": "进口",
      "country": "美国",
      "products": "QFX5220/PTX10003白盒Spine",
      "priceRange": "36-216万元/台",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "NADDOD 纳多德",
      "origin": "国产",
      "country": "中国",
      "products": "N9500-64OC(51.2T,SONiC)",
      "priceRange": "约$36,999/台(26.7万元)",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "CE16800超100T Spine",
      "priceRange": "100-500万元/台",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "新华三 H3C",
      "origin": "国产",
      "country": "中国",
      "products": "S9850高密度AI Spine",
      "priceRange": "50-300万元/台",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "星融元 Asterfusion",
      "origin": "国产",
      "country": "中国",
      "products": "COIN-X 9660(51.2T,SONiC)",
      "priceRange": "20-50万元/台",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "锐捷 Ruijie",
      "origin": "国产",
      "country": "中国",
      "products": "RG-CS6890(400G AI Spine)",
      "priceRange": "30-150万元/台",
      "subCategory": "AI交换机(Spine)"
    },
    {
      "name": "Arista Networks",
      "origin": "进口",
      "country": "美国",
      "products": "7050X3系列25/100G ToR",
      "priceRange": "7-13万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "Cisco 思科",
      "origin": "进口",
      "country": "美国",
      "products": "Nexus 9300系列ToR",
      "priceRange": "9-36万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "NVIDIA Spectrum",
      "origin": "进口",
      "country": "美国",
      "products": "SN3800/SN4600(RoCEv2 ToR)",
      "priceRange": "22-72万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "Edgecore",
      "origin": "进口",
      "country": "中国台湾",
      "products": "AS9516(64×400G SONiC白盒)",
      "priceRange": "14-29万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "CE6870/6800系列ToR",
      "priceRange": "6-40万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "锐捷 Ruijie",
      "origin": "国产",
      "country": "中国",
      "products": "RG-NBS3200系列",
      "priceRange": "3-15万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "新华三 H3C",
      "origin": "国产",
      "country": "中国",
      "products": "S5570X/S6860系列",
      "priceRange": "5-20万元/台",
      "subCategory": "ToR交换机"
    },
    {
      "name": "中际旭创 InnoLight",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G/1.6T OSFP光模块",
      "priceRange": "800G $2000-5000/只",
      "subCategory": "光模块"
    },
    {
      "name": "新易盛 Eoptolink",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G/1.6T光模块",
      "priceRange": "800G $1500-5000/只",
      "subCategory": "光模块"
    },
    {
      "name": "Coherent (II-VI)",
      "origin": "进口",
      "country": "美国",
      "products": "800G DR8 OSFP/相干光模块",
      "priceRange": "800G $2500-6000/只",
      "subCategory": "光模块"
    },
    {
      "name": "海信宽带 Hisense",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G数据中心光模块",
      "priceRange": "800G $1500-4500/只",
      "subCategory": "光模块"
    },
    {
      "name": "华工正源 Accelink",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G光模块(DSP自研)",
      "priceRange": "批量价格具竞争力",
      "subCategory": "光模块"
    },
    {
      "name": "博创科技 O-Net",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G光模块",
      "priceRange": "批量定制有优势",
      "subCategory": "光模块"
    },
    {
      "name": "Amphenol 安费诺",
      "origin": "进口",
      "country": "美国",
      "products": "400G/800G QSFP-DD DAC",
      "priceRange": "400G 0.5m约$50-150",
      "subCategory": "高速铜缆DAC"
    },
    {
      "name": "Volex",
      "origin": "进口",
      "country": "英国",
      "products": "DAC/ACC铜缆",
      "priceRange": "800G 1m $145-185",
      "subCategory": "高速铜缆DAC"
    },
    {
      "name": "FS.COM 讯联",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G全系列DAC铜缆",
      "priceRange": "400G 1m约$50-150",
      "subCategory": "高速铜缆DAC"
    },
    {
      "name": "NADDOD 纳多德",
      "origin": "国产",
      "country": "中国",
      "products": "400G/800G DAC铜缆",
      "priceRange": "400G约$50-200",
      "subCategory": "高速铜缆DAC"
    },
    {
      "name": "CommScope",
      "origin": "进口",
      "country": "美国",
      "products": "SYSTIMAX 360 MTP预端接",
      "priceRange": "工程约$10-30/米",
      "subCategory": "光纤布线"
    },
    {
      "name": "康宁 Corning",
      "origin": "进口",
      "country": "美国",
      "products": "EDGE高密度/SMF-28 Ultra",
      "priceRange": "与CommScope同档",
      "subCategory": "光纤布线"
    },
    {
      "name": "长飞光纤 YOFC",
      "origin": "国产",
      "country": "中国",
      "products": "超低损耗单模/多模光纤",
      "priceRange": "国产最大,批量有竞争力",
      "subCategory": "光纤布线"
    },
    {
      "name": "中天科技",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心光缆/MPO预制",
      "priceRange": "较进口低30-50%",
      "subCategory": "光纤布线"
    },
    {
      "name": "Palo Alto Networks",
      "origin": "进口",
      "country": "美国",
      "products": "PA-7000系列(1Tbps NGFW)",
      "priceRange": "PA-7050约$200K+",
      "subCategory": "网络安全"
    },
    {
      "name": "Fortinet 飞塔",
      "origin": "进口",
      "country": "美国",
      "products": "FortiGate 3000F/7000F",
      "priceRange": "FG-3000F约$112K起",
      "subCategory": "网络安全"
    },
    {
      "name": "山石网科 Hillstone",
      "origin": "国产",
      "country": "中国",
      "products": "X8180(800G NGFW)",
      "priceRange": "40-120万元/台",
      "subCategory": "网络安全"
    },
    {
      "name": "深信服 Sangfor",
      "origin": "国产",
      "country": "中国",
      "products": "AF下一代防火墙(200G+)",
      "priceRange": "10-100万元/台",
      "subCategory": "网络安全"
    },
    {
      "name": "华为 Huawei",
      "origin": "国产",
      "country": "中国",
      "products": "HiSecEngine USG12000(Tbps级)",
      "priceRange": "30-200万元/台",
      "subCategory": "网络安全"
    },
    {
      "name": "绿盟 NSFOCUS",
      "origin": "国产",
      "country": "中国",
      "products": "ADS DDoS防护(Tbps清洗)",
      "priceRange": "30-200万元/套",
      "subCategory": "网络安全"
    }
  ],
  "散热冷却系统": [
    {
      "name": "开利 Carrier",
      "origin": "进口",
      "country": "美国",
      "products": "19XR/19DV磁悬浮离心冷水机",
      "priceRange": "350-600万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "约克 York/JCI",
      "origin": "进口",
      "country": "美国",
      "products": "YK系列磁悬浮离心 5-8MW",
      "priceRange": "320-580万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "特灵 Trane",
      "origin": "进口",
      "country": "美国",
      "products": "RTWD/RTHD系列 5-8MW",
      "priceRange": "350-620万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "麦克维尔 McQuay/Daikin",
      "origin": "进口",
      "country": "美国/日本",
      "products": "WMC系列磁悬浮 5-7MW",
      "priceRange": "280-500万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "格力 Gree",
      "origin": "国产",
      "country": "中国",
      "products": "LSBLX磁悬浮离心 5-8MW",
      "priceRange": "180-350万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "美的 Midea",
      "origin": "国产",
      "country": "中国",
      "products": "MCC系列磁悬浮 5-8MW",
      "priceRange": "170-320万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "海尔 Haier",
      "origin": "国产",
      "country": "中国",
      "products": "磁悬浮变频离心 5-8MW",
      "priceRange": "160-300万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "荏原 Ebara",
      "origin": "进口",
      "country": "日本",
      "products": "ESCS离心冷水机组",
      "priceRange": "280-520万元/台",
      "subCategory": "冷水机组"
    },
    {
      "name": "SPX/马利 Marley",
      "origin": "进口",
      "country": "美国",
      "products": "NC/FXV闭式冷却塔 500-5000RT",
      "priceRange": "80-200万元/台",
      "subCategory": "闭式冷却塔"
    },
    {
      "name": "BAC",
      "origin": "进口",
      "country": "美国",
      "products": "VXC/V系列闭式冷却塔",
      "priceRange": "70-180万元/台",
      "subCategory": "闭式冷却塔"
    },
    {
      "name": "Evapco 艾森曼",
      "origin": "进口",
      "country": "美国",
      "products": "AT/LSTE系列闭式",
      "priceRange": "60-150万元/台",
      "subCategory": "闭式冷却塔"
    },
    {
      "name": "海鸥股份",
      "origin": "国产",
      "country": "中国",
      "products": "闭式冷却塔系列",
      "priceRange": "进口品牌6-7折",
      "subCategory": "闭式冷却塔"
    },
    {
      "name": "湖南元亨",
      "origin": "国产",
      "country": "中国",
      "products": "YH系列闭式冷却塔",
      "priceRange": "30-80万元/台",
      "subCategory": "闭式冷却塔"
    },
    {
      "name": "Vertiv 维谛",
      "origin": "进口",
      "country": "美国",
      "products": "Liebert XDM系列CDU 1-2MW",
      "priceRange": "108-216万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "CoolIT Systems",
      "origin": "进口",
      "country": "加拿大",
      "products": "DCLC系列CDU 1-2MW",
      "priceRange": "58-130万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "台达 Delta",
      "origin": "进口",
      "country": "中国台湾",
      "products": "闭环CDU 1-2MW",
      "priceRange": "86-180万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "Asetek",
      "origin": "进口",
      "country": "丹麦",
      "products": "企业级CDU 1-2MW",
      "priceRange": "72-144万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "英维克 Envicool",
      "origin": "国产",
      "country": "中国",
      "products": "UQDB系列CDU(NVIDIA AVL认证)",
      "priceRange": "60-150万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "高澜股份 Gaolan",
      "origin": "国产",
      "country": "中国",
      "products": "GDL系列CDU 1-2MW",
      "priceRange": "50-120万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "曙光数创 Sugon",
      "origin": "国产",
      "country": "中国",
      "products": "浸没/冷板CDU 1-2MW",
      "priceRange": "80-200万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "比亚迪电子 BYD",
      "origin": "国产",
      "country": "中国",
      "products": "液冷CDU(NVIDIA AVL认证)",
      "priceRange": "60-130万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "申菱环境 Shenling",
      "origin": "国产",
      "country": "中国",
      "products": "SLA系列液冷CDU 1-2MW",
      "priceRange": "55-130万元/台",
      "subCategory": "液冷CDU"
    },
    {
      "name": "LG Electronics",
      "origin": "进口",
      "country": "韩国",
      "products": "冷板/CDU/水冷冷水机组垂直整合方案",
      "priceRange": "数十亿美元级(微软年度合同)",
      "subCategory": "液冷CDU"
    },
    {
      "name": "Cooler Master 酷冷至尊",
      "origin": "进口",
      "country": "中国台湾",
      "products": "NVL72冷板+快接头(GB200主供)",
      "priceRange": "GB200套件约62-73万元",
      "subCategory": "液冷组件"
    },
    {
      "name": "双鸿科技 Auras",
      "origin": "进口",
      "country": "中国台湾",
      "products": "GPU微通道冷板",
      "priceRange": "定制冷板4350-5075元/块",
      "subCategory": "液冷组件"
    },
    {
      "name": "英维克 Envicool",
      "origin": "国产",
      "country": "中国",
      "products": "冷板/液冷套件",
      "priceRange": "国产替代方案",
      "subCategory": "液冷组件"
    },
    {
      "name": "飞荣达",
      "origin": "国产",
      "country": "中国",
      "products": "GPU散热冷板",
      "priceRange": "批量价格有优势",
      "subCategory": "液冷组件"
    },
    {
      "name": "Staubli 史陶比尔",
      "origin": "进口",
      "country": "瑞士",
      "products": "NVUQD/NVQD04盲插快接头",
      "priceRange": "NVUQD 580-725元/对",
      "subCategory": "液冷快接头"
    },
    {
      "name": "东莞序秋科技",
      "origin": "国产",
      "country": "中国",
      "products": "液冷快速接头(国产替代)",
      "priceRange": "比进口低40-60%",
      "subCategory": "液冷快接头"
    },
    {
      "name": "比亚迪电子 BYD",
      "origin": "国产",
      "country": "中国",
      "products": "液冷快接头(进入NVIDIA AVL)",
      "priceRange": "国产替代方案",
      "subCategory": "液冷快接头"
    },
    {
      "name": "Vertiv 维谛",
      "origin": "进口",
      "country": "美国",
      "products": "精密空调/列间空调",
      "priceRange": "10-30万元/台",
      "subCategory": "精密空调"
    },
    {
      "name": "施耐德 Schneider",
      "origin": "进口",
      "country": "法国",
      "products": "InRow精密空调",
      "priceRange": "10-30万元/台",
      "subCategory": "精密空调"
    },
    {
      "name": "英维克 Envicool",
      "origin": "国产",
      "country": "中国",
      "products": "列间精密空调",
      "priceRange": "5-15万元/台",
      "subCategory": "精密空调"
    }
  ],
  "一次侧电气": [
    {
      "name": "特变电工 TBEA",
      "origin": "国产",
      "country": "中国",
      "products": "110kV主变压器/干式变压器",
      "priceRange": "主变400-600万元/台",
      "subCategory": "主变压器"
    },
    {
      "name": "中国西电 XD",
      "origin": "国产",
      "country": "中国",
      "products": "主变压器/GIS组合电器",
      "priceRange": "主变450-700万元/台",
      "subCategory": "主变压器"
    },
    {
      "name": "保变电气",
      "origin": "国产",
      "country": "中国",
      "products": "110kV油浸式主变压器",
      "priceRange": "400-650万元/台",
      "subCategory": "主变压器"
    },
    {
      "name": "ABB/日立能源",
      "origin": "进口",
      "country": "瑞士/日本",
      "products": "变压器/GIS/开关柜",
      "priceRange": "外资溢价30-50%",
      "subCategory": "主变压器"
    },
    {
      "name": "西门子 Siemens",
      "origin": "进口",
      "country": "德国",
      "products": "110kV GIS/变压器",
      "priceRange": "高端定制",
      "subCategory": "GIS组合电器"
    },
    {
      "name": "许继电气",
      "origin": "国产",
      "country": "中国",
      "products": "GIS组合电器/保护控制",
      "priceRange": "比外资低20-30%",
      "subCategory": "GIS组合电器"
    },
    {
      "name": "平高电气",
      "origin": "国产",
      "country": "中国",
      "products": "110kV GIS组合电器",
      "priceRange": "国产主力",
      "subCategory": "GIS组合电器"
    }
  ],
  "二次侧电气": [
    {
      "name": "Vertiv 维谛",
      "origin": "进口",
      "country": "美国",
      "products": "Liebert EXL S1模块化UPS",
      "priceRange": "25-45万元/套",
      "subCategory": "UPS系统"
    },
    {
      "name": "Eaton 伊顿",
      "origin": "进口",
      "country": "美国",
      "products": "93PM模块化UPS",
      "priceRange": "25-40万元/套",
      "subCategory": "UPS系统"
    },
    {
      "name": "Schneider 施耐德",
      "origin": "进口",
      "country": "法国",
      "products": "Galaxy系列模块化UPS",
      "priceRange": "28-48万元/套",
      "subCategory": "UPS系统"
    },
    {
      "name": "华为数字能源",
      "origin": "国产",
      "country": "中国",
      "products": "UPS5000-A模块化",
      "priceRange": "20-35万元/套",
      "subCategory": "UPS系统"
    },
    {
      "name": "中恒电气",
      "origin": "国产",
      "country": "中国",
      "products": "巴拿马架构DC电源/HVDC",
      "priceRange": "1.5-2.0元/W",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "台达 Delta",
      "origin": "进口",
      "country": "中国台湾",
      "products": "HVDC/DC电源模块",
      "priceRange": "1.8-2.5元/W",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "维谛 Vertiv",
      "origin": "进口",
      "country": "美国",
      "products": "巴拿马架构电源方案",
      "priceRange": "2.0-3.0元/W",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "华为数字能源",
      "origin": "国产",
      "country": "中国",
      "products": "巴拿马/HVDC电源",
      "priceRange": "1.5-2.5元/W",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "SuperX Digital Power(中恒合资)",
      "origin": "国产",
      "country": "中国/新加坡",
      "products": "Panama-800VDC端到端/Aurora-800VDC改造方案",
      "priceRange": "效率98.5%，支持3.6MW/柜",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "阳光电源 Sungrow",
      "origin": "国产",
      "country": "中国",
      "products": "AIDC电源方案(機柜电源/高压侧/DC微网)",
      "priceRange": "新设事业部，产品预计2026年发布",
      "subCategory": "巴拿马DC电源"
    },
    {
      "name": "Caterpillar CAT",
      "origin": "进口",
      "country": "美国",
      "products": "柴油发电机组 2-3MW",
      "priceRange": "250-400万元/台",
      "subCategory": "柴油发电"
    },
    {
      "name": "Cummins 康明斯",
      "origin": "进口",
      "country": "美国",
      "products": "柴油发电机组 2-3MW",
      "priceRange": "220-320万元/台",
      "subCategory": "柴油发电"
    },
    {
      "name": "MTU 罗罗",
      "origin": "进口",
      "country": "德国",
      "products": "高功率柴油发电机组",
      "priceRange": "280-450万元/台",
      "subCategory": "柴油发电"
    },
    {
      "name": "玉柴 Yuchai",
      "origin": "国产",
      "country": "中国",
      "products": "国产柴油发电机组",
      "priceRange": "155-200万元/台",
      "subCategory": "柴油发电"
    },
    {
      "name": "潍柴 Weichai",
      "origin": "国产",
      "country": "中国",
      "products": "大功率柴油发电机组",
      "priceRange": "150-220万元/台",
      "subCategory": "柴油发电"
    },
    {
      "name": "宁德时代 CATL",
      "origin": "国产",
      "country": "中国",
      "products": "磷酸铁锂储能系统",
      "priceRange": "500-600元/kWh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "比亚迪 BYD",
      "origin": "国产",
      "country": "中国",
      "products": "储能电池模组/系统",
      "priceRange": "500-600元/kWh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "亿纬锂能 EVE",
      "origin": "国产",
      "country": "中国",
      "products": "储能电池系统",
      "priceRange": "500-600元/kWh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "国轩高科",
      "origin": "国产",
      "country": "中国",
      "products": "LFP储能电池模组",
      "priceRange": "480-550元/kWh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "赣锋锂电 Ganfeng",
      "origin": "国产",
      "country": "中国",
      "products": "LFP储能系统/储能电芯",
      "priceRange": "电芯0.36-0.42元/Wh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "中车株洲所 CRRC",
      "origin": "国产",
      "country": "中国",
      "products": "储能系统设备(多次中标)",
      "priceRange": "0.48-0.54元/Wh",
      "subCategory": "锂电储能BESS"
    },
    {
      "name": "施耐德 Schneider",
      "origin": "进口",
      "country": "法国",
      "products": "10kV开关柜/低压开关柜",
      "priceRange": "15-40万元/面",
      "subCategory": "中压开关"
    },
    {
      "name": "ABB",
      "origin": "进口",
      "country": "瑞士",
      "products": "中压开关柜/配电系统",
      "priceRange": "进口溢价30-50%",
      "subCategory": "中压开关"
    },
    {
      "name": "金盘科技",
      "origin": "国产",
      "country": "中国",
      "products": "干式变压器2500kVA",
      "priceRange": "国产20-35万元/台",
      "subCategory": "干式变压器"
    },
    {
      "name": "山东达驰",
      "origin": "国产",
      "country": "中国",
      "products": "干式变压器系列",
      "priceRange": "国产领先",
      "subCategory": "干式变压器"
    },
    {
      "name": "施耐德 Schneider",
      "origin": "进口",
      "country": "法国",
      "products": "智能PDU系列",
      "priceRange": "0.8-3万元/台",
      "subCategory": "智能PDU"
    },
    {
      "name": "Vertiv 维谛",
      "origin": "进口",
      "country": "美国",
      "products": "智能PDU",
      "priceRange": "0.8-3万元/台",
      "subCategory": "智能PDU"
    },
    {
      "name": "华为",
      "origin": "国产",
      "country": "中国",
      "products": "智能PDU",
      "priceRange": "比进口低20-30%",
      "subCategory": "智能PDU"
    }
  ],
  "消防系统": [
    {
      "name": "Kidde-Fenwal 科蒂",
      "origin": "进口",
      "country": "美国",
      "products": "Natura IGS系列IG-541/IG-55",
      "priceRange": "25-80万元/防护区",
      "subCategory": "气体灭火"
    },
    {
      "name": "Fike Corporation",
      "origin": "进口",
      "country": "美国",
      "products": "IG-541/IG-55惰性气体灭火",
      "priceRange": "22-86万元/防护区",
      "subCategory": "气体灭火"
    },
    {
      "name": "Ansul/JCI",
      "origin": "进口",
      "country": "美国",
      "products": "INERGEN IG-541系统",
      "priceRange": "30-90万元/防护区",
      "subCategory": "气体灭火"
    },
    {
      "name": "威特龙 Vitalong",
      "origin": "国产",
      "country": "中国",
      "products": "IG541/IG55混合气体灭火",
      "priceRange": "12-35万元/防护区",
      "subCategory": "气体灭火"
    },
    {
      "name": "国安达 Guoanda",
      "origin": "国产",
      "country": "中国",
      "products": "混合气体灭火(上市公司)",
      "priceRange": "10-30万元/防护区",
      "subCategory": "气体灭火"
    },
    {
      "name": "Ansul/JCI",
      "origin": "进口",
      "country": "美国",
      "products": "FM200七氟丙烷灭火",
      "priceRange": "柜式约2.8万/套起",
      "subCategory": "七氟丙烷"
    },
    {
      "name": "青鸟消防 Qingbird",
      "origin": "国产",
      "country": "中国",
      "products": "七氟丙烷+全氟己酮(UL认证)",
      "priceRange": "七氟丙烷1.5-6万/套",
      "subCategory": "七氟丙烷"
    },
    {
      "name": "Minimax 美力马",
      "origin": "进口",
      "country": "德国",
      "products": "FM200洁净气体灭火",
      "priceRange": "25-100万元/防护区",
      "subCategory": "七氟丙烷"
    },
    {
      "name": "Marioff/Honeywell",
      "origin": "进口",
      "country": "芬兰",
      "products": "HI-FOG高压细水雾(FM认证)",
      "priceRange": "50-300万元/防护区",
      "subCategory": "高压细水雾"
    },
    {
      "name": "Fogtec",
      "origin": "进口",
      "country": "德国",
      "products": "高压细水雾系统",
      "priceRange": "40-200万元/防护区",
      "subCategory": "高压细水雾"
    },
    {
      "name": "Honeywell/Xtralis",
      "origin": "进口",
      "country": "美国/澳大利亚",
      "products": "VESDA-E极早期吸气式烟感",
      "priceRange": "5-30万元/防护区",
      "subCategory": "火灾探测"
    },
    {
      "name": "青鸟消防 Qingbird",
      "origin": "国产",
      "country": "中国",
      "products": "自研吸气式烟感(朱鹮芯片)",
      "priceRange": "0.25-0.9万元/台",
      "subCategory": "火灾探测"
    },
    {
      "name": "青鸟消防/耐普特",
      "origin": "国产",
      "country": "中国",
      "products": "全氟己酮柜级灭火(UL认证)",
      "priceRange": "0.8-3万元/套",
      "subCategory": "锂电柜级灭火"
    },
    {
      "name": "Kidde-Fenwal",
      "origin": "进口",
      "country": "美国",
      "products": "GPU集群专用柜级灭火",
      "priceRange": "1-5万元/套",
      "subCategory": "锂电柜级灭火"
    }
  ],
  "安防监控": [
    {
      "name": "海康威视 Hikvision",
      "origin": "国产",
      "country": "中国",
      "products": "高清网络摄像机/NVR/智能分析",
      "priceRange": "0.1-2万元/路",
      "subCategory": "视频监控"
    },
    {
      "name": "大华 Dahua",
      "origin": "国产",
      "country": "中国",
      "products": "网络摄像机/NVR系统",
      "priceRange": "0.1-1.5万元/路",
      "subCategory": "视频监控"
    },
    {
      "name": "Axis 安讯士",
      "origin": "进口",
      "country": "瑞典",
      "products": "高端网络摄像机",
      "priceRange": "0.3-3万元/路",
      "subCategory": "视频监控"
    },
    {
      "name": "博世 Bosch Security",
      "origin": "进口",
      "country": "德国",
      "products": "安防监控系统",
      "priceRange": "0.3-2万元/路",
      "subCategory": "视频监控"
    },
    {
      "name": "HID Global",
      "origin": "进口",
      "country": "美国",
      "products": "多因素门禁控制/生物识别",
      "priceRange": "50-300万元/项目",
      "subCategory": "门禁系统"
    },
    {
      "name": "海康威视 Hikvision",
      "origin": "国产",
      "country": "中国",
      "products": "门禁系统/人脸识别",
      "priceRange": "30-150万元/项目",
      "subCategory": "门禁系统"
    },
    {
      "name": "Schneider 施耐德",
      "origin": "进口",
      "country": "法国",
      "products": "EcoStruxure IT DCIM平台",
      "priceRange": "200-1000万元/套",
      "subCategory": "DCIM"
    },
    {
      "name": "Vertiv 维谛",
      "origin": "进口",
      "country": "美国",
      "products": "Trellis DCIM平台",
      "priceRange": "200-800万元/套",
      "subCategory": "DCIM"
    },
    {
      "name": "华为",
      "origin": "国产",
      "country": "中国",
      "products": "iCooling/FusionDC DCIM",
      "priceRange": "100-500万元/套",
      "subCategory": "DCIM"
    },
    {
      "name": "共济科技",
      "origin": "国产",
      "country": "中国",
      "products": "动力环境监控系统",
      "priceRange": "100-500万元/套",
      "subCategory": "动环监控"
    },
    {
      "name": "美信监控",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心动环监控",
      "priceRange": "50-300万元/套",
      "subCategory": "动环监控"
    }
  ],
  "土地基建": [
    {
      "name": "中建集团 CSCEC",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心EPC总包(全球最大建企)",
      "priceRange": "按项目报价",
      "subCategory": "EPC总包"
    },
    {
      "name": "中国电建",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心建设施工",
      "priceRange": "按项目报价",
      "subCategory": "EPC总包"
    },
    {
      "name": "万国数据 GDS",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心开发与建设",
      "priceRange": "按项目报价",
      "subCategory": "数据中心开发"
    },
    {
      "name": "秦淮数据 Chindata",
      "origin": "国产",
      "country": "中国",
      "products": "超大规模数据中心",
      "priceRange": "按项目报价",
      "subCategory": "数据中心开发"
    },
    {
      "name": "DPR Construction",
      "origin": "进口",
      "country": "美国",
      "products": "数据中心专业建设",
      "priceRange": "北美领先承包商",
      "subCategory": "海外承包商"
    },
    {
      "name": "Holder Construction",
      "origin": "进口",
      "country": "美国",
      "products": "超大规模DC建设",
      "priceRange": "微软/Meta供应商",
      "subCategory": "海外承包商"
    }
  ],
  "软性成本": [
    {
      "name": "AECOM",
      "origin": "进口",
      "country": "美国",
      "products": "数据中心设计咨询(全球领先)",
      "priceRange": "按项目报价",
      "subCategory": "设计咨询"
    },
    {
      "name": "Gensler",
      "origin": "进口",
      "country": "美国",
      "products": "数据中心建筑设计",
      "priceRange": "高端设计",
      "subCategory": "设计咨询"
    },
    {
      "name": "中国信通院 CAICT",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心测试/认证",
      "priceRange": "国家级检测机构",
      "subCategory": "调试验收"
    },
    {
      "name": "Uptime Institute",
      "origin": "进口",
      "country": "美国",
      "products": "Tier III/IV认证",
      "priceRange": "认证费用约100-500万元",
      "subCategory": "调试验收"
    },
    {
      "name": "HDR Inc.",
      "origin": "进口",
      "country": "美国",
      "products": "数据中心MEP/IT设计",
      "priceRange": "按项目报价",
      "subCategory": "设计咨询"
    },
    {
      "name": "华信咨询",
      "origin": "国产",
      "country": "中国",
      "products": "数据中心工程咨询/PM",
      "priceRange": "按项目报价",
      "subCategory": "项目管理"
    }
  ]
};

/* ---------- 更新日志 ---------- */
const UPDATE_LOG = [
  {
    date: '2026-03-30',
    version: 'v1.8',
    author: '自动调研(周报)',
    summary: '第3次周度调研更新：Vera Rubin NVL72报价飙升至$5-7M(+43-75%)；碳酸锂暴跌至~15.5万/吨(-13.9%)；1.6T光模块正式进入规模量产；NVIDIA Q4营收$681亿(+73%)',
    changes: [
      { category: '计算设备', detail: 'Vera Rubin VR200 NVL72报价升至$5M-$7M(较此前$3.5-4M上修+43-75%)，含$1M 3D NAND存储', priceChange: '+43-75%' },
      { category: '计算设备', detail: 'VR300 NVL144报价$7M-$8.8M；VR300需等2028H2(Rubin Ultra未tape-out)', priceChange: '更新' },
      { category: '计算设备', detail: 'NVIDIA Q4 FY2026营收$681亿(+73% YoY)，DC部门$623亿；Q1指引$780亿', priceChange: '更新' },
      { category: '计算设备', detail: 'GB200 NVL72训练版$2.8-3.4M；GB300 NVL72推理版$6.0-6.5M(Tom\'s Hardware源)', priceChange: '更新' },
      { category: '计算设备', detail: 'B200制造成本$6,400/芯片，售价~$40K，毛利84%(Silicon Analysts拆解)', priceChange: '更新' },
      { category: '计算设备', detail: 'HBM4样品已交付；SK Hynix 60%份额，Micron 25%', priceChange: '更新' },
      { category: '散热冷却', detail: 'Vertiv年初至今股价+64%领涨液冷板块；DCX推出600kW-2.6MW ECDU系列', priceChange: '更新' },
      { category: '散热冷却', detail: 'VR200报价飙升推高液冷配套需求预期', priceChange: '更新' },
      { category: '电力系统', detail: '碳酸锂暴跌至~15.5万元/吨(较上周~18万跌13.9%)', priceChange: '-13.9%' },
      { category: '电力系统', detail: '2h储能系统均价下修至0.61+元/Wh(此前报0.66)；314Ah电芯接近0.40元/Wh趋稳', priceChange: '下修' },
      { category: '电力系统', detail: '宁德时代Q1 2026国内EV电池份额50.1%(5年新高)', priceChange: '更新' },
      { category: '网络设备', detail: '1.6T光模块正式进入规模量产商用(C-Light确认)', priceChange: '里程碑' },
      { category: '网络设备', detail: '中际旭创股价628元vs公允价值1016元(折价38%)，高盛目标价791元', priceChange: '更新' }
    ]
  },
  {
    date: '2026-03-23',
    version: 'v1.7',
    author: '自动调研(周报)',
    summary: '第2次周度调研更新：GTC 2026重磅发布——Vera Rubin定价$3.5-4M/柜、Groq 3 LPU推理协处理器、AMD-Meta $600亿大单；储能电芯涨30%+；新增海光DCU、MI450、Groq数据',
    changes: [
      { category: '计算设备', detail: 'GTC 2026: Vera Rubin NVL72定价$3.5M-$4.0M/柜，较Blackwell溢价25%', priceChange: '+25%' },
      { category: '计算设备', detail: 'GTC 2026: NVIDIA $200亿收购Groq，Groq 3 LPU推理协处理器Q3 2026出货，tokens/W提升35x', priceChange: '新品' },
      { category: '计算设备', detail: 'GTC 2026: Jensen称Blackwell+Rubin订单通量突破$1万亿（此前$5000亿）', priceChange: '+100%订单' },
      { category: '计算设备', detail: 'AMD-Meta $600亿5年協议，MI450定制版均价$35K/卡，首批1GW H2 2026交付', priceChange: '新品' },
      { category: '计算设备', detail: 'NVIDIA H200获批重新对华出口，字节/腾讯/阿里等获批采购', priceChange: '更新' },
      { category: '计算设备', detail: '新增海光DCU深算系列：深算三号已交付，四号研发中；市值突破6000亿', priceChange: '新增' },
      { category: '计算设备', detail: 'Nebius-Meta $270亿基建协议，含$120亿Vera Rubin部署', priceChange: '新增' },
      { category: '散热冷却', detail: 'Vera Rubin单柜液冷BOM确认$55,710，冷板$400/片(GPU)/$200/片(NVSwitch)', priceChange: '更新' },
      { category: '散热冷却', detail: '全球液冷市场2026年$60亿，CDU市场$77亿；规模化降本15%', priceChange: '更新' },
      { category: '电力系统', detail: '储能电芯价格较1月涨30%+，314Ah均价0.36元/Wh；2h系统环比+22.6%至0.66元/Wh', priceChange: '+22.6%' },
      { category: '电力系统', detail: '宁德时代Q4营收1406亿元(超预期,同比+37%)；碳酸锂突码18万/吨', priceChange: '更新' },
      { category: '电力系统', detail: 'GTC 2026 NVIDIA DSX架构强化800VDC技术路线', priceChange: '更新' },
      { category: '网络设备', detail: '800G光模块2026出货量上调至37M；高盛上调中际旭创目标价至791元', priceChange: '更新' },
      { category: '网络设备', detail: 'Micron HBM4 36GB量产，带宽2.8TB/s(+2.3x)；48GB 16H样品中', priceChange: '新品' },
      { category: '供应商', detail: '新增3家供应商：NVIDIA/Groq(LPU)、AMD/Meta(MI450)、海光信息(DCU)；总计190家', priceChange: '新增' }
    ]
  },
  {
    date: '2026-03-16',
    version: 'v1.6',
    author: '系统优化',
    summary: '五项核心优化：修复更新日期硬编码、主题持久化、BOM编辑本地保存、CSV导出功能、表格性能优化及响应式布局修复',
    changes: [
      { category: 'Bug修复', detail: '总览页“上次更新”KPI改为动态读取UPDATE_LOG，不再硬编码', priceChange: '修复' },
      { category: '体验优化', detail: '主题偏好(dark/light)本地持久化，刷新不丢失', priceChange: '优化' },
      { category: '核心功能', detail: 'BOM编辑数据本地持久化，添加/修改/删除刷新后保留', priceChange: '新增' },
      { category: '核心功能', detail: 'BOM明细和供应商页新增CSV导出功能（兼容Excel）', priceChange: '新增' },
      { category: '性能优化', detail: 'BOM表格索引查找改为_id匹配，消除O(n²)性能问题', priceChange: '优化' },
      { category: '响应式', detail: '修复侧边栏标题折行、图表截断、表格滚动提示等自适应问题', priceChange: '修复' }
    ]
  },
  {
    date: '2026-03-16',
    version: 'v1.5',
    author: '自动调研(周报)',
    summary: '第1次周度自动调研更新：华为昇腾950首发、AMD MI355X定价大幅上调、液冷市场爆发式增长',
    changes: [
      { category: '计算设备', detail: '华为昇腾950 SuperPoD MWC 2026海外首发，8192卡全光互联', priceChange: '新品' },
      { category: '计算设备', detail: 'NVIDIA Vera Rubin NVL72/NVL144路线图确认，H2 2026出货', priceChange: '新品' },
      { category: '计算设备', detail: 'AMD MI355X ISSCC披露1400W TBP，HSBC报价$25K-$66K/卡', priceChange: '+164%上限' },
      { category: '计算设备', detail: '寒武纪2025前三季度营收46亿(+2386%)，2026目标50万片', priceChange: '新增' },
      { category: '计算设备', detail: '华为910C售价$12K/卡，2026产量计划翻倍至60万片', priceChange: '更新' },
      { category: '散热冷却', detail: 'LG签微软数十亿美元液冷年度合同，液冷成超大规模标配', priceChange: '新增' },
      { category: '散热冷却', detail: 'Vera Rubin NVL144液冷BOM $55,710/柜，较GB200涨17%', priceChange: '+17%' },
      { category: '散热冷却', detail: '2026全球液冷市场1162亿元；快接头市场145亿元', priceChange: '更新' },
      { category: '散热冷却', detail: 'GB300快接头用量翻倍至216对/柜，冷板价值量升至1800元/kW', priceChange: '更新' },
      { category: '电力系统', detail: 'SuperX发布Panama-800VDC(效率98.5%,3.6MW/柜)，兼容NVIDIA Kyber', priceChange: '新品' },
      { category: '电力系统', detail: 'Eaton联合NVIDIA推800V参考架构；阳光电源新设AIDC事业部', priceChange: '新增' },
      { category: '电力系统', detail: '储能电芯回升至0.36-0.42元/Wh；碳酸锂稳定于15.2万/吨', priceChange: '更新' },
      { category: '网络设备', detail: '800G光模块2026出货量预计翻倍；中际旭创+新易盛占60%份额', priceChange: '更新' },
      { category: '网络设备', detail: '1.6T光模块2026销售额预计突破$20亿，CAGR超60%', priceChange: '更新' }
    ]
  },
  {
    date: '2026-03-11',
    version: 'v1.4',
    author: '调研团队',
    summary: '深度供应商调研：覆盖全10大系统182家供应商，新增存储/消防/安防/基建/软性成本供应商数据',
    changes: [
      { category: '供应商数据', detail: '供应商数据库从4类40家扩展至10类182家', priceChange: '新增' },
      { category: '计算设备', detail: '新增国产AI加速器供应商：寒武纪/海光/壁仞/摩尔线程', priceChange: '新增' },
      { category: '存储设备', detail: '新增18家存储供应商：Pure Storage/VAST Data/DDN/WEKA等', priceChange: '新增' },
      { category: '网络设备', detail: '新增35家网络供应商：含光模块/铜缆/布线/安全6个子类', priceChange: '新增' },
      { category: '散热冷却', detail: '扩展至32家供应商：新增高澜/申菱/比亚迪等CDU厂商', priceChange: '新增' },
      { category: '消防系统', detail: '新增14家消防供应商：Kidde/Fike/Marioff/青鸟消防等', priceChange: '新增' },
      { category: '安防监控', detail: '新增11家安防供应商：海康威视/大华/HID/DCIM平台', priceChange: '新增' },
      { category: '电力系统', detail: '一次侧+二次侧合计31家供应商完整覆盖', priceChange: '新增' },
      { category: '土地基建', detail: '新增6家EPC/开发商：中建/中国电建/万国数据/DPR等', priceChange: '新增' },
      { category: '软性成本', detail: '新增6家设计/咨询/认证机构：AECOM/Uptime/信通院', priceChange: '新增' }
    ]
  },
  {
    date: '2026-03-11',
    version: 'v1.3',
    author: '调研团队',
    summary: '完成三大核心模块调研：计算设备、散热冷却、电力系统与网络设备',
    changes: [
      { category: '计算设备', detail: '新增NVIDIA GB300 NVL72定价数据（HSBC/Barron\'s）：约$3M', priceChange: '+15%' },
      { category: '计算设备', detail: '更新AMD MI350X价格：AMD涨价67%至$25K/卡', priceChange: '+67%' },
      { category: '计算设备', detail: '新增Vera Rubin NVL144/NVL576路线图及预测定价', priceChange: '——' },
      { category: '散热冷却', detail: '补充GB200/GB300液冷套件BOM拆分（Morgan Stanley数据）', priceChange: '新增' },
      { category: '散热冷却', detail: '液冷快接头单价因Blackwell需求涨200%（2025Q3）', priceChange: '+200%' },
      { category: '散热冷却', detail: '3M停产Novec/Fluorinert，国产氟化液替代方案入量产', priceChange: '-60~70%' },
      { category: '电力系统', detail: '巴拿马DC电源渗透率快速提升，CAPEX比传统UPS低30-40%', priceChange: '-30~40%' },
      { category: '电力系统', detail: 'LFP储能系统2025Q4反弹，LFP材料涨30%', priceChange: '+30%' },
      { category: '网络设备', detail: '800G光模块3年降幅超60%，2026预测$350-500', priceChange: '-60%' },
      { category: '网络设备', detail: '1.6T光模块进入商用元年，AOI获$2亿量产订单', priceChange: '新品' }
    ]
  },
  {
    date: '2026-02-15',
    version: 'v1.2',
    author: '调研团队',
    summary: '初始BOM框架搭建，确定10大系统78个条目',
    changes: [
      { category: '整体', detail: '建立BOM数据结构，确定78个设备条目', priceChange: '——' },
      { category: '整体', detail: '确定投资规模约500亿元中位估算', priceChange: '——' },
      { category: '计算设备', detail: '确定以NVL72超节点×392柜为核心计算架构', priceChange: '——' }
    ]
  },
  {
    date: '2026-01-20',
    version: 'v1.1',
    author: '项目团队',
    summary: '项目启动，定义数据中心规模与初始需求',
    changes: [
      { category: '整体', detail: '确定100MW AI超算中心建设目标', priceChange: '——' },
      { category: '整体', detail: '预算框架确定：约430-570亿元区间', priceChange: '——' }
    ]
  }
];
