import React from 'react'
import coverPhoto from '../../images/cover-photo.jpg'

const Header = () => {
    return (
        <div style={{backgroundImage: `url(${coverPhoto})`}} className='py-60 bg-no-repeat bg-cover bg-fixed text-center'>
            <h1 className='text-5xl text-white font-bold mb-5'>Programming Quiz</h1>
            <p className='text-white text-xl'>Test your programming knowledge by taking our quiz</p>
        </div>
    )
}

export default Header