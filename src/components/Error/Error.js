import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
    const navigate = useNavigate()
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <h1 className='text-3xl font-semibold mb-5'>Opps!</h1>
            <h1 className='text-5xl font-bold mb-5'>404</h1>
            <h1 className='text-3xl font-semibold mb-5'>Page not Found!</h1>
            <button onClick={() => navigate('/')} className='underline rounded'>Go to Home</button>
        </div>
    )
}

export default Error