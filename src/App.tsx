import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  Zap, Globe, Cpu, ShieldCheck, 
  ArrowRight, Mail, ChevronRight, Activity, 
  Battery, Cloud, Server, Leaf, ChevronDown,
  Droplets, Factory, MapPin, Users
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('中文');

  const languages = [
    { code: 'zh', label: '中文' },
    { code: 'en', label: 'English' },
    { code: 'th', label: 'ไทย' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'de', label: 'Deutsch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-wide">AethraVolt <span className="text-slate-400 font-normal text-sm ml-2 hidden sm:inline-block">合擎源动</span></span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-emerald-400 transition-colors">首页</a>
          <a href="#products" className="hover:text-emerald-400 transition-colors">产品中心</a>
          <a href="#cases" className="hover:text-emerald-400 transition-colors">案例中心</a>
          <a href="#about" className="hover:text-emerald-400 transition-colors">关于我们</a>
          <a href="#contact" className="hover:text-emerald-400 transition-colors">联系我们</a>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline-block">{currentLang}</span>
              <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-32 bg-slate-900 border border-white/10 rounded-xl shadow-xl overflow-hidden py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setCurrentLang(lang.label);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      currentLang === lang.label 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'text-slate-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a href="mailto:info@aethravolt.com" className="hidden sm:flex px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 items-center gap-2">
            <Mail className="w-4 h-4" />
            联系我们
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/techgrid/1920/1080')] opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          AI-Driven Energy Autonomy
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight"
        >
          智启能源 <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">绿擎未来</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 font-light"
        >
          AI+能源驱动的“零碳新质生产力”运营商
          <br className="hidden md:block" />
          用可再生能源与AI技术驱动能源低碳未来
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#products" className="px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
            探索产品与服务
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#about" className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all border border-white/10 w-full sm:w-auto justify-center">
            了解合擎源动
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent" />
      </motion.div>
    </section>
  );
};

