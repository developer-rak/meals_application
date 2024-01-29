import { useGlobalContext } from "../context";

const Meals = () => {
    const context = useGlobalContext();
    console.log(context)
    return (
        <h3>Meals Component</h3>
    );
}
 
export default Meals;