import { Clock, Users, ArrowRight, Flame } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

interface CreativeRecipeCardProps {
  id: string;
  title: string;
  time: string;
  servings: string;
  ingredients: string[];
  image: string;
  author?: string;
  variant?: 'large' | 'wide' | 'standard' | 'tall';
  number: string;
  difficulty?: string;
  calories?: string;
  description?: string;
}

export function CreativeRecipeCard({ 
  id,
  title, 
  time, 
  servings, 
  ingredients, 
  image, 
  author,
  number,
  difficulty,
  calories,
  description
}: CreativeRecipeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);

  const showDetails = isHovered || isPinned;

  const getDifficultyColor = (diff?: string) => {
    switch (diff) {
      case 'Easy': return 'bg-[#8FA893]';
      case 'Intermediate': return 'bg-[#E65538]';
      case 'Advanced': return 'bg-[#1E2916]';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Link 
      to={`/recipe/${id}`}
      className="group relative block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Recipe Number */}
      <div className="absolute -top-4 -left-4 z-10 pointer-events-none">
        <span className="font-['Playfair_Display'] text-6xl md:text-7xl lg:text-8xl leading-none text-[#E65538]/10 select-none">
          {number}
        </span>
      </div>

      {/* Main Card */}
      <div 
        className="relative bg-white border-2 border-[#1E2916] overflow-hidden transition-all duration-500 hover:shadow-[8px_8px_0px_0px_rgba(30,41,22,1)]"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2916]/80 via-[#1E2916]/20 to-transparent" />

          {/* Hover Details Overlay */}
          <div className={`absolute inset-0 bg-[#1E2916]/90 flex flex-col justify-center items-center p-6 transition-all duration-300 ${
            showDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}>
            <p className="text-white/80 text-center text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
              {description || `A delicious ${title.toLowerCase()} recipe by ${author}`}
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {difficulty && (
                <span className={`px-3 py-1 text-white text-xs ${getDifficultyColor(difficulty)}`}>
                  {difficulty}
                </span>
              )}
              {calories && (
                <span className="px-3 py-1 bg-white/20 text-white text-xs flex items-center gap-1">
                  <Flame className="w-3 h-3" /> {calories} cal
                </span>
              )}
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setIsPinned(!isPinned); }}
              className={`text-xs uppercase tracking-wider ${isPinned ? 'text-[#E65538]' : 'text-white/60 hover:text-white'}`}
            >
              {isPinned ? '✓ Pinned' : 'Click to pin'}
            </button>
          </div>

          {/* Time & Servings */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${showDetails ? 'opacity-0' : 'opacity-100'}`}>
            <div className="backdrop-blur-sm bg-white/90 px-3 py-2 border border-[#1E2916]/20">
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">{time}</span>
              </div>
            </div>
            <div className="backdrop-blur-sm bg-white/90 px-3 py-2 border border-[#1E2916]/20">
              <div className="flex items-center gap-2">
                <Users className="w-3 h-3 md:w-4 md:h-4" />
                <span className="text-xs md:text-sm font-medium">{servings}</span>
              </div>
            </div>
          </div>

          {/* Title Overlay */}
          <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-opacity duration-300 ${showDetails ? 'opacity-0' : 'opacity-100'}`}>
            <h3 className="text-white text-xl md:text-2xl mb-1" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
              {title}
            </h3>
            {author && (
              <p className="text-white/80 text-sm">by {author}</p>
            )}
          </div>
        </div>

        {/* Expandable Content */}
        <div className="bg-[#F2F0E9]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full p-4 md:p-6 flex items-center justify-between hover:bg-white transition-colors"
            aria-expanded={isExpanded}
          >
            <span className="text-sm uppercase tracking-wider font-medium">
              {isExpanded ? 'Hide' : 'Show'} Ingredients
            </span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>

          {/* Ingredients List */}
          <div 
            className={`overflow-hidden transition-all duration-500 ${
              isExpanded ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="px-4 md:px-6 pb-4 md:pb-6">
              <ul className="space-y-2">
                {ingredients.map((ingredient, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-sm"
                  >
                    <span className="text-[#E65538] mt-1 flex-shrink-0">•</span>
                    <span>{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="p-4 md:p-6 border-t-2 border-[#1E2916]/10">
          <div 
            className="w-full py-3 md:py-4 px-6 bg-[#E65538] text-white border-2 border-[#1E2916] font-medium tracking-wide uppercase text-sm hover:bg-[#1E2916] transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <span>View Recipe</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}
