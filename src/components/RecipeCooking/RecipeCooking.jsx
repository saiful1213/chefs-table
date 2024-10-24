import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import PropTypes from "prop-types";

const RecipeCooking = ({ cookingItem, times, calories }) => {

    return (
        <div>
            <Card className="min-h-96">
                <CardHeader>
                    <CardTitle className="text-center border-b pb-3">Currently cooking: {cookingItem.length}</CardTitle>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead></TableHead>
                                <TableHead className="w-[100px]">Name</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Calories</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-muted-foreground">
                            {
                                cookingItem.map((cookingItemRecipe, idx) => {
                                    const { id, recipe_name, preparing_time, calories } = cookingItemRecipe;
                                    return (
                                        <TableRow key={id}>
                                            <TableCell>{idx + 1}</TableCell>
                                            <TableCell className="font-medium">{recipe_name}</TableCell>
                                            <TableCell>{preparing_time}</TableCell>
                                            <TableCell>{calories}</TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                    <div className="flex items-center justify-end gap-6 font-bold text-muted-foreground">
                        <h3>Total Time = {times}</h3>
                        <h3>Total Calories = {calories}</h3>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

RecipeCooking.propTypes = {
    cookingItem: PropTypes.array,
    times: PropTypes.number,
    calories: PropTypes.number,
}

export default RecipeCooking;