import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import Router from './Router/Route.js';
const port = process.env.PORT;

const app = express();
const corsOptions = {
  origin: process.env.ORIGIN,
  methods: [ "POST"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api',Router);

app.listen(port,()=>{
    console.log('server running at '+port);
    
});