import React from 'react'
import './Home.css' 

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest Crypto <br /> Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form >
            <input type="text" placeholder='Search crypto..' />
            <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
            <p>#</p>
            <p>Coin</p>
            <p>Price</p>
            <p style={{textAlign:"center"}}>24H</p>
            <p className='market-cap'>MarketCap</p>
        </div>
      </div>
    </div>
  )
}

export default Home
