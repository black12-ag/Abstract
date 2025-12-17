import { Mail, Phone, MapPin, Send, Sparkles, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero - Premium */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-[#1E2916] text-[#F2F0E9] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E65538]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8FA893]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
              <MessageCircle className="w-4 h-4 text-[#E65538]" />
              <span className="text-white/90 text-sm tracking-widest uppercase">Contact Us</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="mb-8 text-[#F2F0E9] text-5xl md:text-7xl lg:text-8xl font-['Playfair_Display']">
              Get in <span className="italic text-[#E65538]">Touch</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl text-[#F2F0E9]/80 leading-relaxed max-w-2xl mx-auto">
              Have a question or collaboration idea? We'd love to hear from you and start a conversation.
            </p>
          </AnimatedSection>

          {/* Quick info badges */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <Clock className="w-4 h-4 text-[#8FA893]" />
                <span className="text-white/70 text-sm">Response within 24h</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <CheckCircle className="w-4 h-4 text-[#E65538]" />
                <span className="text-white/70 text-sm">Free consultation</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form & Info - Premium */}
      <section className="relative px-4 md:px-6 lg:px-12 py-20 md:py-28 bg-[#F2F0E9] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-40 right-20 w-32 h-32 border-2 border-[#1E2916]/5 transform rotate-45" />
          <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-[#E65538]/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <AnimatedSection animation="fade-right">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-[#E65538]/10 border border-[#E65538]/20 rounded-full">
                    <Sparkles className="w-4 h-4 text-[#E65538]" />
                    <span className="text-[#E65538] text-sm tracking-widest uppercase font-medium">Send Message</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display']">
                    Let's start a <span className="italic text-[#E65538]">conversation</span>
                  </h2>
                </div>
              </AnimatedSection>

              {/* Success message */}
              {isSubmitted && (
                <AnimatedSection animation="scale">
                  <div className="mb-8 p-6 bg-[#8FA893]/10 border-2 border-[#8FA893] flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-[#8FA893] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-lg mb-1">Message sent successfully!</h3>
                      <p className="text-[#1E2916]/70">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </AnimatedSection>
              )}
              
              <AnimatedSection animation="fade-up" delay={100}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block mb-3 text-sm tracking-wider uppercase font-medium text-[#1E2916]/80">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-[#1E2916]/20 bg-white focus:border-[#E65538] focus:bg-[#F2F0E9] outline-none transition-all duration-300 group-hover:border-[#1E2916]/40"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block mb-3 text-sm tracking-wider uppercase font-medium text-[#1E2916]/80">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 border-2 border-[#1E2916]/20 bg-white focus:border-[#E65538] focus:bg-[#F2F0E9] outline-none transition-all duration-300 group-hover:border-[#1E2916]/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className="block mb-3 text-sm tracking-wider uppercase font-medium text-[#1E2916]/80">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 border-2 border-[#1E2916]/20 bg-white focus:border-[#E65538] focus:bg-[#F2F0E9] outline-none transition-all duration-300 group-hover:border-[#1E2916]/40"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block mb-3 text-sm tracking-wider uppercase font-medium text-[#1E2916]/80">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border-2 border-[#1E2916]/20 bg-white focus:border-[#E65538] focus:bg-[#F2F0E9] outline-none transition-all duration-300 resize-none group-hover:border-[#1E2916]/40"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative px-8 py-5 bg-[#E65538] text-white border-2 border-[#E65538] hover:bg-[#1E2916] hover:border-[#1E2916] transition-all duration-300 flex items-center gap-3 font-medium tracking-wide disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  >
                    {/* Shine effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    <Send className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
              </form>
            </AnimatedSection>
          </div>

          {/* Contact Info - Premium */}
          <div className="lg:col-span-5">
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-8">
                {/* Contact cards */}
                <div>
                  <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-[#8FA893]/10 border border-[#8FA893]/20 rounded-full">
                    <Phone className="w-4 h-4 text-[#8FA893]" />
                    <span className="text-[#8FA893] text-sm tracking-widest uppercase font-medium">Get in Touch</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: Mail, label: 'Email', value: 'info@abstract.et', href: 'mailto:info@abstract.et', color: '#E65538' },
                      { icon: Phone, label: 'Phone', value: '+251 91 123 4567', href: 'tel:+251911234567', color: '#8FA893' },
                      { icon: MapPin, label: 'Location', value: 'Bole Road, Near Edna Mall\nAddis Ababa, Ethiopia', href: null, color: '#1E2916' }
                    ].map((contact, index) => (
                      <div key={index} className="group p-6 bg-white border-2 border-[#1E2916]/20 hover:border-[#E65538] transition-all duration-300 hover-lift">
                        <div className="flex items-start gap-4">
                          <div 
                            className="w-14 h-14 flex items-center justify-center flex-shrink-0 border-2 border-[#1E2916] group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: contact.color }}
                          >
                            <contact.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-lg mb-2 text-[#1E2916]">{contact.label}</p>
                            {contact.href ? (
                              <a 
                                href={contact.href} 
                                className="text-[#1E2916]/70 hover:text-[#E65538] transition-colors block"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-[#1E2916]/70 whitespace-pre-line">
                                {contact.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Hours */}
                <div className="relative p-8 bg-[#1E2916] text-white overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#E65538]/20 transform rotate-45 translate-x-12 -translate-y-12" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-5 h-5 text-[#E65538]" />
                      <h3 className="text-xl font-['Playfair_Display']">Office Hours</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/70">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-white/70">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70">Sunday</span>
                        <span className="font-medium text-[#E65538]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 bg-[#F2F0E9] border-2 border-[#1E2916]/10">
                  <h3 className="mb-4 text-lg font-medium">Connect With Us</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {['Instagram', 'Pinterest', 'Twitter', 'Facebook'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="group relative px-4 py-3 border-2 border-[#1E2916]/20 hover:border-[#E65538] bg-white transition-all duration-300 text-center font-medium overflow-hidden"
                      >
                        <span className="absolute inset-0 bg-[#E65538] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                          {social}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
