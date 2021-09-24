import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListCrypto from './Component/ListCrypto';
import React from 'react'


const App = () => {
	const initialList = [{
	"0": {
		"id": "bitcoin",
		"symbol": "btc",
		"name": "Bitcoin",
		"image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
		"current_price": 35068,
		"market_cap": 662204766571,
		"market_cap_rank": 1,
		"fully_diluted_valuation": 738716952837,
		"total_volume": 32839447105,
		"high_24h": 38470,
		"low_24h": 35039,
		"price_change_24h": -2286.386750629863,
		"price_change_percentage_24h": -6.12084,
		"market_cap_change_24h": -41087564001.25659,
		"market_cap_change_percentage_24h": -5.84217,
		"circulating_supply": 18824937,
		"total_supply": 21000000,
		"max_supply": 21000000,
		"ath": 54205,
		"ath_change_percentage": -35.09067,
		"ath_date": "2021-04-14T11:54:46.763Z",
		"atl": 51.3,
		"atl_change_percentage": 68487.05593,
		"atl_date": "2013-07-05T00:00:00.000Z",
		"roi": null,
		"last_updated": "2021-09-24T13:28:32.128Z"
	}
}];
    const [list, setList] = React.useState(initialList);

  function handleAdd(name) {
    setList(list.concat({ name }));
  }
  
  
function fetchtoptencrypto(){
	axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
	})
		.then(res => {
			const cryptos = res.data;
			cryptos.map(x => {
				initialList = [...x]
			})
		})
}
  return (
    <div className="App">
      <header className="App-header">
	    <ListCrypto items={list} />
        <button onClick={fetchtoptencrypto}>
		Top 10 Crypto
		</button>
		<button onClick={fetchtoptencrypto}>
		Top 10 Crypto
		</button>
      </header>
    </div>
  );
}		


export default App;
