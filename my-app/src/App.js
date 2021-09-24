import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListCrypto from './Component/ListCrypto';
import React from 'react'

const initialList = [

];
const App = () => {
	
    const [list, setList] = React.useState(initialList);

  function handleAdd(name) {
	const newlist = []
    setList(newlist.concat( name ));
  }
  
 function log(){
	 console.log(list)
 }
function fetchtoptencrypto(){
	axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
	})
		.then(res => {
			const cryptos = res.data;
			handleAdd(cryptos)
			
		})
}
  return (
    <div className="App">
      <header className="App-header">
		<ul>
		{list.map((item) => (
			<li key={item.id}>
			<span>
				{item.symbol}
			</span>
			</li>
		))}
		</ul>
        <button onClick={fetchtoptencrypto}>
		Top 10 Crypto
		</button>
		<button onClick={log}>
		Top 10 Crypt
		</button>
      </header>
    </div>
  );
}		


export default App;
