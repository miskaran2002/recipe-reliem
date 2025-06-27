// src/dashboard/loaders.js
import { redirect } from "react-router";

// For All Recipes - fetch all recipes
export async function allRecipesLoader() {
    const res = await fetch('https://recipe-server-beta.vercel.app/recipes');
    if (!res.ok) throw new Response("Failed to load recipes", { status: res.status });
    const data = await res.json();
    return data;
}

// For My Recipes - fetch recipes by user email
export async function myRecipesLoader({ request }) {
    // Here you should get user email from auth context or cookie
    // But loader has no direct access to React Context,
    // so you might store email in localStorage or a cookie from login
    // Or better: pass user info as a header or token to API

    const userEmail = localStorage.getItem('user.Email'); // example; replace with your auth logic
     if (!userEmail) {
        // If no userEmail, redirect to login or throw error
         return redirect('/login');
     }

    const res = await fetch(`https://recipe-server-beta.vercel.app/recipes?email=${userEmail}`);
    if (!res.ok) throw new Response("Failed to load your recipes", { status: res.status });
    const data = await res.json();
    return data;
}
