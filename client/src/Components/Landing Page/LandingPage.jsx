import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Shared/Button/Button';
import Title from '../Title/Title';
import './Landingstyle.css'

export default function Home() {
    return (
        <div>
        <div className='all1'>
            <div className='ab'>
        <Title></Title>
        </div>
    
        <div className='link'>
        <Link  to='/home'>
        <Button buttonStyle='btn-1' align='center'>Search recipes</Button>
        </Link>
        </div>
        </div>
        </div>
    ) 
}