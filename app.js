require('dotenv').config();
const express = require('express');
const app = express();
const iyzicoApi = require('./routes/iyzico');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000,()=>{
    console.log('Porta bağlanıldı');
});

app.get('/get',(req,res)=>console.log('heyy'));


app.use('/api/iyzico',iyzicoApi);

