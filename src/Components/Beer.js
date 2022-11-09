import React from 'react';

const Beer = ({ beer }) => {
    return (
        <div>
            <div>Name: {beer.name}</div>
            <div>Description: {beer.description}</div>
            <div>
                <img alt={beer.name} src={beer.image_url} />
            </div>
        </div>
    )
};

export default Beer