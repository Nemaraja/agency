import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Shield, Send, Check, ClipboardList,
  Languages
} from 'lucide-react';

// --- FULL TRANSLATIONS DICTIONARY ---
const translations = {
  "English": {
    heroTitle: <>Building <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions</span></>,
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Explore Plans",
    requestQuote: "Request a Quote",
    fullName: "Full Name",
    email: "Email",
    mobile: "Mobile",
    selectPlan: "Select a Protection Plan",
    motorTitle: "Motorcar Information",
    year: "Year",
    make: "Make",
    model: "Select Model",
    plate: "Plate No. / Conduction Sticker",
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
    heroTitle: <>Bumubuo ng <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Maaasahang Solusyon</span></>,
    heroSub: "BDRS Associates Insurance Agency",
    explore: "Tingnan ang mga Plano",
    requestQuote: "Humingi ng Quote",
    fullName: "Buong Pangalan",
    email: "Email Address",
    mobile: "Numero ng Telepono",
    selectPlan: "Pumili ng Planong Proteksyon",
    motorTitle: "Impormasyon ng Sasakyan",
    year: "Taon",
    make: "Tatak",
    model: "Modelo",
    plate: "Plaka / Conduction Sticker",
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
    heroTitle: <>构建 <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">可靠的风险解决方案</span></>,
    heroSub: "BDRS Associates 保险代理公司",
    explore: "探索计划",
    requestQuote: "请求报价",
    fullName: "全名",
    email: "电子邮件",
    mobile: "手机号码",
    selectPlan: "选择保障计划",
    motorTitle: "车辆信息",
    year: "年份",
    make: "品牌",
    model: "选择型号",
    plate: "车牌号 / 临时牌照",
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
    heroTitle: <>信頼できる <br className="hidden md:block" /> <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">リスクソリューション</span></>,
    heroSub: "BDRS Associates 保険代理店",
    explore: "プランを見る",
    requestQuote: "見積もり依頼",
    fullName: "氏名",
    email: "メールアドレス",
    mobile: "携帯番号",
    selectPlan: "保護プランを選択",
    motorTitle: "車両情報",
    year: "年式",
    make: "メーカー",
    model: "モデルを選択",
    plate: "ナンバープレート",
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
  }
};

export default function App() {
  const [showLanguageModal, setShowLanguageModal] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
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

  const [isYearOpen, setIsYearOpen] = useState(false);
  const [isMakeOpen, setIsMakeOpen] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isTnCOpen, setIsTnCOpen] = useState(false);

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

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col cursor-pointer">
            <span className="text-lg md:text-xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowLanguageModal(true)} className="p-2 text-slate-400 hover:text-white transition-colors"><Languages className="w-5 h-5" /></button>
            <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - RESTORED ORIGINAL STYLING */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Licensed Insurance Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 text-white">
              {t.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10">{t.heroSub}</p>
            <a href="#products" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              {t.explore} <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* FORM - RESTORED ORIGINAL STYLING */}
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
                  
                  <div className="relative z-50">
                    <div onClick={() => setIsPlanOpen(!isPlanOpen)} className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 flex justify-between items-center cursor-pointer transition-all duration-300">
                      <span className={selectedPlan ? "text-white font-medium" : "text-slate-500"}>{selectedPlan || t.selectPlan}</span>
                      <ChevronRight className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${isPlanOpen ? 'rotate-90' : ''}`} />
                    </div>
                    {isPlanOpen && (
                      <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-2xl p-2 shadow-2xl z-50">
                        {["Life Insurance", "HMO / Health Coverage", "Non-Life: Motorcar", "Non-Life: Fire"].map((plan) => (
                          <div key={plan} onClick={() => { setSelectedPlan(plan); setIsPlanOpen(false); }} className="group px-4 py-3 rounded-xl hover:bg-blue-600/20 text-slate-300 transition-all cursor-pointer mb-1 last:mb-0">
                            <span className="text-sm font-semibold">{plan}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {selectedPlan === "Non-Life: Motorcar" && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{t.motorTitle}</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div onClick={() => setIsYearOpen(!isYearOpen)} className="bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-500 flex justify-between items-center cursor-pointer">{selectedYear || t.year} <ChevronRight className="w-4 h-4"/></div>
                        <div onClick={() => setIsMakeOpen(!isMakeOpen)} className="bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs text-slate-500 flex justify-between items-center cursor-pointer">{selectedMake || t.make} <ChevronRight className="w-4 h-4"/></div>
                      </div>
                      <input name="plate" type="text" placeholder={t.plate} className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 text-xs text-white" />
                    </div>
                  )}

                  <div className="pt-2 text-center relative z-20">
                    <p className="text-[10px] text-slate-500">
                      {t.agree}{' '}
                      <span onClick={() => setIsTnCOpen(true)} className="font-bold text-blue-400 hover:text-blue-300 cursor-pointer underline underline-offset-2 transition-colors">
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
                <Send className="text-emerald-400 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Sent!</h3>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ACCREDITED PARTNERS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">{t.partners}</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 italic mb-16">{t.partnerSub}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {partners.map((p, i) => (
            <div key={i} onClick={() => setActivePartner(activePartner === i ? null : i)} className={`group p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer ${activePartner === i ? 'bg-slate-900 border-blue-500/50 shadow-2xl' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'}`}>
              <div className="bg-white p-6 rounded-3xl h-28 flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain" />
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

      {/* PROTECTION PLANS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5 text-left">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">{t.ourPlans}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-slate-900/50 border border-white/5 p-10 rounded-[2.5rem] hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group shadow-xl">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{product.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-white">{product.title}</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">{product.shortDesc}</p>
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">{t.viewDetails} <ChevronRight className="w-4 h-4" /></span>
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGE MODAL - RESTORED PREMIUM STYLING */}
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

      {/* T&C MODAL - RESTORED COMPREHENSIVE TEXT */}
      {isTnCOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setIsTnCOpen(false)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300 text-left">
            <button onClick={() => setIsTnCOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition text-white"><X className="w-5 h-5" /></button>
            <h3 className="text-3xl font-bold mb-6 text-white">{t.tnc}</h3>
            <div className="text-sm text-slate-400 space-y-4 leading-relaxed overflow-y-auto max-h-96 pr-2">
              <p><strong>1. Intermediary Status:</strong> BDRS Associates acts strictly as a licensed insurance intermediary (broker) between you and the provider.</p>
              <p><strong>2. Obligation of True Information:</strong> You certify that all details provided are accurate and complete. Misrepresentation may invalidate your quote.</p>
              <p><strong>3. Non-Binding Nature:</strong> Submitting this inquiry does not bind coverage. No policy is in effect until formally approved and premium is paid.</p>
              <p><strong>4. Consent to Communicate:</strong> You authorize BDRS Associates to contact you regarding this quote and relevant insurance products.</p>
            </div>
            <button onClick={() => setIsTnCOpen(false)} className="w-full mt-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white">{t.understand}</button>
          </div>
        </div>
      )}

      <footer className="py-12 border-t border-white/5 text-center mt-auto">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
