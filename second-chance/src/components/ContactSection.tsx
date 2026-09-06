import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Building, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedSection } from './animations/AnimatedSection';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Academic Research & Collaboration',
    message: '',
  });
  const [isDispatched, setIsDispatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }
    setIsDispatched(true);
  };

  return (
    <section className="w-full bg-[#f6f3f2] py-16 px-4 sm:px-6 lg:px-12 border-b-[2.5px] border-[#111111]" id="contact">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <AnimatedSection direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-[2.5px] border-[#111111] pb-4">
            <div>
              <span className="bg-[#111111] text-[#ffe600] px-3 py-1 font-mono text-xs uppercase font-extrabold inline-block mb-2">
                DISPATCH & FIELD DESK
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl uppercase text-[#111111] tracking-tight font-bold">
                CONTACT & COORDINATES
              </h2>
            </div>
            <div className="font-mono text-xs text-[#4b4731] font-bold uppercase">
              OPERATIONAL HEADQUARTERS // NEW DELHI
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Coordinates Information Column */}
          <AnimatedSection className="lg:col-span-5 space-y-4" direction="left" delay={0.1} duration={0.7}>
            <motion.div
              className="bg-white border-[2.5px] border-[#111111] p-6 shadow-[5px_5px_0px_#111111] space-y-4"
              whileHover={{ boxShadow: '7px 7px 0px #111111', transition: { type: 'spring', stiffness: 200 } }}
            >
              <h3 className="font-['Space_Grotesk'] text-xl uppercase font-bold text-[#111111] border-b-[2px] border-[#111111] pb-2">
                OFFICIAL DESK COORDINATES
              </h3>

              <div className="space-y-4 font-['Inter'] text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#ffe600] border border-[#111111] shrink-0">
                    <MapPin className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase font-bold text-[#4b4731]">
                      Field Station
                    </div>
                    <p className="text-[#111111] font-medium leading-snug mt-0.5">
                      CPRO Office, Central Jail No. 5 (Youth Jail), Tihar Prisons Complex, Janakpuri,
                      New Delhi, 110064
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#ffdbd1] border border-[#111111] shrink-0">
                    <Phone className="w-4 h-4 text-[#b02f00]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase font-bold text-[#4b4731]">
                      Central Hotline
                    </div>
                    <p className="font-mono font-bold text-sm text-[#111111] mt-0.5">
                      011-43090500
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#dbe1ff] border border-[#111111] shrink-0">
                    <Mail className="w-4 h-4 text-[#0053db]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase font-bold text-[#4b4731]">
                      Official Dispatch Email
                    </div>
                    <p className="font-mono font-bold text-sm text-[#111111] mt-0.5">
                      tyciafoundation@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-[#e5e2e1] border border-[#111111] shrink-0">
                    <Clock className="w-4 h-4 text-[#111111]" />
                  </div>
                  <div>
                    <div className="font-mono text-xs uppercase font-bold text-[#4b4731]">
                      Visiting & Permitted Desk Hours
                    </div>
                    <p className="text-[#111111] text-xs font-medium mt-0.5">
                      Monday to Friday: 09:30 AM – 05:30 PM IST (Special gate pass required)
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="p-4 bg-[#ffe600] border-[2.5px] border-[#111111] shadow-[3px_3px_0px_#111111]"
              whileHover={{ translateY: -2, boxShadow: '5px 5px 0px #111111' }}
            >
              <div className="font-mono text-xs uppercase font-extrabold text-[#111111]">
                SECURITY CLEARANCE NOTICE:
              </div>
              <p className="font-['Inter'] text-xs text-[#111111] mt-1 leading-relaxed">
                All external academic researchers, NGO visitors, and media entities must hold prior
                written authorization from the Director General (Prisons), Delhi before requesting on-site gate access.
              </p>
            </motion.div>
          </AnimatedSection>

          {/* Interactive Dispatch Form Column */}
          <AnimatedSection className="lg:col-span-7" direction="right" delay={0.2} duration={0.7}>
          <div className="bg-white border-[3px] border-[#111111] p-6 sm:p-8 shadow-[6px_6px_0px_#111111]">
            <h3 className="font-['Space_Grotesk'] text-2xl uppercase font-bold text-[#111111] border-b-[2px] border-[#111111] pb-3 mb-6">
              TRANSMIT OFFICIAL INQUIRY
            </h3>

            {!isDispatched ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                      Your Name / Entity *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Rajesh Verma"
                      className="w-full p-3 bg-[#fcf9f8] border-[2px] border-[#111111] font-['Inter'] text-sm focus:outline-none focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@university.edu"
                      className="w-full p-3 bg-[#fcf9f8] border-[2px] border-[#111111] font-['Inter'] text-sm focus:outline-none focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                    Subject / Area of Inquest
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full p-3 bg-[#fcf9f8] border-[2px] border-[#111111] font-['Inter'] text-sm focus:outline-none cursor-pointer"
                  >
                    <option>Academic Research & Criminological Collaboration</option>
                    <option>CSR Partnership & Program Funding</option>
                    <option>Second Chance Fellowship Admissions</option>
                    <option>Project Rihai Bail Representation Request</option>
                    <option>Media, Press & Documentary Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase font-bold text-[#111111] mb-1">
                    Message Dossier *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide context, institutional affiliation, and requested outcomes..."
                    className="w-full p-3 bg-[#fcf9f8] border-[2px] border-[#111111] font-['Inter'] text-sm focus:outline-none focus:bg-white"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#111111] text-[#ffe600] py-3.5 font-mono text-xs uppercase font-extrabold border-[2px] border-[#111111] shadow-[3px_3px_0px_#111111] hover:bg-[#ffe600] hover:text-[#111111] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Communication to Desk</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-6 bg-[#f6f3f2] border-[2px] border-[#111111] text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#ffe600] border-[2px] border-[#111111] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#111111]" />
                </div>
                <h4 className="font-['Space_Grotesk'] text-xl font-bold uppercase text-[#111111]">
                  COMMUNICATION LOGGED
                </h4>
                <p className="font-['Inter'] text-sm text-[#4b4731]">
                  Thank you, <strong>{formData.name}</strong>. Your transmission has been queued at the
                  TYCIA Foundation CPRO Desk. An officer will respond within 48 hours.
                </p>
                <button
                  onClick={() => setIsDispatched(false)}
                  className="mt-2 bg-white text-[#111111] px-4 py-2 font-mono text-xs uppercase font-bold border-[2px] border-[#111111] hover:bg-[#ffe600] cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
