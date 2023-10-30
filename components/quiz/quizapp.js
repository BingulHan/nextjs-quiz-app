"use client";

import { AppProvider } from '@/context/appcontext'
import React from 'react'
import QuizView from './quizview';

function QuizApp() {
  return (
    <AppProvider>
      <QuizView/>
    </AppProvider>
  )
}

export default QuizApp