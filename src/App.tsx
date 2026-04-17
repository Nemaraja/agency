import React, { useState } from 'react';
import {
  ShieldCheck, HeartPulse, Car, Mail, X,
  CheckCircle2, ChevronRight, ArrowRight,
  MapPin, Phone, Shield, Send, Check, Menu, ClipboardList,
  Languages
} from 'lucide-react';

const translations = {
  "English": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Explore Plans",
    requestQuote: "Request a Quote",
    fullName: "Full Name",
    email: "Email",
    mobile: "Mobile",
    selectPlan: "Select a Protection Plan",
    reqDocs: "View Required Documents",
    motorTitle: "Motorcar Information",
    year: "Year",
    make: "Make",
    model: "Select Model",
    plate: "Plate No. / Conduction Sticker",
    propTitle: "Property Information",
    propAddress: "Property Address",
    bldgValue: "Bldg Value",
    contValue: "Contents Value",
    propType: "Select Property Type",
    agree: "By submitting, you agree to our",
    tnc: "Terms and Conditions",
    submit: "Submit Inquiry",
    sending: "Sending...",
    sentTitle: "Inquiry Sent!",
    sentDesc: "Thank you for reaching out. One of our risk advisors will contact you shortly.",
    sendAnother: "Send another request",
    partners: "Accredited Partners",
    partnerSub: "Tap a partner to reveal their expertise and history",
    ourPlans: "Our Protection Plans",
    viewDetails: "View Details",
    inquireNow: "Inquire Now",
    understand: "I Understand",
    contSite: "Continue to Site",
    lifeTitle: "Life Insurance",
    lifeShort: "Protect your family's future and peace of mind.",
    lifeLong: "Life insurance is a promise. Our plans cover educational funds, estate planning, and long-term family security.",
    lifeBenefit1: "Death Benefit",
    lifeBenefit2: "Critical Illness",
    lifeBenefit3: "Education Fund",
    lifeBenefit4: "Retirement",
    hmoTitle: "HMO / Health",
    hmoShort: "Comprehensive medical protection for everyone.",
    hmoLong: "Access the best hospitals and doctors through our premium healthcare partner network across the Philippines.",
    hmoBenefit1: "In-patient Care",
    hmoBenefit2: "Emergency",
    hmoBenefit3: "Dental",
    hmoBenefit4: "Annual Physical Exams",
    nonLifeTitle: "Non-Life",
    nonLifeShort: "Protect your vehicles, property, and assets.",
    nonLifeLong: "Robust coverage for your cars, homes, and business operations against unforeseen risks and accidents.",
    nonLifeBenefit1: "Motorcar (OR/CR)",
    nonLifeBenefit2: "Fire Insurance",
    nonLifeBenefit3: "Marine Cargo",
    nonLifeBenefit4: "Surety Bonds"
  },
  "Filipino / Tagalog": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Tingnan ang mga Plano",
    requestQuote: "Humingi ng Quote",
    fullName: "Buong Pangalan",
    email: "Email Address",
    mobile: "Numero ng Telepono",
    selectPlan: "Pumili ng Planong Proteksyon",
    reqDocs: "Tingnan ang mga Kailangang Dokumento",
    motorTitle: "Impormasyon ng Sasakyan",
    year: "Taon",
    make: "Tatak",
    model: "Modelo",
    plate: "Plaka / Conduction Sticker",
    propTitle: "Impormasyon ng Ari-arian",
    propAddress: "Address ng Ari-arian",
    bldgValue: "Halaga ng Gusali",
    contValue: "Halaga ng Laman",
    propType: "Uri ng Ari-arian",
    agree: "Sa pag-sumite, sumasang-ayon ka sa aming",
    tnc: "Mga Tuntunin at Kundisyon",
    submit: "Ipadala ang Inquiry",
    sending: "Ipinapadala...",
    sentTitle: "Naipadala na!",
    sentDesc: "Salamat sa pag-ugnay. May tatawag sa iyo na risk advisor sa lalong madaling panahon.",
    sendAnother: "Magpadala ng panibagong request",
    partners: "Mga Akreditadong Partner",
    partnerSub: "I-tap ang partner para makita ang kanilang kasaysayan",
    ourPlans: "Ang Aming mga Plano",
    viewDetails: "Tingnan ang Detalye",
    inquireNow: "Mag-inquire Ngayon",
    understand: "Naiintindihan Ko",
    contSite: "Magpatuloy sa Site",
    lifeTitle: "Life Insurance",
    lifeShort: "Protektahan ang kinabukasan at kapakanan ng inyong pamilya.",
    lifeLong: "Ang life insurance ay isang pangako. Ang aming mga plano ay sumasaklaw sa pondo para sa edukasyon, estate planning, at pangmatagalang seguridad ng pamilya.",
    lifeBenefit1: "Death Benefit",
    lifeBenefit2: "Critical Illness",
    lifeBenefit3: "Pondo para sa Edukasyon",
    lifeBenefit4: "Retirement",
    hmoTitle: "HMO / Health",
    hmoShort: "Komprehensibong proteksyong medikal para sa lahat.",
    hmoLong: "Makakapag-access sa pinakamahusay na mga ospital at doktor sa pamamagitan ng aming premium healthcare partner network sa buong Pilipinas.",
    hmoBenefit1: "In-patient Care",
    hmoBenefit2: "Emergency",
    hmoBenefit3: "Dental",
    hmoBenefit4: "Annual Physical Exams",
    nonLifeTitle: "Non-Life",
    nonLifeShort: "Protektahan ang inyong sasakyan, ari-arian, at assets.",
    nonLifeLong: "Matatag na coverage para sa inyong mga sasakyan, tahanan, at negosyo laban sa mga hindi inaasahang panganib at aksidente.",
    nonLifeBenefit1: "Motorcar (OR/CR)",
    nonLifeBenefit2: "Fire Insurance",
    nonLifeBenefit3: "Marine Cargo",
    nonLifeBenefit4: "Surety Bonds"
  },
  "中文 (Chinese)": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "探索计划",
    requestQuote: "请求报价",
    fullName: "全名",
    email: "电子邮件",
    mobile: "手机号码",
    selectPlan: "选择保障计划",
    reqDocs: "查看所需文件",
    motorTitle: "车辆信息",
    year: "年份",
    make: "品牌",
    model: "选择型号",
    plate: "车牌号 / 临时牌照",
    propTitle: "财产信息",
    propAddress: "财产地址",
    bldgValue: "建筑价值",
    contValue: "内部物品价值",
    propType: "选择财产类型",
    agree: "提交即表示您同意我们的",
    tnc: "条款与细则",
    submit: "提交咨询",
    sending: "发送中...",
    sentTitle: "咨询已发送！",
    sentDesc: "感谢您的联系。我们的风险顾问将很快与您联系。",
    sendAnother: "发送其他请求",
    partners: "认证合作伙伴",
    partnerSub: "点击合作伙伴了解其专业背景",
    ourPlans: "我们的保障计划",
    viewDetails: "查看详情",
    inquireNow: "立即咨询",
    understand: "我明白了",
    contSite: "进入网站",
    lifeTitle: "人寿保险",
    lifeShort: "保护您家人的未来和内心的平静。",
    lifeLong: "人寿保险是一种承诺。我们的计划涵盖教育基金、遗产规划和长期家庭安全。",
    lifeBenefit1: "身故赔偿",
    lifeBenefit2: "重大疾病",
    lifeBenefit3: "教育基金",
    lifeBenefit4: "退休金",
    hmoTitle: "健康保险",
    hmoShort: "为每个人提供全面的医疗保护。",
    hmoLong: "通过我们在菲律宾的优质医疗合作伙伴网络，获得最好的医院和医生服务。",
    hmoBenefit1: "住院护理",
    hmoBenefit2: "急诊",
    hmoBenefit3: "牙科",
    hmoBenefit4: "年度体检",
    nonLifeTitle: "非人寿保险",
    nonLifeShort: "保护您的车辆、财产和资产。",
    nonLifeLong: "为您的汽车、房屋和商业运营提供强大的保障，应对不可预见的风险和事故。",
    nonLifeBenefit1: "汽车保险 (OR/CR)",
    nonLifeBenefit2: "火灾保险",
    nonLifeBenefit3: "海运货物",
    nonLifeBenefit4: "保证金"
  },
  "日本語 (Japanese)": {
    heroSub: "BDRS Associates Insurance Agency",
    explore: "プランを見る",
    requestQuote: "見積もり依頼",
    fullName: "氏名",
    email: "メールアドレス",
    mobile: "携帯番号",
    selectPlan: "保護プランを選択",
    reqDocs: "必要書類を表示",
    motorTitle: "車両情報",
    year: "年式",
    make: "メーカー",
    model: "モデルを選択",
    plate: "ナンバープレート",
    propTitle: "物件情報",
    propAddress: "物件の住所",
    bldgValue: "建物価値",
    contValue: "動産価値",
    propType: "物件タイプを選択",
    agree: "送信することで、以下に同意したことになります",
    tnc: "利用規約",
    submit: "お問い合わせ",
    sending: "送信中...",
    sentTitle: "送信完了！",
    sentDesc: "お問い合わせありがとうございます。担当者より追ってご連絡いたします。",
    sendAnother: "別のリクエストを送信",
    partners: "提携パートナー",
    partnerSub: "タップして詳細を表示",
    ourPlans: "保護プラン一覧",
    viewDetails: "詳細を見る",
    inquireNow: "今すぐ問い合わせる",
    understand: "了解しました",
    contSite: "サイトへ進む",
    lifeTitle: "生命保険",
    lifeShort: "ご家族の未来と安心を守ります。",
    lifeLong: "生命保険は約束です。教育資金、相続計画、長期的な家族の安全を保障するプランをご用意しています。",
    lifeBenefit1: "死亡保険金",
    lifeBenefit2: "重大疾病",
    lifeBenefit3: "教育資金",
    lifeBenefit4: "退職金",
    hmoTitle: "健康保険",
    hmoShort: "すべての人に包括的な医療保護を。",
    hmoLong: "フィリピン全土のプレミアム医療パートナーネットワークを通じて、最高の病院と医師にアクセスできます。",
    hmoBenefit1: "入院治療",
    hmoBenefit2: "緊急時",
    hmoBenefit3: "歯科",
    hmoBenefit4: "年次健康診断",
    nonLifeTitle: "損害保険",
    nonLifeShort: "車両、財産、資産を保護します。",
    nonLifeLong: "予期せぬリスクや事故から、お車、住宅、ビジネス運営を強固に保護します。",
    nonLifeBenefit1: "自動車保険 (OR/CR)",
    nonLifeBenefit2: "火災保険",
    nonLifeBenefit3: "海上貨物",
    nonLifeBenefit4: "保証金"
  }
};

