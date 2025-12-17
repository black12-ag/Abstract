import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { recipesData } from '../data/recipes';
import { CreativeRecipeCard } from '../components/CreativeRecipeCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { PremiumButton } from '../components/PremiumButton';
import { Heart, Trash2 } from 'lucide-react';

export function LikedRecipes() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    const liked = localStorage.getItem('likedRecipes');
    if (liked) {
      setLikedIds(JSON.parse(liked));
    }
  }, []);

  const likedRecipes = recipesData.filter(r => likedIds.includes(r.id));

  const removeFromLiked = (id: string) => {
    const newLiked = likedIds.filter(likedId => likedId !== id);
    setLikedIds(newLiked);
    localStorage.setItem('likedRecipes', JSON.stringify(newLiked));
  };

  const clearAll = () => {
    setLikedIds([]);
    localStorage.removeItem('likedRecipes');
  };

  return (
    <div className="min-h-screen bg-[#F2F0E9]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-[#E65538] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rotate-45" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/20 rotate-12" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <AnimatedSection animation="fade-up">
            <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-white/20 border border-white/30 rounded-full">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white text-sm tracking-widest uppercase font-medium">Your Favorites</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] mb-6">
              Liked Recipes
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
              Recipes you've loved. Your personal hall of culinary fame.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {likedRecipes.length > 0 ? (
            <>
              <div className="flex items-center justify-between mb-10">
                <p className="text-[#1E2916]/60">
                  {likedRecipes.length} recipe{likedRecipes.length !== 1 ? 's' : ''} liked
                </p>
                <button
                  onClick={clearAll}
                  className="flex items-center gap-2 px-4 py-2 text-[#E65538] border border-[#E65538] hover:bg-[#E65538] hover:text-white transition-all"
                >
                  <Trash2 className="w-4 h-4" />
                  Clear All
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {likedRecipes.map((recipe, index) => (
                  <div key={recipe.id} className="relative">
                    <button
                      onClick={() => removeFromLiked(recipe.id)}
                      className="absolute top-2 right-2 z-20 w-10 h-10 bg-white border-2 border-[#E65538] text-[#E65538] flex items-center justify-center hover:bg-[#E65538] hover:text-white transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <CreativeRecipeCard
                      id={recipe.id}
                      title={recipe.title}
                      time={recipe.time}
                      servings={recipe.servings}
                      ingredients={recipe.ingredients}
                      image={recipe.image}
                      author={recipe.author}
                      number={String(index + 1).padStart(2, '0')}
                      difficulty={recipe.difficulty}
                      calories={recipe.calories}
                      description={recipe.description}
                    />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <AnimatedSection animation="fade-up">
              <div className="text-center py-20">
                <Heart className="w-16 h-16 text-[#1E2916]/20 mx-auto mb-6" />
                <h2 className="text-3xl font-['Playfair_Display'] mb-4">No Liked Recipes Yet</h2>
                <p className="text-[#1E2916]/60 mb-8 max-w-md mx-auto">
                  Show some love! Click the heart icon on any recipe to add it to your favorites.
                </p>
                <PremiumButton to="/recipes" variant="primary">
                  Browse Recipes
                </PremiumButton>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </div>
  );
}
