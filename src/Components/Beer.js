import React from 'react';
import './Beer.css'

const Beer = ({ beer }) => {
    return (
        <div>
            <div className='beerName'>Name: {beer.name}</div>
            <div className='beerDescription'>Description: {beer.description}</div>
            <div>
                <img alt={beer.name} src={beer.image_url} />
            </div>
        </div>
    )
};

export default Beer