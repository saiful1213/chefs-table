import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { AlarmClock, Flame } from "lucide-react";


const RecipeCard = ({ recipeObj, handleCardInfo }) => {
    const { recipe_img, recipe_name, desc, ingredient, preparing_time, calories } = recipeObj;

    return (
        <div>
            <Card>
                <CardHeader>
                    <img src={recipe_img} className="rounded-lg" />
                </CardHeader>
                <CardContent>
                    <CardTitle>{recipe_name}</CardTitle>
                    <p className="text-muted-foreground mt-2">{desc}</p>
                    <Separator className="my-4" />
                    <h3 className="font-bold">Ingredients: {ingredient.length}</h3>
                    <div className="m-3">
                        {
                            ingredient?.map(ingred => <li className="list-inside text-muted-foreground" key={ingred}>{ingred}</li>)
                        }
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground">
                        <p className="flex items-center gap-2"><AlarmClock /> <span>{preparing_time}</span></p>
                        <p className="flex items-center gap-2"><Flame /> <span>{calories}</span></p>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => handleCardInfo(recipeObj)}
                        variant="primary" size="lg" className="rounded-full">Want to Cook</Button>
                </CardFooter>
            </Card>

        </div>
    )
}

RecipeCard.propTypes = {
    recipeObj: PropTypes.object,
    handleCardInfo: PropTypes.func,
}

export default RecipeCard;