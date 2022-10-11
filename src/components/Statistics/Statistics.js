import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData()
    const quizes = data.data
    console.log(quizes)

    return (
        <div className='h-screen flex flex-col justify-center items-center relative z-[-2]'>
            <h1 className='text-3xl font-bold mb-20'>Charts of Quiz Total</h1>
            <ResponsiveContainer width={'90%'} height={400}>
                <BarChart data={quizes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#22D3EE" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Statistics