import React, { useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {

    const fetchMeals = async(url) => {
        try {
            const response = await axios(url)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMeals(allMealsUrl, randomMealUrl)
    },[])

    return <AppContext.Provider value={{name:'rak', role:'student'}}>
        {children}
    </AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
 
export { AppContext, AppProvider };