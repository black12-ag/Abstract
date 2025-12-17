import { Check } from 'lucide-react';
import { useState } from 'react';

interface Ingredient {
  name: string;
  checked: boolean;
}

interface RecipeCardProps {
  title: string;
  time: string;
  servings: string;
  ingredients: string[];
  image: string;
  author?: string;
}

export function RecipeCard({ title, time, servings, ingredients, image, author }: RecipeCardProps) {
  const [checkedItems, setCheckedItems] = useState<Ingredient[]>(
    ingredients.map(name => ({ name, checked: false }))
  );

  const toggleIngredient = (index: number) => {
    setCheckedItems(prev => 
      prev.map((item, i) => i === index ? { ...item, checked: !item.checked } : item)
    );
  };

  return (
    <div className="bg-white border border-[#1E2916] rounded-lg overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="mb-3">{title}</h3>
        
        <div className="flex gap-6 mb-4 pb-4 border-b border-[#1E2916]/20">
          <div>
            <p className="text-xs uppercase tracking-wider text-[#1E2916]/60">Time</p>
            <p className="font-medium">{time}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-[#1E2916]/60">Servings</p>
            <p className="font-medium">{servings}</p>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-[#1E2916]/60 mb-3">Ingredients</p>
          <div className="space-y-2">
            {checkedItems.map((item, index) => (
              <label 
                key={index}
                className="flex items-start gap-3 cursor-pointer group"
              >
                <button
                  type="button"
                  onClick={() => toggleIngredient(index)}
                  className={`
                    w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5
                    transition-all duration-200
                    ${item.checked 
                      ? 'bg-[#E65538] border-[#E65538]' 
                      : 'border-[#1E2916]/30 group-hover:border-[#E65538]'
                    }
                  `}
                >
                  {item.checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                </button>
                <span className={`
                  transition-all duration-200
                  ${item.checked ? 'line-through text-[#1E2916]/40' : 'text-[#1E2916]'}
                `}>
                  {item.name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {author && (
          <p className="mt-6 pt-4 border-t border-[#1E2916]/20 text-sm italic text-[#1E2916]/60">
            by {author}
          </p>
        )}
      </div>
    </div>
  );
}
