import { useGlobalContext } from "../context";

const Meals = () => {
    const {meals} = useGlobalContext();
    
    return <section>
        {meals.map((singleMeal) => {
            console.log(singleMeal)
            return <h4>single meals</h4>
        })}
    </section>
}
 
export default Meals;