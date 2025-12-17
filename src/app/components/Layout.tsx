import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import { Menu, X, Utensils, Home, BookOpen, Users, Mail, Phone, MapPin } from 'lucide-react';
import { ScrollToTop } from './ScrollToTop';
import { MobileNav } from './MobileNav';

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/recipes', label: 'Recipes', icon: BookOpen },
    { path: '/about', label: 'About', icon: Users },
    { path: '/contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F2F0E9]">
      <ScrollToTop />
      {/* Premium Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2F0E9]/98 backdrop-blur-lg border-b-2 border-[#1E2916]/10 shadow-sm">
        <div className="px-4 md:px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo - Premium */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 md:w-14 md:h-14 bg-[#E65538] border-2 border-[#1E2916] flex items-center justify-center group-hover:bg-[#1E2916] transition-all duration-300 overflow-hidden">
                {/* Shine effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Utensils className="relative z-10 w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="block text-[#1E2916] font-bold tracking-wider text-base md:text-lg">
                  ABSTRACT
                </span>
                <span className="block text-[#E65538] text-xs tracking-widest uppercase">
                  Culinary Excellence
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Premium */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`group relative px-6 py-3 flex items-center gap-2 border-2 transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-[#E65538] text-white border-[#E65538]'
                        : 'border-transparent hover:border-[#1E2916]'
                    }`}
                  >
                    {/* Hover background effect */}
                    {!isActive && (
                      <span className="absolute inset-0 bg-[#1E2916] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    )}
                    
                    <Icon className={`relative z-10 w-4 h-4 ${!isActive && 'group-hover:text-white'} transition-colors duration-300`} />
                    <span className={`relative z-10 font-medium tracking-wide ${!isActive && 'group-hover:text-white'} transition-colors duration-300`}>
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button - Premium */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-12 h-12 md:w-14 md:h-14 bg-[#1E2916] text-white flex items-center justify-center hover:bg-[#E65538] transition-all duration-300 border-2 border-[#1E2916] overflow-hidden group"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {menuOpen ? <X className="relative z-10 w-6 h-6 md:w-7 md:h-7" /> : <Menu className="relative z-10 w-6 h-6 md:w-7 md:h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 bg-[#1E2916] z-40 transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6 space-y-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full max-w-sm py-4 px-6 border-2 border-white/20 flex items-center justify-center gap-3 transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-[#E65538] text-white border-[#E65538]'
                    : 'text-[#F2F0E9] hover:bg-white/10 hover:border-white'
                }`}
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`
                }}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xl font-medium tracking-wide">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-16 md:pt-20 pb-20 lg:pb-0">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />

      {/* Premium Footer */}
      <footer className="relative bg-[#1E2916] text-[#F2F0E9] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E65538]/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#8FA893]/10 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative px-6 lg:px-12 py-20 md:py-28">
          <div className="max-w-7xl mx-auto">
            {/* Top section with logo and tagline */}
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-[#E65538] border-2 border-white/20 flex items-center justify-center">
                  <Utensils className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-2xl font-bold tracking-wider">ABSTRACT</h4>
                  <p className="text-[#E65538] text-sm tracking-widest uppercase">Culinary Excellence</p>
                </div>
              </div>
              <p className="text-[#F2F0E9]/70 text-lg max-w-2xl mx-auto leading-relaxed">
                Crafting culinary stories that inspire and delight food lovers worldwide.
              </p>
            </div>

            {/* Main footer grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div>
                <h4 className="mb-6 text-lg font-semibold tracking-wide border-b-2 border-[#E65538] inline-block pb-2">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.path}>
                        <Link 
                          to={item.path} 
                          className="group flex items-center gap-2 text-[#F2F0E9]/60 hover:text-[#E65538] transition-all duration-300"
                        >
                          <Icon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-lg font-semibold tracking-wide border-b-2 border-[#8FA893] inline-block pb-2">
                  Contact
                </h4>
                <ul className="space-y-4 text-[#F2F0E9]/60">
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#E65538] flex-shrink-0 mt-0.5" />
                    <a href="mailto:info@abstract.et" className="hover:text-[#E65538] transition-colors">
                      info@abstract.et
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#8FA893] flex-shrink-0 mt-0.5" />
                    <a href="tel:+251911234567" className="hover:text-[#E65538] transition-colors">
                      +251 91 123 4567
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E65538] flex-shrink-0 mt-0.5" />
                    <span>Bole, Addis Ababa, Ethiopia</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-lg font-semibold tracking-wide border-b-2 border-[#E65538] inline-block pb-2">
                  Resources
                </h4>
                <ul className="space-y-3 text-[#F2F0E9]/60">
                  <li><a href="#" className="hover:text-[#E65538] transition-colors">Recipe Guide</a></li>
                  <li><a href="#" className="hover:text-[#E65538] transition-colors">Cooking Tips</a></li>
                  <li><a href="#" className="hover:text-[#E65538] transition-colors">Newsletter</a></li>
                  <li><a href="#" className="hover:text-[#E65538] transition-colors">Privacy Policy</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-6 text-lg font-semibold tracking-wide border-b-2 border-[#8FA893] inline-block pb-2">
                  Follow Us
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Instagram', 'Pinterest', 'Twitter', 'Facebook'].map((social) => (
                    <a 
                      key={social}
                      href="#"
                      className="group relative px-4 py-3 border-2 border-[#F2F0E9]/10 hover:border-[#E65538] transition-all duration-300 text-sm text-center overflow-hidden"
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

            {/* Bottom bar */}
            <div className="pt-8 border-t-2 border-[#F2F0E9]/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-[#F2F0E9]/40">
                  © 2025 Abstract. All recipes crafted with <span className="text-[#E65538]">♥</span>
                </p>
                <div className="flex items-center gap-6 text-sm text-[#F2F0E9]/40">
                  <a href="#" className="hover:text-[#E65538] transition-colors">Terms</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#E65538] transition-colors">Privacy</a>
                  <span>•</span>
                  <a href="#" className="hover:text-[#E65538] transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}