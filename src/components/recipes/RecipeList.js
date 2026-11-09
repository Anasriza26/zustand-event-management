
"use client";

import { useEffect } from "react";
import Image from "next/image";
import useRecipeStore from "../../store/recipes/useRecipeStore";

export default function RecipeList() {
    const recipes = useRecipeStore(
        (state) => state.recipes
    );

    const loading = useRecipeStore(
        (state) => state.loading
    );

    const error = useRecipeStore(
        (state) => state.error
    );

    const fetchRecipes = useRecipeStore(
        (state) => state.fetchRecipes
    );

    useEffect(() => {
        fetchRecipes();
    }, [fetchRecipes]);

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">
                Recipe Explorer
            </h1>

            {loading && (
                <p className="text-blue-600">
                    Loading recipes...
                </p>
            )}

            {error && (
                <div className="bg-red-100 text-red-700 p-4 rounded">
                    <p>{error}</p>

                    <button
                        onClick={() => fetchRecipes()}
                        className="mt-2 bg-red-600 text-white px-4 py-2 rounded"
                    >
                        Try Again
                    </button>
                </div>
            )}

            {!loading && !error && recipes.length === 0 && (
                <p>No recipes found.</p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
                {recipes.map((recipe) => (
                    <div
                        key={recipe.id}
                        className="border rounded-lg p-4 shadow-sm"
                    >
                        <Image
                            src={recipe.image}
                            alt={recipe.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover rounded"
                        />

                        <h2 className="font-bold text-lg mt-3">
                            {recipe.name}
                        </h2>

                        <p className="text-gray-600">
                            Cuisine: {recipe.cuisine}
                        </p>

                        <p className="text-gray-600">
                            Rating: {recipe.rating}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
