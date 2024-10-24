import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipyCardContainer = (props) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch('recipe.json')
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    return (
        <div className="col-span-12 md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    recipe?.map(recipeObj => <RecipeCard key={recipeObj.id} {...props} recipeObj={recipeObj}></RecipeCard>)
                }
            </div>
        </div>
    )
}

export default RecipyCardContainer;