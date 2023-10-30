"use client";
import AppContext from '@/context/appcontext';
import { getQuestionsFromId } from '@/service';
import React, { useContext, useEffect, useState } from 'react'

function Quiz() {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(new Map());

    const [currentAnswer, setCurrentAnswer] = useState(""); 

    const { currentQuiz, set } = useContext(AppContext);
    const [questions, setQuestions] = useState(getQuestionsFromId(currentQuiz))
    useEffect(() => {
        setQuestions(getQuestionsFromId(currentQuiz))
    }, []);

    function getClasses(varb) {
       return answers.get(currentQuestion)==varb;
    }
    return (

        <section class="">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div style={{ width: "100%" }} class="max-w-sm py-5 rounded text-center overflow-hidden shadow-lg">

                        <div class="text-center px-6 py-4">
                            <div class="font-bold text-center text-xl mb-2">{questions[currentQuestion].question}</div>
                        </div>

                        <div class="text-center px-6 pt-4 pb-2">
                            <span onClick={(e)=>{
                                
                                answers.set(currentQuestion, "a");
                                setCurrentAnswer("a");

                            }} class={currentAnswer == "a" ? ("px-2 cursor-pointer inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"): ("px-2 cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")}>a: {questions[currentQuestion].a}</span>
                            <span onClick={(e)=>{
                                
                                answers.set(currentQuestion, "b");
                                setCurrentAnswer("b");

                            }} class={currentAnswer == "b" ? ("px-2 cursor-pointer inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"): ("px-2 cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")}>b: {questions[currentQuestion].b}</span>
                            <span onClick={(e)=>{
                                
                                answers.set(currentQuestion, "c");
                                setCurrentAnswer("c");

                            }} class={currentAnswer == "c" ? ("px-2 cursor-pointer inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"): ("px-2 cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")}>c: {questions[currentQuestion].c}</span>
                            <span onClick={(e)=>{
                                
                                answers.set(currentQuestion, "d");
                                setCurrentAnswer("d");

                            }} class={currentAnswer == "d" ? ("px-2 cursor-pointer inline-block bg-violet-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"): ("px-2 cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2")}>d: {questions[currentQuestion].d}</span>
                        </div>

                    </div>
                </div>

                
                <div class="w-full m-10 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div onClick={(e)=>{
                       
                       if (questions.length>currentQuestion+1) {
                         setCurrentAnswer("");
                         setCurrentQuestion(currentQuestion+1)
                       }else{
                         set("");
                       }
                       

                    }} style={{ width: "100%" }} class="text-bold cursor-pointer max-w-sm py-5 rounded text-center overflow-hidden shadow-lg">

                        Next

                    </div>
                </div>
            </div>
        </section>



    )
}

export default Quiz