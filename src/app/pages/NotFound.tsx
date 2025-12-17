import { Link } from 'react-router';
import { Home, ArrowLeft, Search } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-12 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2F0E9] via-[#F2F0E9] to-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E65538]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8FA893]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-2xl">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="font-['Playfair_Display'] text-[120px] md:text-[180px] lg:text-[240px] leading-none text-[#E65538]/20 select-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">
            Recipe Not Found
          </h2>
          <p className="text-lg md:text-xl text-[#1E2916]/60 leading-relaxed">
            Looks like this page went back to the kitchen. Don't worry, we have plenty more delicious content for you!
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E65538] text-white border-2 border-[#E65538] hover:bg-[#1E2916] hover:border-[#1E2916] transition-all duration-300 font-medium tracking-wide group"
          >
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>
          
          <Link 
            to="/recipes"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-[#1E2916] hover:bg-[#1E2916] hover:text-white transition-all duration-300 font-medium tracking-wide group"
          >
            <Search className="w-5 h-5" />
            <span>Browse Recipes</span>
          </Link>
        </div>

        {/* Back Link */}
        <div className="mt-12">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-[#1E2916]/60 hover:text-[#E65538] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go back to previous page</span>
          </button>
        </div>
      </div>
    </div>
  );
}
