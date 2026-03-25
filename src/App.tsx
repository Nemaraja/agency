import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, MessageCircle, ChevronRight, ArrowRight, Building2, ExternalLink
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const partners = [
    "Maagap Insurance", "Bethel Gen. Insurance", "Paramount Life", 
    "Pacific Cross", "Asia Insurance", "Standard Insurance"
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and build lasting peace of mind.',
      longDesc: 'Life insurance is more than just a policy; it is a promise to your loved ones. Our plans cover educational funds, mortgage protection, and estate planning to ensure your family stays financially secure.',
      benefits: ['Death Benefit Protection', 'Critical Illness Riders', 'Educational Funding', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'HMO / Health Coverage',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for you and your employees.',
      longDesc: 'Health is your greatest asset. We partner with the Philippines’ top providers to give you access to the best hospitals, doctors, and emergency services without the heavy financial burden.',
      benefits: ['In-patient & Out-patient Care', 'Emergency Services', 'Dental Coverage', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life Insurance',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and business assets.',
      longDesc: 'Accidents and calamities are unpredictable. Our non-life products provide robust coverage for your cars, homes, and business operations against fire, theft, and natural disasters.',
      benefits: ['Comprehensive Car Insurance', 'Fire & Allied Perils', 'Marine Insurance', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    // Replace with your Web3Forms Access Key
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    setLoading(false);
    if (res.success) {
      setShowSuccess(true);
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 pb-20">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
          <div>
            <div className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              BDRS ASSOCIATES
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Building Dependable Risks Solutions</p>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition">
            <Mail className="w-4 h-4" /> bdrsassociates@gmail.com
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Insurance Coverage With <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Helping families and businesses find dependable protection since [Year]. We simplify insurance so you can focus on what matters.
            </p>
            <div className="flex gap-4">
              <a href="#quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* QUOTE FORM */}
          <div id="quote" className="bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
               Request a Quote
            </h3>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
              <div className="grid md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
                <input name="phone" type="text" placeholder="Phone Number" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
              </div>
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-slate-400">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 text-slate-950 font-black py-4 rounded-xl transition-all">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white/[0.02] border border-white/5 rounded-[3rem] p-10">
          <p className="text-center text-xs font-bold tracking-[0.3em] text-slate-500 uppercase mb-8">Official Partner & Provider Of</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {partners.map(p => (
              <div key={p} className="text-center text-sm font-bold hover:text-blue-400 transition cursor-default">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-slate-900/20 border border-white/5 p-8 rounded-[2rem] hover:bg-slate-800/30 hover:border-blue-500/30 transition-all"
            >
              <div className="mb-6">{product.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{product.title}</h4>
              <p className="text-slate-400 text-sm mb-6">{product.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-black uppercase tracking-widest">
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUCCESS MODAL */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="relative bg-slate-900 border border-emerald-500/30 p-10 max-w-md w-full rounded-[2.5rem] text-center shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-3xl font-bold mb-2">Thank You!</h3>
            <p className="text-slate-400 mb-8">Your inquiry has been sent. A BDRS Associate will reach out to you shortly.</p>
            <button 
              onClick={() => setShowSuccess(false)}
              className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* PRODUCT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden animate-in fade-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full transition hover:bg-slate-700">
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 md:p-12">
              <div className="mb-6">{selectedProduct.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{selectedProduct.longDesc}</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {selectedProduct.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => { setSelectedProduct(null); window.location.href = "#quote"; }} className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition">
                Inquire About This Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-slate-950 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group">
        <MessageCircle className="w-7 h-7" />
      </a>

      <footer className="text-center py-10 text-slate-600 text-xs font-bold tracking-widest uppercase">
        © {new Date().getFullYear()} BDRS Associates Insurance Agency
      </footer>
    </div>
  );
}
