import React from 'react';
import Button from '../Shared/Button/Button';
import { Link } from 'react-router-dom';
import Card from '../Shared/Card/Card';
import './Sublanding.css'

export default function subLanding() {
    return(
        <div className='all'>
            <div className='create2'>    
            </div>
            <p className='create'>Create and post your own recipes</p>
            <p className='like'>Like this delicious:</p>
            <div className='card1'>
               <Card ></Card>
            </div>
            <Link className='link2' to='/post'>
            <Button buttonStyle='btn-1'>Post recipes</Button>
            </Link>
        </div>
    )
};