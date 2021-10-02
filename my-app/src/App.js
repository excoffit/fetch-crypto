import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const initialList = [

];

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);
const App = () => {
	
    const [list, setList] = React.useState(initialList);
	const [list2, setList2] = React.useState(initialList);

  function handleAdd(name) {
	const newlist = []
    setList(newlist.concat( name ));
  }
  
  function handleAdd2(name) {
	const newlist2 = []
	const newlist = []
	setList(newlist);
    setList2(newlist2.concat( name ));
  }
  
 function log(){
 }
function fetchtoptencrypto(){
	axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false',{
	})
		.then(res => {
			const cryptos = res.data;
			handleAdd(cryptos)
			
		})
}

function fetchtoptencryptospe(symbol){
	axios.get('https://api.coingecko.com/api/v3/coins/'+symbol,{
	})
		.then(res => {
			const cryptos = res.data;
			console.log(cryptos)
			handleAdd2(cryptos)
			
		})
}
  return (
    <div className="App">
      <header className="App-header">
		
		{list.map((item) => (
			
			<button key={item.id} onClick={() => fetchtoptencryptospe(item.id)}>
				{item.symbol}
			</button>
			
		))}
		
		{list2.map((item) => (
			
			 <Card sx={{ minWidth: 275 }}>
				<CardMedia
					component="img"
					height="140"
					image={item.image.large}
					alt="green iguana"
				/>
				<CardContent>
					<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
						{item.symbol}
					</Typography>
					<Typography variant="h5" component="div">
					{item.name}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{item.categories[0]}
					</Typography>
					<Typography variant="body2">
					Price change 24h {item.market_data.price_change_24h}
					</Typography>
				</CardContent>
				<CardActions>
					<Link href={item.links.homepage[0]} underline="hover">
					{item.links.homepage[0]}
					</Link>
				</CardActions>
			</Card>
			
		))}
		
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
