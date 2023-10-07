import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../helper/context'
import './home.css'
import About from './About'

export default function Home() {

    const {allApiData, setAllApiData} = useContext(AppContext)

    const [object, setObject] = useState({});

    const use =  (e) => {
    
        setObject({data: `this  the Api`})
    }

    const fetchApidata = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=200&page=1&sparkline=false")
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data);
        setAllApiData(data)
      }).catch((err)=> {
        console.log(err);
      })
    }

    useEffect(()=> {
        fetchApidata()
    }, [])

  return (
     
        <div className="cart">
            <About data={object.data}/>
            <div className="cart-head">
                 
                <h1>Name</h1>
                <h1>Price</h1>
            </div>
            {
                allApiData?.map((apiData , keys) => (
                    <div className="cart-item" key={keys}>
                    <p onClick={use}>{apiData.name}</p>
                    <p>{apiData.current_price}</p>
               </div>

                ))
            }
            
           </div>

 )
}
