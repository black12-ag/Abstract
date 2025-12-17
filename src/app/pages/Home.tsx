import { Link } from 'react-router';
import { ArrowRight, ChefHat, Award, Users, Sparkles, Play, Star, Clock, Flame, Send, UtensilsCrossed } from 'lucide-react';
import { CreativeRecipeCard } from '../components/CreativeRecipeCard';
import { recipesData } from '../data/recipes';
import { AnimatedSection, StaggerContainer } from '../components/AnimatedSection';
import { PremiumButton } from '../components/PremiumButton';
import { useCountUp } from '../hooks/useScrollReveal';
import { useState, useEffect } from 'react';

export function Home() {
  const featuredRecipes = recipesData.slice(0, 6);
  const latestRecipes = recipesData.slice(0, 8);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const quickCategories = [
    { name: 'Quick Meals', icon: Clock, count: 45, color: '#E65538', filter: '30-min' },
    { name: 'Vegetarian', icon: UtensilsCrossed, count: 38, color: '#8FA893', filter: 'vegetarian' },
    { name: 'Desserts', icon: Sparkles, count: 28, color: '#E65538', filter: 'dessert' },
    { name: 'Healthy', icon: Flame, count: 52, color: '#8FA893', filter: 'healthy' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const recipesCount = useCountUp(250, 2000);
  const countriesCount = useCountUp(18, 1500);
  const chefsCount = useCountUp(12, 1200);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Hero Section - Premium Redesign */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#1E2916]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E2916] via-[#1E2916] to-[#0f1509]" />
          
          {/* Animated floating orbs */}
          <div 
            className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full animate-blob opacity-30"
            style={{
              background: 'radial-gradient(circle, #E65538 0%, transparent 70%)',
              transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full animate-blob opacity-20"
            style={{
              background: 'radial-gradient(circle, #8FA893 0%, transparent 70%)',
              animationDelay: '-4s',
              transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full animate-blob opacity-10"
            style={{
              background: 'radial-gradient(circle, #F2F0E9 0%, transparent 70%)',
              animationDelay: '-2s'
            }}
          />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-4 md:px-6 lg:px-12 py-20 md:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7">
                <AnimatedSection animation="fade-up" delay={0}>
                  <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
                    <Sparkles className="w-4 h-4 text-[#E65538]" />
                    <span className="text-white/90 text-sm tracking-widest uppercase">
                      Culinary Excellence
                    </span>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={100}>
                  <h1 className="text-white mb-8 leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem] font-['Playfair_Display']">
                    <span className="block">We don't just</span>
                    <span className="block mt-2">
                      <span className="italic text-[#E65538] relative">
                        curate taste
                        <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                          <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="#8FA893" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>,
                    </span>
                    <span className="block mt-2">we craft</span>
                    <span className="block mt-2 relative inline-block">
                      <span className="relative z-10">memories</span>
                      <span className="absolute bottom-2 left-0 w-full h-4 bg-[#E65538]/30 -z-0 transform -rotate-1" />
                    </span>
                  </h1>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={200}>
                  <p className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-xl mb-10 leading-relaxed">
                    Transform recipes into experiences, ingredients into narratives, and meals into moments worth remembering.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="fade-up" delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <PremiumButton 
                      to="/recipes" 
                      variant="glow" 
                      size="lg"
                      icon={<ArrowRight className="w-5 h-5" />}
                    >
                      Explore Recipes
                    </PremiumButton>
                    <PremiumButton 
                      to="/about" 
                      variant="outline" 
                      size="lg"
                      className="border-white/30 text-white hover:bg-white hover:text-[#1E2916] hover:border-white"
                      icon={<Play className="w-4 h-4" />}
                      iconPosition="left"
                    >
                      Watch Our Story
                    </PremiumButton>
                  </div>
                </AnimatedSection>

                {/* Trust badges */}
                <AnimatedSection animation="fade-up" delay={400}>
                  <div className="flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
                    <div className="flex -space-x-3">
                      {[1, 2, 3, 4].map((i) => (
                        <div 
                          key={i} 
                          className="w-10 h-10 rounded-full border-2 border-[#1E2916] bg-gradient-to-br from-[#8FA893] to-[#E65538]"
                          style={{ zIndex: 5 - i }}
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-[#E65538] text-[#E65538]" />
                        ))}
                      </div>
                      <p className="text-white/60 text-sm">Trusted by 10,000+ food lovers</p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Content - Featured Image */}
              <div className="lg:col-span-5 hidden lg:block">
                <AnimatedSection animation="scale" delay={200}>
                  <div className="relative">
                    {/* Decorative frame */}
                    <div className="absolute -inset-4 border-2 border-[#E65538]/30 transform rotate-3" />
                    <div className="absolute -inset-4 border-2 border-[#8FA893]/30 transform -rotate-3" />
                    
                    {/* Main image container */}
                    <div className="relative aspect-[4/5] overflow-hidden border-4 border-white/10">
                      <img 
                        src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800"
                        alt="Gourmet cuisine"
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2916]/60 via-transparent to-transparent" />
                      
                      {/* Floating badge */}
                      <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md border border-white/20">
                        <p className="text-white/90 text-sm font-medium">Featured Recipe</p>
                        <p className="text-white text-lg font-['Playfair_Display']">Truffle Risotto</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Stats - Animated Counters */}
            <AnimatedSection animation="fade-up" delay={500}>
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-16 md:mt-24 max-w-3xl">
                <div 
                  ref={recipesCount.ref}
                  className="group relative p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#E65538] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-2">
                    {recipesCount.count}+
                  </div>
                  <div className="text-xs md:text-sm tracking-wider uppercase text-white/60">Recipes</div>
                </div>
                <div 
                  ref={countriesCount.ref}
                  className="group relative p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#8FA893] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-2">
                    {countriesCount.count}
                  </div>
                  <div className="text-xs md:text-sm tracking-wider uppercase text-white/60">Countries</div>
                </div>
                <div 
                  ref={chefsCount.ref}
                  className="group relative p-6 md:p-8 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#E65538] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500" />
                  <div className="text-4xl md:text-6xl font-['Playfair_Display'] text-white mb-2">
                    {chefsCount.count}
                  </div>
                  <div className="text-xs md:text-sm tracking-wider uppercase text-white/60">Expert Chefs</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section - Premium Upgrade */}
      <section className="relative py-24 md:py-32 lg:py-40 bg-white overflow-hidden">
        {/* Creative Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E65538]/5 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#8FA893]/5 rounded-full blur-3xl animate-float" />
          {/* Dot pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #1E2916 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-block px-4 py-2 bg-[#E65538]/10 text-[#E65538] text-sm font-medium tracking-wider uppercase mb-6">
                Why Choose Us
              </span>
              <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
                Crafted with <span className="italic text-[#E65538]">passion</span>,<br />
                served with excellence
              </h2>
              <p className="text-lg md:text-xl text-[#1E2916]/60 max-w-2xl mx-auto">
                We're more than a recipe collection. We're your culinary companion on a journey of taste.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                icon: ChefHat,
                title: 'Expert Tested',
                description: 'Every recipe perfected by professional chefs and tested multiple times for guaranteed results.',
                color: '#E65538',
                delay: 0
              },
              {
                icon: Award,
                title: 'Award Winning',
                description: 'Recognized globally for culinary excellence, innovation, and authentic flavors.',
                color: '#8FA893',
                delay: 100
              },
              {
                icon: Users,
                title: 'Community Driven',
                description: 'Join thousands of food lovers sharing their culinary journey and discoveries.',
                color: '#1E2916',
                delay: 200
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={feature.delay}>
                <div className="group relative p-8 md:p-10 bg-[#F2F0E9] border-2 border-[#1E2916] hover:border-[#E65538] transition-all duration-500 overflow-hidden hover-lift">
                  {/* Hover background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E65538]/0 to-[#E65538]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-[#1E2916] transform rotate-45 translate-x-14 -translate-y-14 group-hover:bg-[#E65538] transition-colors duration-500" />
                  </div>
                  
                  <div className="relative">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-6 md:mb-8 border-2 border-[#1E2916] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <h3 className="mb-4 text-2xl md:text-3xl font-['Playfair_Display'] group-hover:text-[#E65538] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-[#1E2916]/70 leading-relaxed text-base md:text-lg">
                      {feature.description}
                    </p>
                    
                    {/* Learn more link */}
                    <div className="mt-6 flex items-center gap-2 text-[#E65538] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes - Premium Upgrade */}
      <section className="relative py-24 md:py-32 lg:py-40 px-4 md:px-6 lg:px-12 bg-[#F2F0E9] overflow-hidden">
        {/* Creative background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-[#1E2916]/10 transform rotate-45" />
          <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-[#E65538]/10 rounded-full" />
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#8FA893]/10 rounded-full blur-2xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="mb-16 md:mb-20">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div className="max-w-2xl">
                  <span className="inline-block px-4 py-2 bg-[#1E2916] text-white text-sm font-medium tracking-wider uppercase mb-6">
                    Chef's Selection
                  </span>
                  <h2 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display']">
                    Featured <span className="italic text-[#E65538]">Recipes</span>
                  </h2>
                  <p className="text-lg md:text-xl text-[#1E2916]/60 leading-relaxed">
                    Handpicked recipes that marry tradition with innovation, curated by our expert chefs.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <PremiumButton 
                    to="/recipes" 
                    variant="outline" 
                    size="md"
                    icon={<ArrowRight className="w-5 h-5" />}
                  >
                    View All Recipes
                  </PremiumButton>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {featuredRecipes.map((recipe, index) => (
              <AnimatedSection key={recipe.id} animation="fade-up" delay={index * 100}>
                <CreativeRecipeCard 
                  id={recipe.id}
                  title={recipe.title}
                  time={recipe.time}
                  servings={recipe.servings}
                  ingredients={recipe.ingredients}
                  image={recipe.image}
                  author={recipe.author}
                  variant={recipe.variant}
                  number={recipe.number}
                  difficulty={recipe.difficulty}
                  calories={recipe.calories}
                  description={recipe.description}
                />
              </AnimatedSection>
            ))}
          </div>

          {/* Decorative divider */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-20 flex items-center justify-center gap-4">
              <div className="w-16 h-[2px] bg-[#1E2916]/20" />
              <Sparkles className="w-5 h-5 text-[#E65538]" />
              <div className="w-16 h-[2px] bg-[#1E2916]/20" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonial Section - NEW */}
      <section className="relative py-24 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="relative p-8 md:p-16 bg-[#1E2916] text-white overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#E65538]/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8FA893]/20 rounded-full blur-3xl" />
              
              {/* Quote marks */}
              <div className="absolute top-8 left-8 text-[#E65538]/20 text-[120px] md:text-[200px] font-serif leading-none">
                "
              </div>
              
              <div className="relative text-center max-w-4xl mx-auto">
                <p className="text-2xl md:text-4xl lg:text-5xl font-['Playfair_Display'] italic leading-relaxed mb-8">
                  The recipes here have transformed my home cooking. Every dish feels like a restaurant experience.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8FA893] to-[#E65538] border-2 border-white/20" />
                  <div className="text-left">
                    <p className="font-medium text-lg">Sarah Mitchell</p>
                    <p className="text-white/60 text-sm">Home Chef, New York</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Categories Section */}
      <section className="py-16 md:py-24 bg-[#F2F0E9]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#E65538]/10 text-[#E65538] text-sm font-medium tracking-wider uppercase mb-4">
                Browse by Category
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display']">
                Quick <span className="italic text-[#E65538]">Categories</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {quickCategories.map((category, index) => (
              <AnimatedSection key={category.name} animation="fade-up" delay={index * 100}>
                <Link
                  to={`/recipes?filter=${category.filter}`}
                  className="group relative p-6 md:p-8 bg-white border-2 border-[#1E2916]/10 hover:border-[#E65538] transition-all duration-300 text-center overflow-hidden hover-lift"
                >
                  <div 
                    className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border-2 border-[#1E2916] group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: category.color }}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 group-hover:text-[#E65538] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#1E2916]/60 text-sm">{category.count} recipes</p>
                  
                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-5 h-5 text-[#E65538]" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Recipes Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center justify-between mb-12">
              <div>
                <span className="inline-block px-4 py-2 bg-[#1E2916] text-white text-sm font-medium tracking-wider uppercase mb-4">
                  Fresh from the Kitchen
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display']">
                  Latest <span className="italic text-[#E65538]">Recipes</span>
                </h2>
              </div>
              <PremiumButton to="/recipes" variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                View All
              </PremiumButton>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {latestRecipes.map((recipe, index) => (
              <AnimatedSection key={recipe.id} animation="fade-up" delay={index * 50}>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="group block bg-[#F2F0E9] border-2 border-[#1E2916]/10 hover:border-[#E65538] transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm md:text-base line-clamp-2 group-hover:text-[#E65538] transition-colors">
                      {recipe.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-xs text-[#1E2916]/60">
                      <Clock className="w-3 h-3" />
                      <span>{recipe.time}</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-[#1E2916]">
        <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
              <Send className="w-4 h-4 text-[#E65538]" />
              <span className="text-white/90 text-sm tracking-widest uppercase">Newsletter</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] mb-4">
              Get Weekly <span className="italic text-[#E65538]">Recipe</span> Inspiration
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and receive hand-picked recipes, cooking tips, and exclusive content directly in your inbox.
            </p>
            
            {isSubscribed ? (
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-[#8FA893] text-white">
                <Star className="w-5 h-5" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 focus:border-[#E65538] focus:bg-white/5 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#E65538] text-white border-2 border-[#E65538] hover:bg-white hover:text-[#1E2916] hover:border-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
            
            <p className="text-white/40 text-sm mt-6">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section - Premium Upgrade */}
      <section className="relative py-32 md:py-40 lg:py-48 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E2916] via-[#1E2916] to-[#0f1509]">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#E65538]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#8FA893]/20 rounded-full blur-3xl animate-float" />
          
          {/* Animated lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"
                style={{
                  top: `${20 + i * 15}%`,
                  left: '-100%',
                  right: '-100%',
                  animation: `shimmer ${3 + i}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-12 text-center">
          <AnimatedSection animation="scale">
            <div className="inline-flex items-center gap-3 mb-8 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
              <ChefHat className="w-5 h-5 text-[#E65538]" />
              <span className="text-white/90 text-sm tracking-widest uppercase">Start Your Journey</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={100}>
            <h2 className="text-white mb-8 text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display']">
              Ready to Create<br />
              <span className="italic text-[#E65538]">Culinary Magic</span>?
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-white/70 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our community of passionate food lovers and discover recipes that will transform your kitchen into a gourmet haven.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton 
                to="/recipes" 
                variant="glow" 
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Explore All Recipes
              </PremiumButton>
              <PremiumButton 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white hover:text-[#1E2916] hover:border-white"
              >
                Get in Touch
              </PremiumButton>
            </div>
          </AnimatedSection>

          {/* Bottom decoration */}
          <AnimatedSection animation="fade-up" delay={400}>
            <div className="mt-16 flex items-center justify-center gap-8 text-white/40 text-sm">
              <span>250+ Recipes</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>18 Countries</span>
              <span className="w-1 h-1 bg-white/40 rounded-full" />
              <span>12 Expert Chefs</span>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