const Products = () => {
  const features = [
    {
      icon: <Server className="w-6 h-6 text-blue-400" />,
      title: "AethraEdge 边缘能量控制",
      desc: "一体化智能硬件架构，内置AI控制模块，实现负荷预测与动态功率优化，高频数字电源响应速度提升10倍。"
    },
    {
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      title: "AethraPilot AI智能控制",
      desc: "对空压机、冷站等高耗能设备进行毫秒级优化控制，AI学习产线节拍，实现“人休机停、按需供能”。"
    },
    {
      icon: <Cloud className="w-6 h-6 text-purple-400" />,
      title: "AethraGrid 能源管理云平台",
      desc: "“端-边-云”三位一体能源数字化系统，实现源-网-荷-储全域能量管理与协同调度。"
    },
    {
      icon: <Activity className="w-6 h-6 text-rose-400" />,
      title: "擎苍 AethraCore 大模型",
      desc: "能源中枢智能体，融合气象状态、电网价格、负荷功率，进行多目标决策与资源调度。"
    }
  ];

  const services = [
    {
      name: "Aethra·臻电™",
      subtitle: "主动式电能治理",
      desc: "针对高端制造业痛点，提供基于AI的主动式电能治理方案，保障生产“大动脉”稳定运行。",
      features: ["三相不平衡治理", "谐波抑制", "无功补偿至99%", "AI主动防御"],
      color: "from-blue-500/20 to-transparent",
      borderColor: "border-blue-500/30",
      icon: <Zap className="w-8 h-8 text-blue-400" />
    },
    {
      name: "Aethra·驭能™",
      subtitle: "AI驱动的能源自动驾驶",
      desc: "构建“源-网-荷-储”多维灵活性资源池，将成本中心转化为收益资产。",
      features: ["AI削峰填谷", "智能水蓄冷", "VPP虚拟电厂收益", "绿电最大化"],
      color: "from-emerald-500/20 to-transparent",
      borderColor: "border-emerald-500/30",
      icon: <Battery className="w-8 h-8 text-emerald-400" />
    },
    {
      name: "Aethra·绿擎™",
      subtitle: "碳管理与ESG合规",
      desc: "以能源数字化和AI驱动，提供可量化、可核查的碳管理报告，助力企业实现全球供应链绿色合规。",
      features: ["AethraGrid平台", "EMS+MES联动", "碳足迹追踪", "CBAM合规服务"],
      color: "from-purple-500/20 to-transparent",
      borderColor: "border-purple-500/30",
      icon: <Leaf className="w-8 h-8 text-purple-400" />
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-900 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Core Tech */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">核心技术体系</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              以擎苍AethraCore能源中枢大模型为核心，构建“1+5”多维产品矩阵，打造工业绿色微电网。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-950 border border-white/5 hover:border-white/10 rounded-3xl p-8 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">三大品牌服务</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              直击全球最大制造链企业能源管理痛点，以“三位一体”的一站式综合能源解决方案模式切入。
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`relative rounded-3xl bg-slate-950 border ${service.borderColor} overflow-hidden flex flex-col h-full`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${service.color} opacity-50`} />
                <div className="relative p-8 flex-grow flex flex-col">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-sm font-medium text-slate-300 mb-4">{service.subtitle}</div>
                  <p className="text-slate-400 mb-8 flex-grow">{service.desc}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Cases = () => {
  const cases = [
    {
      title: "零碳工厂：光储一体化项目",
      desc: "通过分布式光伏与储能系统结合，实现源头减碳与能源自给，大幅降低企业用电成本。",
      image: "https://picsum.photos/seed/solarfactory/800/600",
      icon: <Battery className="w-5 h-5 text-emerald-400" />
    },
    {
      title: "零碳工厂：绿电+水蓄冷项目",
      desc: "利用夜间低谷电价进行水蓄冷，白天释放冷量，实现错峰用电与空调能耗极致优化。",
      image: "https://picsum.photos/seed/cooling/800/600",
      icon: <Droplets className="w-5 h-5 text-blue-400" />
    },
    {
      title: "零碳园区：光伏+污水处理项目",
      desc: "创新性融合模式，通过智慧能源管理系统协同调度光伏发电与污水处理负荷，实现源网荷储一体化。",
      image: "https://picsum.photos/seed/watertreatment/800/600",
      icon: <Factory className="w-5 h-5 text-purple-400" />
    },
    {
      title: "零碳园区：德国光储充一体化项目",
      desc: "海外标杆项目，集成光伏、储能与充电桩，打造欧洲绿色微电网示范，助力全球化零碳布局。",
      image: "https://picsum.photos/seed/germany/800/600",
      icon: <MapPin className="w-5 h-5 text-rose-400" />
    }
  ];

  return (
    <section id="cases" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">项目案例中心</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            从国内到海外，从单体工厂到大型园区，合擎源动持续打造零碳新质生产力标杆。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-slate-900 border border-white/5 hover:border-white/20 transition-all"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
              </div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center shadow-xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              关于合擎源动 <br />
              <span className="text-emerald-400">重塑能源世界</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              合擎源动AethraVolt成立于2017年美国加州圣地亚哥，是北美领先的能源交易与虚拟电厂平台；2025年设立于中国深圳总部，服务中国与亚太市场。
            </p>
            
            <div className="space-y-6">
              {[
                { title: "低碳绿色能源", desc: "分布式光储与绿电直连，物理确权绿色电力来源。" },
                { title: "能源精益运营", desc: "AI设备级智控，毫秒级寻优，重构能源用电效率。" },
                { title: "ESG价值创造", desc: "产品全生命周期LCA建模，打造国际互认的绿色身份证。" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4" >
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <ChevronRight className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative border border-white/10">
              <img 
                src="https://picsum.photos/seed/windpower/800/800" 
                alt="Renewable Energy" 
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-white mb-1">1GW+</div>
                  <div className="text-sm text-slate-400">聚合管理绿色能源</div>
                </div>
                <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">100万吨</div>
                  <div className="text-sm text-slate-400">等效减少CO₂排放</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-2xl font-bold text-center text-white mb-10">强大的股东与合作伙伴</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "广州智慧用电与城市照明", desc: "南方电网旗下负责综合能源投资和运营的公司" },
              { name: "国瑞能源集团", desc: "累计开发风电超16GW，业务涵盖可再生能源全链条" },
              { name: "中山公用能源发展有限公司", desc: "地方性国企，新能源产业投资方" }
            ].map((partner, i) => (
              <div key={i} className="bg-slate-950 border border-white/5 rounded-2xl p-8 text-center hover:border-white/20 transition-colors">
                <Users className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{partner.name}</h4>
                <p className="text-sm text-slate-400">{partner.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Global Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-950 rounded-3xl border border-white/5 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-6">全球化布局</h3>
              <p className="text-slate-400 text-lg mb-8">
                未来5年计划在全球范围内零碳总投资额达<span className="text-emerald-400 font-bold">100亿</span>，
                运营超<span className="text-emerald-400 font-bold">400个</span>零碳工厂或园区，
                运营风电和光伏等绿色能源资产超<span className="text-emerald-400 font-bold">6GW</span>。
              </p>
              <div className="grid grid-cols-2 gap-4">
                {["中国", "德国", "澳大利亚", "泰国", "越南", "美国"].map((country, i) => (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    {country}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
              <img src="https://picsum.photos/seed/worldmap/800/600" alt="Global Map" className="w-full h-full object-cover opacity-50" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-950 pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white tracking-wide">AethraVolt</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8">
              AI+能源驱动的“零碳新质生产力”运营商。用可再生能源与AI技术驱动能源低碳未来。
            </p>
            <a href="mailto:info@aethravolt.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all">
              <Mail className="w-4 h-4" />
              联系我们: info@aethravolt.com
            </a>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">快速链接</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">首页</a></li>
              <li><a href="#products" className="hover:text-emerald-400 transition-colors">产品中心</a></li>
              <li><a href="#cases" className="hover:text-emerald-400 transition-colors">案例中心</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">关于我们</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">全球总部</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>中国·深圳 (亚太总部)</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>美国·加州圣地亚哥 (北美总部)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} AethraVolt 合擎源动. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">隐私政策</a>
            <a href="#" className="hover:text-white transition-colors">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-emerald-500/30 scroll-smooth">
      <Navbar />
      <Hero />
      <Products />
      <Cases />
      <About />
      <Footer />
    </div>
  );
}
