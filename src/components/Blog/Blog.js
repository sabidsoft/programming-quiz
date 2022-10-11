import React from 'react'
import AboutContextApi from '../AboutContextApi/AboutContextApi'
import AboutReactRouter from '../AboutReactRouter/AboutReactRouter'
import AboutUseRef from '../AboutUseRef/AboutUseRef'

const Blog = () => {
    return (
        <div className='mt-20 mb-10'>
            <h1 className='text-4xl text-center font-semibold mb-20'>Blogs</h1>
            <AboutReactRouter/>
            <AboutContextApi/>
            <AboutUseRef/>
        </div>
    )
}

export default Blog