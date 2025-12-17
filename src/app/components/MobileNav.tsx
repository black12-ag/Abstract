import { Link, useLocation } from 'react-router';
import { Home, BookOpen, Users, Mail, Search } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/recipes', label: 'Recipes', icon: BookOpen },
  { path: '/about', label: 'About', icon: Users },
  { path: '/contact', label: 'Contact', icon: Mail },
];

export function MobileNav() {
  const location = useLocation();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#1E2916] border-t-2 border-[#E65538]/20 safe-area-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 transition-all duration-300 ${
                isActive 
                  ? 'text-[#E65538]' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <div className={`relative p-2 rounded-xl transition-all duration-300 ${
                isActive ? 'bg-[#E65538]/20' : ''
              }`}>
                <Icon className={`w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}`} />
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#E65538] rounded-full" />
                )}
              </div>
              <span className={`text-xs font-medium tracking-wide ${isActive ? 'text-[#E65538]' : ''}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