export default function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const t = translations[selectedLanguage] || translations["English"];
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPlansModal, setShowPlansModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activePartner, setActivePartner] = useState(null);
  
  // Custom Dropdown States
  const [isPlanOpen, setIsPlanOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [isYearOpen, setIsYearOpen] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [selectedMake, setSelectedMake] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState("");
  const [isPropOpen, setIsPropOpen] = useState(false);
  const [selectedProp, setSelectedProp] = useState("");

  // Requirements States
  const [isLifeReqOpen, setIsLifeReqOpen] = useState(false);
  const [isHmoReqOpen, setIsHmoReqOpen] = useState(false);

  // Terms and Conditions State
  const [isTnCOpen, setIsTnCOpen] = useState(false);

  const partners = [
    { name: "Pacific Cross", img: "Pacific-Cross.png", desc: "With over 70 years of regional expertise, Pacific Cross Philippines focuses on specialist medical and travel protection across Asia." },
    { name: "Paramount", img: "Paramount.png", desc: "Founded in 1950, Paramount provides straightforward life and non-life insurance with a focus on quick, reliable claims." },
    { name: "PhilBritish", img: "PhilBritish.png", desc: "Over 50 years of legacy in the Philippines, offering strong financial backing for property and marine insurance." },
    { name: "Asia Insurance", img: "asia-insurance.png", desc: "A strategic venture bringing global standards of risk management and reliable coverage to the local market." },
    { name: "Bethel", img: "bethel.png", desc: "Recognized for diverse non-life products and a strong focus on surety bonds for local business growth." },
    { name: "Maagap", img: "maagap.png", desc: "Known for proactive protection and innovation in comprehensive motor and fire insurance solutions." }
  ];

  const products = [
    {
      id: 'life',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />
    },
    {
      id: 'hmo',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />
    },
    {
      id: 'non-life',
      icon: <Car className="w-10 h-10 text-cyan-400" />
    }
  ];

  const lifeRequirements = [
    "Government Issued ID (Voter's, Passport, Driver's, etc.)",
    "Proof of Income (Latest 3 months payslip/ITR)",
    "PSA Birth Certificate",
    "Marriage Contract (if applicable)",
    "Health Statement / Medical Records (if required)"
  ];

  const hmoRequirements = [
    "Accomplished Application Form",
    "1x1 or 2x2 ID Picture",
    "Clear Copy of 1 Valid ID",
    "Birth Certificate (for dependents)",
    "PhilHealth Number / MDR"
  ];

  const planOptions = ["Life Insurance", "HMO / Health Coverage", "Non-Life: Motorcar", "Non-Life: Fire"];
  const propTypes = ["Residential", "Commercial", "Industrial", "Warehouse"];

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 11 }, (_, i) => (currentYear - i).toString());

  const carData = {
    "Toyota": ["Vios", "Wigo", "Innova", "Fortuner", "Hilux", "Rush", "Raize", "Avanza", "Hiace", "Corolla Altis", "Other Toyota"],
    "Mitsubishi": ["Mirage", "Mirage G4", "Xpander", "Montero Sport", "Strada", "L300", "Other Mitsubishi"],
    "Ford": ["Ranger", "Everest", "Territory", "Mustang", "Explorer", "Other Ford"],
    "Nissan": ["Navara", "Terra", "Almera", "Kicks", "Urvan", "Patrol", "Other Nissan"],
    "Suzuki": ["Ertiga", "Swift", "Dzire", "Jimny", "S-Presso", "XL7", "Celerio", "Other Suzuki"],
    "Isuzu": ["D-Max", "mu-X", "Traviz", "Crosswind", "Other Isuzu"],
    "Honda": ["City", "Civic", "BR-V", "CR-V", "HR-V", "Brio", "Other Honda"],
    "Hyundai": ["Tucson", "Santa Fe", "Accent", "Starex", "Staria", "Creta", "Stargazer", "Other Hyundai"],
    "Kia": ["Soluto", "Stonic", "Seltos", "Carnival", "Sorento", "Other Kia"],
    "MG": ["ZS", "5", "HS", "RX5", "Other MG"],
    "Geely": ["Coolray", "Okavango", "Azkarra", "Emgrand", "Other Geely"],
    "Chevrolet": ["Trailblazer", "Tracker", "Colorado", "Suburban", "Camaro", "Other Chevrolet"],
    "Mazda": ["2", "3", "CX-3", "CX-5", "CX-9", "BT-50", "Other Mazda"],
    "Subaru": ["Forester", "XV", "Outback", "WRX", "BRZ", "Other Subaru"],
    "Other": ["Other Type / Model"]
  };
  
  const carBrands = Object.keys(carData);
  const availableModels = selectedMake ? carData[selectedMake] : [];

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!selectedPlan) return alert("Please select a protection plan");
    
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("service", selectedPlan);
    formData.append("car_year", selectedYear);
    formData.append("car_make", selectedMake);
    formData.append("car_model", selectedModel);
    formData.append("property_type", selectedProp);
    formData.append("access_key", "d8e1068a-a04e-4d7d-90e5-633799a5a0bd");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowLanguageModal(true)} className="p-2 text-slate-400 hover:text-white transition-colors">
              <Languages className="w-5 h-5" />
            </button>
            <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Licensed Insurance Agency
            </div>
            
            {/* THIS REMAINS ENGLISH ONLY AS REQUESTED */}
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Building <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10">BDRS Associates Insurance Agency</p>
            <button onClick={() => setShowPlansModal(true)} className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              {t.explore} <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* FORM */}
          <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl shrink-0 min-h-[520px] flex flex-col justify-center z-10">
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-white text-left">{t.requestQuote}</h3>
                <form onSubmit={onSubmit} className="space-y-4 text-left">
                  <input name="name" type="text" placeholder={t.fullName} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                  <div className="grid grid-cols-2 gap-4">
                    <input name="email" type="email" placeholder={t.email} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                    <input name="phone" type="tel" placeholder={t.mobile} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                  </div>
                  
                  {/* PROTECTION PLAN DROPDOWN */}
                  <div className="relative z-50">
                    <div onClick={() => setIsPlanOpen(!isPlanOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-4 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPlanOpen ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/5'}`}>
                      <span className={selectedPlan ? "text-white font-medium" : "text-slate-500"}>{selectedPlan || t.selectPlan}</span>
                      <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isPlanOpen ? 'rotate-90' : ''}`} />
                    </div>
                    {isPlanOpen && (
                      <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        {planOptions.map((plan) => (
                          <div key={plan} onClick={() => { setSelectedPlan(plan); setIsPlanOpen(false); }} className="group flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-600/20 hover:text-blue-400 text-slate-300 transition-all cursor-pointer mb-1 last:mb-0">
                            <span className="text-sm font-semibold">{plan}</span>
                            {selectedPlan === plan && <Check className="w-4 h-4 text-blue-400" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* LIFE INSURANCE REQUIREMENTS */}
                  {selectedPlan === "Life Insurance" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                        <ClipboardList className="w-3 h-3" /> Application Requirements
                      </p>
                      <div className="relative z-40">
                        <div onClick={() => setIsLifeReqOpen(!isLifeReqOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isLifeReqOpen ? 'border-blue-500' : 'border-white/5'}`}>
                          <span className="text-xs text-white">{t.reqDocs}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isLifeReqOpen ? 'rotate-90 text-blue-400' : ''}`} />
                        </div>
                        {isLifeReqOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-3 shadow-2xl z-50">
                            <ul className="space-y-2">
                              {lifeRequirements.map((req, i) => (
                                <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300">
                                  <Check className="w-3 h-3 text-blue-400 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* HMO REQUIREMENTS */}
                  {selectedPlan === "HMO / Health Coverage" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/20">
                      <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                        <ClipboardList className="w-3 h-3" /> Enrollment Requirements
                      </p>
                      <div className="relative z-40">
                        <div onClick={() => setIsHmoReqOpen(!isHmoReqOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isHmoReqOpen ? 'border-emerald-500' : 'border-white/5'}`}>
                          <span className="text-xs text-white">{t.reqDocs}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isHmoReqOpen ? 'rotate-90 text-emerald-400' : ''}`} />
                        </div>
                        {isHmoReqOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-3 shadow-2xl z-50">
                            <ul className="space-y-2">
                              {hmoRequirements.map((req, i) => (
                                <li key={i} className="flex gap-2 items-start text-[10px] text-slate-300">
                                  <Check className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* MOTORCAR CONDITIONAL FIELDS */}
                  {selectedPlan === "Non-Life: Motorcar" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{t.motorTitle}</p>
                      
                      <div className="grid grid-cols-2 gap-3 relative z-40">
                        {/* CUSTOM YEAR DROPDOWN */}
                        <div className="relative">
                          <div onClick={() => setIsYearOpen(!isYearOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isYearOpen ? 'border-blue-500' : 'border-white/5'}`}>
                            <span className={`text-xs ${selectedYear ? "text-white" : "text-slate-500"}`}>{selectedYear || t.year}</span>
                            <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isYearOpen ? 'rotate-90' : ''}`} />
                          </div>
                          {isYearOpen && (
                            <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                              {yearOptions.map(y => (
                                <div key={y} onClick={() => { setSelectedYear(y); setIsYearOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-xs text-slate-300 cursor-pointer">{y}</div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CUSTOM MAKE DROPDOWN */}
                        <div className="relative">
                          <div onClick={() => setIsMakeOpen(!isMakeOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isMakeOpen ? 'border-blue-500' : 'border-white/5'}`}>
                            <span className={`text-xs ${selectedMake ? "text-white" : "text-slate-500"}`}>{selectedMake || t.make}</span>
                            <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isMakeOpen ? 'rotate-90' : ''}`} />
                          </div>
                          {isMakeOpen && (
                            <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                              {carBrands.map(b => (
                                <div key={b} onClick={() => {
                                  setSelectedMake(b);
                                  setSelectedModel(""); // Reset model when make changes
                                  setIsMakeOpen(false);
                                }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-xs text-slate-300 cursor-pointer">{b}</div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* DEPENDENT MODEL DROPDOWN */}
                      <div className="relative z-30">
                        <div
                          onClick={() => selectedMake ? setIsModelOpen(!isModelOpen) : null}
                          className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center transition-all duration-300 ${!selectedMake ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isModelOpen ? 'border-blue-500' : 'border-white/5'}`}
                        >
                          <span className={`text-sm ${selectedModel ? "text-white" : "text-slate-500"}`}>
                            {!selectedMake ? t.model : (selectedModel || t.model)}
                          </span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isModelOpen ? 'rotate-90' : ''}`} />
                        </div>
                        {isModelOpen && selectedMake && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                            {availableModels.map(m => (
                              <div key={m} onClick={() => { setSelectedModel(m); setIsModelOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-sm text-slate-300 cursor-pointer">{m}</div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input name="plate_no" type="text" placeholder={t.plate} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                    </div>
                  )}

                  {/* FIRE CONDITIONAL FIELDS */}
                  {selectedPlan === "Non-Life: Fire" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-orange-500/5 rounded-2xl border border-orange-500/20 relative z-40">
                      <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{t.propTitle}</p>
                      <input name="fire_address" type="text" placeholder={t.propAddress} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                      <div className="grid grid-cols-2 gap-3">
                        <input name="building_value" type="text" placeholder={t.bldgValue} required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                        <input name="contents_value" type="text" placeholder={t.contValue} className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                      </div>
                      
                      {/* CUSTOM PROPERTY TYPE DROPDOWN */}
                      <div className="relative">
                        <div onClick={() => setIsPropOpen(!isPropOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPropOpen ? 'border-orange-500' : 'border-white/5'}`}>
                          <span className={`text-xs ${selectedProp ? "text-white" : "text-slate-500"}`}>{selectedProp || t.propType}</span>
                          <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isPropOpen ? 'rotate-90' : ''}`} />
                        </div>
                        {isPropOpen && (
                          <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50">
                            {propTypes.map(p => (
                              <div key={p} onClick={() => { setSelectedProp(p); setIsPropOpen(false); }} className="px-4 py-2 rounded-lg hover:bg-orange-600/20 text-xs text-slate-300 cursor-pointer">{p}</div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  {/* TERMS AND CONDITIONS LINK */}
                  <div className="pt-2 text-center relative z-20">
                    <p className="text-[10px] text-slate-500">
                      {t.agree}{' '}
                      <span
                        onClick={() => setIsTnCOpen(true)}
                        className="font-bold text-blue-400 hover:text-blue-300 cursor-pointer underline underline-offset-2 transition-colors"
                      >
                        {t.tnc}
                      </span>
                    </p>
                  </div>

                  <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-[0.98] mt-2 relative z-10">
                    {loading ? t.sending : t.submit}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-emerald-400 w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{t.sentTitle}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">{t.sentDesc}</p>
                <button onClick={() => setSubmitted(false)} className="text-blue-400 font-bold text-sm uppercase tracking-widest hover:text-blue-300 transition">{t.sendAnother}</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ACCREDITED PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">{t.partners}</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 italic mb-16">{t.partnerSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {partners.map((p, i) => (
            <div key={i} onClick={() => setActivePartner(activePartner === i ? null : i)} className={`group p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer ${activePartner === i ? 'bg-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
              <div className="bg-white p-6 rounded-3xl h-28 flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold mb-2 flex justify-between items-center text-white">
                {p.name} <ChevronRight className={`w-5 h-5 transition-transform ${activePartner === i ? 'rotate-90 text-blue-500' : ''}`} />
              </h4>
              <div className={`overflow-hidden transition-all duration-500 ${activePartner === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-white/10 pt-4">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGE MODAL */}
      {showLanguageModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl" />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-sm rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-500">
            <div className="w-16 h-16 bg-blue-600/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Languages className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-8 text-white text-center">Language / 言語 / 语言</h3>
            
            <div className="space-y-3 mb-8">
              {Object.keys(translations).map((lang) => (
                <div
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`w-full py-4 rounded-2xl border flex items-center justify-between px-6 cursor-pointer transition-all ${selectedLanguage === lang ? 'bg-blue-600/10 border-blue-500 text-white shadow-lg' : 'bg-white/5 border-white/5 text-slate-400 hover:bg-white/10'}`}
                >
                  <span className="font-bold text-sm">{lang}</span>
                  {selectedLanguage === lang && <Check className="w-4 h-4 text-blue-400" />}
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowLanguageModal(false)}
              className="w-full py-4 bg-blue-600 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 transition text-white shadow-lg shadow-blue-600/20"
            >
              {t.contSite}
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency. All Rights Reserved.</p>
      </footer>

      {/* PLANS MODAL */}
      {showPlansModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setShowPlansModal(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-5xl rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300 text-left max-h-[90vh] overflow-y-auto">
            <button onClick={() => setShowPlansModal(false)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white z-10"><X className="w-5 h-5" /></button>
            
            <h2 className="text-4xl font-bold text-center mb-12 text-white">{t.ourPlans}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Life Insurance */}
              <div className="bg-slate-800/50 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[0].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.lifeTitle}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{t.lifeLong}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.lifeBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>

              {/* HMO / Health */}
              <div className="bg-slate-800/50 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[1].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.hmoTitle}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{t.hmoLong}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.hmoBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>

              {/* Non-Life */}
              <div className="bg-slate-800/50 border border-white/10 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all">
                <div className="mb-6">{products[2].icon}</div>
                <h4 className="text-2xl font-bold mb-4 text-white">{t.nonLifeTitle}</h4>
                <p className="text-slate-400 mb-6 leading-relaxed">{t.nonLifeLong}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit1}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit2}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit3}</span>
                  </div>
                  <div className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-white">{t.nonLifeBenefit4}</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => { 
                    setShowPlansModal(false); 
                    window.scrollTo({top: 0, behavior: 'smooth'}); 
                  }} 
                  className="w-full py-3 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition text-white text-sm"
                >
                  {t.inquireNow}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300 text-left">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white"><X className="w-5 h-5" /></button>
            <div className="mb-6">{selectedProduct.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-white">{selectedProduct.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">{selectedProduct.longDesc}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-white">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="w-full py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white">{t.inquireNow}</button>
          </div>
        </div>
      )}

      {/* TERMS AND CONDITIONS MODAL */}
      {isTnCOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsTnCOpen(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300 text-left">
            <button onClick={() => setIsTnCOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white"><X className="w-5 h-5" /></button>
            <h3 className="text-3xl font-bold mb-6 text-white">Terms & Conditions</h3>
            <div className="text-sm text-slate-400 space-y-4 leading-relaxed overflow-y-auto max-h-96 pr-2">
              <p><strong>1. Intermediary Status:</strong> You acknowledge that BDRS Associates acts strictly as a licensed insurance intermediary (broker), facilitating negotiations between you and the insurance provider. We are not an insurer and do not directly provide underwriting services or issue policies.</p>
              <p><strong>2. Obligation of True Information:</strong> You certify that all details provided in this request are accurate, complete, and correct. You understand that any misrepresentation or omission may invalidate your quote, cause delays, or provide grounds for the insurer to cancel any subsequent policy.</p>
              <p><strong>3. Non-Binding Nature:</strong> Submitting this inquiry or receiving an initial quotation does not bind coverage. No insurance policy is in effect until formally approved by the chosen carrier, the premium is paid in full, and the policy document is issued.</p>
              <p><strong>4. Consent to Communicate:</strong> You expressly authorize BDRS Associates and its licensed agents to contact you using the provided email address and phone number for purposes related to this quote request and insurance product offerings.</p>
              <p><strong>5. Authorization to Process Data:</strong> You grant BDRS Associates consent to collect and process the provided personal data solely for the purpose of generating insurance quotes and facilitating your policy application in compliance with the Data Privacy Act of 2012.</p>
            </div>
            <button onClick={() => setIsTnCOpen(false)} className="w-full mt-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white">I Understand</button>
          </div>
        </div>
      )}
    </div>
  );
}
