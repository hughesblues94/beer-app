import React, { useEffect, useState } from 'react';
import '../App.css';
import BeerList from './BeerList';
import axios from 'axios';

const App = () => {

  const [beers, setBeers] = useState([])

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
      <h1>Brewdog</h1>
      <h1>{beers[0]?.name}</h1>
      {beers && <BeerList beers={beers} />}
    </div>
  );
}

export default App;
