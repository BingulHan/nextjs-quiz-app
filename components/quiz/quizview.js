"use client";
import AppContext from '@/context/appcontext';
import React, { useContext } from 'react'
import QuizList from './quizlist';
import Quiz from './quiz';

function QuizView() {

  const {currentQuiz} = useContext(AppContext);  

  return (
    <div className='m-8'>

        {currentQuiz=="" ? (<QuizList/>) : (<Quiz></Quiz>)}

    </div>
  )
}

export default QuizView