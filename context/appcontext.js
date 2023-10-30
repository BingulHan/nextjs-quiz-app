"use client";

import { getAllQuiz, getQuestionsFromId } from "@/service";

const { createContext, useState, useEffect } = require("react");

const AppContext = createContext();

export const AppProvider = ({children}) => {
    
    const [currentQuiz, setCurrentQuiz] = useState("");
    const [quizList, setQuizList] = useState([]);

    useEffect(()=>{

        setQuizList(getAllQuiz());
        
    }, [])

    return (<AppContext.Provider value={{currentQuiz: currentQuiz, list: quizList, set: setCurrentQuiz}}>
        
        {children}


    </AppContext.Provider>)
}


export default AppContext;