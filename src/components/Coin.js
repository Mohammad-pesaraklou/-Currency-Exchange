import React from 'react';

const Coin = ({name ,image ,symbol ,price ,marketCap ,priceChange}) => {
    return (
        <div>
            <img src={image}/>
            <span>{name}</span>
            <span>{symbol.toUpperCase()}</span>
            <span>{price.toLocaleString()}</span>
            <span>{priceChange}</span>
            <span>{marketCap}</span>
        </div>
    );
};

export default Coin;