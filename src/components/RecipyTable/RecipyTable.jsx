import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button";
import PropTypes from "prop-types";
import RecipeCooking from "../RecipeCooking/RecipeCooking";


const RecipyTable = ({ cookRecipes, handlePreparingBtn, cookingItem, times, calories }) => {

    return (
        <div className="col-span-12 md:col-span-4">
            <Card className="min-h-[500px]">
                <CardHeader>
                    <CardTitle className="text-center border-b pb-3">Want to cook: {cookRecipes.length}</CardTitle>
                </CardHeader>

                <CardContent>

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Calories</TableHead>
                                <TableHead className="text-right"></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-muted-foreground">
                            {
                                cookRecipes.map((cookRecipe, idx) => {
                                    const { id, recipe_name, preparing_time, calories } = cookRecipe;
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell className="font-medium">{recipe_name}</TableCell>
                                            <TableCell>{preparing_time}</TableCell>
                                            <TableCell>{calories}</TableCell>
                                            <TableCell className="text-right"><Button onClick={() => handlePreparingBtn(id)}
                                                variant="primary" className="rounded-full text-black">Preparing</Button></TableCell>
                                        </TableRow>
                                    )
                                })
                            }

                        </TableBody>
                    </Table>


                </CardContent>
                <RecipeCooking cookingItem={cookingItem} times={times} calories={calories}></RecipeCooking>
            </Card>
        </div>
    )
}

RecipyTable.propTypes = {
    cookRecipes: PropTypes.array,
    handlePreparingBtn: PropTypes.func,
    cookingItem: PropTypes.array,
    times: PropTypes.number,
    calories: PropTypes.number,
}

export default RecipyTable;