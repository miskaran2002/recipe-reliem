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



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        loader: () => fetch('http://localhost:3000/recipes'),
        Component:Home

      },
      {
        path:'allRecipes',
        loader: () => fetch('http://localhost:3000/recipes'),
        Component:AllRecipes,
      },

      {
        path:'addRecipe',
        Component:AddRecipe
      },
      {
        path:'recipe/:id',
        loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
        Component:RecipeDetails,

      },
      {
        path:"updateRecipe/:id",
        loader: ({params}) => fetch(`http://localhost:3000/recipes/${params.id}`),
        Component:UpdateRecipe,
      },
      {
        path:"/login",
        Component:Login,

      },
      {
        path:"/register",
        Component:Register,

      }

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider> 
      <RouterProvider router={router} />
    </AuthProvider> 
  </StrictMode>,
)
