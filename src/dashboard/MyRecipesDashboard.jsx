import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyRecipesDashboard = () => {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://recipe-server-beta.vercel.app/recipes?email=${user.email}`)
                .then(res => res.json())
                .then(data => setRecipes(data));
        }
    }, [user?.email]);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">My Recipes</h2>
            <table className="table-auto w-full border">
                <thead>
                    <tr className="bg-orange-200">
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Title</th>
                        <th className="p-2 border">Logo</th>
                        <th className="p-2 border">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe, index) => (
                        <tr key={recipe._id}>
                            <td className="p-2 border">{index + 1}</td>
                            <td className="p-2 border">{recipe.title}</td>
                            <td className="p-2 border"><img src={recipe.image} className='w-20 h-20 object-cover' alt="" /></td>
                            <td className="p-2 border">
                                <button className="btn btn-xs btn-warning">Edit</button>
                                <button className="btn btn-xs btn-error ml-2">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyRecipesDashboard;
