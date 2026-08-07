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
    updated: '2026-07-27',
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
        trendNote: '【重大反转】Trump 1月14日批准H200出口中国(25%关税+案例许可)；中国1月28日批准首批进口(数十万片)，主供3家头部互联网企业；NVIDIA估中国市场年潜力$500亿；中国原下单>200万片(超NVIDIA存货70万)；中国监管部门指示部分企业暂停订单；H100云租赁$2/hr',
        source: 'CNBC 2026-01-14, Reuters 2026-01-13, CNBC 2026-01-28, Yahoo 2026-01-15'
      },
      {
        name: 'NVIDIA B200 8卡服务器',
        bomPrice: '200–350万元/台',
        researchPrice: '约325–370万元（OEM $35K-$50K/卡；B200云租赁$1.71-$14/hr，B300 $2.45-$18/hr）',
        suppliers: ['Dell', 'HPE', 'Supermicro', '联想', '浪潮'],
        trend: '上升',
        trendNote: '【GPU Finder 7/22 B300新低】Verda $7.50/hr on-demand最低/$2.63/hr spot最低；Nebius $7.85/hr on-demand/spot $4.30；AWS p6-b300.48xlarge $142.42/hr(8 GPUs)；Cheapest confirmed in-stock Nebius $7.85/hr；【Cloud GPUs 7/24】GB300 on-demand $13.31/hr/spot $3.02/reserved $8.32；B300 on-demand $12.38/hr/spot $2.63/reserved $7.24；AMD MI355X $5.60/hr(2 providers)；【GPUaaS.com】B300 median $8.23-$9.16/hr；wholesale $7-$8.50；36-mo reservation $3.27/hr；【NVIDIA Vera Rubin NVL72已发货 7/21】Google/Azure/Oracle/CoreWeave首批交付，Chosun 7/22报道；10x perf/watt vs Grace Blackwell；VR200 NVL144整柜~$5-7M；【价格阶梯】GB300 on-demand >B300 on-demand>MI355X；spot市场B300降至$2.63最低点',
        source: 'gpufinder.dev/B300 2026-07-19, GridStackHub 2026-07-15, GPUSmith/GPU Price Index 2026-07-14, Neysa/GB300 2026-07-15, Compute Prices/Verda 2026-07-17, Compute Prices/Oracle 2026-07-19, AIMultiple 2026-07-16, cloud-gpus.com 2026-07-19'
      },
      {
        name: 'AMD MI300X 8卡服务器',
        bomPrice: '——（替代方案参考）',
        researchPrice: '约115–175万元（$10K–$15K/卡）',
        suppliers: ['Dell XE9680', 'HPE', 'Supermicro AS-8125GS'],
        trend: '平稳',
        trendNote: '【Advancing AI 2026收官-7/22-23 Moscone SF】Lisa Su 7/23主题演讲重磅：Helios AI机架进入full production/单柜$5.0-5.5M(Mitrade 7/26)/Q3 2026启动出货；Helios规格：72×MI455X+18×Zen 6 EPYC Venice+Pensando+ROCm 7；2.9 EFLOPS FP4/1.4 EFLOPS FP8；31TB HBM4；scale-up 260TB/s；scale-out 43TB/s(Tech Insider)；【Anthropic $50亿AI基建大合作-7/23 Lumien】Anthropic 2GW MI450部署+AMD $50亿股权投资Anthropic；H1 2027启动；【OpenAI Helios Q4 2026+Meta 6GW】首批部署确认；MI500 2027/MI600 2028年度节奏；MI355X现在出货；【MI455X具体规格】单卡432GB HBM4/19.6 TB/s带宽/CDNA 5架构；vs MI355X吞吐提升34倍；【经济性宣称】每美元token吞吐比NVIDIA高30%；CPU TAM 2030提高到$2000亿，AMD目标>50%份额；【股价表现】$539.51 -2.32% 收盘→盘后+3.57%至$558.95(Nasdaq 7/23)；【Q1 DC营收$5.8B持续增长】前值参考：Q1 2026 DC $5.8B创新高，2030服务器CPU目标$120亿',
        source: 'DCD/AMD Q1 $5.8B 2026-07-14, TechTimes/Zen 6 caution 2026-07-13, Yahoo/Goldman 2026-07-10, Facebook/Stifel 2026-07-12, Boerse Express/Cantor 2026-06-30, Investing.com/Helios 2026-07-10'
      },
      {
        name: 'AMD MI350X/MI355X 8卡服务器',
        bomPrice: '——（替代方案参考）',
        researchPrice: '约180–475万元（MI350X $25K/卡涨70%；HSBC区间$25K–$66K/卡）',
        suppliers: ['Dell', 'HPE', 'Supermicro', '联想'],
        trend: '上升',
        trendNote: 'MI355X DLC机架128卡/36TB HBM3e/2.6 exaflops；Helios机架18个compute trays×4 MI455X+1 Venice CPU=72 GPUs/18 CPUs，2.9 EFLOPS FP4；MI455X 12个chiplet+12堆36GB HBM4(共432GB)/320亿晶体管；MI455X UALoE72量产推迟至2027 Q2(UALink延迟，SemiAnalysis)',
        source: 'AMD CES 2026, ServeTheHome 2026-01-07, Next Platform 2026-02'
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
        trendNote: '【SAIL大奖WAIC 2026顶奖-7/17】华为Atlas 950 SuperPoD荣获WAIC 2026 Super AI Leader(SAIL)最高奖；【完整规格公开-7/17 华为官网】1,024卡演示/8,192卡完整配置；1 EFLOPS FP8/2 EFLOPS FP4；256TB统一内存；3μs RTT；4,096根光缆@800G；【零美国部件-Wion】"统一总线2.0"架构，完全去美化设计；【6.7×NVL144 + 15×内存 - aifriends.jp 7/24】系统级性能宣称6.7倍于NVL144且内存15倍；【1024卡液冷架构 - french.shanghai】1024颗Ascend卡完整液冷方案；【Atlas 950 SuperCluster扩展至50万处理器-TrendForce 7/20】更大规模节点级联；【时间线】Ascend 950 8月云端上线；SuperPoD Q4 2026 GA；【中国SuperNode推进】WAIC 2026以华为主导+MiniMax M3+Unitree机器人为主线的中国"超节点"战略；【前值参考】950PR单卡功耗600W、定价约7万元(H200的1/3)；下代芯片年度节奏(DCD 7/9)',
        source: 'agenccy/6.7x NVL144 2026-07-17, China Daily 2026-07-18, Reuters/Xi Shanghai 2026-07-16, Noqta 2026-07-17, techdailycare 2026-07-17, Yicaichina 2026-07-15, SUPERCRZY 2026-07-14, eu.36kr 2026-07-15, techtimes/300 products 2026-07-17, DCD/annual cadence 2026-07-09'
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
        researchPrice: 'VR200 NVL72: $5M-$7M(含$1M存储)；VR300 NVL144: $7M-$8.8M；Kyber NVL576: 600kW/2027',
        suppliers: ['Supermicro', 'HPE', 'Azure', 'Nebius', 'CoreWeave', 'AWS', 'Google Cloud', 'OCI'],
        trend: '上升',
        trendNote: '【全面量产】NVIDIA官宣Rubin已full production(1月新闻发布)，2H26合作伙伴上市；CoWoS 300-350k晶圆(2026)，1Q26试产、2Q26末量产；VR200 NVL72机柜3Q26末进入量产，2H26出货5000-7000台(良率爬坡)；HBM4 22TB/s带宽2.75x B200；GB200 NVL72比价$8.4M/72 GPU(VR200预估5x推理性能)',
        source: 'NVIDIA 2026-01-05, Ming-Chi Kuo 2026-01-06, Next Platform 2026-01'
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
    updated: '2026-07-27',
    items: [
      {
        name: '磁悬浮变频冷水机组 5-8MW',
        bomPrice: '1000–3000万元/台',
        researchPrice: '国产150–350万元/台；进口300–600万元/台',
        suppliers: ['Trane（特灵）','Carrier（开利）','York（约克）','格力','美的','海尔'],
        trend: '上升',
        trendNote: 'AI数据中心需求旺盛；交货期6-12个月；Vertiv新推CoolChip CDU 600(600kW液对液)，进一步扩充液冷组合',
        source: '格力官方授权商2026价格表, Vertiv CoolChip新品2025-06'
      },
      {
        name: '液冷CDU 1-2MW',
        bomPrice: '100–300万元/台',
        researchPrice: '进口约$500-800/kW(CDU设备本身)；含安装约$2-4K/kW；国产约1100元/kW',
        suppliers: ['Vertiv（维谛）','CoolIT(Ecolab收购)','LiquidStack','英维克','曙光数创','比赫','纬地','台达','尼得科','LG','DCX'],
        trend: '上升',
        trendNote: '【VRT Q2 2026即将发布-7/29】共识EPS $1.43(+50.53% YoY)/营收$3.379B(+28.4%)；指引EPS $1.37-1.43/营收$3.25-3.45B；backlog $150亿；FY指引EPS $6.30-6.40；【VRT股价$290-302-7/25 247wallst】过去1个月-8.24%；共识目标$342.73；Zacks Rank #2 Buy；【Vertiv CoolChip CDU 2300 EMEA发布-7/24 Channelwise】2.3MW液对液CDU，range 100kW-2.3MW；【Schneider Motivair MCDU-45/55 全球发布-7月】MCDU-55额定2.7MW(GlobeNewswire 7/23)；【Accelsius NeuCool MR250】row-based CDU 250kW/rack，45°C设施水；【LG电子600kW CDU】NVIDIA AI Factory DSX认证即将7/20(asiae)；【Nidec 300kW in-rack CDU】商用发布约2027；【Rayonnant/Compal CDU 7/23】+全球泰克 Taiwan 7/21量产(Taipei Times)；【Vertiv "Extreme"机架发布 - DCD】面向AI/HPC；【CDU市场2034 $39亿-GlobeNewswire】21.8% CAGR(2025-2034)；【前值参考】谷歌33,000台液冷CDU大单、Supermicro DCBBS+120kW RDHx、CoolIT $47.5亿收购',
        source: 'MarketBeat/VRT 288.79 2026-07-17, Blockonomi/Baird 2026-07-16, MarketBeat/RBC 2026-07-16, tipranks/Baird 2026-07-17, Simply Wall St/Q2 guide 2026-07-16, 新浪/Google 33K CDU 2026-07-16, StorageReview/Supermicro 2026-07-15, DCD/Vertiv liquid cooling 2026-07-14, DCNN/Tecnair 2026-07-15, DCD/DCX 2026-07-14, DCD/Nidec 2026-07-14, DCD/Accelsius 2026-07-14, TechReaderDaily 2026-07-17'
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
    updated: '2026-07-27',
    items: [
      {
        name: '110kV主变压器 63MVA',
        bomPrice: '800–1500万元/台',
        researchPrice: '国产400–700万元/台；外资800–1400万元/台；自2020年价格上涨60-80%',
        suppliers: ['特变电工','中国西电','保变电气','ABB/日立能源','西门子','许继电气'],
        trend: '上升',
        trendNote: '【CNBC目标价$1,300-7/3】Club给GE Vernova买入等级+目标$1,300(隐含+14%上行)；GEV不只燃气轮机赢AI热潮；【Russell Top 50入榜+7.3%涨-7/2】Yahoo：GEV因入选Russell Top 50和AI电力订单飙升7.3%；【股价$1,107.98-6/30 CNBC】GEV +5.47(+0.50%)/+57.34(+5.49%)；6/30 +7.3%；【H1 2026红火】GEV上半年表现极佳，下半年动能能否延续；【Seeking Alpha 6/29】GEV显著上行空间但容不下失误；【溢价估值-7/1】GEV当前处于premium valuation，买入/持有/卖出讨论；【燃气轮机3年涨300%-6/24 24/7 Wall Street】订单售罄至2029年；【微软+Chevron 7台-6/24 CNBC】微软买7台GE Vernova燃气轮机用于Texas Chevron合作AI DC；【越南EVN订单-6/23】2台9HA.02+H78发电机；HA全球累计4M小时；【乌克兰DTEK合作-6/26】重大燃气电厂MoU；【Jefferies 6/11重申买入】$940.97(+3.77% 5日)；SpaceX $28亿移动燃机AI DC实证；GE Vernova燃机积压100 GW+Siemens 80 GW；BlackRock预美DC电力2025 19 GW→2030 194 GW(CAGR 59.2%)；GE Vernova Q1订单+80%YoY，2026营收指引$445-455亿；EIG预警$8万亿AI基建押注电网无法承载',
        source: 'CNBC/Club $1300 2026-07-03, Yahoo/GEV Russell 2026-07-02, TheGlobeAndMail/H1 2026-07-01, Seeking Alpha 2026-06-29, CNBC quotes 2026-06-30, 24/7 Wall Street 2026-06-24, CNBC/Microsoft 2026-06-24'
      },
      {
        name: '干式变压器 2500kVA',
        bomPrice: '40–80万元/台',
        researchPrice: '国产20–35万元/台；外资40–70万元/台；配电变压器自2019年涨78-95%',
        suppliers: ['特变电工','山东达驰','ABB/日立能源','金盘科技','扬电科技'],
        trend: '上升',
        trendNote: '铜价+硅钢占成本80%；电力变压器全球短缺延伸至中低压领域；配电变压器交货期平均128周(Q2 2025)；AI数据中心扩张加速需求',
        source: '博达干变价格解析, Electrical Trader 2026-02, Power Magazine 2026-01'
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
        researchPrice: '电芯0.38-0.40元/Wh(314Ah均价)；系统0.55-0.60元/Wh(DC侧0.48-0.50)',
        suppliers: ['宁德时代','比亚迪','亿纬锂能','国轩高科','赣锋锂电','中车株洲所','上能电气','许继电气'],
        trend: '震荡',
        trendNote: '【LC2609 5.61%单日暴跌-7/22 Mysteel】主力合约收143,900元/吨(-5.61%)；盘中最低141,400元/吨；LC2701一度触及跌停-10%至140,000下方；Mysteel现货150,050元/吨(-2,500)；【5个月低点136,800元-7/22 Reuters/economictimes】盘中触及5个月低点136,800元/吨(自2月10日以来最低)；收盘141,280-144,000(-4.45~4.95%)；7/23再度-0.7%至143,000元/吨；【自5/13 20万高点-30%累计跌幅-Sina 7/25】7月下旬碳酸锂稳定在14.5万元/吨，自5月13日20万元/吨阶段高点累计下跌接近30%；库存去化加速；【Mysteel 7/24现货】优质电池级144,200-146,100元/吨(-950)；电池级142,500-146,100(-1,100)；工业级139,500-143,100(-700)；【Trading Economics 7/22】5个月低点<145,000；4个月低点151,000；测试3月低点；【SMM美元7/9】Battery-Grade Index $20,545.27(-$614.56)/吨；Battery-Grade CIF $19,979-21,146/吨；【2027过剩预期-fetradeworld】重启产能推高2027过剩担忧驱动价格跳水；【本周核心变化】v3.4 151,000元→v3.5 143,900元(-4.7%周)；14.5万元或成新平衡；LC2609已跌破关键支撑；【连续5次下行】-30%大顶级熊市已确认',
        source: '新浪/生意社 2026-07-20, 新浪/Yicai iFind 2026-07-17, 新浪/LC2609 2026-07-15, 新浪/7-17 2026-07-17, Mysteel/mmlc 2026-07-16, Mysteel/晚盘 2026-07-15, 100ppi/生意社 2026-07-14, S&P Global Platts 2026-07-14, SunSirs 2026-07-15, 新浪/-10.18% 2026-07-15, www-old.metal.com 2026-07-17, Trading Economics 2026-07-16'
      },
      {
        name: '巴拿马架构DC电源 800VDC',
        bomPrice: '300–1000万元/套',
        researchPrice: '约1.5–3.5元/W；800VDC效率98.5%；较传统UPS降30-40% CAPEX',
        suppliers: ['中恒电气','台达电子','维谛(Vertiv)','华为数字能源','SuperX(中恒合资)','伊顿(Eaton)','阳光电源'],
        trend: '上升',
        trendNote: 'GTC 2026 NVIDIA DSX架构强化800V路线；SuperX Panama-800VDC(98.5%/3.6MW)；Eaton+NVIDIA 800V参考架构',
        source: 'Engineering.com, CNESA, StorageReview GTC 2026'
      },
      {
        name: '固态变压器 SST（下一代·观察项）',
        bomPrice: '——（暂未纳入BOM）',
        researchPrice: '国产2.4MW单柜约80–150万元；进口2–5MW约250–500万元；效率98%+；省45%铜材',
        suppliers: ['四方股份(10kV/2.4MW量产)','台达(集装箱式SST)','金盘科技(样机)','新风光(样机)','SolarEdge+Infineon(2-5MW/99%)','阳光电源','可立克(高频变压器)'],
        trend: '上升',
        trendNote: '【2027年观察落地】SST可将10/35kV中压交流直接转为800V直流，省去3级变换链，效率98%+。NVIDIA 2025年底白皮书将SST列为AIDC 800VDC理想电源方案；字节跳动AIDC招标首次引入800V HVDC；四方股份10kV→800VDC 2.4MW已量产；国盛/中金预判2027年起小范围试点，2028年规模化；当前障碍：无完整DC案例、110kV输入版本尚无量产、SiC器件成本高。2026年为样机/联研关键年。',
        source: '新浪财经 2026-04-03, NVIDIA SST白皮书 2025-12, SolarEdge+Infineon 2025-11, 国盛证券/中金研报, MarketsandMarkets 2026-03-30'
      }
    ]
  },
  network: {
    title: '网络设备',
    updated: '2026-07-27',
    items: [
      {
        name: '51.2T AI交换机(Spine-Leaf)',
        bomPrice: '25–40万元/台',
        researchPrice: 'Leaf约80–200万元/台；Spine约300–2000万元/台',
        suppliers: ['Arista','Cisco','华为CloudEngine','Broadcom(芯片)','NVIDIA Spectrum-6'],
        trend: '下降',
        trendNote: 'Marvell发布业界首款260通道PCIe 6.0交换机Structera S(scale-up AI)，Q3 2026采样；Cisco Silicon One G300 102.4T芯片+Nexus 64端口800G/1.6T双速率；Arista 7800R4出货576×800G端口；Marvell+Lumentum OFC演示AI光路交换(OCS)',
        source: 'Marvell 2026-03-17, Cisco 2026-02-10, Arista OFC 2026'
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
        researchPrice: '800G SR8/DR8约$360-380；800G LR8约$420-450',
        suppliers: ['中际旭创','新易盛','Coherent','光迅科技','AAOI','Hyper Photonix'],
        trend: '下降',
        trendNote: '【中际旭创港股上市首日破发-7/30 中新社/凤凰】03308.HK 7/30挂牌港交所主板；发行价980港元(低于1010港元上限)；开盘971港元(-0.92%)/盘中最低880-901.5港元(-8~10%)/收960港元(-2.04%)；A股同步暴跌-9.15%到-15.77%区间；【规模】募资约HK$534亿=近7年港股最大IPO(自2019阿里巴巴以来)；全额行使超额配售权可达HK$614亿；总市值1.12万亿港元；港交所同步推出股票期权+纳入可卖空名单；【33家基石浮亏-Sina 7/30】Temasek/HHLR/BlackRock/JPM/Alibaba/Tencent等基石开盘即浮亏；【中际旭创40-80亿A股回购提振-7/28】董事长刘圣提议40-80亿元回购(A股)用于股权激励；订单排到2027年；【新易盛H1 70-80亿元利润-7/28 香港商报】新易盛Q2单季42.2-52.2亿(+78.1-102.3% YoY)/环比+51.8-87.77%；800G主力/1.6T放量提速/首推LPO规模量产/明确澄清1.6T订单下修传言；【天孚通信H1-Sina 7/29】归母11.24-13.04亿(+25-45% YoY)；【Coherent 800G ZR/ZR+市场价格-ascentoptics 7/30】800G ZR $8,000-$16,000+/ZR+ $12,000-$20,000+；400G ZR QSFP-DD $4,000-$6,500；【Fibermall 1.6T预期-7/29】早期1.6T模块$1,300-1,500/2年内跌至$1,100左右(体量与良率驱动)；【关键定位】中际旭创上市首日破发说明估值+情绪压制而非基本面(公司回应)；【前值参考】800G $350-430/1.6T $850-1,050(数据中心内标准型)；Jefferies预测1.6T 2026需求缺口30%/2028 1.6T过1亿；NPO+CPO市场2030 $390亿；AAOI Pearland Texas 2026月产能65万',
        source: 'AAOI 2026-03-09, Zacks 2026-03-09, Tickeron 2026-03-31'
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
        researchPrice: '1.6T OSFP/QSFP-DD约$1300-1500(规模量产后)，预测2年内降至$1100；硅光子占比60%',
        suppliers: ['中际旭创','新易盛','AOI','Coherent','AAOI','Hyper Photonix','C-Light','E-Power/Raytel'],
        trend: '下降',
        trendNote: '【Goldman Sachs中际旭创目标价翻倍-7/17】Goldman Sachs将中际旭创12月目标价RMB 1,187→**2,581**(+117%)，Buy评级；2026-28净利上调65%/108%/119%；营收上调57%/100%/118%至123.6B/249.6B/334B RMB；ROE从44%(2025)升至52%-61%(2026-28)；CROCI最高137.5%；【Goldman Sachs出货预测】2026 800G 3,418万只，2027达4,499万只；2026 1.6T 2,550万只，2027 4,572万只(1.6T成市场主流)；【Goldman Sachs SiPh渗透】2026年800G/1.6T/3.2T的SiPh渗透率60%/80%/100%；行业SiPh产品营收占比2025年28%→2028年62%；【Jefferies-7/16 Nashnova】2027光模块市场三倍增长；2026 1.6T存在30%供给缺口；高端3nm DSP由Broadcom+Marvell主导；200G EML由Lumentum+Broadcom+Sumitomo Electric掌控，中国无成熟供应商；【BofA-7/14 X/pequityresearch】2026 800G需求50-60M只(1000万只级Meta贡献)、1.6T需求30M只；行业预计满足800G需求70-80%、1.6T需求50-60%；Meta 800G单元贡献>10M；Meta对CPO+LPO都在测试；【200G EML缺货】200G EML现在缺货缺口20-60%、交期排到2027年底、还在涨价——最硬瓶颈；【800G/1.6T BOM拆解 Simple Tech 7/16】800G现价约$400/单只(成熟)、1.6T现价$1,300-1,500(初期)，长期量产往$800收敛；每bit两代平价；BOM 8光源+2TIA+2Driver+1DSP相同；SiPh渗透800G 40-45%→1.6T短距60%；【AAOI Pearland Texas扩产-7/14 Fidelity/247WallSt】400,000平方英尺产能扩张专用800G+1.6T光模块；AAOI 7/14涨6%至$119.10; LITE 7/14涨5%至$806.81(+6.1%); COHR 7/14涨1%到$310.11；【Lumentum深度回撤-7/17 TIKR】LITE收$732.82，距52周高$1,085.68回撤-32%(7/7回撤最低-33.63%)；YTD +98.8%(自$368.59开盘)；OCS backlog>$400M；CPO+OCS multi-hundred-million订单交付2027H1；Q4 FY26指引$960M-$1.01B(+首次十亿美元季度)；【LITE Q4 FY26业绩8月11日】35-36%非GAAP运营利润率；EPS估$2.89；【LITE Jefferies覆盖】OCS backlog>$400M+CPO多亿美元订单2027H1交付；【Zacks Lumentum 7/19】1年涨700%；1.6T量产+CPO+OCS+多年百亿美元协议；EML shipment翻倍；forward P/S 10.1×溢价；【新易盛-7/17 新浪】1.6T光模块订单情况良好，客户需求持续扩产；【SemiAnalysis 7/6遗留影响】Kyber NVL144延至2028+NVL72x2取消+NVL576延后或小量→AAOI -17%/COHR -10%/LITE -10%/Astera Labs -11.52%当周回落；【TSMC vs SemiAnalysis CPO争议-7/18】TSMC称CPO在生产、SemiAnalysis称延迟；LITE已获最大external laser小型可插拔+CPO相关多亿美元采购订单；【UMC-Silith矽光子首批送样-7/14 TechNews】首批矽光子晶圆量产送样：200G→400G，Nvidia Spectrum-X为首款CPO交换器',
        source: 'moomoo/Goldman Zhongji 2026-07-17, Nashnova/Jefferies 2026-07-16, X/pequityresearch/BofA 2026-07-14, Simple Tech/800G-1.6T BOM 2026-07-16, Fidelity/AOI Pearland 2026-07-14, 247WallSt/AAOI+LITE 2026-07-14, TIKR/Lumentum 2026-07-19, TECHi/LITE 2026-07-17, MarketBeat/LITE 2026-07-14, Zacks/700% 2026-07-19, Yahoo/LITE laser 2026-07-18, 新浪/新易盛 2026-07-17, Simple Tech/SemiAnalysis 2026-07-14, TechNews/UMC 2026-07-14, YouTube/TSMC vs SA 2026-07-18',
        source: '21jingji 2026-06-18, 财联社 2026-06-21, 大摩研报 2026-06-20, Radiant 2026-06-16, TechInsights 2026-06-20, ZAKER 2026-06-21, jiepei 2026-06-16'
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
    date: '2026-08-03',
    version: 'v3.6',
    author: '自动调研(周报)',
    summary: '第21次周度调研更新：【AWS EC2 Capacity Blocks全线+20% 7/1生效-ecorpit 7/29】P6-B300新价$14.04/加速器·小时(非GovCloud)，单柜8卡Block约$112/hr起；P5 H100 US $5.191/其他区域$4.72；覆盖P6-B200/P5/P5e/P5en/P4de全线；【AMD Helios开始出货-The GPU Trade 7/28】Vultr云平台首批集成AMD Instinct MI455X GPU(7/30 bebeez)；AMD Core Scientific $140亿超级大单(2.5%年递增+30M CS股票权证+锁定额外1.9GW容量至2028末)；Futurum估算Helios每柜$5.0-5.5M vs Vera Rubin $3.5-4.0M(AMD贵约40%)；【Samsung SDS B300 GPUaaS全面商用-techtimes 7/30】外部云营收飙升；【B300云端现价-GPU Finder 7/29】Verda $7.50/hr on-demand最低/Nebius $7.85；Cloud GPUs B300 288GB 4卡$12.38；【华为Atlas 950 SuperPod Q4 2026大规模商用交付确认-WindowsForum 7/30】完整8,192颗Ascend芯片；Ascend 910C 2026产量翻倍至60万颗(Daum 7/29)；CloudMatrix 384持续供应；【Vertiv Q2 2026-投资者关系 7/29】营收$3.274B(+24%但差$100M共识$3.38B)导致股价-17.26%；EPS $1.52(+60% YoY)超预期$1.42达7%；调整后运营利润$738M(+51%)/margin 22.6%(+410bps)；FY指引大幅上修：营收$13.8-14.2B/EPS $6.65-6.75/FCF $2.4-2.6B；ThermoKey+Strategic Thermal Labs收购完成；【LG 600kW CDU获NVIDIA AI Factory认证-Chosun 7/27】韩国首家/全球少数通过100+项验证；±0.25°C精度DTC直液冷；LG上半年AIDC冷却订单60亿韩元/目标全年万亿韩元；1MW/2.5MW/4MW认证陆续推进；Otech Carrier CDU 65LL过NVIDIA Marketplace(7/27 asiae)；高澜股份规模化CDU 0.5-1.1MW(7/30 财闻网)；【碳酸锂再破低点-CCMN 7/31】LC2609 7/31跌至139,780元/吨(-3.44%单日/-2.9%周)；13万关口成关键；本周振幅剧烈151,500→144,280(周-3.9%)；Mysteel 7/28电池级141,500-148,100(-900)；供给宽松+储能钠电分流+美国7/30锂废料出口限制令三重复杂化；【GE Vernova燃机backlog 116GW-EnergyReader 7/28】季增16GW=+16%；总backlog $176B(季增$13B)；2031年订单50%已预售by年底；目标125GW by 2026末(从110GW上修)；FCF 2026指引升至$11.5-12.5B；【中际旭创港股上市首日破发-凤凰 7/30】03308.HK发行价HK$980(低于HK$1,010上限)；开盘HK$971(-0.92%)/盘中最低HK$880-901.5(-8~10%)/收HK$960(-2.04%)；A股同步暴跌-9.15%到-15.77%区间；募资HK$534亿=近7年港股最大IPO(自2019阿里巴巴)；总市值1.12万亿港元；33家基石浮亏(Sina 7/30)；中际旭创40-80亿A股回购提振(7/28)；【新易盛H1净利70-80亿-香港商报 7/28】+77.56~102.93% YoY；Q2单季42.2-52.2亿(+78-102% YoY)；800G主力/1.6T放量提速；【天孚通信H1 11.24-13.04亿-Sina 7/29】+25-45% YoY；【Coherent 800G ZR/ZR+价格-ascentoptics 7/30】800G ZR $8,000-16,000+/ZR+ $12,000-20,000+；早期1.6T模块$1,300-1,500，2年内$1,100左右(Fibermall 7/29)',
    changes: [
      { category: '计算设备', detail: '【AWS EC2 Capacity Blocks全线+20% 7/1生效-ecorpit 7/29】P6-B300新价$14.04/加速器·小时(非GovCloud)；单柜8卡Block约$112/hr起(不含存储/网络/流出)；P5 H100 US $5.191/其他区域$4.72/加速器·小时；覆盖P6-B200/P5/P5e/P5en/P4de全线跟涨', priceChange: '+20%全线' },
      { category: '计算设备', detail: '【AMD Helios开始出货-The GPU Trade 7/28】首批Helios AI机架进入客户交付阶段；Futurum估算Helios每柜$5.0-5.5M vs Vera Rubin $3.5-4.0M(AMD贵约40%)；Helios参数：72×MI455X + EPYC + Pensando，1.4 EFLOPS FP8/2.9 EFLOPS FP4/31TB HBM4', priceChange: '$5.0-5.5M/柜' },
      { category: '计算设备', detail: '【Vultr首批集成AMD MI455X-bebeez 7/30】Vultr云平台成为首批部署AMD Instinct MI455X GPU的公有云；MI455X 40 PFLOPS FP4/432GB HBM4/19.6TB/s带宽', priceChange: '新品上线' },
      { category: '计算设备', detail: '【AMD Core Scientific $140亿超级大单-techtimes 7/28】基础合约$14B + 2.5%年递增 + 30M CS股票权证 + 锁定额外1.9GW容量至2028末；直接对标NVIDIA AI基础设施主导地位', priceChange: '$14B/1.9GW' },
      { category: '计算设备', detail: '【Samsung SDS B300 GPUaaS全面商用-techtimes 7/30】Samsung SDS外部云业务营收因B300 GPUaaS全面商用而飙升；韩国AI云服务重要里程碑', priceChange: 'GA上线' },
      { category: '计算设备', detail: '【B300云端现价-GPU Finder 7/29】Verda $7.50/hr on-demand最低/$2.63/hr spot最低；Nebius $7.85/hr；Enverge 10卡B300 @ $7.50/hr(GetDeploying 8/2)；Cloud GPUs B300 288GB 4卡 $12.38 on-demand/$2.63 spot(7/29)', priceChange: '$7.50最低' },
      { category: '计算设备', detail: '【华为Atlas 950 SuperPod Q4 2026大规模商用交付确认-WindowsForum 7/30】完整8,192颗Ascend芯片系统；将成为中国"人海战术"数量堆叠的旗舰产品', priceChange: 'Q4 GA确认' },
      { category: '计算设备', detail: '【Ascend 910C 2026产量翻倍至60万颗-Daum/조선일보 7/29】华为将910C 2026年产量扩大到2倍；CloudMatrix 384(384×910C)持续供应中国客户；Q4推出WAIC展示的Atlas 950量产版本', priceChange: '60万颗' },
      { category: '计算设备', detail: '【华为智能驾驶Yinwang近200万单元-KrASIA 7/29】华为智能驾驶业务Yinwang出货接近200万单元，展示AI+汽车领域快速渗透', priceChange: '200万单元' },
      { category: '散热冷却', detail: '【Vertiv Q2 2026超预期但股价-17.26%-投资者关系 7/29】营收$3.274B(+24% YoY，有机+18%)略差$100M共识$3.38B；EPS $1.52(+60% YoY)超预期$1.42达7%；调整后运营利润$738M(+51%)/margin 22.6%(+410bps)；FCF $925M(+234% YoY)；流动性$56亿净现金位', priceChange: 'EPS +60%' },
      { category: '散热冷却', detail: '【Vertiv FY指引大幅上修】营收$13.8-14.2B(前值$13.5-14.0B)/有机+30-32%/EPS $6.65-6.75(前值$6.30-6.40)/FCF $2.4-2.6B；股价-17.26%(YTD仍+66%/12月+89%)；Americas +29%/APAC +29%/EMEA +2%回正', priceChange: 'FY $6.70' },
      { category: '散热冷却', detail: '【Vertiv ThermoKey+Strategic Thermal Labs收购完成-7/29】扩展至直液冷+冷板产品线；进一步强化端到端液冷组合', priceChange: '收购完成' },
      { category: '散热冷却', detail: '【LG 600kW CDU获NVIDIA AI Factory认证-Chosun 7/27】韩国首家/全球少数通过100+项技术验证；±0.25°C精度DTC直液冷；上半年AIDC冷却订单60亿韩元，目标全年万亿韩元；1MW/2.5MW/4MW认证陆续申请', priceChange: 'NV认证' },
      { category: '散热冷却', detail: '【Otech Carrier CDU 65LL过NVIDIA Marketplace-asiae 7/27】韩国Otech Carrier CDU 65LL通过NVIDIA Marketplace认证，年内量产就绪', priceChange: '新品认证' },
      { category: '散热冷却', detail: '【高澜股份规模化CDU 0.5-1.1MW-财闻网 7/30】国内液冷厂商高澜股份实现CDU产品0.5-1.1MW规模化量产覆盖', priceChange: '0.5-1.1MW' },
      { category: '电力系统', detail: '【碳酸锂LC2609 7/31跌至139,780元/吨新低-CCMN 7/31】-3.44%单日/-2.9%周；13万关口成关键支撑位；周振幅剧烈151,500→144,280(周-3.9%)；最高154,800/最低136,800(cngold 7/28)', priceChange: '139,780/-2.9%' },
      { category: '电力系统', detail: '【Mysteel现货7/28】优质电池级143,200-148,100(-900)；电池级141,500-148,100(-900)；工业级138,500-145,100(-900)；LC2609 7/30收141,060元/吨(-3.75%，Sina 7/31)', priceChange: '-900元' },
      { category: '电力系统', detail: '【美国7/30签署行政令】限制含锂战略矿产废料出口；【钠离子电池2026规模化落地元年】分流低端锂盐需求；供给宽松+储能钠电分流+美国出口限制令三重复杂化', priceChange: '出口限制' },
      { category: '电力系统', detail: '【GE Vernova燃机backlog 116GW-EnergyReader 7/28】季增16GW=+16%；总backlog $176B(季增$13B，Tradingnews 7/31)；2031年订单50%已预售by年底；管理层目标125GW by 2026末(从110GW上修)', priceChange: '116GW' },
      { category: '电力系统', detail: '【GE Vernova FCF 2026指引升至$11.5-12.5B】前值$6.5-7.5B；三季度将实现20GW年出货节奏，2028达24GW，2030目标30GW；stock -9%尽管数据亮眼', priceChange: 'FCF $12B' },
      { category: '网络设备', detail: '【中际旭创港股上市首日破发-凤凰 7/30】03308.HK 7/30挂牌港交所主板；发行价HK$980(低于HK$1,010上限)；开盘HK$971(-0.92%)/盘中最低HK$880-901.5(-8~10%)/收HK$960(-2.04%)；A股同步暴跌-9.15%到-15.77%区间；单日A股成交额近600亿创历史新高', priceChange: 'HK$960/-2.04%' },
      { category: '网络设备', detail: '【募资规模HK$534亿=近7年港股最大IPO-中新社 7/30】自2019阿里巴巴以来最大IPO；全额行使超额配售权可达HK$614亿；总市值1.12万亿港元；港交所同步推出股票期权+纳入可卖空名单', priceChange: 'HK$534亿' },
      { category: '网络设备', detail: '【33家基石浮亏-Sina 7/30】Temasek/HHLR/BlackRock/JPM/Alibaba/Tencent等基石开盘即浮亏；中际旭创40-80亿A股回购提振(7/28 Futunn)：董事长刘圣提议40-80亿元回购A股用于股权激励；订单排到2027年', priceChange: '基石亏' },
      { category: '网络设备', detail: '【新易盛H1净利70-80亿-香港商报 7/28】+77.56~102.93% YoY；Q2单季42.2-52.2亿(+78.1-102.3% YoY)/环比+51.8-87.77%；800G主力/1.6T放量提速/首推LPO规模量产；明确澄清"1.6T订单下修"传言', priceChange: '+77~103%' },
      { category: '网络设备', detail: '【天孚通信H1归母11.24-13.04亿-Sina 7/29】+25-45% YoY；Q2单季环比放量', priceChange: '+25-45%' },
      { category: '网络设备', detail: '【Coherent 800G ZR/ZR+价格-ascentoptics 7/30】800G ZR $8,000-$16,000+/ZR+ $12,000-$20,000+；400G ZR QSFP-DD $4,000-$6,500', priceChange: '$8-16K' },
      { category: '网络设备', detail: '【Fibermall 1.6T预期-7/29】早期1.6T模块$1,300-1,500/2年内跌至$1,100左右(体量与良率驱动)；1.6T仍处高溢价上升期', priceChange: '$1,300-1,500' },
      { category: '网络设备', detail: '【AMD MI455X token吞吐是MI355X的34倍-Globe & Mail 7/31】MI350P每美元token是竞品4.2倍；AI推理经济性显著提升', priceChange: '34×吞吐' }
    ]
  },
  {
    version: 'v3.5',
    date: '2026-07-27',
    highlights: [
      'AMD Advancing AI 2026收官(7/22-23 Moscone SF)：Helios AI机架进入full production/$5.0-5.5M单柜/Q3 2026启动出货；Anthropic 2GW MI450部署+$50亿AMD股权投资；OpenAI Helios Q4 2026;MI455X 432GB HBM4/19.6TB/s',
      '华为Atlas 950 SuperPoD获WAIC 2026 SAIL最高奖：1 EFLOPS FP8/2 EFLOPS FP4/256TB内存/3μs RTT/4,096根800G光缆/6.7×NVL144宣称/零美国部件；Ascend 950 8月云端上线',
      'B300价格再下探：Verda $7.50/hr on-demand创新低(-4%周)；Cloud GPUs GB300 $13.31/B300 $12.38/AMD MI355X $5.60/hr(2 providers)；NVIDIA Vera Rubin NVL72已启动交付Google/Azure/Oracle/CoreWeave',
      '碳酸锂5个月低点：LC2609 7/22暴跌-5.61%至143,900；盘中低点136,800(自5/13 20万高点累计-30%)；Mysteel现货142,500-146,100；14.5万元或成新平衡；2027过剩预期',
      'Vertiv Q2财报7/29(EPS共识$1.43)+CoolChip CDU 2300发布(2.3MW)；Schneider Motivair MCDU-55(2.7MW)+Accelsius NeuCool MR250+LG 600kW CDU全部登场；CDU市场2034 $39亿',
      '中际旭创HK IPO 7/30挂牌(HK$550亿融资)；800G $350-430/只+1.6T $850-1,050/只；Jefferies预测2026光模块翻倍/1.6T需求缺口30%；新易盛H1净利70-80亿(+77~103% YoY)；NPO超节点腾讯Q4 2026部署'
    ]
  },
  {
    date: '2026-07-20',
    version: 'v3.4',
    author: '自动调研(周报)',
    summary: '第19次周度调研更新：【Atlas 950 SuperPoD WAIC 2026首发-7/17】华为在上海WAIC正式展示Atlas 950 SuperPoD，8,192颗Ascend芯片，声称对比NVIDIA GB300 NVL144达到6.7×性能(系统级)；习近平WAIC主题演讲释放"无NVIDIA"信号；【Goldman Sachs中际旭创目标翻倍-7/17】中际旭创12月目标RMB 1,187→2,581(+117%)；2026-28净利上调65%/108%/119%；预测2026 800G 3,418万只，1.6T 2,550万只(2027主流)；SiPh渗透率2026 60%/80%/100%；【Jefferies-7/16】2027光模块市场三倍增长；2026 1.6T存在30%供给缺口；【BofA-7/14】2026 800G需求50-60M、1.6T 30M；【Google 33,000台液冷CDU大单-7/16 新浪】Google Cloud订单落地，A股核心供应链英维克/申菱环境等迎爆发拐点，需求翻倍超预期；【Vertiv回撤+双券商行动-7/16】VRT收$288.79-1.81%回撤自$305/自52周高$379.93-24%；Baird初始$370 Buy/RBC下调$435→$418；Q2财报7/29；【Lumentum深度回撤-7/17】LITE收$732.82，距52周高$1,085.68回撤-32%(7/7最低-33.63%)；YTD +98.8%仍然强劲；Q4 FY26指引$960M-$1.01B首破十亿；【锂价3月低点+基本面转弱-7/20】生意社基准电池级151,000元/吨(月初156,000/-3.21%)；周内Yicai iFind现货14.89万元/吨(148,900)/单日-2.62%/周累计-6%；LC2609收151,660/151,600震荡；Ningde江夏窝锂矿获安全许可，长期停产结束；澳矿商恢复；Trading Economics跌至4个月低点；【AMD Advancing AI 7/22-23 Moscone SF明日开幕】MI455X vs NVIDIA Vera Rubin对决；分析师保持谨慎(TechTimes 7/13)；【AAOI Pearland Texas扩产-7/14】400,000平方英尺产能扩张800G+1.6T；【B300价格创6个月低-7/19】gpufinder $6.94/hr on-demand低点，spot低$4.23',
    changes: [
      { category: '计算设备', detail: '【Huawei Atlas 950 SuperPoD WAIC 2026正式首发-7/17】8,192颗Ascend芯片，系统级6.7×性能倍数超过NVIDIA GB300 NVL144；习近平WAIC主题演讲发布"无NVIDIA"信号', priceChange: '6.7×NVL144' },
      { category: '计算设备', detail: '【Q4 2026 GA目标-Techdailycare 7/17】"演示但未完全出货"：每颗Ascend 950DT约1 PFLOPS FP8 vs Nvidia GB300 ~5 PFLOPS FP8；系统级6.7×比原始芯片数更诚实', priceChange: 'Q4 GA' },
      { category: '计算设备', detail: '【AMD Q1 2026数据中心营收$5.8B-DCD 7/14】AMD Q1 2026数据中心业务营收$5.8B创单季新高；预计到2030年服务器CPU年收入达$12B', priceChange: '$5.8B/Q1' },
      { category: '计算设备', detail: '【AMD Advancing AI明日开幕-7/22-23】Moscone SF主题演讲，MI455X vs NVIDIA Vera Rubin对决；Zen 6发布前分析师保持谨慎(共识$516目标)(TechTimes 7/13)', priceChange: '警戒墙' },
      { category: '计算设备', detail: '【B300价格创6个月低-7/19 gpufinder】on-demand低$6.94/hr(Runpod)/spot低$4.30(Nebius)/spot中位$4.23(39%低于on-demand)；6月区间$6.94-$7.39/hr(月度-6%)', priceChange: '$6.94/-48%' },
      { category: '计算设备', detail: '【GB300 6个月内价格再降】gridstackhub 7/15：Corvex $4.48/hr、Lambda $4.95、Shadeform $4.95、TensorDock $4.99、Vast.ai $5.49、Vultr $5.49；AIMultiple 7/16：B300 median $8.23、B200 median $6.25', priceChange: '$4.48低点' },
      { category: '计算设备', detail: '【硬件价格更新-GPUSmith/Neysa 7/14-15】单颗B300 $45-50K/单颗B200 $35-40K/H100 $18-22K；DGX B300(8卡) $300-500K；GB300 NVL72满机柜~$3-4M；每PFLOP B200 $7.5K/B300 $9.5K(标准FP8 B200胜)', priceChange: '$45-50K' },
      { category: '散热冷却', detail: '【谷歌33,000台液冷CDU大单-7/16 新浪】Google Cloud 33,000台液冷CDU订单落地，需求翻倍超预期；A股核心供应链英维克/申菱环境等迎爆发拐点', priceChange: '33,000台' },
      { category: '散热冷却', detail: '【Vertiv回撤+双券商行动-7/16】VRT 7/17收$288.79-1.81%；从7/16 $305开盘下探；较52周高$379.93回撤-24%；市值$110.93B', priceChange: '-24%回撤' },
      { category: '散热冷却', detail: '【Baird初始$370 Buy-7/16】Robert W. Baird以Outperform+目标$370(41.6%上行)启动VRT覆盖，7/29 Q2财报catalyst', priceChange: '$370启动' },
      { category: '散热冷却', detail: '【RBC下调$435→$418-7/16 MarketBeat】RBC Capital将VRT目标价$435→$418(仍Outperform，隐含40.8%上行)；共识MarketBeat均$342.73/StockAnalysis $380/tipranks $392.38', priceChange: '$418(-$17)' },
      { category: '散热冷却', detail: '【VRT Q2正式指引】Q2 EPS $1.370-$1.430、营收$3.25-3.45B；FY EPS $6.30-6.40(共识$6.38)；Simply Wall St：GAAP EPS $1.22/GAAP净利$477.2M；Ohio $5,000万扩建液冷+冷冻水能力+45%', priceChange: '$1.43 Q2' },
      { category: '散热冷却', detail: '【Supermicro DCBBS液冷+10款RDHx up to 120kW-7/15】Supermicro发布10款后门热交换器(RDHx)最高120kW；扩展端到端液冷组合', priceChange: '120kW' },
      { category: '散热冷却', detail: '【Vertiv新推液冷服务-7/14 DCD】面向AI+高密算力发布液冷服务组合', priceChange: '新品' },
      { category: '散热冷却', detail: '【DCX三款CDU 600kW-2.6MW-7/14 DCD】新CDU容量600kW-2.6MW；【Nidec 300kW in-rack CDU-7/14】300kW in-rack CDU研发完成；【Tecnair新CDU-7/15 DCNN】', priceChange: '3新品' },
      { category: '散热冷却', detail: '【Accelsius 300MW订单-7/14 DCD】加拿大新运营商声称300MW液冷客户，双相直接芯片浸没', priceChange: '300MW' },
      { category: '电力系统', detail: '【锂价3月低点-7/20】生意社基准电池级碳酸锂151,000元/吨(月初156,000/-3.21%)；Yicai iFind 7/16现货14.89万元/吨(148,900)/单日-2.62%/周累计-6%', priceChange: '151,000' },
      { category: '电力系统', detail: '【期货LC2609周-10.18%】LC2609周跌-10.18%至151,600元/吨；电碳现货周-5,000至155,000元/吨；氢氧化锂-13,000价差；7/15收149,240(-2.57%)测试底部；7/16反弹0.07%至151,660', priceChange: '-10.18%' },
      { category: '电力系统', detail: '【S&P Global Platts 7/10】电池级碳酸锂DDP中国151,000元/吨($22,209)/-15,000元周环比；电池级碳酸锂CIF $19,200/氢氧化锂CIF $17,700/吨', priceChange: '$22,209' },
      { category: '电力系统', detail: '【SMM美元7/17】Battery-Grade Index $19,741.2/吨；电池级中位$19,813.41；较上周持续下跌', priceChange: '<$20K' },
      { category: '电力系统', detail: '【Ningde江夏窝锂矿复产-Trading Economics 7/16】宁德时代江夏窝锂矿获安全许可证结束长期停产；澳矿商恢复运营；供应恢复推动锂价至4个月低点', priceChange: '复产利空' },
      { category: '电力系统', detail: '【SunSirs 7/14】电池级碳酸锂基准153,000元/吨，较月初161,000元/吨-5%', priceChange: '-5%' },
      { category: '电力系统', detail: '【GE Vernova Q2财报7/22】GEV Q2 2026 earnings将于7/22公布；市场关注AI电力订单执行进度', priceChange: 'Q2 7/22' },
      { category: '网络设备', detail: '【Goldman Sachs中际旭创目标翻倍-7/17 moomoo】12月目标RMB 1,187→**2,581**(+117%)，Buy评级；2026-28净利上调65%/108%/119%；ROE 44%→52-61%；CROCI最高137.5%', priceChange: '2,581 RMB' },
      { category: '网络设备', detail: '【Goldman Sachs出货预测-7/17】2026 800G出货3,418万只/2027 4,499万只；2026 1.6T 2,550万只/2027 4,572万只(1.6T市场主流)；SiPh渗透2026 800G/1.6T/3.2T 60%/80%/100%；行业SiPh营收占比2025 28%→2028 62%', priceChange: '2,550万只' },
      { category: '网络设备', detail: '【Jefferies-7/16 Nashnova】2027光模块市场三倍增长；2026 1.6T存在30%供给缺口；200G EML由Lumentum+Broadcom+Sumitomo Electric掌控，中国无成熟供应商', priceChange: '30%缺口' },
      { category: '网络设备', detail: '【BofA-7/14】2026 800G需求50-60M只、1.6T需求30M只；行业预计满足800G 70-80%、1.6T 50-60%；Meta 800G单元>10M；Meta对CPO+LPO都在测试', priceChange: 'Meta 10M' },
      { category: '网络设备', detail: '【200G EML缺货加剧】缺口20-60%、交期排到2027年底、还在涨价——1.6T BOM最硬瓶颈；800G BOM $400/单只、1.6T $1,300-1,500(长期收敛$800)；SiPh渗透800G 40-45%→1.6T短距60%', priceChange: '20-60%缺口' },
      { category: '网络设备', detail: '【AAOI Pearland Texas扩产-7/14 Fidelity】400,000平方英尺产能扩张800G+1.6T光模块；AAOI 7/14涨6%到$119.10；LITE 7/14涨5%到$806.81；COHR 7/14涨1%到$310.11', priceChange: '400K sq ft' },
      { category: '网络设备', detail: '【Lumentum深度回撤-7/17】LITE收$732.82，距52周高$1,085.68回撤-32%(7/7最低-33.63%)；YTD +98.8%(自$368.59开)；OCS backlog>$400M；CPO+OCS multi-hundred-million订单2027H1交付；Q4 FY26指引$960M-$1.01B(首破十亿)', priceChange: '-32%回撤' },
      { category: '网络设备', detail: '【LITE Q4 FY26业绩8月11日】35-36%非GAAP运营利润率；EPS估$2.89；MarketBeat共识目标$1,012.67；TIKR长期目标$3,035(4.9年年化43%IRR)', priceChange: '8/11业绩' },
      { category: '网络设备', detail: '【Zacks Lumentum-7/19】1年涨700%；1.6T量产+CPO+OCS+多年百亿美元协议；forward P/S 10.1×溢价；Zacks Rank #1 Strong Buy', priceChange: '+700%1年' },
      { category: '网络设备', detail: '【新易盛-7/17 新浪】1.6T光模块订单情况良好，客户需求持续扩产；供应链体系整体保持稳定', priceChange: '扩产中' },
      { category: '网络设备', detail: '【UMC-Silith矽光子首批送样-7/14 TechNews】首批矽光子晶圆量产送样：200G→400G；Nvidia Spectrum-X为首款CPO交换器，2026年矽光子商转元年', priceChange: '首送样' }
    ]
  },
  {
    date: '2026-07-13',
    version: 'v3.3',
    author: '自动调研(周报)',
    summary: '第18次周度调研更新：【锂价单日-5.39%崩盘-7/9】LC2609主力从164,220开崩至153,020收(-5,420元/-5.39%)；SunSirs 7/10电池级碳酸锂-4.29%登顶跌幅榜；SMM美元价$20,143.05(-$420.12)；空头两大逻辑：矿端投产+下游备货充足；【华为发起首个NPO多源协议-7/10】华为召集光互连大动作，NPO规模商用有望加速；Atlas 950 SuperPoD WAIC 2026 Shanghai首发；华为宣布Ascend AI三款新芯片年度发布节奏声称跑赢NVIDIA NVL144；【华为2026Q4进军韩国AI芯片市场】Ascend 950PR/Atlas 950挑战NVIDIA中国以外市场；【AMD双升级】Goldman Sachs 7/10目标$640(+42%)、Stifel 7/12目标$635(+41%)；Q2营收指引$11.2B/毛利率56%；【Lumentum LITE +12.33%到$794.30-7/9】Meta泄露双倍算力至14GW+Meta自研AI芯片9月量产触发爆发；LITE YTD +115%；【CPO延迟1年传闻】AAOI/COHR受影响，AAOI 7/10-6%重挫；【DeepSeek自研AI芯片-7/7 Reuters】进入芯片设计对抗出口管制；【Vertiv周内18%震荡】$287.11-$338.88；7/10收$318.66/周+6.1%/YTD+96.82%；券商目标价$260-$435大分歧；【NVIDIA一年买500万只光模块】腾讯7/11：1.6T ASP $2,000-3,000、800G ASP $800-1,200；【STMicroelectronics photonics chip高产量量产-7/9】',
    changes: [
      { category: '计算设备', detail: '【AMD Goldman Sachs目标$640-7/10】Goldman Sachs 7/10大幅上调AMD目标价至$640(自$450+42%)', priceChange: '$640' },
      { category: '计算设备', detail: '【AMD Stifel目标$635-7/12】Stifel上调AMD目标至$635(自$450+41%)、Buy评级', priceChange: '$635' },
      { category: '计算设备', detail: '【AMD Q2营收指引$11.2B】AMD管理层Q2指引~$11.2B、毛利率~56%(逐季爬升)；服务器CPU增速>70% YoY；股价€489.00收盘距52周高点仅-4.44%', priceChange: '$11.2B' },
      { category: '计算设备', detail: '【DeepSeek自研AI芯片-7/7 Reuters】DeepSeek进入芯片设计业务对抗出口管制，早期阶段几年后出货', priceChange: '新赛道' },
      { category: '计算设备', detail: '【华为2026Q4进军韩国-7/7】华为计划2026Q4进军韩国AI芯片市场；Ascend 950PR/Atlas 950挑战NVIDIA中国以外市场首次', priceChange: '出海Q4' },
      { category: '计算设备', detail: '【Atlas 950 SuperPoD WAIC 2026-7/7】Atlas 950 SuperPoD 7/26上海WAIC首发展示；8,192颗加速器规模超节点，UB-Mesh光互联', priceChange: 'WAIC首发' },
      { category: '计算设备', detail: '【Huawei年度cadence+超节点-7/9 DCD】华为宣布Ascend AI三款新芯片年度发布节奏；亮相超节点声称跑赢NVIDIA NVL144', priceChange: 'cadence' },
      { category: '计算设备', detail: '【Cloud GPUs 7/11】GB300 $13.31/hr(2 providers)；B300 $12.37/hr(4 providers)；Deep Infra HGX B300 $4.20/hr最低；Verda GB300 $8.62/hr', priceChange: '$4.20最低' },
      { category: '散热冷却', detail: '【VRT周内18%震荡-7/10】周内低$287.11-高$338.88、18%区间；7/10收$318.66/周+6.1%/YTD+96.82%/12月+164.13%；Q2财报7/29预期EPS $1.17', priceChange: '18%区间' },
      { category: '散热冷却', detail: '【VRT券商目标价大分歧】Jefferies砍$260、Barclays $412、RBC $435、Bernstein $416、eToro $395.36/共识$342.24', priceChange: '$260-$435' },
      { category: '散热冷却', detail: '【VRT 50x P/E临近-7/10】股价50.2×2026 adj EPS中值($6.35)；2026营收指引29-31%有机增长；50x earnings level in sight', priceChange: '50.2×' },
      { category: '散热冷却', detail: '【GRC新CDU-7/9 DCD】GRC发布Edge Deployment CDU与冷却机柜', priceChange: '新品' },
      { category: '散热冷却', detail: '【Politico 7/9】Cooler data centers debate加速；【夏季高温压力】US东部电网因夏季热浪迫使DC降载-7/7 Slicast', priceChange: '政策议题' },
      { category: '电力系统', detail: '【锂价单日-5.39%崩盘-7/9】LC2609主力从164,220开崩至153,020收(-5,420元)；日内最大跌幅接近6%；持仓+3,477至416,044手', priceChange: '-5.39%' },
      { category: '电力系统', detail: '【SunSirs 7/10最大跌幅榜首】碳酸锂(电池级)-4.29%、氢氧化锂(工业级)-4.23%、氢氧化锂(电池级)-3.90%三足登顶跌幅榜', priceChange: '-4.29%' },
      { category: '电力系统', detail: '【Mysteel现货 7/10晚盘】电池级150,700-158,200元/吨(中位154,450/-3,150)、工业级147,200-154,900(151,050/-3,150)、优质电池152,100-158,200', priceChange: '154,450' },
      { category: '电力系统', detail: '【SMM美元7/10】Battery-Grade Index $20,153.97/吨(-$391.30)、电池级中位$20,143.05(-$420.12)、工业级中位$19,623.23(-$420.99)', priceChange: '<$20.14K' },
      { category: '电力系统', detail: '【生意社 7/10基准】电池级碳酸锂156,000元/吨、工业级154,000元/吨；Trading Economics 7/10锂价155,000(-2.21%单日/-6.91%月/+143.14%年)', priceChange: '156,000' },
      { category: '电力系统', detail: '【空头两大逻辑-新浪7/10】海内外锂矿集中投产+7月底锂矿到港远期供给宽松+下游备货充足缺买盘；供需重回过剩', priceChange: '过剩预期' },
      { category: '电力系统', detail: '【S&P Global Platts 7/9】DDP中国电池级碳酸锂157,000元/吨($23,102)日周同跌1.9%', priceChange: '$23,102' },
      { category: '电力系统', detail: '【GE Vernova股价$1,091.57-7/10】GEV 7/10 +1.35%到$1,091.57；连续走高冲高AI电力订单持续引爆；下周7/22 Q2财报', priceChange: '$1,091.57' },
      { category: '网络设备', detail: '【华为发起首个NPO多源协议-7/10 新浪】华为召集光互连大动作发起首个多源协议NPO规模商用有望加速；经济日报7/13：华为揪团进击近封装光学', priceChange: '新协议' },
      { category: '网络设备', detail: '【Lumentum LITE +12.33%到$794.30-7/9】Meta泄露备忘录双倍算力至14GW+Meta自研AI芯片9月量产触发爆发；LITE YTD +115%', priceChange: '+12.33%' },
      { category: '网络设备', detail: '【CPO延迟1年传闻-7/10 X/pequityresearch】CPO落地或延迟一年，AAOI/COHR受影响；AAOI 7/10-6%重挫收$119.83(12月+324.5%)', priceChange: '延迟1年' },
      { category: '网络设备', detail: '【NVIDIA一年500万只光模块-7/11 腾讯】2026全球1.6T需求860-2,000万只，英伟达一家超500万占八成；800G还要出3,700万只(+85% Citi)', priceChange: '500万只' },
      { category: '网络设备', detail: '【1.6T现货口径 7/11】800G ASP $800-1,200/单只、1.6T ASP $2,000-3,000/单只', priceChange: '$2,000-3,000' },
      { category: '网络设备', detail: '【CPO落地推迟对光模块影响-7/11 163】2026 800G+1.6T合计占整体光模块市场约64%，3.2T 2028年起量迭代路径无断层', priceChange: '64%占比' },
      { category: '网络设备', detail: '【STMicroelectronics photonics chip量产-7/9 DCD】ST进入高产量photonics chip量产阶段', priceChange: '量产阶段' },
      { category: '网络设备', detail: '【硅光/LPO/LRO/NPO/CPO报告-7/9 GlobeNewswire】1.6T在2026商业化，3.2T 2027年送样，6.4T 2030年代早期；量子光子计算2025吸引$2.1B私募资本', priceChange: '$2.1B' },
      { category: '网络设备', detail: '【GIGALIGHT两项新AI光子专利-7/7】+ Lumentum流动性强化(Zacks 7/10)+ Coherent photonics AI(LinkedIn 7/8)', priceChange: '专利+2' }
    ]
  },
  {
    date: '2026-07-06',
    version: 'v3.2',
    author: '自动调研(周报)',
    summary: '第17次周度调研更新：【锂价V型反弹】6/29期货LC2609+8.36%至163,360元/吨；7/3收168,800(+2.4%)；生意社基准7/1 156,000元/吨(5日+7.33%)；SMM美元价7/3反弹至$21,471.04(+$360.63)；碳酸锂期货7/3正式引入境外交易者，中国定价开启全球化；【AMD Cantor目标$700】Cantor Fitzgerald 6/30升级AMD目标价至$700(+90%上行)；7月首周股价暴跌-回调6%；Advancing AI 7/22-23 Moscone SF确认对决NVIDIA Vera Rubin；【NVIDIA GB300+Anthropic Claude-6/29】Azure Foundry上跑Anthropic Claude超普通客户规模；【Ecolab完成CoolIT收购-7/2】扩展AI冷却平台目标2030年$40亿；【GE Vernova CNBC目标$1,300】Russell Top 50入榜+7.3%涨(6/30)；股价$1,107.98；【AI光通信7/2再度重挫】AAOI单日-17%、COHR/LITE -10%；【Marvell Ara T 1.6T DSP+TRO】首款1.6T PAM4 DSP with TRO 3nm；【白皮书1500万只/45亿$】2026全球1.6T光模块出货1500万只、市场45亿美元；【NN Inc获NVIDIA液冷订单】Voltage Park更名Lightning AI(B200/B300仅contract only)',
    changes: [
      { category: '计算设备', detail: '【Anthropic Claude跑GB300-6/29】Nvidia官宣Anthropic Claude在Microsoft Azure Foundry部署NVIDIA GB300 systems，合作规模超普通客户，锁定下一AI收入层级', priceChange: 'GB300落地' },
      { category: '计算设备', detail: '【AMD Cantor目标$700-6/30】Cantor Fitzgerald升级AMD目标价至$700(近90%上行空间)，最高目标价AMD分析师给出', priceChange: '$700目标' },
      { category: '计算设备', detail: '【AMD暴涨触及历史新高后回调】7/2跌5.73%至$464.60、7/5跌6%；Wild趋势：AMD forward earnings近NVIDIA 3倍(市场分歧极大)', priceChange: '$464.60' },
      { category: '计算设备', detail: '【AMD Advancing AI 7/22-23 Moscone SF确认】主题演讲7/23 Lisa Su亲讲，MI455X vs NVIDIA Vera Rubin对决；Oracle Q3 2026部署50,000卡MI450首发', priceChange: '主题7/23' },
      { category: '计算设备', detail: '【Voltage Park更名Lightning AI-7/5】B200/B300仅contract only；GB200/GB300联系销售；Spheron B200 SXM6 $9.30/hr、spot $5.34/hr；H100 SXM $1.99/hr无InfiniBand', priceChange: '$9.30/hr' },
      { category: '计算设备', detail: '【Bit Origin买$11M B300 stack-6/30】Bit Origin收购$1100万NVIDIA Blackwell B300 AI Stack(马来西亚部署)', priceChange: '$11M订单' },
      { category: '计算设备', detail: '【AMD Versal Premium Gen 2 MoP SoCs-7/1】AMD扩展AI版图新的Versal Premium Gen 2 MoP SoCs', priceChange: '新品发布' },
      { category: '散热冷却', detail: '【Ecolab完成CoolIT收购-7/2】Ecolab关闭CoolIT交易，扩展AI冷却平台，目标2030年高科技业务$40亿；DC液冷市场新玩家', priceChange: '收购完成' },
      { category: '散热冷却', detail: '【Vertiv Bernstein $416重申-7/1】Bernstein Varun Govindaraj维持Buy评级+$416目标；ABR 1.46/共识$326.39；DCF估值$378(+17.7%上行)', priceChange: '$416' },
      { category: '散热冷却', detail: '【VRT一周波动-7/2】7/1一度冲$328.44(+7%)但成交量仅60日均量33百分位；7/2跌至$300.53(-3.51%单日/-1.13% 5日/-7.22%月)；市值$115.44B', priceChange: '$300.53' },
      { category: '散热冷却', detail: '【VRT 2026指引】营收$135亿(有机+28-31%)、EPS $6.20+43%YoY；EPS Zacks Consensus $6.36/+51.43% vs 2025', priceChange: '+43% EPS' },
      { category: '散热冷却', detail: '【NN Inc获NVIDIA液冷订单-6/29】NN Inc宣布获NVIDIA数据中心液冷产品重大新订单', priceChange: '新订单' },
      { category: '散热冷却', detail: '【Trane HSWE磁悬浮冷水机-7/2】Trane发布HSWE Magnetic Bearing Chiller推进亚太DC冷却', priceChange: '新产品' },
      { category: '散热冷却', detail: '【韩国科技/能源巨头进军DC冷却-7/2】Pulse报道韩国科技+能源巨头目标DC冷却市场', priceChange: '新玩家' },
      { category: '散热冷却', detail: '【CDU水泵市场】MarketsandMarkets 6/29：CDU水泵市场2032年达$18.4亿；Precedence CAGR 18%(2026-2033)', priceChange: '$18.4亿/2032' },
      { category: '散热冷却', detail: '【D2C冷却液市场2032达$13.0亿】CAGR 38.6%；液对空CDU全球市场CAGR 18.0%(2026-2032)', priceChange: 'CAGR 38.6%' },
      { category: '电力系统', detail: '【锂价V型反弹-6/29】LC2609合约+8.36%至163,360元/吨；日内减仓12,132手；SMM现货基差-470元/吨', priceChange: '+8.36%' },
      { category: '电力系统', detail: '【生意社 7/1基准】电池级碳酸锂156,000元/吨(5日+7.33%)、工业级153,000元/吨；Gate.com 6/30电池级+6,150至155,950(单日+4%)', priceChange: '156,000' },
      { category: '电力系统', detail: '【期货7/3】LC2609收168,800元/吨(+2.4%)；SMM美元价7/3反弹至Battery-Grade Index $21,471.04/吨(+$360.63)、电池级中位$21,499.4/+$373', priceChange: '+$360.63' },
      { category: '电力系统', detail: '【里程碑7/3】广期所碳酸锂期货及期权正式引入境外交易者，中国定价开启全球化；2026以来现货涨超67%、期货涨超62%', priceChange: '境外开放' },
      { category: '电力系统', detail: '【Reuters 7/1】现货已到部分储能项目盈亏平衡点，价格3倍去年中期；电池金属复苏遇EV市场停停走走', priceChange: '3×基准' },
      { category: '电力系统', detail: '【GE Vernova CNBC目标$1,300-7/3】Club给买入等级+目标$1,300(隐含+14%上行)；GEV不只燃气轮机赢AI热潮；Q4 India结果Q4 Results 2026', priceChange: '$1,300' },
      { category: '电力系统', detail: '【GEV Russell Top 50入榜+7.3%-7/2】Yahoo：GEV因入选Russell Top 50和AI电力订单飙升7.3%；股价$1,107.98(6/30)/+5.47/+0.50%', priceChange: '+7.3%' },
      { category: '网络设备', detail: '【AI光通信7/2再度重挫】AAOI单日-17%、COHR/LITE跌10%；Corning Glass Bridge引爆CPO卖压(6/30 PTT)；估值再度重置', priceChange: '-10~-17%' },
      { category: '网络设备', detail: '【AAOI 6/30反弹+7-10%】盘中$149.27(+10%)/$145.22(+7.02%) - 低档KD金交叉；连续回档后强反弹', priceChange: '+7-10%' },
      { category: '网络设备', detail: '【Marvell Ara T™ 1.6T DSP+TRO-COMPUTEX 2026】Marvell推首款1.6T+800G相干DSP(2nm)+首款1.6T PAM4 DSP(3nm)含TRO(Transmit Retimed Optics)节能省面积', priceChange: '新旗舰' },
      { category: '网络设备', detail: '【1.6T白皮书1500万只/45亿$-6/30 新浪】2026全球1.6T光模块出货1500万只、市场45亿美元；2027年3.2T规模商用；万卡智算中心必须标配800G/1.6T；2026全球光模块市场突破3950亿元', priceChange: '1500万只' },
      { category: '网络设备', detail: '【SuperX AI光通信合资-7/1】SuperX与TFC合建全球AI光通信核心生态', priceChange: '新合资' },
      { category: '网络设备', detail: '【CPO/NPO/OIO技术路线未收敛-6/30】机构报告：封装级光连接价值空间打开，但技术路线未完全收敛，2026英伟芯NPO-CPO-OIO全阶梯技术适配', priceChange: '技术观察' }
    ]
  },
  {
    date: '2026-06-29',
    version: 'v3.1',
    author: '自动调研(周报)',
    summary: '第16次周度调研更新：【锂价MTD-13.48%崩盘】生意社6/26电池级154,000元/吨(月初178,000)，SMM美元价跌破$20K关口至$19,802.46/吨；矿端复产传闻引发抛压；【B300中国黑市再翻倍$1.1M】FT 6/24报道DGX B300黑市6个月从400万人民币飙至800万+(美国零售$400K的2.7倍)；【AWS 7/1全面涨价20%】P6-B300 $14.04/hr，P6-B200 $12.355/hr；【AMD MI400全系发布+Helios】Oracle部署5万颗MI450集群、OpenAI 6GW合作；【Vertiv 6/26单日-6.59%】$357.93顶峰→$304.10单周-4.48%；AI股估值重评；Bernstein/$416目标和TD Cowen/$387依然看多；【AI光通信集体重挫】LITE 6/26 -9-10%、AAOI -15%；NV官方辟谣$920压价传闻；NPO指引上修至2500万颗；中际旭创1.6T出货75万→805万(+10×)；【GE Vernova燃气轮机3年涨300%】订单售罄至2029；微软买7台Texas DC；股价$1,090.74',
    changes: [
      { category: '计算设备', detail: '【FT-6/24】DGX B300服务器中国黑市6个月翻倍：从400万人民币→800万+(~$1.1M)；RTX 6000 Pro黑市达13万人民币；正常美零售$400K', priceChange: '~$1.1M' },
      { category: '计算设备', detail: '【AWS 7/1涨价20%-6/26】EC2 Capacity Block：P6-B300 $14.04/hr、P6-B200 $12.355/hr、P5 $5.191(US)、P5e $5.97、P5en $6.865(US)', priceChange: '+20%' },
      { category: '计算设备', detail: '【AMD MI400全系发布-6/24 DCD】MI455X旗舰+MI440X+MI430X，2H2026出货；Helios双宽机柜亮相，72×MI455X+EPYC Venice，3 EFLOPS/rack', priceChange: '3 EFLOPS' },
      { category: '计算设备', detail: '【Oracle部署5万颗MI450-6/24】Oracle宣布全球最大MI450 GPU集群；OpenAI 6GW合作，1GW 2026启动', priceChange: '50,000卡' },
      { category: '计算设备', detail: '【Reflection独享GB300-6/22】Reflection AI获NVIDIA GB300即刻独家访问权', priceChange: '独家' },
      { category: '计算设备', detail: '【B300云价中位下行】Cloud GPUs 6/27：median $7.92/hr(范围$5.44-$18)、B200 median $6.11；cloud-gpus.com 6/27 GB300 $13.31/hr，B300 $12.36/hr', priceChange: '$7.92中位' },
      { category: '散热冷却', detail: '【Vertiv单日-6.59%-6/26】VRT $357.93顶峰→$304.10，6/26单日-6.59%；周-4.48%、月-3.24%、年+138.55%；AI股估值重评', priceChange: '-6.59%日' },
      { category: '散热冷却', detail: '【但分析师持续看多】Bernstein 6/10首次覆盖Outperform/$416目标、TD Cowen $387、共识$326.39/Strong Buy', priceChange: '$416目标' },
      { category: '散热冷却', detail: '【Vertiv浸没式Pod-6/24 DCD】Vertiv正式发布Immersion Cooling Pod', priceChange: '新产品' },
      { category: '散热冷却', detail: '【全球浸没式生态扩张-6/24】UAE-XDS 1MW DC启动、韩国S-Oil+GST合作、Dataprana 30MW Texas、EticaAG机柜浸没式电池、Infinium浸没冷却液', priceChange: '+30MW' },
      { category: '散热冷却', detail: '【GRC新品-6/24】GRC发布边缘部署CDU+冷却机柜', priceChange: '新CDU' },
      { category: '电力系统', detail: '【碳酸锂MTD暴跌-13.48%-6/26 生意社】电池级基准154,000元/吨(月初178,000)；累计13.48%跌幅', priceChange: '-13.48%MTD' },
      { category: '电力系统', detail: '【Mysteel 6/26】电池级146,000-156,100元/吨(日跌4,200)、工业级142,500-152,800(同跌4,200)', priceChange: '-4,200日' },
      { category: '电力系统', detail: '【SMM美元价跌破$20K-6/26】Battery-Grade $19,811.68/吨(-$514.97)、电池级中位$19,802.46/吨(-$555.96)、工业级中位$19,283.05(-$556.68)', priceChange: '<$20K' },
      { category: '电力系统', detail: '【期货LC2609 6/29】145,000-152,880人民币/吨(开149,000)；广期所主力跌2.38%结算161,740；矿端复产引发抛压', priceChange: '150,220' },
      { category: '电力系统', detail: '【GE Vernova燃气轮机3年涨300%-6/24】订单售罄至2029；微软买7台Texas DC；股价$1,090.74(6/25)；越南2台9HA.02订单；HA全球运营4M小时', priceChange: '+300%/3年' },
      { category: '电力系统', detail: '【乌克兰DTEK合作-6/26】GE Vernova与乌克兰DTEK签MoU推进重大燃气电厂项目', priceChange: '新订单' },
      { category: '网络设备', detail: '【AI光通信集体重挫-6/26】LITE 6/26单日-9-10%、AAOI周-15%、COHR下跌；触发：NV压价传闻+1.6T下修+硅光新进入者估值重塑', priceChange: '-9~-15%' },
      { category: '网络设备', detail: '【NVIDIA官方辟谣压价-6/23】英伟达IR正式辟谣"$920压价"传闻：无统一限价；行业正常降价2026 800G约-10%、1.6T约-10%+', priceChange: '辟谣' },
      { category: '网络设备', detail: '【准确ASP 6/26 BCC】1.6T光模块单价~$700、800G单价~$350(海外CSP上修需求集中在800G)', priceChange: '$700/$350' },
      { category: '网络设备', detail: '【NPO上修25M-6/26】NVIDIA NPO需求指引上修至2500万颗；NPO光引擎市场2025 $19.7亿→2027 $120.8亿(CAGR 19.3%)', priceChange: '2500万' },
      { category: '网络设备', detail: '【1.6T出货大爆发】中际旭创1.6T 2025年75万→2026年805万(+10×)；新易盛23万→302万；2026全球800G 4157万只/1.6T 1119万只', priceChange: '+10×' },
      { category: '网络设备', detail: '【InP晶圆涨价250%-6/15-21】中国出口管制后6英寸InP从~$2K涨至~$5K；NVIDIA Quantum-X 3Q26少量出货、2H27规模化', priceChange: '+250%' },
      { category: '网络设备', detail: '【AAOI 6英寸晶圆升级】Texas工厂4→6英寸晶圆，2H2026新产能投产，2027月产70万只(800G+1.6T)', priceChange: '+70万/月' },
      { category: '网络设备', detail: '【光纤价格全线上行-6/23】G.652.D(A2) 210-230元/芯公里，200μm细径A2达270-280元；G.651(A1) 165+元；地缆100-110元', priceChange: '上行' }
    ]
  },
  {
    date: '2026-06-22',
    version: 'v3.0',
    author: '自动调研(周报)',
    summary: '第15次周度调研更新：【锂价V型回归】碳酸锂单周-6.6%回调：6/18主力跌5%报163,180元/吨，SMM 6/22现货均价电池级167,500元/吨；【B300中国黑市$100万】出口管制收紧推升NVIDIA B300中国地下市场至$100万/台整机；GB300云价B300起$7.50/hr/AWS $142.42/hr；【1.6T光模块价飙】单价从$1,200涨至$2,000+(+70%)，AAOI拿首笔$2亿订单，中际旭创独供英伟达70% 1.6T，市值破1.5万亿；【AMD破$9000亿】6/16股价$549历史新高、Citi目标$575；Q2 AI DC营收$5.8B单季；【Vertiv周涨12%】6/18收$333.05 周+12%/单日+4.9%；【华为CloudMatrix 384】6.7 PFLOPS BF16/13.4 PFLOPS FP8，6/21订单激增；【NVIDIA Vera Rubin Ultra启动CPO时代】GTC 2026确认copper+optical并行；【GB300 MLPerf 6.0横扫】CoreWeave DeepSeek-V3 8192-GPU训练2.02分钟；【浸没式新基准】单相$5K-15K/42U、两相$22K-38K/42U，节能40-60%',
    changes: [
      { category: '计算设备', detail: '【中国黑市$100万-6/17 TechShots】美国出口管制收紧推升NVIDIA B300服务器中国地下/二级市场价格至$100万/台整机', priceChange: '$100万' },
      { category: '计算设备', detail: '【MLPerf 6.0横扫-6/17】NVIDIA GB300刷新全部7项基准：CoreWeave DeepSeek-V3 8192-GPU训练2.02分钟、Azure Llama训练7.07分钟', priceChange: 'SOTA' },
      { category: '计算设备', detail: '【GB300云价落地-6/21】GPU Finder：B300 on-demand $7.50/hr起(Verda)、AWS p6-b300 $142.42/hr、spot $2.63/hr；GB300 1卡Oracle $18/hr；MSI GB300工作站CDW售价$106,408-$125,186', priceChange: '$7.50/hr' },
      { category: '计算设备', detail: '【RTX PRO 6000暴涨-6/17】NVIDIA官网6月中价格悄涨从$8,565→$13,250(+54%)', priceChange: '+54%' },
      { category: '计算设备', detail: '【AMD破$9000亿-6/16】AMD股价6/16创$549历史新高，市值破$9000亿；Citi 6/12升级买入目标$575；Q2 AI DC单季营收$5.8B；Q3净利润$1.78B(+19% YoY)', priceChange: '$549' },
      { category: '计算设备', detail: '【CloudMatrix 384解析-6/21 CRC】384颗910C组成6.7 PFLOPS BF16/13.4 PFLOPS FP8超节点，TPP 300W功耗下FP16逼近A100 80%；HBM3e×8 1.5TB；UB-Mesh光互联拓扑', priceChange: '13.4 PFLOPS' },
      { category: '计算设备', detail: '【订单激增-6/16 LinkedIn】DeepSeek V4将触发昇腾抢购潮；【量产爆发-6/21 股道榜】昇腾950PR单卡600W功耗、定价~7万元(H200的1/3)', priceChange: '7万元' },
      { category: '散热冷却', detail: '【Vertiv周涨~12%-6/18】VRT股价6/12 $302.87→6/18 $333.05周+12%/单日+4.9%；市值~$1280亿，Zacks Rank #2(Buy)', priceChange: '+12%' },
      { category: '散热冷却', detail: '【浸没式定价新基准-6/21 Alibaba】单相浸没式槽$5,000-15,000/42U机架(含液+基础监控)、两相turnkey $22,000-38,000/机架；OPEX节省40-60%能耗+25-35%维护人工', priceChange: '$5-38K' },
      { category: '散热冷却', detail: '【36氪测算-6/22】1GW液冷数据中心冷却总投资$14.75亿：冷却塔$0.9亿+冷水机$3.6亿+CDU $4.5亿+CRAH $5.75亿', priceChange: '$14.75亿/GW' },
      { category: '电力系统', detail: '【碳酸锂单周-6.6%-6/15-18】期货LC2609从172,600-177,900高点降至160,100-172,500；广期所6/18主力跌5%报163,180元/吨', priceChange: '-6.6% 周' },
      { category: '电力系统', detail: '【SMM 6/22现货】电池级165,000-170,000元/吨(均价167,500)，工业级160,500-166,000(均价163,250)；USD价6/18 $21,786.51/吨(-$213.41)', priceChange: '167,500' },
      { category: '电力系统', detail: '【多头守望】高盛Q4目标$20万/吨峰值$25万；瑞银上调2026均价预测至$20万；花旗维持$25万元关口测试(6-12月)', priceChange: '$20-25万' },
      { category: '电力系统', detail: '【磷酸铁锂大涨-6/22 央视】磷酸铁/磷酸铁锂年内价格翻倍：400kg包装从1万元→2.5万元+', priceChange: '×2.5' },
      { category: '网络设备', detail: '【1.6T价飙-6/21 ZAKER】1.6T光模块Q2放量，单价$1,200→$2,000+(+70%)；AAOI拿全球首笔$2亿量产订单；主流厂商订单排到2027年', priceChange: '+70%' },
      { category: '网络设备', detail: '【中际旭创独供英伟达-6/18】800G全球市占55%+独供英伟达GB200平台70%的1.6T光模块，1.6T单价较800G溢价50%；市值破1.5万亿元', priceChange: '+50%溢价' },
      { category: '网络设备', detail: '【大摩研报-6/20】800G/1.6T/3.2T光模块2026-2028出货量分别上修至4400万/7900万/1.58亿只', priceChange: '1.58亿/3.2T' },
      { category: '网络设备', detail: '【NVIDIA Vera Rubin Ultra CPO时代-6/16】Jensen GTC 2026确认Rubin+Feynman scale-up同时支持copper+optical', priceChange: 'CPO启动' },
      { category: '网络设备', detail: '【NVIDIA TSMC CPO交换机-6/20】NVIDIA首批CPO交换机基于TSMC工艺亮相', priceChange: '新平台' },
      { category: '网络设备', detail: '【1.6T PCB价值升级】PCB从12-14层升至18层+M8/M9基材+mSAP，单板均价$16-22→$40-55(+2.5×)，毛利率40-50%；800G DSP $50-60，1.6T DSP接近$200', priceChange: '+2.5×' }
    ]
  },
  {
    date: '2026-06-15',
    version: 'v2.9',
    author: '自动调研(周报)',
    summary: '第14次周度调研更新：碳酸锂V型反弹+3,250元/吨(电池级169,700-174,000)；含税现货破$25,138.59/吨(YTD+47%)；【光模块CPO争议】6/9大跌AAOI-17%/COHR-11%随后6/10反弹AAOI+7%(YTD+416%)、LITE+5%(Q3$808M历史新高+90%YoY)；【Vertiv三连击】$3亿液冷产能翻倍+ThermoKey收购完成+PurgeRite NearZero流体服务；华为昇腾950白皮书公布(HBM2.0 144GB+4TB/s 带宽PR的2.5×)；AMD Advancing AI 2026锁定7月22-23日Moscone SF (Venice CPU+MI450量产首发)；AMD英国$20亿AI研发承诺；B200 vs B300分化(训练vs推理)',
    changes: [
      { category: '计算设备', detail: '【B200 vs B300分化-6/12 Ornn】训练用B300：+50%内存+50% FP4+2×网络但租金溢价50-100%；推理用B200：192GB+15-40%便宜更具性价比；行业模式：B300新训练+B200推理舰队+成本敏感部署', priceChange: '分化' },
      { category: '计算设备', detail: '【白皮书-6/11】华为昇腾950白皮书公布：950DT 8月华为云上线+自研HiZQ 2.0 HBM 144GB+4TB/s(PR的2.5×)；DeepSeek将优先部署+8月推V4.2大模型', priceChange: '提前' },
      { category: '计算设备', detail: '【HDC 2026-6/12-14】华为开发者大会东莞松山湖；鸿蒙7.0 6/13正式发布；Mate 90系列9月首发', priceChange: '事件' },
      { category: '计算设备', detail: '【AMD英国-6/8】AMD承诺英国$20亿加速AI研发；OpenAI+Meta各6GW合约(共12GW)；MI400系列首年营收预测$72亿(占DC 25%)', priceChange: '$20亿' },
      { category: '计算设备', detail: '【关键日期】Advancing AI 2026 7月22-23日Moscone SF：MI450量产+Venice CPU首发；BofA Vivek Arya目标$560(top CPU pick)；Supermicro Helios 72×MI455X+6th Gen EPYC单rack 3 AI EFLOPS Q3', priceChange: '7月22日' },
      { category: '散热冷却', detail: '【Vertiv三连击-6/12】8-K披露$3亿资本投资液冷制造产能翻倍(Q4 2026)+完成ThermoKey S.p.A.收购(热交换技术)+PurgeRite NearZero流体管理服务发布', priceChange: '$3亿' },
      { category: '电力系统', detail: '【V型反弹-单日+3,250】碳酸锂6/12 Mysteel：电池级169,700-174,000元/吨(+3,250)，工业级165,000-170,900(+3,250)；单日+1.94-1.97%', priceChange: '+3,250元/吨' },
      { category: '电力系统', detail: '【美元报价】SMM 6/12电池级$22,246.54/吨(+$564.11)，工业级$21,724.63(+$563.1)；含税现货突破$25,138.59/吨(YTD+47%、Grand Bottom+202%)', priceChange: '$25K+' },
      { category: '电力系统', detail: '氢氧化锂电池级155,000元/吨(月-7%)；前期急跌后下游补库+矿端挺价共振反弹', priceChange: '反弹' },
      { category: '电力系统', detail: '【Jefferies-6/11】重申GE Vernova买入($940.97 +3.77% 5日)；Siemens 6/12 INR 3,563.00(+1.10%)', priceChange: '维持买入' },
      { category: '网络设备', detail: '【CPO争议-6/9】NVIDIA vs SemiAnalysis CPO时间线争议触发光模块大跌：AAOI-17%/COHR-11%/AXT-13.68%/LITE-8%/GLW-7-9%；纯获利了结', priceChange: '-17%' },
      { category: '网络设备', detail: '【快速反弹-6/10】AAOI +7%达$174(YTD+416%)、LITE +5%达$859(Q3 FY26$808M +90%YoY历史新高+$400M CPO/OCS积压)、COHR +2%达$363(YTD+101%, DC+41%YoY)；CPO 2026非主营，800G+1.6T可插拔仍是主线', priceChange: '反弹' }
    ]
  },
  {
    date: '2026-06-08',
    version: 'v2.8',
    author: '自动调研(周报)',
    summary: '第13次周度调研更新：【急跌警报】碳酸锂电池级6/5急跌至163,000元/吨(周度-7.4%)；【光模块狂欢】Computex 2026 NVIDIA Keynote后AAOI YTD+439%、LITE+13%、COHR+16%；NVIDIA向COHR战略投资$20亿；华为云8月上线昇腾950DT(算力翻倍)；2026Q1中国市场国产AI芯片占比首破52.3%(昇腾37%)；Delta 800VDC 2.4MW L2L CDU+预制AI模块DC(部署时间-60%)；Vertiv CoolChip CDU 2300 EMEA上市；Vera Rubin NVL72成Computex全场旗舰',
    changes: [
      { category: '计算设备', detail: '【Computex 2026开幕-6/2】NVIDIA Vera Rubin NVL72成全场旗舰：Wiwynn/GIGABYTE/ASRock Rack/MiTAC/Supermicro/LITEON/PEGATRON 7大ODM同步发布机柜级AI；Vera CPU启动Arm进军x86 DC CPU的发令枪', priceChange: '新平台' },
      { category: '计算设备', detail: 'AMD Helios MI400/MI355X通过Wiwynn/MiTAC ODM销售；Signal65测MI355X达B200吞吐1.5×(DeepSeek-R1)；MI400完整披露推迟到7月Advancing AI', priceChange: '1.5× B200' },
      { category: '计算设备', detail: '【华为云8月上线950DT-6/5】华为云陈林：950DT 8月上线、"一年一代、算力翻倍"、原生支持FP8；昇腾950PR Q1已量产，单卡推理2.87×H20、FP8 1 PFLOPS、成本1/3；384卡超节点vs GB200 +1.7×总算力', priceChange: '量产' },
      { category: '计算设备', detail: '2026Q1中国市场国产AI芯片占比首破52.3%(昇腾37%占国产70%)；NVIDIA从2019年95%暴跌至42.7%，预计年底降至8%；战略领域昇腾>70%；CANN框架开源支持43大模型', priceChange: '52.3%' },
      { category: '散热冷却', detail: '【Computex 2026】Delta发布预制AI模块DC(部署-60%)+ 800VDC 2.4MW L2L CDU(25kW HVDC泵+N+1+热插拔+1440LPM+650kPa)+ 80kW GoCool L2A CDU(无外水管，PUE<1.19)', priceChange: '新品' },
      { category: '散热冷却', detail: '【EMEA扩张-6/2】Vertiv CoolChip CDU 2300 EMEA上市(Datacloud Cannes首发) + CoolChip Fluid Network Row Manifolds(液冷分配加速器)', priceChange: '区域扩张' },
      { category: '电力系统', detail: '【急跌-周度-7.4%】碳酸锂6/5电池级163,000元/吨(SMM/长江有色，-5,250至-6,300元/吨日跌，-3.12%日)；工业级159,250元/吨(-3.19%)；vs v2.7的176,000周度-7.4%', priceChange: '-7.4% 周' },
      { category: '电力系统', detail: '现货区间157,000-169,000元/吨(SMM)；CIF $20.63/kg(-$0.4)；Trading Economics：从5/13两年高位200,500大幅回落，高价驱动产能复产+下游谨慎', priceChange: '急跌' },
      { category: '电力系统', detail: '【监管推迟】Intellectia 6/7：GE Vernova订单激增遭遇监管阻力(环保审批延迟)；Yahoo 6/3"全球燃机供应紧缩"；H级累计400万运行小时不变', priceChange: '阻力' },
      { category: '网络设备', detail: '【光模块狂欢-6/2 Computex后】AAOI单日+20%达$190(YTD+439%)、LITE+13%达$914(Q收入$665M +66% YoY+$400M OCS积压)、COHR+16%达$363(Q3 $1.81B +21% YoY)', priceChange: '+439% YTD' },
      { category: '网络设备', detail: '【战略合作】NVIDIA向COHR战略投资$20亿(数据中心光互联深度绑定)；AAOI Q1营收$151.14M +51% YoY+完成首批800G量产交付', priceChange: '$20亿' }
    ]
  },
  {
    date: '2026-06-01',
    version: 'v2.7',
    author: '自动调研(周报)',
    summary: '第12次周度调研更新：碳酸锂电池级176,000元/吨(月内-0.56%)区间震荡收敛，库存持续去化；GE Vernova H级燃机累计400万运行小时里程碑；SpaceX投$28亿采购移动燃机为AI DC供电；Marvell Q1 FY27数据中心+27% YoY+20+设计赢单；LITE/COHR/AVGO 2030产能展望15-34×增长；NVIDIA Arm CPU新品Computex 2026亮相(6/25)；Arivor 2P DLC液冷新方案(Computex)；华为算力2026"绝对主线"全产业链国产替代加速',
    changes: [
      { category: '计算设备', detail: '【Computex 2026预热-6/25】NVIDIA将携Arm架构数据中心CPU新品(5/31曝光)+CES签名版RTX 5090参展，挑战Intel CPU市场', priceChange: '新品预告' },
      { category: '计算设备', detail: '华为算力2026"绝对主线"(股道榜 5/31)：昇腾950系列放量+超节点集群落地+全产业链国产替代；4月业绩验证窗口，整机+高速互联+液冷三大环节迎"戴维斯双击"', priceChange: '量产爆发' },
      { category: '计算设备', detail: 'AMD Ryzen AI Max 400 "Gorgon Halo"：192GB统一内存(160GB可分配AI)，桌面跑3000亿参数LLM，$3999预购6月起', priceChange: '$3,999' },
      { category: '散热冷却', detail: '【新进入者-5/27】Arivor Technologies发布2P DLC双相直液冷机柜级方案，6/2-5 Computex BenQ AI IN ACTION展(Hall 1, Taipei Nangang)', priceChange: '新方案' },
      { category: '电力系统', detail: '【里程碑-5/28】GE Vernova H级燃气轮机累计400万商业运行小时(Simply Wall St)，全球关键电力关键资产', priceChange: '里程碑' },
      { category: '电力系统', detail: '【AI DC实证-5/26】SpaceX投入$28亿采购移动式天然气轮机为AI数据中心供电(德州)，AI驱动燃机需求实证', priceChange: '$28亿' },
      { category: '电力系统', detail: '【库存去化-区间收敛】碳酸锂(电池级)5/29生意社基准价176,000元/吨(月初177,000，-0.56%)；现货区间171,000-180,000；工业级172,000元/吨(月内-0.58%)', priceChange: '-0.56%' },
      { category: '电力系统', detail: '期货主力2609 5/28收178,860元/吨(+1.97%日)，成交26.08万手；库存持续下行价格区间震荡收敛(华泰期货)；6%锂精矿$2,565/吨', priceChange: '+1.97%日' },
      { category: '网络设备', detail: '【Marvell Q1 FY27-5/28】数据中心营收+27% YoY，Q2指引$27亿±5%，全年模型上调$4亿，20+设计赢单(FY28-29首批量产)，运营利润率+1,200 bps', priceChange: '+27% YoY' },
      { category: '网络设备', detail: '【2030产能展望】Lumentum $600M→$9.0B(15×)、Coherent $125M→$4.3B(34×)、Broadcom $550M→$4.5B(8.2×)；Rosenblatt最看好COHR+LITE', priceChange: '15-34×' }
    ]
  },
  {
    date: '2026-05-25',
    version: 'v2.6',
    author: '自动调研(周报)',
    summary: '第11次周度调研更新：碳酸锂高位震荡周度回调-1,900元/吨(MMLC电池级)，Q2价格中枢19-20万；华为Atlas 950 Q4上市参数官宣(950DT芯片+1024卡超节点FP8 1 EFLOPS)；NVIDIA GTC Taipei @ Computex 2026；Vertiv CoolChip CDU 2300新品(2.3MW)；GE Vernova燃机积压破100 GW；AI光模块板块单日技术性回调(AAOI-10%/LITE-9%/COHR-6%)；Google I/O 2026 Gemini 3.5系列',
    changes: [
      { category: '计算设备', detail: '【Computex 2026】NVIDIA GTC Taipei 5/21黄仁勋亲临；NVL72 AI Factory架构文档(5/18 docs)：1:1 GPU-to-NIC ConnectX-8 800Gb/s+BlueField-3 480Gb/s', priceChange: '事件' },
      { category: '计算设备', detail: '【超节点官宣-5/22】华为Q4上市Atlas 950(液冷)+850E(风冷)，基于昇腾950DT(HiZQ 2.0朱雀内存96/144GB+4TB/s)；1024卡=16柜×64卡，FP8 1 EFLOPS/FP4 2 EFLOPS', priceChange: '新平台' },
      { category: '计算设备', detail: '华为vs英伟达NVL144(2026H2)：卡规模56.8×、算力6.7×、内存15×(1152TB)、带宽62×(16.3 PB/s)；放量节奏Q2小批量→Q3量产→Q4单季千台占机柜15%', priceChange: '规格' },
      { category: '计算设备', detail: '950PR定价~7万元/片(H200的1/3)，FP4 1.56 PFLOPS、112GB HBM；俄罗斯储蓄银行有意引入昇腾', priceChange: '定价' },
      { category: '计算设备', detail: 'AMD MI355X：40%成本节省 vs NVIDIA B200(Digg 5/19)；Zyphra测试长文本推理缩小与B200差距(MLPerf一位数差距)', priceChange: '性价比' },
      { category: '散热冷却', detail: '【新品-5/21】Vertiv CoolChip CDU 2300上市(单机2.3MW，N+1支持4-5MW IT负载)；70kW-2.3MW全谱系覆盖；DCD 5/22：AI推动机柜密度快速上升', priceChange: '新型号' },
      { category: '电力系统', detail: '【高位震荡-回调】碳酸锂5/22 MMLC电池级早盘-1,900元/吨；周度成交放量回调；Q2价格中枢19-20万元/吨，Q4或冲击25-30万', priceChange: '-1,900元/吨' },
      { category: '电力系统', detail: '【燃机超级周期】GE Vernova燃机积压破100 GW(>UK+法国装机)；Siemens Energy 80 GW；BlackRock预美DC电力2025 19GW→2030 194GW(CAGR 59.2%)', priceChange: '100 GW' },
      { category: '电力系统', detail: 'EIG预警全球$8万亿AI基建押注电网无法承载，铜成关键瓶颈；GE Vernova风电亏损$4亿但被电力+电气化对冲', priceChange: '预警' },
      { category: '网络设备', detail: '【技术性回调-5/18】AI光模块单日大跌：AAOI -10%、LITE -9%、COHR -6%；纯获利了结(RSI超买71.4)；基本面未变$3.24亿积压+Microsoft合约', priceChange: '-10% AAOI' }
    ]
  },
  {
    date: '2026-05-18',
    version: 'v2.5',
    author: '自动调研(周报)',
    summary: '第10次周度调研更新：碳酸锂5周累计+23.4%维持高位震荡至192,000元/吨(期货突破20万元/吨)；NVIDIA Blackwell Ultra平台5月8日发布(GB300 NVL72+HGX B300 NVL16)，B300详规288GB HBM3e+15PFLOPS FP4+1400W TDP；GE Vernova Q1 2026订单+80%YoY；AAOI披露$3.24亿积压订单+Microsoft多年合约；AMD MI355X ISSCC 2026深度披露',
    changes: [
      { category: '计算设备', detail: '【平台发布】NVIDIA Blackwell Ultra平台5月8日发布(GB300 NVL72+HGX B300 NVL16)：vs Hopper吞吐/兆瓦×50、成本/token降35×', priceChange: '新平台' },
      { category: '计算设备', detail: 'B300 GPU详规：288GB HBM3e+8TB/s+15PFLOPS FP4+7PFLOPS FP8+1400W TDP+ConnectX-8(1.6T)+NVLink5(1.8TB/s)；售价~$53K/GPU，DGX B300整机$400-500K', priceChange: '规格确认' },
      { category: '计算设备', detail: 'AMD MI355X ISSCC 2026深度：5PFLOPS FP8(1.9×MI300X)+288GB HBM3E+1400W TBP；Llama 2 70B LoRA微调比GB200快10%；MI400 TSMC N2+432GB HBM4 H2 2026出货', priceChange: '规格' },
      { category: '计算设备', detail: '华为AI芯片2026营收+60%至$120亿(Seeking Alpha 5/13官宣再确认)；3月MWC 2026发布Atlas 950 SuperPoD集群+超节点架构', priceChange: '确认' },
      { category: '散热冷却', detail: 'Vertiv CoolChip CDU全系列产品线确认(70kW-1350kW)，覆盖Tier1超大规模需求；1MW+ +23.1% CAGR最快(满足GB300/B300高密度)', priceChange: '产品线' },
      { category: '电力系统', detail: '【红色警戒-持续高位】碳酸锂5月15日192,000元/吨(Trading Economics)，较v2.4 194,000微跌-1.0%但维持高位震荡', priceChange: '-1.0%' },
      { category: '电力系统', detail: '广州期货所主力合约2609 5/11突破20万元/吨、5/12触及208,800元/吨(+250% vs 一年低位58,400)；YTD累计+70%；新华社/证券时报权威媒体连发警示', priceChange: '+期货新高' },
      { category: '电力系统', detail: '【订单狂飙】GE Vernova Q1 2026订单+80%YoY，电气化×2，2026营收上调至$445-455亿，新增$130亿至$1630亿积压', priceChange: '+80%' },
      { category: '电力系统', detail: 'E&E News：2026Q1美国数据中心订购电力设备超过2025全年总和；GE Vernova预2030数据中心占北美用电9-10%(vs 2025的3-4%)', priceChange: '更新' },
      { category: '网络设备', detail: '【订单确认】AAOI 5/8披露$3.24亿订单积压，数据中心营收+45%YoY，毛利率目标年末35%；2026年末800G+1.6T产能50万只/月+Microsoft多年合约', priceChange: '+订单' }
    ]
  },
  {
    date: '2026-05-11',
    version: 'v2.4',
    author: '自动调研(周报)',
    summary: '第9次周度调研更新：碳酸锂4周累计+24.7%加速上涨至194,000元/吨(单周+9.6%)；NVIDIA H200中国销售1月获Trump批准+中国28日批准首批；NVIDIA Blackwell产能逼近100万GPU/月；Huawei 950PR目标年产75万片(SMIC N+3)；Vertiv MegaMod HDX液冷模块新配置；Coherent进入1.6T网络超级周期',
    changes: [
      { category: '计算设备', detail: '【重大反转】Trump 1月14日批准H200出口中国(25%关税)；中国1月28日批准首批数十万片，主供3家头部互联网公司；NVIDIA估中国年潜力$500亿', priceChange: '政策反转' },
      { category: '计算设备', detail: 'NVIDIA Blackwell产能逼近100万GPU/月(2026 Q1)；Nscale德州104K GPU新园区240MW，Microsoft Q3启用，长期1.2GW', priceChange: '+产能' },
      { category: '计算设备', detail: 'Huawei 950PR目标年产75万片(SMIC N+3制程7nm级，无EUV)；1月送样、H2全量出货；SMIC周期8月vs TSMC 3月', priceChange: '更新' },
      { category: '散热冷却', detail: '【新品】Vertiv MegaMod HDX预制化液冷模块新配置：紧凑型13机柜/1.25MW，组合型144机柜/10MW', priceChange: '新品' },
      { category: '散热冷却', detail: '集成Direct-to-Chip液冷+风冷+APM2 UPS+CoolChip CDU；支持50-100+kW/机柜', priceChange: '更新' },
      { category: '电力系统', detail: '【警戒升级-4周累计+24.7%】碳酸锂飙至194,000元/吨(5/8 Trading Economics)，单周+9.6%(177,000→194,000)', priceChange: '+9.6%' },
      { category: '电力系统', detail: '广州期货所2609合约199,060元/吨(+1.52%日)；电池级现货均价190,500元/吨(+3,000/吨)', priceChange: '+期货高点' },
      { category: '电力系统', detail: 'YTD +50%创2023年来新高；5月产量11.38万吨环比+3.4%但需求更强；中国矿关闭+ESS+VAT退税6%综合', priceChange: '更新' },
      { category: '电力系统', detail: '【危机持续】Sightline Climate预2026美国30-50%数据中心因电力延迟；权威认为电力非芯片决定下个$1000亿数据中心', priceChange: '危机' },
      { category: '网络设备', detail: 'Coherent进入"1.6T网络超级周期"(COHR 2026 deep-dive)；800G+1.6T市场CAGR 14.2%', priceChange: '更新' }
    ]
  },
  {
    date: '2026-05-04',
    version: 'v2.3',
    author: '自动调研(周报)',
    summary: '第8次周度调研更新：碳酸锂连续3周累计+13.8%突破警戒线(177,000元/吨)，期货触及189,000高点；NVIDIA Rubin官宣full production(2H26上市)；华为AI芯片2026营收预增60%至$120亿；AMD反驳MI400延迟，确认2H 2026出货；CDU细分市场详细数据出炉；AAOI Q2 2026 800G成最大营收线',
    changes: [
      { category: '计算设备', detail: '【官宣】NVIDIA Rubin进入full production，2H 2026合作伙伴上市；CoWoS 30-35万片，1Q26试产、2Q26末量产，VR200 NVL72 3Q26末机柜量产', priceChange: '量产' },
      { category: '计算设备', detail: 'GB300份额近80%，2026预计6万机柜+129% YoY，目前1000机柜/周', priceChange: '更新' },
      { category: '计算设备', detail: 'B300云租赁价区间$2.45/hr(Spheron Spot)-$18/hr(DGX B300)，比H200更便宜', priceChange: '更新' },
      { category: '计算设备', detail: '【加速】华为预计2026 AI芯片营收+60%至$120亿(2025 $75亿)，950PR成2026主要订单来源', priceChange: '+60%' },
      { category: '计算设备', detail: 'AMD反驳MI400延迟，确认2H 2026出货；MI455X 12个chiplet/320亿晶体管/432GB HBM4；Helios机柜2.9 EFLOPS FP4', priceChange: '更新' },
      { category: '计算设备', detail: 'AMD MI500系列2027发布(CDNA 6/2nm/HBM4e)，目标比MI300X提升1000x AI性能', priceChange: '路线图' },
      { category: '散热冷却', detail: 'CDU市场细分：Rack-Level占41%($7.78亿)，Direct-to-Chip占56%($10.63亿)，200-500kW占48%($9.11亿)', priceChange: '更新' },
      { category: '散热冷却', detail: '1MW+ CDU为最快增长细分(+23.1% CAGR)，主要受AI/HPC高密度需求驱动', priceChange: '+23.1%' },
      { category: '电力系统', detail: '【警戒-3周累计+13.8%】碳酸锂现货177,000元/吨(4/30)，较v2.2的173,000再涨+2.3%；3周累计155,550→177,000', priceChange: '+13.8%' },
      { category: '电力系统', detail: '广州期货所5月1日碳酸锂期货触及189,000元/吨高点(+9.85%涨幅触发涨停)', priceChange: '+5.05%期货' },
      { category: '电力系统', detail: '碳酸锂月+8.59%/同比+163.79%；IMARC东北亚价$18.21/kg；驱动力：中国矿关闭+津巴布韦禁令+ESS需求+VAT出口退税降至6%', priceChange: '更新' },
      { category: '电力系统', detail: '2026电力可用性官方升为新建数据中心首要约束(EnkiAI)；美国互连排队等待多年', priceChange: '危机' },
      { category: '网络设备', detail: 'AAOI 2026 Q2 800G成最大数据中心营收线；目标年底月产50万只；全年营收$10亿+(+119%)', priceChange: '更新' },
      { category: '网络设备', detail: '2026是"1.6T之年"(Hytoptodevice)；Tier1订单饱和：InnoLight 1400-1500万只800G产能向1.6T转型', priceChange: '里程碑' }
    ]
  },
  {
    date: '2026-04-27',
    version: 'v2.2',
    author: '自动调研(周报)',
    summary: '第7次周度调研更新：碳酸锂续涨至173,000元/吨(连续两周上涨，月+13.4%/同比+148%)；NVIDIA Rubin出货可能Q2末提前3-6个月；GB300成2026旗舰份额近80%；DCX发布8MW CDU；AAOI 800G订单升至$1.24亿；Marvell首款260通道PCIe 6.0交换机',
    changes: [
      { category: '计算设备', detail: 'GB300超越GB200成2026旗舰，份额近80%(TrendForce)，全年出货6万机柜+129% YoY，已1000机柜/周', priceChange: '更新' },
      { category: '计算设备', detail: 'NVIDIA Rubin出货可能Q2末提前3-6个月(Evercore)；中国禁令释放产能给全球；CoWoS 30-35万片(2026)', priceChange: '提前' },
      { category: '计算设备', detail: 'VR200 NVL72机柜量产3Q26末，2H26出货5000-7000台(Ming-Chi Kuo)；Quanta 8月首批客户交付', priceChange: '更新' },
      { category: '计算设备', detail: 'AMD MI455X UALoE72机架级量产推迟至2027 Q2(SemiAnalysis报告，UALink延迟)；MI400按计划H2 2026', priceChange: '部分延迟' },
      { category: '计算设备', detail: 'B200云租赁$1.71-$14.00/hr全区间稳定；OEM价tech-insider给出$35-40K(可能列价/其他源仍$45-50K)', priceChange: '稳定' },
      { category: '散热冷却', detail: 'DCX发布8MW CDU(45°C温水冷却)获DCW London 2026年度创新奖；3月推ECDU组合(600kW-2.6MW)', priceChange: '新品' },
      { category: '散热冷却', detail: 'CDU市场$18.98亿(2026)→$61.13亿(2033，18.2% CAGR)；200-500kW占48%份额，1MW+最快增长(+23.1%)', priceChange: '更新' },
      { category: '散热冷却', detail: '改造vs新建：65%北美colo选改造，capex降20-40%，工期从24-36月降至8-14月', priceChange: '趋势' },
      { category: '电力系统', detail: '【持续】碳酸锂173,000元/吨(4/24)，连续两周上涨(+9.0%→+2.1%)；月+13.4%/年初+49%/同比+148%', priceChange: '+2.1%' },
      { category: '电力系统', detail: '现货价高达177-180,000元/吨；VAT出口退税4月降9%→6%引发抢出口；Fastmarkets预2026转短缺1500吨LCE', priceChange: '更新' },
      { category: '电力系统', detail: '变压器危机持续：GE Vernova(收购Prolec)、Siemens Energy($10亿+美国新厂2027投产)受益；中国控全球60%产能', priceChange: '受益股' },
      { category: '网络设备', detail: 'AAOI 800G订单升至$1.24亿(同一超大客户上调$71M)，Q2-Q4出货；第二超大客户已出货', priceChange: '更新' },
      { category: '网络设备', detail: 'Marvell首款260通道PCIe 6.0交换机Structera S(AI scale-up)，Q3 2026采样', priceChange: '新品' },
      { category: '网络设备', detail: '1.6T 2025年出货270万只→2026预计>500万只(C-LIGHT)；TSMC COUPE硅光2026量产', priceChange: '+85%' }
    ]
  },
  {
    date: '2026-04-20',
    version: 'v2.1',
    author: '自动调研(周报)',
    summary: '第6次周度调研更新：碳酸锂飙升至169,500元/吨(+9.0%)；美国50%+数据中心建设延迟(变压器短缺)；B200云租赁价大幅下降至$1.71/hr；Panasonic进入液冷CDU市场；Cisco G300 102.4T芯片；Marvell首款1.6T ZR+ DCI模块',
    changes: [
      { category: '计算设备', detail: 'B200 OEM $45-50K/卡稳定；云租赁大幅下降至$1.71/hr(Verda)，Lambda $4.99/hr，较v2.0的$5.87下限降71%', priceChange: '云租赁-71%' },
      { category: '计算设备', detail: 'NVIDIA仍未向中国发货H200(CNBC 2/26确认)；H200中国版3月5日确认停产(Reuters)', priceChange: '未变' },
      { category: '计算设备', detail: 'Rubin延迟状态不变：出货占比22%，Blackwell 71%主导；NVIDIA年增长率微调至26%', priceChange: '未变' },
      { category: '计算设备', detail: 'NVIDIA DC FY2026营收$1940亿(+68% YoY)，Blackwell+Rubin承诺量超$1万亿', priceChange: '更新' },
      { category: '散热冷却', detail: '【新】Panasonic 3月推出400kW/800kW CDU(欧洲)，开发1.2MW+型号，秋季交付', priceChange: '新入局' },
      { category: '散热冷却', detail: 'Ecolab CoolIT收购Q3关闭(29x NTM EBITDA)；CoolIT覆盖全球10大超算中7家', priceChange: '更新' },
      { category: '散热冷却', detail: '液冷市场多源预测：GM Insights $60亿(2026)→$271亿(2035)；Persistence $57亿(2026)→$292亿(2033)', priceChange: '更新' },
      { category: '电力系统', detail: '【重大】碳酸锂飙升至169,500元/吨(4/17)，较v2.0的155,550涨+9.0%；年初至今+40%；同比+137%', priceChange: '+9.0%' },
      { category: '电力系统', detail: 'CME锂期货连续月度交易量新高；ESS需求+中国矿关闭+津巴布韦禁令推涨；SQM预期$15-18/kg', priceChange: '上涨因素' },
      { category: '电力系统', detail: '美国50%+计划数据中心延迟/取消(Bloomberg)；四大云商>$6500亿基建开支vs变压器3-5年交货', priceChange: '恶化' },
      { category: '电力系统', detail: '中国变压器进口：2022<1500台→2025.10>8000台；加拿大/墨西哥/韩国成替代来源', priceChange: '更新' },
      { category: '网络设备', detail: 'Cisco Silicon One G300 102.4T芯片发布(2月)，Nexus交换机支持64端口800G/1.6T双速率', priceChange: '新品' },
      { category: '网络设备', detail: 'Marvell首款1.6T ZR/ZR+ DCI相干模块(OFC 2026)；1.6T DSP平台大扩展，Q2量产', priceChange: '新品' },
      { category: '网络设备', detail: '1.6T价格趋势：$3000+(早期2025)→$1500-2000(2026底)→$1100(2028)；Google需3-400万只', priceChange: '下降趋势' }
    ]
  },
  {
    date: '2026-04-13',
    version: 'v2.0',
    author: '自动调研(周报)',
    summary: '第5次周度调研更新：Vera Rubin延迟(TrendForce下调出货占比29%→22%)；NVIDIA停产H200中国版；B200涨至$45-50K/卡；碳酸锂回落至15.55万/吨；AAOI $2亿+1.6T量产大单；Coherent OFC演示12.8T+',
    changes: [
      { category: '计算设备', detail: '【重大】Vera Rubin延迟：TrendForce下调2026高端GPU出货占比29%→22%，KeyBanc削减产量200万→150万(HBM4验证/NIC切换/散热挑战)', priceChange: '延迟' },
      { category: '计算设备', detail: '【重大】NVIDIA停产H200中国版，产能转向Vera Rubin；中国200万+订单未兑现', priceChange: '停产' },
      { category: '计算设备', detail: 'B200 OEM报价升至$45K-$50K/卡(较上周~$40K涨+12-25%)，Blackwell售罄至2026年中', priceChange: '+12-25%' },
      { category: '计算设备', detail: 'Blackwell份额上升61%→71%填补Rubin延迟缺口', priceChange: '更新' },
      { category: '计算设备', detail: 'AMD MI350X涨价70%至$25K/卡(ASP: 2025$19K→2026$27K→2027$34K)', priceChange: '+70%' },
      { category: '计算设备', detail: '华为950PR Q1 2026量产、950DT Q4 2026；910C 60万片计划', priceChange: '更新' },
      { category: '散热冷却', detail: '液冷市场$51亿(2025)→$64.1亿(2026，+25.7%)→$161.6亿(2030)；Dell\'Oro预测2029年~$70亿', priceChange: '更新' },
      { category: '散热冷却', detail: 'Ecolab CoolIT收购进展：CoolIT ~$5.5亿NTM收入，30%利润率，当前仅5%DC采用液冷', priceChange: '更新' },
      { category: '电力系统', detail: '碳酸锂回落至155,550元/吨(4月10日)，3月30日16.75万反弹短暂', priceChange: '-2-7%' },
      { category: '电力系统', detail: '变压器短缺持续：交货期4年+，价格自2020年涨60-80%，美国仅满足20%国内需求', priceChange: '持续恶化' },
      { category: '电力系统', detail: '314Ah电芯稳定0.38-0.40元/Wh；行业向500Ah+过渡；出口退税9%→6%', priceChange: '趋稳' },
      { category: '网络设备', detail: 'AAOI获$2亿+1.6T量产大单，目标月产50万只800G+1.6T', priceChange: '里程碑' },
      { category: '网络设备', detail: 'Coherent OFC 2026演示1.6T/3.2T/12.8T+，H2 2026量产', priceChange: '新品' },
      { category: '网络设备', detail: 'Arista 7800R4出货576×800G端口；OFC演示102.4T交换', priceChange: '更新' }
    ]
  },
  {
    date: '2026-04-06',
    version: 'v1.9',
    author: '自动调研(周报)',
    summary: '第4次周度调研更新：美国50%数据中心建设延迟/取消(变压器短缺)；碳酸锂反弹+8%超阈值；Ecolab $47.5亿收购CoolIT；Blackwell供应涨价15-23%；1.6T模块继续渗透',
    changes: [
      { category: '计算设备', detail: 'Blackwell GPU供应整体涨价15-23%(Fusion Worldwide 2026-03-25)，交货期3-7个月', priceChange: '+15-23%' },
      { category: '计算设备', detail: 'H200出口中国需25%附加关税(1月15日正式实施)；Blackwell更先进型号仍受管制', priceChange: '政策' },
      { category: '计算设备', detail: 'Vera Rubin NVL144兼容Oberon架构，功耗~120-130kW/柜；Kyber NVL576 2027年600kW路线图', priceChange: '更新' },
      { category: '散热冷却', detail: 'Ecolab以$47.5亿收购CoolIT Systems(2026-03-20宣布，Q3 2026关闭)，液冷行业重大整合', priceChange: '并购' },
      { category: '散热冷却', detail: '全球AI数据中心液冷市场2025年$5.8亿→2034年$364亿(CAGR 22.7%)；CDU市场$2.54亿→2034年$73.8亿', priceChange: '更新' },
      { category: '电力系统', detail: '美国50%以上数据中心建设因变压器/电池短缺被延迟或取消(Bloomberg 2026-04)', priceChange: '重大风险' },
      { category: '电力系统', detail: '高功率变压器交货期拉长至最长5年(2020年前24-30个月)；价格自2019年累计涨77%', priceChange: '+77%累计' },
      { category: '电力系统', detail: '碳酸锂强力反弹：3月30日单日涨4.69%至16.75万元/吨；4月约15.85万/吨(较上周+8%，超10%阈值)', priceChange: '+8%' },
      { category: '电力系统', detail: '4月储能电芯预测：均价0.38-0.40元/Wh，Tier1最高0.43/Wh；2h系统DC侧0.48-0.50元/Wh', priceChange: '更新' },
      { category: '网络设备', detail: 'E-Power与Raytel联盟推出800G OSFP/QSFP-DD + 1.6T DR8/LPO美国AI市场模块', priceChange: '新品' },
      { category: '网络设备', detail: '800G价格接近$0.5/Gbps触发大规模1.6T迁移；1.6T硅光子占比约60%', priceChange: '趋势' }
    ]
  },
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
