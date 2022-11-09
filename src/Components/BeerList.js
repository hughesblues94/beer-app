import React from 'react';
import Beer from './Beer';

const BeerList = ({ beers }) => {
    return (
        <div className='beerlist'>
            <h2>Number of beers to display: {beers.length}</h2>
            {beers.map(beer => {
                return <Beer key={beer.id} beer={beer} />
            })}
        </div>
    )
}

export default BeerList;