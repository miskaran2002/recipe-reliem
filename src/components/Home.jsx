import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';
import ThemeSlider from './ThemeSlider';

const Home = () => {
    const recipes=useLoaderData();
     console.log(recipes);
    return (
        <div>

            <div className=''>
                <ThemeSlider></ThemeSlider>

            </div>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    recipes.map(recipe=><RecipeCard recipe={recipe} key={recipe._id}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default Home;