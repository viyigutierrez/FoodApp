import React from 'react';
import Cards from '../Shared/Cards/Cards';
import './Page.css';

export default function page() {
    return (
        <div>
        <div className='grid'>
            <p className='filter'>Filter</p>
        <Cards></Cards>
        </div>
        </div>
    )
};