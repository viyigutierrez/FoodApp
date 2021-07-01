import React from 'react';
import Searchbar from '../Searchbar/searchbar';
import{ Link } from 'react-router-dom';

export default function Navbar() {
    return(
        <div className='nav'>
            <div className='searchb'>
            <Searchbar></Searchbar>    
            </div>
            <Link className='cyp' to='/post'>
            <p>Create your recipe</p>
            </Link>
            <Link className='hom' to='/home'>
            <p>Home</p>
            </Link>
        </div>
    )
};