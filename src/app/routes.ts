import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Recipes } from './pages/Recipes';
import { RecipeDetail } from './pages/RecipeDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { SavedRecipes } from './pages/SavedRecipes';
import { LikedRecipes } from './pages/LikedRecipes';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'recipes',
        Component: Recipes,
      },
      {
        path: 'recipe/:id',
        Component: RecipeDetail,
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: 'contact',
        Component: Contact,
      },
      {
        path: 'saved',
        Component: SavedRecipes,
      },
      {
        path: 'liked',
        Component: LikedRecipes,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]);