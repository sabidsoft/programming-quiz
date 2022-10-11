import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, name, logo } = topic

    return (
        <div className='border border-gray-400 p-2 rounded'>
            <div className='flex justify-center items-center'>
                <img src={logo} alt="topic_image" className='bg-slate-100 mb-8 rounded' />
            </div>
            <h3 className='text-center text-2xl text-cyan-400 font-bold mb-8'>{name}</h3>
            <Link to={`topics/${id}`}>
                <div className='bg-cyan-400 py-3 px-5 rounded-r-full flex justify-between items-center'>
                    <p className='text-white font-bold'>Start Quiz</p>
                    <ArrowRightIcon className='w-6 h-6 text-white' />
                </div>
            </Link>
        </div>
    );
};

export default Topic;