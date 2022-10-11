import { EyeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const Quiz = () => {
    const data = useLoaderData()
    const { name, questions } = data.data

    const handleQuizAnswer = (selectedAnswer, correctAnswer) => {
        if (selectedAnswer === correctAnswer) {
            toast.success('Correct answer')
        } else {
            toast.error('Wrong answer')
        }
    }

    const showCorrectAnswer = (correctAnswer) => {
        toast(`The correct answer is "${correctAnswer}"`)
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-20 mb-10'>Quiz of {name}</h1>
            {
                questions.map((question, index) => {
                    return (
                        <div key={question.id} className='w-[90%] md:w-[80%] mx-auto shadow-lg bg-slate-100 py-16 px-16 mb-10 rounded'>
                            <div className='flex justify-between items-start mb-8'>
                                <p><span className='text-xl font-bold'>Quiz {index + 1}:</span> <span className='text-lg ml-3'>{question.question}</span></p>
                                <EyeIcon onClick={() => showCorrectAnswer(question.correctAnswer)} className='h-6 w-6 flex-shrink-0 cursor-pointer' />
                            </div>
                            {
                                question.options.map((option, index) => {
                                    return (
                                        <div key={index} className='mb-5'>
                                            <input
                                                type='radio'
                                                name='quizOption'
                                                value={option}
                                                onChange={(e) => handleQuizAnswer(e.target.value, question.correctAnswer)}
                                            />
                                            <span className='ml-5'>{option}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
            <ToastContainer
                position='top-center'
                autoClose={false}
            />
        </div>
    )
}

export default Quiz
