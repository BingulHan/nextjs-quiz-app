"use client";

import AppContext from '@/context/appcontext';
import { getAllQuiz, getQuestionsFromId } from '@/service';
import React, { useContext } from 'react'

function QuizList() {

    const { list, set } = useContext(AppContext);

    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Quiz Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Question Amount
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    

                        {list.map((quiz) => {
                            return (<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {quiz.name}
                                </th>
                                <td class="px-6 py-4">
                                    {getQuestionsFromId(quiz.id).length}
                                </td>

                                <td class="px-6 py-4">
                                    <a onClick={(e)=>set(quiz.id)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Start</a>
                                </td>

                            </tr>)
                        })}

                
                </tbody>
            </table>
        </div>

    )
}

export default QuizList