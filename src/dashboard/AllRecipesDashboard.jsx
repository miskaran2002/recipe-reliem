import React from 'react';
import { useLoaderData } from 'react-router';

const AllRecipesDashboard = () => {
    const recipes = useLoaderData();

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Recipes</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-orange-200">
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Logo</th>
                        <th className="p-2 border">Author</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, index) => (
                        <tr key={recipe._id}>
                            <td className="p-2 border">{index + 1}</td>                          
                            <td className="p-2 border">{recipe.title}</td>
                            <td className="p-2 border"><img src={recipe.image} className='w-20 h-20 object-cover' alt="" /></td>
                            <td className="p-2 border">{recipe.ownerEmail || "Unknown"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllRecipesDashboard;
