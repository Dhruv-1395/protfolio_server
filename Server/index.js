import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import Router from './Router/Route.js';
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api',Router);

app.listen(port,()=>{
    console.log('server running at '+port);
    
});
