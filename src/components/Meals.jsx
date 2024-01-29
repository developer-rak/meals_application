import { useContext } from "react";
import { AppContext } from "../context";

const Meals = () => {
    const context = useContext(AppContext);
    console.log(context)
    return (
        <h3>Meals Component</h3>
    );
}
 
export default Meals;