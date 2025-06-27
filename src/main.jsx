import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import UpdateRecipe from './components/UpdateRecipe.jsx';
import AllRecipes from './components/AllRecipes.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import PrivateRoute from './Provider/PrivateRoute.jsx';
import ErrorPage from './ErrorPage.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import AboutUs from './components/AboutUs.jsx';

import DashboardLayout from './dashboard/DashbordLayout.jsx';
import Overview from './dashboard/Overview.jsx';
import AllRecipesDashboard from './dashboard/AllRecipesDashboard.jsx';
import MyRecipesDashboard from './dashboard/MyRecipesDashboard.jsx';
import { allRecipesLoader, myRecipesLoader } from './dashboard/loaders.js';





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch('https://recipe-server-beta.vercel.app/recipes'),
        Component: Home

      },
      {
        path: 'allRecipes',
        loader: () => fetch('https://recipe-server-beta.vercel.app/recipes'),
        Component: AllRecipes,
      },
      {
        path:'/aboutUs',
        element:<AboutUs></AboutUs>
      },

      {
        path: 'addRecipe',
        element: <PrivateRoute>
          <AddRecipe></AddRecipe>
        </PrivateRoute>
      },
      {
        path: 'recipe/:id',
        loader: ({ params }) => fetch(`https://recipe-server-beta.vercel.app/recipes/${params.id}`),
        element: <PrivateRoute>
          <RecipeDetails></RecipeDetails>
        </PrivateRoute>

      },
      {
        path: "updateRecipe/:id",
        loader: ({ params }) => fetch(`https://recipe-server-beta.vercel.app/recipes/${params.id}`),
        Component: UpdateRecipe,
      },
      {
        path: 'myRecipes',
        element: <PrivateRoute>
          <MyRecipes></MyRecipes>,
        </PrivateRoute>

      },

      {
        path: "/login",
        Component: Login,

      },
      {
        path: "/register",
        Component: Register,

      },


    ]

  },



  {
    path: '/dashboard',
    element: (
      <PrivateRoute>
       <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Overview /> },
      {
        path: '/dashboard/all',
        element: <AllRecipesDashboard />,
        loader: allRecipesLoader
      },
      {
        path: '/dashboard/my',
        element: <MyRecipesDashboard />,
        
      },
      
    ],
  },


  {
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
