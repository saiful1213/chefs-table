import { useState } from "react";
import RecipyCardContainer from "../RecipyCardContainer/RecipyCardContainer";
import RecipyTable from "../RecipyTable/RecipyTable";
import { useToast } from "../../hooks/use-toast.js"

const Recipes = () => {
    const [cookRecipes, setCookRecipes] = useState([]);
    const [cookingItem, setCookingItem] = useState([]);
    const [times, setTime] = useState(0);
    const [calories, setCalories] = useState(0);
    const { toast } = useToast();

    const handleCardInfo = cardInfo => {
        if (cookRecipes.includes(cardInfo)) {
            return toast({
                variant: "destructive",
                title: "Recipe is exist! try another",
            })
        }
        setCookRecipes([...cookRecipes, cardInfo]);
        toast({
            title: "Recipe item added",
        })
    }

    const handlePreparingBtn = cookItemId => {
        // remove from want to cook section
        const remainingRecipes = cookRecipes?.filter(cookRecipe => cookRecipe.id !== cookItemId);
        setCookRecipes(remainingRecipes);

        // add to curently cooking section
        const cookItem = cookRecipes?.find(cookRecipy => cookRecipy.id === cookItemId);
        setCookingItem([...cookingItem, cookItem]);

        // handle preparing_time
        setTime(times + Number(cookItem.preparing_time.split(' ')[0]));
        // handle calories count
        setCalories(calories + Number(cookItem.calories.split(' ')[0]));
    }


    return (
        <div className="my-20">
            <div>
                <h2 className="text-4xl font-bold text-center">Our Recipes</h2>
                <p className="text-muted-foreground text-center w-3/5 mx-auto mt-3">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="grid grid-cols-12 gap-6 mt-12">
                <RecipyCardContainer handleCardInfo={handleCardInfo}></RecipyCardContainer>
                <RecipyTable
                    cookRecipes={cookRecipes}
                    handlePreparingBtn={handlePreparingBtn}
                    cookingItem={cookingItem}
                    times={times}
                    calories={calories}
                >
                </RecipyTable>
            </div>
        </div>
    )
}

export default Recipes;