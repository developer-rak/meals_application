import React, { useState, useContext, useEffect } from 'react';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

const AppProvider = ({ children }) => {

    const fetchData = async() => {
        try {
            const response = await fetch('https://randomuser.me/api/')
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return <AppContext.Provider value={{name:'rak', role:'student'}}>
        {children}
    </AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
 
export { AppContext, AppProvider };