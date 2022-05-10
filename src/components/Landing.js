import React,{ useEffect,useState } from 'react';

//Api
import { getCoin } from '../Services/Api';

//components
import Loader from './Loader';
import Coin from './Coin';

//style
import styles from './landing.module.css'

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
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={changeHandler} />
            {
                coins.length ?
                    <div className={styles.coinContainer}>
                        {
                            searchedCoins.map(coin => <Coin
                                key={coin.id}
                                name={coin.name}
                                image={coin.image}
                                symbol={coin.symbol}
                                price={coin.current_price}
                                marketCap={coin.market_cap}
                                priceChange={coin.price_change_percentage_24h}
                            />)
                        }
                    </div> :

                    <Loader />
            }
        </>
    );
};

export default Landing;