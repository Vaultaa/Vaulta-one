const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/hello', (req,res)=>{
  res.json({ message: 'Hello from the Vaulta backend!' });
});

app.get('/api/wallet/demo', (req,res)=>{
  res.json({ address: 'demo1', balances: [{symbol:'VAULTA', amount:1000}, {symbol:'ETH', amount:0.5}] });
});

const port = process.env.PORT || 4200;
app.listen(port, ()=> console.log('Server listening on port', port));
