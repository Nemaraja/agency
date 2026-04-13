import React, { useState } from 'react';
import { Shield, LifeBuoy, Car, Heart, ShieldCheck, Mail, Phone, MapPin, CheckCircle2, Menu, X, ArrowRight } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormStatus('submitting');
    const formData = new FormData(event.currentTarget);

    // This is the key for Web3Forms
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFormStatus('success');
      (event.target as HTMLFormElement).reset();
    } else {
      setFormStatus('error');
    }
  };

  const planOptions = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <LifeBuoy className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Secure your family\'s future and financial stability.',
      longDesc: 'Comprehensive life coverage providing peace of mind through death benefits, investment components, and educational funding.',
      benefits: ['Death Benefit', 'Living Benefits', 'Education Fund', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'Health (HMO)',
      icon: <Heart className="w-10 h-10 text-rose-400" />,
      shortDesc: 'Quality healthcare access for you and your employees.',
      longDesc: 'Extensive network of hospitals and doctors providing inpatient, outpatient, and emergency medical services.',
      benefits: ['Inpatient Care', 'Outpatient Services', 'Emergency Coverage', 'Dental Options']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'Robust coverage for your cars, homes, and business operations against unforeseen risks and accidents.',
      benefits: ['Motorcar (OR/CR Required)', 'Fire (Bldg & Contents)', 'Marine Cargo', 'Surety Bonds']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <div>
                <span className="text-xl font-bold tracking-tight text-white">BDRS</span>
                <span className="text-xs block text-blue-500 font-medium -mt-1">ASSOCIATES</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
              <a href="#services" className="text-sm font-medium hover:text-blue-400 transition-colors">Services</a>
              <a href="#quote" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-bold transition-all transform hover:scale-105">Request Quote</a>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Building Dependable <span className="text-blue-500">Risk Solutions</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Your trusted partner in the Philippines for comprehensive life, health, and non-life insurance coverage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#quote" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold transition-all flex items-center justify-center space-x-2 group">
                <span>Start Your Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Protection Plans</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {planOptions.map((plan) => (
              <div key={plan.id} className="p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/50 transition-all group">
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{plan.title}</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">{plan.longDesc}</p>
                <ul className="space-y-3">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 bg-blue-600">
                <h2 className="text-3xl font-bold text-white mb-6">Request a Quote</h2>
                <p className="text-blue-100 mb-10">Fill out the form and our associates will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-white/90">
                    <Mail className="w-5 h-5" />
                    <span>bdrsassociates@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4 text-white/90">
                    <Phone className="w-5 h-5" />
                    <span>Contact your assigned agent</span>
                  </div>
                  <div className="flex items-center space-x-4 text-white/90">
                    <MapPin className="w-5 h-5" />
                    <span>Philippines</span>
                  </div>
                </div>
              </div>

              <div className="p-8 lg:p-12">
                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                    <p className="text-slate-400">We'll review your details and contact you shortly.</p>
                    <button onClick={() => setFormStatus('idle')} className="mt-8 text-blue-500 font-bold hover:text-blue-400">
                      Send another request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 gap-4">
                      <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                      <input type="email" name="email" placeholder="Email Address" required className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                      <input type="tel" name="phone" placeholder="Phone Number" required className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                    </div>

                    {/* Insurance Selection */}
                    <div className="space-y-2">
                      <label className="text-sm text-slate-400 ml-1">Insurance Interest:</label>
                      <select name="interest" required className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white appearance-none" onChange={(e) => {
                        const motor = document.getElementById('motor-extra');
                        const fire = document.getElementById('fire-extra');
                        if(motor) motor.style.display = e.target.value === 'Non-Life: Motorcar' ? 'block' : 'none';
                        if(fire) fire.style.display = e.target.value === 'Non-Life: Fire' ? 'block' : 'none';
                      }}>
                        <option value="">Select Service</option>
                        <option value="Life Insurance">Life Insurance</option>
                        <option value="Health/HMO">Health (HMO)</option>
                        <option value="Non-Life: Motorcar">Non-Life: Motorcar</option>
                        <option value="Non-Life: Fire">Non-Life: Fire</option>
                        <option value="Non-Life: Other">Non-Life: Other</option>
                      </select>
                    </div>

                    {/* Conditional: Motorcar Details */}
                    <div id="motor-extra" style={{display: 'none'}} className="space-y-4 p-4 bg-slate-800/50 rounded-xl border border-blue-500/20">
                      <p className="text-xs font-bold text-blue-400 uppercase tracking-wider">Motorcar Information</p>
                      <input type="text" name="car_details" placeholder="Year, Make & Model" className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                      <input type="text" name="plate_no" placeholder="Plate Number / Conduction Sticker" className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                    </div>

                    {/* Conditional: Fire Insurance Details */}
                    <div id="fire-extra" style={{display: 'none'}} className="space-y-4 p-4 bg-slate-800/50 rounded-xl border border-orange-500/20">
                      <p className="text-xs font-bold text-orange-400 uppercase tracking-wider">Property Information</p>
                      <input type="text" name="property_address" placeholder="Property Address" className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                      <div className="grid grid-cols-2 gap-2">
                        <input type="text" name="bldg_value" placeholder="Bldg Value" className="px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                        <input type="text" name="contents_value" placeholder="Contents Value" className="px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white" />
                      </div>
                      <select name="occupancy_type" className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Warehouse">Warehouse</option>
                      </select>
                    </div>

                    <textarea name="message" rows={3} placeholder="Additional Message (Optional)" className="w-full px-4 py-3 bg-slate-800 border border-white/5 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"></textarea>
                    
                    {/* Privacy Note */}
                    <p className="text-[10px] text-slate-500 italic text-center px-4">
                      <strong>Data Privacy Note:</strong> All information provided is kept strictly confidential and used solely for generating your insurance quote in accordance with the Data Privacy Act.
                    </p>

                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 rounded-xl font-bold transition-all transform hover:translate-y-[-2px] active:translate-y-[0px] shadow-lg shadow-blue-600/20"
                    >
                      {formStatus === 'submitting' ? 'Processing...' : 'Submit Quote Request'}
                    </button>
                    {formStatus === 'error' && (
                      <p className="text-red-400 text-sm text-center">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Shield className="w-6 h-6 text-blue-500" />
          <span className="text-lg font-bold text-white tracking-tight">BDRS ASSOCIATES</span>
        </div>
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} BDRS Associates Insurance Agency. All rights reserved.</p>
        <p className="text-slate-600 text-[10px] mt-2 italic">Building Dependable Risk Solutions for the Filipino Family.</p>
      </footer>
    </div>
  );
}

export default App;
