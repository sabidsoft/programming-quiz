import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';

const Home = () => {
    const data = useLoaderData()
    const topics = data.data
    
    return (
        <div>
            <Header/>
            <h1 className='text-4xl font-semibold text-center mt-32 mb-16'>Quiz Topics</h1>
            <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[90%] md:w-[80%] mx-auto mb-32'>
                {
                    topics.map(topic => {
                        return (
                            <Topic
                                key={topic.id}
                                topic={topic}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;