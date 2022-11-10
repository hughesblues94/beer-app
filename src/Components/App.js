import React, { useEffect, useState } from 'react';
import './App.css';
import BeerList from './BeerList';
import axios from 'axios';

const App = () => {

  const [beers, setBeers] = useState([])


  const handleBeerFetch = () => {
    axios.get('https://api.punkapi.com/v2/beers/')
      .then((res) => {
        setBeers(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers/random')
      .then((res) => {
        console.log(res.data)
        setBeers(res.data)
      })
      .catch((err) => "A server error occured: " + console.log(err))

    return (() => {
      console.log("component was destroyed")
    })
  }, [])

  return (
    <div className="App">
      <h1 className='title'>Brewdog</h1>
      {/* <h1 className='beerTitle'>{beers[0]?.name}</h1> */}
      <button className="button" onClick={handleBeerFetch}>Get All The Beers</button>
      {beers && <BeerList beers={beers} />}
    </div>
  );
}

export default App;
