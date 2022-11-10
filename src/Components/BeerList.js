import React from 'react';
import Beer from './Beer';
import './BeerList.css'

const BeerList = ({ beers }) => {
    return (
        <div className='beerlist'>
            <h2 className='beerAmount'>Number of beers to display: {beers.length}</h2>
            {beers.map(beer => {
                return <Beer key={beer.id} beer={beer} />
            })}
        </div>
    )
}

export default BeerList;