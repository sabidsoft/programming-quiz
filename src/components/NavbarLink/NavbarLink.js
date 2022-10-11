import React from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ route }) => {
    const { name, path } = route
    return (
        <li className='mb-5 md:mb-0 md:ml-10'>
            <NavLink to={path} className='text-white'>{name}</NavLink>
        </li>
    );
};

export default NavbarLink;