import { useParams, Link } from 'react-router';
import { useState } from 'react';
import { recipesData, Recipe } from '../data/recipes';
import { AnimatedSection } from '../components/AnimatedSection';
import { PremiumButton } from '../components/PremiumButton';
import { 
  Clock, Users, ChefHat, ArrowLeft, Download, Printer, 
  Check, Share2, Heart, Bookmark, Play, Pause, 
  ChevronRight, Flame, Utensils
} from 'lucide-react';

export function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const recipe = recipesData.find(r => r.id === id);
  const [checkedIngredients, setCheckedIngredients] = useState<Set<number>>(new Set());
  const [currentStep, setCurrentStep] = useState(0);
  const [isStepMode, setIsStepMode] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F2F0E9]">
        <div className="text-center">
          <h1 className="text-4xl font-['Playfair_Display'] mb-4">Recipe Not Found</h1>
          <PremiumButton to="/recipes" variant="primary">
            Browse All Recipes
          </PremiumButton>
        </div>
      </div>
    );
  }

  const toggleIngredient = (index: number) => {
    const newChecked = new Set(checkedIngredients);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedIngredients(newChecked);
  };

  const downloadRecipe = () => {
    const recipeText = `
${recipe.title}
By ${recipe.author}

${recipe.description || ''}

⏱ Total Time: ${recipe.time}
👥 Servings: ${recipe.servings}
📊 Difficulty: ${recipe.difficulty}
🔥 Calories: ${recipe.calories || 'N/A'} per serving

INGREDIENTS
${recipe.ingredients.map((ing, i) => `${i + 1}. ${ing}`).join('\n')}

INSTRUCTIONS
${recipe.instructions.map((step, i) => `Step ${i + 1}: ${step}`).join('\n\n')}

${recipe.tips ? `\nCHEF'S TIPS\n${recipe.tips.map(tip => `• ${tip}`).join('\n')}` : ''}

${recipe.nutrition ? `\nNUTRITION (per serving)\nProtein: ${recipe.nutrition.protein} | Carbs: ${recipe.nutrition.carbs} | Fat: ${recipe.nutrition.fat} | Fiber: ${recipe.nutrition.fiber}` : ''}

---
Downloaded from Abstract - Culinary Excellence
    `.trim();

    const blob = new Blob([recipeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${recipe.title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const printRecipe = () => {
    window.print();
  };

  const shareRecipe = async () => {
    if (navigator.share) {
      await navigator.share({
        title: recipe.title,
        text: recipe.description || `Check out this recipe: ${recipe.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-[#8FA893] text-white';
      case 'Intermediate': return 'bg-[#E65538] text-white';
      case 'Advanced': return 'bg-[#1E2916] text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0E9]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2916] via-[#1E2916]/50 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link 
            to="/recipes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#1E2916] transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Recipes</span>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-6 right-6 z-10 flex gap-3">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className={`w-12 h-12 flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
              isLiked ? 'bg-[#E65538] border-[#E65538] text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#1E2916]'
            }`}
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={() => setIsSaved(!isSaved)}
            className={`w-12 h-12 flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
              isSaved ? 'bg-[#8FA893] border-[#8FA893] text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-[#1E2916]'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          <button 
            onClick={shareRecipe}
            className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-[#1E2916] transition-all duration-300"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-sm border border-white/20">
                  {recipe.category}
                </span>
                <span className={`px-3 py-1 text-sm ${getDifficultyColor(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
              </div>
              <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-['Playfair_Display'] mb-4">
                {recipe.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-6">
                {recipe.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{recipe.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{recipe.servings} servings</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChefHat className="w-5 h-5" />
                  <span>By {recipe.author}</span>
                </div>
                {recipe.calories && (
                  <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5" />
                    <span>{recipe.calories} cal</span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-[#1E2916] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-[#E65538] text-2xl md:text-3xl font-['Playfair_Display']">{recipe.prepTime || 'N/A'}</div>
              <div className="text-white/60 text-sm">Prep Time</div>
            </div>
            <div className="text-center">
              <div className="text-[#8FA893] text-2xl md:text-3xl font-['Playfair_Display']">{recipe.cookTime || 'N/A'}</div>
              <div className="text-white/60 text-sm">Cook Time</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl md:text-3xl font-['Playfair_Display']">{recipe.servings}</div>
              <div className="text-white/60 text-sm">Servings</div>
            </div>
            <div className="text-center">
              <div className="text-[#E65538] text-2xl md:text-3xl font-['Playfair_Display']">{recipe.calories || 'N/A'}</div>
              <div className="text-white/60 text-sm">Calories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Ingredients Column */}
            <div className="lg:col-span-1">
              <AnimatedSection animation="fade-right">
                <div className="sticky top-24">
                  <div className="bg-white border-2 border-[#1E2916] p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-2xl font-['Playfair_Display']">Ingredients</h2>
                      <span className="text-sm text-[#1E2916]/60">
                        {checkedIngredients.size}/{recipe.ingredients.length}
                      </span>
                    </div>
                    
                    <ul className="space-y-3">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li 
                          key={index}
                          onClick={() => toggleIngredient(index)}
                          className={`flex items-start gap-3 p-3 cursor-pointer transition-all duration-300 border-2 ${
                            checkedIngredients.has(index) 
                              ? 'bg-[#8FA893]/10 border-[#8FA893] line-through text-[#1E2916]/50' 
                              : 'border-transparent hover:border-[#1E2916]/20 hover:bg-[#F2F0E9]'
                          }`}
                        >
                          <div className={`w-6 h-6 flex-shrink-0 border-2 flex items-center justify-center transition-all ${
                            checkedIngredients.has(index) 
                              ? 'bg-[#8FA893] border-[#8FA893]' 
                              : 'border-[#1E2916]/30'
                          }`}>
                            {checkedIngredients.has(index) && <Check className="w-4 h-4 text-white" />}
                          </div>
                          <span>{ingredient}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Action Buttons */}
                    <div className="mt-8 space-y-3">
                      <button 
                        onClick={downloadRecipe}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E65538] text-white border-2 border-[#E65538] hover:bg-[#1E2916] hover:border-[#1E2916] transition-all duration-300 font-medium"
                      >
                        <Download className="w-5 h-5" />
                        Download Recipe
                      </button>
                      <button 
                        onClick={printRecipe}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#1E2916] hover:bg-[#1E2916] hover:text-white transition-all duration-300 font-medium"
                      >
                        <Printer className="w-5 h-5" />
                        Print Recipe
                      </button>
                    </div>
                  </div>

                  {/* Nutrition Info */}
                  {recipe.nutrition && (
                    <div className="mt-6 bg-[#1E2916] text-white p-6">
                      <h3 className="text-lg font-medium mb-4">Nutrition per serving</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-2xl font-['Playfair_Display'] text-[#E65538]">{recipe.nutrition.protein}</div>
                          <div className="text-sm text-white/60">Protein</div>
                        </div>
                        <div>
                          <div className="text-2xl font-['Playfair_Display'] text-[#8FA893]">{recipe.nutrition.carbs}</div>
                          <div className="text-sm text-white/60">Carbs</div>
                        </div>
                        <div>
                          <div className="text-2xl font-['Playfair_Display']">{recipe.nutrition.fat}</div>
                          <div className="text-sm text-white/60">Fat</div>
                        </div>
                        <div>
                          <div className="text-2xl font-['Playfair_Display']">{recipe.nutrition.fiber}</div>
                          <div className="text-sm text-white/60">Fiber</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* Instructions Column */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="fade-left">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-['Playfair_Display']">Instructions</h2>
                  <button 
                    onClick={() => setIsStepMode(!isStepMode)}
                    className={`flex items-center gap-2 px-4 py-2 border-2 transition-all duration-300 ${
                      isStepMode 
                        ? 'bg-[#E65538] text-white border-[#E65538]' 
                        : 'border-[#1E2916] hover:bg-[#1E2916] hover:text-white'
                    }`}
                  >
                    {isStepMode ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    <span>{isStepMode ? 'Exit Step Mode' : 'Step-by-Step Mode'}</span>
                  </button>
                </div>

                {isStepMode ? (
                  /* Step-by-Step Mode */
                  <div className="bg-white border-2 border-[#1E2916] p-8 md:p-12">
                    <div className="text-center mb-8">
                      <span className="text-[#E65538] text-sm font-medium tracking-wider uppercase">
                        Step {currentStep + 1} of {recipe.instructions.length}
                      </span>
                    </div>
                    <p className="text-2xl md:text-3xl text-center leading-relaxed mb-12">
                      {recipe.instructions[currentStep]}
                    </p>
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                        disabled={currentStep === 0}
                        className="px-6 py-3 border-2 border-[#1E2916] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1E2916] hover:text-white transition-all duration-300"
                      >
                        Previous
                      </button>
                      <div className="flex gap-2">
                        {recipe.instructions.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentStep(index)}
                            className={`w-3 h-3 rounded-full transition-all ${
                              index === currentStep ? 'bg-[#E65538]' : 'bg-[#1E2916]/20'
                            }`}
                          />
                        ))}
                      </div>
                      <button 
                        onClick={() => setCurrentStep(Math.min(recipe.instructions.length - 1, currentStep + 1))}
                        disabled={currentStep === recipe.instructions.length - 1}
                        className="px-6 py-3 bg-[#E65538] text-white border-2 border-[#E65538] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#1E2916] hover:border-[#1E2916] transition-all duration-300"
                      >
                        Next Step
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Full Instructions List */
                  <div className="space-y-6">
                    {recipe.instructions.map((instruction, index) => (
                      <div 
                        key={index}
                        className="group flex gap-6 p-6 bg-white border-2 border-[#1E2916]/10 hover:border-[#E65538] transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-12 h-12 bg-[#1E2916] text-white flex items-center justify-center font-['Playfair_Display'] text-xl group-hover:bg-[#E65538] transition-colors">
                          {index + 1}
                        </div>
                        <p className="text-lg leading-relaxed pt-2">{instruction}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Chef's Tips */}
                {recipe.tips && recipe.tips.length > 0 && (
                  <div className="mt-12 p-8 bg-[#8FA893]/10 border-2 border-[#8FA893]/30">
                    <div className="flex items-center gap-3 mb-6">
                      <Utensils className="w-6 h-6 text-[#8FA893]" />
                      <h3 className="text-2xl font-['Playfair_Display']">Chef's Tips</h3>
                    </div>
                    <ul className="space-y-3">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <ChevronRight className="w-5 h-5 text-[#8FA893] flex-shrink-0 mt-0.5" />
                          <span className="text-[#1E2916]/80">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tags */}
                {recipe.tags && recipe.tags.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-[#F2F0E9] border border-[#1E2916]/10 text-sm hover:border-[#E65538] hover:text-[#E65538] transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Related Recipes */}
      <section className="py-12 md:py-20 px-6 bg-[#1E2916]">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-white text-3xl md:text-4xl font-['Playfair_Display'] mb-8 text-center">
              You Might Also Like
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {recipesData
              .filter(r => r.id !== recipe.id && r.category === recipe.category)
              .slice(0, 3)
              .map((relatedRecipe, index) => (
                <AnimatedSection key={relatedRecipe.id} animation="fade-up" delay={index * 100}>
                  <Link 
                    to={`/recipe/${relatedRecipe.id}`}
                    className="group block bg-white border-2 border-white/10 overflow-hidden hover:border-[#E65538] transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={relatedRecipe.image} 
                        alt={relatedRecipe.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-['Playfair_Display'] mb-2 group-hover:text-[#E65538] transition-colors">
                        {relatedRecipe.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-[#1E2916]/60">
                        <span>{relatedRecipe.time}</span>
                        <span>•</span>
                        <span>{relatedRecipe.difficulty}</span>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
