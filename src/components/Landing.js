import React,{ useEffect,useState } from 'react';

//Api
import { getCoin } from '../Services/Api';

//components
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const [coins , setCoins] = useState([])
    const [search , setSearch] = useState("") 
   
    useEffect(() => {
    const fetchApi = async () => {
    
    const data = await getCoin();
    console.log(data) 
    setCoins(data)      
    }

    fetchApi()

    }, [])

    const changeHandler = event => {
        setSearch(event.target.value)
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
        <input type='text' placeholder='search..' value={search} onChange={changeHandler} />
         {
             coins.length ? 

             searchedCoins.map(coin => <Coin 
                key={coin.id} 
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                price={coin.current_price}
                marketCap={coin.market_Cap}
                priceChange={coin.price_change_percentage_24h}
                />) :

             <Loader/>
         }
        </>
    );
};

export default Landing;