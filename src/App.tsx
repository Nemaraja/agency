import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  MapPin, Phone, Shield, Send, Check, Menu, ClipboardList
} from 'lucide-react';

export default function App() {
  // Page Navigation State
  const [currentPage, setCurrentPage] = useState('home');

  const [selectedProduct, setSelectedProduct] = useState(null);
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
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and peace of mind.',
      longDesc: 'Life insurance is a promise. Our plans cover educational funds, estate planning, and long-term family security.',
      benefits: ['Death Benefit', 'Critical Illness', 'Education Fund', 'Retirement']
    },
    {
      id: 'hmo',
      title: 'HMO / Health',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for everyone.',
      longDesc: 'Access the best hospitals and doctors through our premium healthcare partner network across the Philippines.',
      benefits: ['In-patient Care', 'Emergency', 'Dental', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'Robust coverage for your cars, homes, and business operations against unforeseen risks and accidents.',
      benefits: ['Motorcar (OR/CR)', 'Fire Insurance', 'Marine Cargo', 'Surety Bonds']
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
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden flex flex-col">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div 
            className="flex flex-col cursor-pointer" 
            onClick={() => { setCurrentPage('home'); window.scrollTo({top: 0, behavior: 'smooth'}); }}
          >
            <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">Contact Us</a>
        </div>
      </nav>

      <div className="flex-grow">
        {currentPage === 'home' ? (
          <>
            {/* HERO SECTION */}
            <section className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                    <Shield className="w-3 h-3" /> Licensed Insurance Agency
                  </div>
                  <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
                    Building <br className="hidden md:block" />
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10">BDRS Associates Insurance Agency</p>
                  <button 
                    onClick={() => { setCurrentPage('plans'); window.scrollTo({top: 0, behavior: 'smooth'}); }} 
                    className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2"
                  >
                    Explore Plans <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* FORM */}
                <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl shrink-0 min-h-[520px] flex flex-col justify-center z-10">
                  {!submitted ? (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-white text-left">Request a Quote</h3>
                      <form onSubmit={onSubmit} className="space-y-4 text-left">
                        <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                        <div className="grid grid-cols-2 gap-4">
                          <input name="email" type="email" placeholder="Email" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                          <input name="phone" type="tel" placeholder="Mobile" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                        </div>
                        
                        {/* PROTECTION PLAN DROPDOWN */}
                        <div className="relative z-50">
                          <div onClick={() => setIsPlanOpen(!isPlanOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-4 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPlanOpen ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-white/5'}`}>
                            <span className={selectedPlan ? "text-white font-medium" : "text-slate-500"}>{selectedPlan || "Select a Protection Plan"}</span>
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
                                <span className="text-xs text-white">View Required Documents</span>
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
                                <span className="text-xs text-white">View Required Documents</span>
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
                            <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Motorcar Information</p>
                            
                            <div className="grid grid-cols-2 gap-3 relative z-40">
                              <div className="relative">
                                <div onClick={() => setIsYearOpen(!isYearOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isYearOpen ? 'border-blue-500' : 'border-white/5'}`}>
                                  <span className={`text-xs ${selectedYear ? "text-white" : "text-slate-500"}`}>{selectedYear || "Year"}</span>
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

                              <div className="relative">
                                <div onClick={() => setIsMakeOpen(!isMakeOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isMakeOpen ? 'border-blue-500' : 'border-white/5'}`}>
                                  <span className={`text-xs ${selectedMake ? "text-white" : "text-slate-500"}`}>{selectedMake || "Make"}</span>
                                  <ChevronRight className={`w-4 h-4 text-slate-500 transition-transform ${isMakeOpen ? 'rotate-90' : ''}`} />
                                </div>
                                {isMakeOpen && (
                                  <div className="absolute top-[110%] left-0 w-full bg-[#0a0f1d] border border-white/10 rounded-xl p-1 shadow-2xl z-50 max-h-40 overflow-y-auto">
                                    {carBrands.map(b => (
                                      <div key={b} onClick={() => { 
                                        setSelectedMake(b); 
                                        setSelectedModel(""); 
                                        setIsMakeOpen(false); 
                                      }} className="px-4 py-2 rounded-lg hover:bg-blue-600/20 text-xs text-slate-300 cursor-pointer">{b}</div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="relative z-30">
                              <div 
                                onClick={() => selectedMake ? setIsModelOpen(!isModelOpen) : null} 
                                className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center transition-all duration-300 ${!selectedMake ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${isModelOpen ? 'border-blue-500' : 'border-white/5'}`}
                              >
                                <span className={`text-sm ${selectedModel ? "text-white" : "text-slate-500"}`}>
                                  {!selectedMake ? "Select Make First" : (selectedModel || "Select Model")}
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

                            <input name="plate_no" type="text" placeholder="Plate No. / Conduction Sticker" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                          </div>
                        )}

                        {/* FIRE CONDITIONAL FIELDS */}
                        {selectedPlan === "Non-Life: Fire" && (
                          <div className="space-y-4 animate-in slide-in-from-top-2 duration-300 p-4 bg-orange-500/5 rounded-2xl border border-orange-500/20 relative z-40">
                            <p className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">Property Information</p>
                            <input name="fire_address" type="text" placeholder="Property Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                            <div className="grid grid-cols-2 gap-3">
                              <input name="building_value" type="text" placeholder="Bldg Value" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                              <input name="contents_value" type="text" placeholder="Contents Value" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 focus:border-blue-500 outline-none text-white transition placeholder:text-slate-500" />
                            </div>
                            
                            <div className="relative">
                              <div onClick={() => setIsPropOpen(!isPropOpen)} className={`w-full bg-slate-800/50 border rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer transition-all duration-300 ${isPropOpen ? 'border-orange-500' : 'border-white/5'}`}>
                                <span className={`text-xs ${selectedProp ? "text-white" : "text-slate-500"}`}>{selectedProp || "Select Property Type"}</span>
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
                        <div className="pt-2 text-center">
                          <p className="text-[10px] text-slate-500">
                            By submitting, you agree to our{' '}
                            <span 
                              onClick={() => setIsTnCOpen(true)} 
                              className="font-bold text-blue-400 hover:text-blue-300 cursor-pointer underline underline-offset-2 transition-colors"
                            >
                              Terms and Conditions
                            </span>
                          </p>
                        </div>

                        <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-[0.98] mt-2">
                          {loading ? "Sending..." : "Submit Inquiry"}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
                      <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="text-emerald-400 w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">Inquiry Sent!</h3>
                      <p className="text-slate-400 mb-8 leading-relaxed">Thank you for reaching out. One of our risk advisors will contact you shortly.</p>
                      <button onClick={() => setSubmitted(false)} className="text-blue-400 font-bold text-sm uppercase tracking-widest hover:text-blue-300 transition">Send another request</button>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* ACCREDITED PARTNERS SECTION */}
            <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">Accredited Partners</h2>
                <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
                <p className="text-slate-400 italic mb-16">Tap a partner to reveal their expertise and history</p>
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
          </>
        ) : (
          /* SEPARATE HTML PAGE VIEW: PROTECTION PLANS */
          <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto text-left min-h-screen animate-in fade-in duration-500">
            <div className="flex items-center gap-2 mb-8 cursor-pointer text-blue-400 hover:text-blue-300 transition-colors w-max" onClick={() => setCurrentPage('home')}>
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span className="text-sm font-bold uppercase tracking-widest">Back to Home</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-white">Our Protection Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-slate-900/50 border border-white/5 p-10 rounded-[2.5rem] hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group shadow-xl">
                  <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{product.icon}</div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{product.title}</h4>
                  <p className="text-slate-400 mb-8 leading-relaxed">{product.shortDesc}</p>
                  <span className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">View Details <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center mt-auto">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency. All Rights Reserved.</p>
      </footer>

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
            
            <button 
              onClick={() => { 
                setSelectedProduct(null); 
                setCurrentPage('home');
                setTimeout(() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'}), 100); 
              }} 
              className="w-full py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white"
            >
              Get a Quote
            </button>
            
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
              <p><strong>1. Accuracy of Information:</strong> You certify that the details provided are true and correct. Inaccurate information may affect your quote.</p>
              <p><strong>2. No Binding Coverage:</strong> Submitting this form does not bind or guarantee insurance coverage. A policy is only active once confirmed by an agent.</p>
              <p><strong>3. Communication:</strong> You authorize BDRS Associates to contact you via email or phone regarding this inquiry.</p>
              <p><strong>4. Data Processing:</strong> We collect and process your data strictly to provide you with insurance quotes and services as mandated by law.</p>
            </div>
            <button onClick={() => setIsTnCOpen(false)} className="w-full mt-8 py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition text-white">I Understand</button>
          </div>
        </div>
      )}

    </div>
  );
}
