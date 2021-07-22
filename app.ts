import express from 'express';
import categories from './src/category/router'
import cors from 'cors'
import {json}from 'body-parser'

const app = express();
app.use(json())
app.use(cors())// settings port

app.use('/api/categories', categories)
app.get('/', async (req , res )=>{
    res.send('Iam server EFK')
})



app.listen (3000, () => console.log('server start'))