import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
    const data = useLoaderData()
    const { name, questions } = data.data

    const handleQuizAnswer = (selectedAnswer, correctAnswer) => {
        if(selectedAnswer === correctAnswer){
            toast.success('Correct answer', {
                position: 'top-center',
                autoClose: false,
            })
        }else{
           toast.error('Wrong answer', {
                position: 'top-center',
                autoClose: false,
           })
        }
    }
    
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-20 mb-10'>Quiz of {name}</h1>
            {
                questions.map((question, index) => {
                    return (
                        <div key={question.id} className='w-[50%] mx-auto shadow-lg bg-slate-100 py-16 px-16 mb-10 rounded'>
                            <p className='mb-10'><span className='text-xl font-bold'>Quiz {index + 1}:</span> <span className='text-lg ml-3'>{question.question}</span></p>
                            {
                                question.options.map((option, index) => {
                                    return (
                                        <div key={index}>
                                            <input
                                                type='radio'
                                                name='quizOption'
                                                value={option}
                                                onChange={(e) => handleQuizAnswer(e.target.value, question.correctAnswer)}
                                                className='mb-5 ml-10'
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
            <ToastContainer/>
        </div>
    )
}

export default Quiz
