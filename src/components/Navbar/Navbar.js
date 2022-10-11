import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import NavbarLink from '../NavbarLink/NavbarLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { name: 'HOME', path: '/' },
        { name: 'TOPICS', path: '/topics' },
        { name: 'STATISTICS', path: '/statistics' },
        { name: 'BLOG', path: '/blog' },
    ]

    return (
        <nav>
            <div className='bg-cyan-400 relative z-10 py-5'>
                <div className='flex justify-between w-[90%] mx-auto'>
                    <Link to={'/'} className='text-2xl font-semibold text-white'>Programming Quiz</Link>
                    {
                        open ? (
                            <XMarkIcon onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden text-white' />
                        ) : (
                            <Bars3Icon onClick={() => setOpen(!open)} className='w-7 h-7 md:hidden text-white' />
                        )
                    }
                    <ul className='hidden md:flex md:items-center'>
                        {
                            routes.map(route => <NavbarLink route={route} key={route.id} />)
                        }
                    </ul>
                </div>
            </div>
            <ul className={`bg-gray-900 flex flex-col items-center pt-5 absolute z-0 w-full duration-500 ease-in-out md:hidden ${open ? 'top-[72px]' : 'top-[-200px]'}`}>
                {
                    routes.map(route => <NavbarLink route={route} key={route.name} />)
                }
            </ul>
        </nav>
    )
}

export default Navbar