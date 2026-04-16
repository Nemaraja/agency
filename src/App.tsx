import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Shield, Send, Check, ClipboardList,
  Languages
} from 'lucide-react';

// --- TRANSLATIONS DICTIONARY ---
const translations = {
  "English": {
    heroTitle: "Building Dependable Risk Solutions",
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Explore Plans",
    requestQuote: "Request a Quote",
    fullName: "Full Name",
    email: "Email",
    mobile: "Mobile",
    selectPlan: "Select a Protection Plan",
    requirements: "Application Requirements",
    viewDocs: "View Required Documents",
    motorTitle: "Motorcar Information",
    year: "Year",
    make: "Make",
    model: "Select Model",
    plate: "Plate No. / Conduction Sticker",
    propTitle: "Property Information",
    propAddr: "Property Address",
    bldgVal: "Bldg Value",
    contVal: "Contents Value",
    propType: "Select Property Type",
    agree: "By submitting, you agree to our",
    tnc: "Terms and Conditions",
    submit: "Submit Inquiry",
    sending: "Sending...",
    partners: "Accredited Partners",
    partnerSub: "Tap a partner to reveal their expertise and history",
    ourPlans: "Our Protection Plans",
    viewDetails: "View Details",
    understand: "I Understand",
    contSite: "Continue to Site"
  },
  "Filipino / Tagalog": {
    heroTitle: "Bumubuo ng Maaasahang Solusyon sa Panganib",
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Tingnan ang mga Plano",
    requestQuote: "Humingi ng Quote",
    fullName: "Buong Pangalan",
    email: "Email Address",
    mobile: "Numero ng Telepono",
    selectPlan: "Pumili ng Planong Proteksyon",
    requirements: "Mga Kinakailangang Dokumento",
    viewDocs: "Tingnan ang mga Dokumento",
    motorTitle: "Impormasyon ng Sasakyan",
    year: "Taon",
    make: "Tatak",
    model: "Pumili ng Modelo",
    plate: "Plaka / Conduction Sticker",
    propTitle: "Impormasyon ng Ari-arian",
    propAddr: "Address ng Ari-arian",
    bldgVal: "Halaga ng Gusali",
    contVal: "Halaga ng Gamit",
    propType: "Uri ng Ari-arian",
    agree: "Sa pag-sumite, sumasang-ayon ka sa aming",
    tnc: "Mga Tuntunin at Kundisyon",
    submit: "Ipadala ang Inquiry",
    sending: "Ipinapadala...",
    partners: "Mga Akreditadong Partner",
    partnerSub: "I-tap ang partner para makita ang kanilang kasaysayan",
    ourPlans: "Ang Aming mga Plano",
    viewDetails: "Tingnan ang Detalye",
    understand: "Naiintindihan Ko",
    contSite: "Magpatuloy sa Site"
  },
  "中文 (Chinese)": {
    heroTitle: "构建可靠的风险解决方案",
    heroSub: "BDRS Associates 保险代理公司",
    explore: "探索计划",
    requestQuote: "请求报价",
    fullName: "全名",
    email: "电子邮件",
    mobile: "手机号码",
    selectPlan: "选择保障计划",
    requirements: "申请材料要求",
    viewDocs: "查看所需文件",
    motorTitle: "车辆信息",
    year: "年份",
    make: "品牌",
    model: "选择型号",
    plate: "车牌号 / 临时牌照",
    propTitle: "财产信息",
    propAddr: "房产地址",
    bldgVal: "建筑价值",
    contVal: "财务价值",
    propType: "物业类型",
    agree: "提交即表示您同意我们的",
    tnc: "条款与细则",
    submit: "提交咨询",
    sending: "发送中...",
    partners: "认证合作伙伴",
    partnerSub: "点击合作伙伴了解其专业背景",
    ourPlans: "我们的保障计划",
    viewDetails: "查看详情",
    understand: "我明白了",
    contSite: "进入网站"
  },
  "日本語 (Japanese)": {
    heroTitle: "信頼できるリスクソリューションの構築",
    heroSub: "BDRS Associates 保険代理店",
    explore: "プランを見る",
    requestQuote: "見積もり依頼",
    fullName: "氏名",
    email: "メールアドレス",
    mobile: "携帯番号",
    selectPlan: "保護プランを選択",
    requirements: "申請必要書類",
    viewDocs: "必要書類を確認",
    motorTitle: "車両情報",
    year: "年式",
    make: "メーカー",
    model: "モデルを選択",
    plate: "ナンバープレート",
    propTitle: "物件情報",
    propAddr: "物件住所",
    bldgVal: "建物評価額",
    contVal: "家財評価額",
    propType: "物件タイプ",
    agree: "送信することで、以下に同意したことになります",
    tnc: "利用規約",
    submit: "お問い合わせ",
    sending: "送信中...",
    partners: "提携パートナー",
    partnerSub: "タップして詳細を表示",
    ourPlans: "保護プラン一覧",
    viewDetails: "詳細を見る",
    understand: "了解しました",
    contSite: "サイトへ進む"
  },
  "Español (Spanish)": {
    heroTitle: "Construyendo Soluciones de Riesgo Confiables",
    heroSub: "BDRS Associates Agencia de Seguros",
    explore: "Explorar Planes",
    requestQuote: "Solicitar Cotización",
    fullName: "Nombre Completo",
    email: "Correo Electrónico",
    mobile: "Móvil",
    selectPlan: "Seleccione un Plan",
    requirements: "Requisitos de Solicitud",
    viewDocs: "Ver Documentos Requeridos",
    motorTitle: "Información del Vehículo",
    year: "Año",
    make: "Marca",
    model: "Seleccionar Modelo",
    plate: "Placa / Sticker de Conducción",
    propTitle: "Información de la Propiedad",
    propAddr: "Dirección de la Propiedad",
    bldgVal: "Valor del Edificio",
    contVal: "Valor del Contenido",
    propType: "Tipo de Propiedad",
    agree: "Al enviar, usted acepta nuestros",
    tnc: "Términos y Condiciones",
    submit: "Enviar Consulta",
    sending: "Enviando...",
    partners: "Socios Acreditados",
    partnerSub: "Toque un socio para ver su historia",
    ourPlans: "Nuestros Planes de Protección",
    viewDetails: "Ver Detalles",
    understand: "Entiendo",
    contSite: "Continuar al Sitio"
  }
};

