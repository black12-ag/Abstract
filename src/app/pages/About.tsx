import { Award, Users, Globe, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { useCountUp } from '../hooks/useScrollReveal';

export function About() {
  const yearsCount = useCountUp(8, 1500);
  const recipesCount = useCountUp(250, 2000);
  const countriesCount = useCountUp(18, 1800);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-[#1E2916] text-[#F2F0E9] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E65538]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8FA893]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
              <Sparkles className="w-4 h-4 text-[#E65538]" />
              <span className="text-white/90 text-sm tracking-widest uppercase">About Us</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h1 className="mb-8 text-[#F2F0E9] text-5xl md:text-7xl lg:text-8xl font-['Playfair_Display']">
              Our <span className="italic text-[#E65538]">Story</span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-xl md:text-2xl lg:text-3xl text-[#F2F0E9]/80 leading-relaxed max-w-3xl mx-auto">
              Abstract was born from a simple belief: food is more than sustenance. 
              It's <span className="text-[#E65538] italic">culture</span>, <span className="text-[#8FA893] italic">memory</span>, and <span className="text-white italic">connection</span>.
            </p>
          </AnimatedSection>

          {/* Stats row */}
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div ref={yearsCount.ref} className="text-center">
                <div className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-2">{yearsCount.count}+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Years</div>
              </div>
              <div ref={recipesCount.ref} className="text-center border-x border-white/10">
                <div className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-2">{recipesCount.count}+</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Recipes</div>
              </div>
              <div ref={countriesCount.ref} className="text-center">
                <div className="text-4xl md:text-5xl font-['Playfair_Display'] text-white mb-2">{countriesCount.count}</div>
                <div className="text-sm text-white/50 uppercase tracking-wider">Countries</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission - Premium */}
      <section className="relative px-4 md:px-6 lg:px-12 py-24 md:py-32 bg-[#F2F0E9] overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-40 h-40 border-2 border-[#1E2916]/5 transform rotate-45" />
          <div className="absolute bottom-20 left-20 w-32 h-32 border-2 border-[#E65538]/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-20 items-center">
            <AnimatedSection animation="fade-right">
              <div>
                <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-[#E65538]/10 border border-[#E65538]/20 rounded-full">
                  <Heart className="w-4 h-4 text-[#E65538]" />
                  <span className="text-[#E65538] text-sm tracking-widest uppercase font-medium">Our Mission</span>
                </div>
                <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
                  Preserving <span className="italic text-[#E65538]">traditions</span>,<br />
                  inspiring innovation.
                </h2>
                <div className="space-y-6 text-lg md:text-xl text-[#1E2916]/70 leading-relaxed">
                  <p>
                    We partner with chefs, home cooks, and food enthusiasts worldwide to 
                    document, celebrate, and evolve culinary traditions.
                  </p>
                  <p>
                    Every recipe we share is meticulously tested and thoughtfully presented, 
                    ensuring you have the tools and confidence to create something extraordinary.
                  </p>
                </div>
                
                {/* Mission points */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#E65538] rounded-full" />
                    <span className="text-[#1E2916]/80">Chef-tested recipes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#8FA893] rounded-full" />
                    <span className="text-[#1E2916]/80">Global cuisines</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#E65538] rounded-full" />
                    <span className="text-[#1E2916]/80">Step-by-step guides</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-[#8FA893] rounded-full" />
                    <span className="text-[#1E2916]/80">Community support</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="relative">
                {/* Decorative frames */}
                <div className="absolute -inset-4 border-2 border-[#E65538]/20 transform rotate-3" />
                <div className="absolute -inset-4 border-2 border-[#8FA893]/20 transform -rotate-3" />
                
                <div className="relative overflow-hidden border-4 border-[#1E2916]">
                  <img 
                    src="https://images.unsplash.com/photo-1621245675746-adfdd75f0e02?w=800"
                    alt="Artisan bread"
                    className="w-full aspect-square object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Overlay badge */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1E2916] to-transparent">
                    <p className="text-white/90 text-lg font-['Playfair_Display']">Crafted with passion since 2016</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section - NEW */}
      <section className="relative py-24 md:py-32 bg-[#1E2916] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#E65538]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#8FA893]/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-medium tracking-wider uppercase mb-6">
                Our Philosophy
              </span>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] mb-8">
                Food is <span className="italic text-[#E65538]">Art</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-['Playfair_Display'] text-[#E65538] mb-4">01</div>
                <h3 className="text-white text-xl font-medium mb-4">Respect the Ingredient</h3>
                <p className="text-white/60 leading-relaxed">
                  Every ingredient has a story. We believe in sourcing responsibly and treating each component with the respect it deserves.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <div className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-['Playfair_Display'] text-[#8FA893] mb-4">02</div>
                <h3 className="text-white text-xl font-medium mb-4">Honor the Tradition</h3>
                <p className="text-white/60 leading-relaxed">
                  Recipes are passed down through generations. We preserve these traditions while making them accessible to modern kitchens.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-center p-8 border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="text-6xl font-['Playfair_Display'] text-white mb-4">03</div>
                <h3 className="text-white text-xl font-medium mb-4">Embrace the Journey</h3>
                <p className="text-white/60 leading-relaxed">
                  Cooking is not just about the destination. The process of creating, experimenting, and sharing is where the magic happens.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-16 text-center">
              <blockquote className="text-2xl md:text-3xl text-white/80 font-['Playfair_Display'] italic max-w-3xl mx-auto">
                "Cooking is like love. It should be entered into with abandon or not at all."
              </blockquote>
              <p className="mt-4 text-white/50">— Harriet Van Horne</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values - Premium */}
      <section className="relative px-4 md:px-6 lg:px-12 py-24 md:py-32 bg-white overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E65538]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8FA893]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-2 bg-[#1E2916] text-white text-sm font-medium tracking-wider uppercase mb-6">
                Our Values
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
                What We <span className="italic text-[#E65538]">Believe</span>
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Award, title: 'Quality First', description: 'Every recipe undergoes rigorous testing to ensure perfect results every time.', color: '#E65538' },
              { icon: Users, title: 'Community', description: "We're building a global family of food lovers who share, learn, and grow together.", color: '#8FA893' },
              { icon: Globe, title: 'Diversity', description: 'We celebrate culinary traditions from every corner of the world.', color: '#1E2916' },
              { icon: Heart, title: 'Passion', description: 'Food is love made visible, and we pour our hearts into every word.', color: '#E65538' }
            ].map((value, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group relative p-8 md:p-10 bg-[#F2F0E9] border-2 border-[#1E2916] hover:border-[#E65538] transition-all duration-500 overflow-hidden hover-lift h-full">
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#E65538]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div 
                      className="absolute top-0 right-0 w-24 h-24 transform rotate-45 translate-x-12 -translate-y-12 transition-colors duration-500"
                      style={{ backgroundColor: value.color }}
                    />
                  </div>
                  
                  <div className="relative">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mb-6 border-2 border-[#1E2916] group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundColor: value.color }}
                    >
                      <value.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    <h3 className="mb-4 text-xl md:text-2xl font-['Playfair_Display'] group-hover:text-[#E65538] transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-[#1E2916]/70 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Premium */}
      <section className="relative px-4 md:px-6 lg:px-12 py-24 md:py-32 bg-[#F2F0E9] overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-2 bg-[#E65538]/10 text-[#E65538] text-sm font-medium tracking-wider uppercase mb-6">
                The Experts
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
                Meet the <span className="italic text-[#E65538]">Team</span>
              </h2>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { name: 'Maria Rossi', role: 'Head Chef & Creative Director', specialty: 'Italian Cuisine', image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400' },
              { name: 'Jean-Pierre Martin', role: 'Pastry Specialist', specialty: 'French Pastries', image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400' },
              { name: 'Yuki Tanaka', role: 'Content Strategist', specialty: 'Asian Fusion', image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400' }
            ].map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="group text-center">
                  <div className="relative mb-8 overflow-hidden">
                    {/* Decorative frame */}
                    <div className="absolute -inset-2 border-2 border-[#E65538]/0 group-hover:border-[#E65538]/30 transform rotate-3 transition-all duration-500" />
                    
                    <div className="relative aspect-[3/4] bg-gradient-to-br from-[#8FA893]/30 to-[#E65538]/30 border-2 border-[#1E2916] group-hover:border-[#E65538] transition-all duration-500 overflow-hidden">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2916]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Specialty badge */}
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span className="inline-block px-4 py-2 bg-[#E65538] text-white text-sm font-medium">
                          {member.specialty}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="mb-2 text-2xl md:text-3xl font-['Playfair_Display'] group-hover:text-[#E65538] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#1E2916]/60">{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 bg-[#1E2916] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E65538]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8FA893]/20 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AnimatedSection animation="scale">
            <h2 className="text-white mb-8 text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
              Ready to Join Our <span className="italic text-[#E65538]">Journey</span>?
            </h2>
            <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Become part of our growing community of food enthusiasts and discover the joy of cooking.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#E65538] text-white border-2 border-[#E65538] hover:bg-white hover:text-[#1E2916] hover:border-white transition-all duration-300 font-medium tracking-wide group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
