//write a basic express app with cors middleware accept from all origins

import express from 'express';
import cors from 'cors';

//add postgres

import {pgclient} from './postgres'

const app = express();
app.use(cors());

//import postgress client

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/time', async (req, res) => {
    //select from database current time

    const resultfrompostgres = await pgclient.query('SELECT NOW()::text as now');

    res.send(resultfrompostgres.rows[0].now);
    
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
}
);