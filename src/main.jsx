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
import { ThemeProvider } from './components/ThemeContext.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch('http://localhost:3000/recipes'),
        Component: Home

      },
      {
        path: 'allRecipes',
        loader: () => fetch('http://localhost:3000/recipes'),
        Component: AllRecipes,
      },

      {
        path: 'addRecipe',
        element: <PrivateRoute>
          <AddRecipe></AddRecipe>
        </PrivateRoute>
      },
      {
        path: 'recipe/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`),
        element: <PrivateRoute>
          <RecipeDetails></RecipeDetails>
        </PrivateRoute>

      },
      {
        path: "updateRecipe/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/recipes/${params.id}`),
        Component: UpdateRecipe,
      },
      {
        path:'myRecipes',
        element : <PrivateRoute>
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
    path: "/*",
    element: <ErrorPage></ErrorPage>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