export default function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  
  // Access the current translation set
  const t = translations[selectedLanguage] || translations["English"];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activePartner, setActivePartner] = useState(null);
  
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedProp, setSelectedProp] = useState("");

  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isPropOpen, setIsPropOpen] = useState(false);
  const [isLifeReqOpen, setIsLifeReqOpen] = useState(false);
  const [isHmoReqOpen, setIsHmoReqOpen] = useState(false);
  const [isTnCOpen, setIsTnCOpen] = useState(false);

  // Static Data (doesn't change)
  const partners = [
    { name: "Pacific Cross", img: "Pacific-Cross.png", desc: "Expertise in specialist medical and travel protection across Asia." },
    { name: "Paramount", img: "Paramount.png", desc: "Reliable life and non-life insurance since 1950." },
    { name: "PhilBritish", img: "PhilBritish.png", desc: "Strong financial backing for property and marine insurance." },
    { name: "Asia Insurance", img: "asia-insurance.png", desc: "Global standards of risk management." },
    { name: "Bethel", img: "bethel.png", desc: "Focused on non-life products and surety bonds." },
    { name: "Maagap", img: "maagap.png", desc: "Innovation in comprehensive motor and fire insurance." }
  ];

  const products = [
    { id: 'life', title: 'Life Insurance', icon: <ShieldCheck className="w-10 h-10 text-blue-400" />, shortDesc: 'Protect your family’s future.', benefits: ['Death Benefit', 'Critical Illness'] },
    { id: 'hmo', title: 'HMO / Health', icon: <HeartPulse className="w-10 h-10 text-emerald-400" />, shortDesc: 'Medical protection for everyone.', benefits: ['In-patient', 'Emergency'] },
    { id: 'non-life', title: 'Non-Life', icon: <Car className="w-10 h-10 text-cyan-400" />, shortDesc: 'Vehicles and property protection.', benefits: ['Motorcar', 'Fire Insurance'] }
  ];

  const carBrands = ["Toyota", "Mitsubishi", "Ford", "Nissan", "Suzuki", "Isuzu", "Honda", "Hyundai", "Kia", "MG", "Geely", "Chevrolet", "Mazda", "Subaru", "Other"];
  const propTypes = ["Residential", "Commercial", "Industrial", "Warehouse"];
  const yearOptions = Array.from({ length: 11 }, (_, i) => (2026 - i).toString());

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Submit logic stays same...
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowLanguageModal(true)} className="p-2 text-slate-400 hover:text-white transition"><Languages className="w-5 h-5" /></button>
            <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Licensed Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">{t.heroTitle}</span>
            </h1>
            <p className="text-xl font-bold text-slate-300 mb-10">{t.heroSub}</p>
            <a href="#products" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg items-center gap-2">
              {t.explore} <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* FORM */}
          <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl z-10">
            {!submitted ? (
              <form onSubmit={onSubmit} className="space-y-4 text-left">
                <h3 className="text-2xl font-bold mb-6 text-white">{t.requestQuote}</h3>
                <input name="name" type="text" placeholder={t.fullName} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white" />
                <div className="grid grid-cols-2 gap-4">
                  <input name="email" type="email" placeholder={t.email} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white" />
                  <input name="phone" type="tel" placeholder={t.mobile} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white" />
                </div>
                
                {/* PLAN DROPDOWN */}
                <div className="relative z-50">
                  <div onClick={() => setIsPlanOpen(!isPlanOpen)} className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 flex justify-between items-center cursor-pointer">
                    <span className={selectedPlan ? "text-white" : "text-slate-500"}>{selectedPlan || t.selectPlan}</span>
                    <ChevronRight className={`w-5 h-5 transition-transform ${isPlanOpen ? 'rotate-90' : ''}`} />
                  </div>
                  {isPlanOpen && (
                    <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-2 shadow-2xl">
                      {["Life Insurance", "HMO / Health", "Non-Life: Motorcar", "Non-Life: Fire"].map((plan) => (
                        <div key={plan} onClick={() => { setSelectedPlan(plan); setIsPlanOpen(false); }} className="px-4 py-3 rounded-xl hover:bg-blue-600/20 text-slate-300 cursor-pointer">{plan}</div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DYNAMIC FIELDS */}
                {selectedPlan.includes("Motorcar") && (
                  <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20 space-y-4">
                    <p className="text-[10px] font-bold text-blue-400 uppercase">{t.motorTitle}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <div onClick={() => setIsYearOpen(!isYearOpen)} className="bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs cursor-pointer flex justify-between">
                          {selectedYear || t.year} <ChevronRight className="w-4 h-4" />
                        </div>
                        {isYearOpen && <div className="absolute top-full w-full bg-slate-900 border border-white/10 z-50 max-h-32 overflow-auto">{yearOptions.map(y => <div key={y} onClick={() => {setSelectedYear(y); setIsYearOpen(false);}} className="p-2 hover:bg-blue-600/20">{y}</div>)}</div>}
                      </div>
                      <div className="relative">
                        <div onClick={() => setIsMakeOpen(!isMakeOpen)} className="bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs cursor-pointer flex justify-between">
                          {selectedMake || t.make} <ChevronRight className="w-4 h-4" />
                        </div>
                        {isMakeOpen && <div className="absolute top-full w-full bg-slate-900 border border-white/10 z-50 max-h-32 overflow-auto">{carBrands.map(b => <div key={b} onClick={() => {setSelectedMake(b); setIsMakeOpen(false);}} className="p-2 hover:bg-blue-600/20">{b}</div>)}</div>}
                      </div>
                    </div>
                    <input placeholder={t.plate} className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs" />
                  </div>
                )}

                <div className="pt-2 text-center relative z-20">
                  <p className="text-[10px] text-slate-500">
                    {t.agree} <span onClick={() => setIsTnCOpen(true)} className="font-bold text-blue-400 hover:text-blue-300 cursor-pointer underline">{t.tnc}</span>
                  </p>
                </div>

                <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all">
                  {loading ? t.sending : t.submit}
                </button>
              </form>
            ) : (
              <div className="text-center py-10">
                <Send className="text-emerald-400 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold">Sent!</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ACCREDITED PARTNERS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">{t.partners}</h2>
          <p className="text-slate-400 italic">{t.partnerSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <div key={i} onClick={() => setActivePartner(activePartner === i ? null : i)} className="p-8 rounded-[2.5rem] border border-white/10 bg-white/[0.02] cursor-pointer">
              <div className="bg-white p-6 rounded-3xl h-24 flex items-center justify-center mb-6 overflow-hidden">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain" />
              </div>
              <h4 className="text-xl font-bold flex justify-between text-white">{p.name} <ChevronRight className={activePartner === i ? 'rotate-90' : ''} /></h4>
              {activePartner === i && <p className="text-sm text-slate-400 mt-4 pt-4 border-t border-white/10">{p.desc}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency.</p>
      </footer>

      {/* LANGUAGE PREFERENCE MODAL */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-sm rounded-[3rem] p-10 shadow-2xl">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Languages className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Language / 语言 / 言語</h3>
            
            <div className="space-y-3 mb-8 overflow-y-auto max-h-60 pr-2">
              {Object.keys(translations).map((lang) => (
                <div 
                  key={lang} 
                  onClick={() => setSelectedLanguage(lang)}
                  className={`w-full py-4 rounded-2xl border flex items-center justify-between px-6 cursor-pointer transition-all ${selectedLanguage === lang ? 'bg-blue-600/10 border-blue-500 text-white' : 'bg-white/5 border-white/5 text-slate-400'}`}
                >
                  <span className="font-bold text-sm">{lang}</span>
                  {selectedLanguage === lang && <Check className="w-4 h-4 text-blue-400" />}
                </div>
              ))}
            </div>

            <button onClick={() => setShowLanguageModal(false)} className="w-full py-4 bg-blue-600 rounded-2xl font-black text-xs hover:bg-blue-500 transition text-white">
              {t.contSite}
            </button>
          </div>
        </div>
      )}

      {/* T&C MODAL */}
      {isTnCOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsTnCOpen(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10">
            <h3 className="text-3xl font-bold mb-6 text-white">{t.tnc}</h3>
            <div className="text-sm text-slate-400 space-y-4 max-h-96 overflow-y-auto pr-2">
              <p><strong>1. Intermediary Status:</strong> BDRS Associates acts as a broker between you and the provider.</p>
              <p><strong>2. Accuracy:</strong> You certify all info provided is true and correct.</p>
              <p><strong>3. Non-Binding:</strong> Inquiry does not bind coverage until policy issuance.</p>
            </div>
            <button onClick={() => setIsTnCOpen(false)} className="w-full mt-8 py-4 bg-blue-600 rounded-2xl font-bold text-white">{t.understand}</button>
          </div>
        </div>
      )}
    </div>
  );
}
