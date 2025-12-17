import { useState } from 'react';
import { recipesData } from '../data/recipes';
import { CreativeRecipeCard } from '../components/CreativeRecipeCard';
import { Search, Filter, Sparkles, X, ChefHat, Clock, Flame } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';

export function Recipes() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTime, setSelectedTime] = useState('All');

  const categories = ['All', ...new Set(recipesData.map(r => r.category))];
  const difficulties = ['All', 'Easy', 'Intermediate', 'Advanced'];
  const timeFilters = [
    { label: 'All', value: 'All' },
    { label: '< 30 min', value: '30' },
    { label: '< 1 hour', value: '60' },
    { label: '1-2 hours', value: '120' },
    { label: '2+ hours', value: '999' },
  ];

  const parseTime = (timeStr: string): number => {
    const hours = timeStr.match(/(\d+)\s*h/);
    const minutes = timeStr.match(/(\d+)\s*m/);
    let total = 0;
    if (hours) total += parseInt(hours[1]) * 60;
    if (minutes) total += parseInt(minutes[1]);
    return total || 60;
  };

  const filteredRecipes = recipesData.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty;
    
    let matchesTime = true;
    if (selectedTime !== 'All') {
      const recipeMinutes = parseTime(recipe.time);
      const maxMinutes = parseInt(selectedTime);
      if (selectedTime === '999') {
        matchesTime = recipeMinutes >= 120;
      } else if (selectedTime === '120') {
        matchesTime = recipeMinutes >= 60 && recipeMinutes < 120;
      } else {
        matchesTime = recipeMinutes < maxMinutes;
      }
    }
    
    return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
  });

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
    setSelectedTime('All');
  };

  const hasActiveFilters = searchTerm || selectedCategory !== 'All' || selectedDifficulty !== 'All' || selectedTime !== 'All';

  return (
    <div className="min-h-screen bg-[#F2F0E9]">
      {/* Hero Header */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-[#1E2916] overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E65538]/20 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8FA893]/20 rounded-full blur-3xl animate-float" />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-3 bg-white/5 border border-white/10 backdrop-blur-sm rounded-full">
                <ChefHat className="w-4 h-4 text-[#E65538]" />
                <span className="text-white/90 text-sm tracking-widest uppercase">Recipe Collection</span>
              </div>
              <h1 className="text-white mb-6 text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display']">
                Discover <span className="italic text-[#E65538]">Culinary</span><br />Masterpieces
              </h1>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                Explore our complete collection of chef-tested and perfected recipes from around the world.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <div className="relative py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-12">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 border-2 border-[#1E2916]/5 transform rotate-45" />
          <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-[#E65538]/10 rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Search & Filters */}
          <AnimatedSection animation="fade-up">
            <div className="mb-12 md:mb-16 p-6 md:p-8 bg-white border-2 border-[#1E2916] shadow-lg">
              {/* Search */}
              <div className="relative mb-6">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1E2916]/40" />
                <input
                  type="text"
                  placeholder="Search recipes by name or chef..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-14 pr-12 py-4 md:py-5 border-2 border-[#1E2916]/20 bg-[#F2F0E9] focus:border-[#E65538] focus:bg-white outline-none transition-all duration-300 text-base md:text-lg"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-[#1E2916]/40 hover:text-[#E65538] transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Categories */}
              <div className="flex items-center gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-2 text-[#1E2916]/60">
                  <Filter className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">Category:</span>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`group relative px-4 md:px-5 py-2 md:py-2.5 border-2 transition-all duration-300 text-sm font-medium tracking-wide overflow-hidden ${
                        selectedCategory === category
                          ? 'bg-[#E65538] text-white border-[#E65538]'
                          : 'border-[#1E2916]/20 hover:border-[#1E2916] bg-transparent'
                      }`}
                    >
                      <span className="relative z-10">{category}</span>
                      {selectedCategory !== category && (
                        <span className="absolute inset-0 bg-[#1E2916] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      )}
                      <span className={`relative z-10 ${selectedCategory !== category ? 'group-hover:text-white' : ''} transition-colors duration-300`}>
                        {category}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Difficulty Filter */}
              <div className="flex items-center gap-4 flex-wrap mb-4">
                <div className="flex items-center gap-2 text-[#1E2916]/60">
                  <Flame className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">Difficulty:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {difficulties.map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`px-4 py-2 border-2 transition-all duration-300 text-sm font-medium ${
                        selectedDifficulty === diff
                          ? diff === 'Easy' ? 'bg-[#8FA893] text-white border-[#8FA893]'
                          : diff === 'Intermediate' ? 'bg-[#E65538] text-white border-[#E65538]'
                          : diff === 'Advanced' ? 'bg-[#1E2916] text-white border-[#1E2916]'
                          : 'bg-[#1E2916] text-white border-[#1E2916]'
                          : 'border-[#1E2916]/20 hover:border-[#1E2916]'
                      }`}
                    >
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Filter */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2 text-[#1E2916]/60">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium uppercase tracking-wider hidden sm:inline">Time:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {timeFilters.map((time) => (
                    <button
                      key={time.value}
                      onClick={() => setSelectedTime(time.value)}
                      className={`px-4 py-2 border-2 transition-all duration-300 text-sm font-medium ${
                        selectedTime === time.value
                          ? 'bg-[#1E2916] text-white border-[#1E2916]'
                          : 'border-[#1E2916]/20 hover:border-[#1E2916]'
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Results Count */}
          <AnimatedSection animation="fade-up" delay={100}>
            <div className="mb-8 md:mb-10 flex items-center justify-between">
              <p className="text-[#1E2916]/60 text-lg">
                Showing <span className="font-semibold text-[#1E2916]">{filteredRecipes.length}</span> 
                {filteredRecipes.length === 1 ? ' recipe' : ' recipes'}
                {selectedCategory !== 'All' && (
                  <span> in <span className="text-[#E65538] font-medium">{selectedCategory}</span></span>
                )}
              </p>
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="text-sm text-[#E65538] hover:underline font-medium"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </AnimatedSection>

          {/* Recipe Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
              {filteredRecipes.map((recipe, index) => (
                <AnimatedSection key={recipe.id} animation="fade-up" delay={index * 50}>
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
          ) : (
            <AnimatedSection animation="scale">
              <div className="text-center py-20 md:py-32">
                <div className="w-24 h-24 mx-auto mb-8 bg-[#F2F0E9] border-2 border-[#1E2916]/10 rounded-full flex items-center justify-center">
                  <Search className="w-10 h-10 text-[#1E2916]/30" />
                </div>
                <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] mb-4">
                  No recipes found
                </h3>
                <p className="text-[#1E2916]/60 text-lg mb-8 max-w-md mx-auto">
                  We couldn't find any recipes matching your criteria. Try adjusting your search or filters.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#E65538] text-white border-2 border-[#1E2916] hover:bg-[#1E2916] transition-colors duration-300 font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  Show all recipes
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </div>
    </div>
  );
}
