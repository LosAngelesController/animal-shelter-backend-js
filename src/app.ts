//write a basic express app with cors middleware accept from all origins

import express from 'express';
import cors from 'cors';

import schema from './schema.json';

//add postgres

import {pgclient} from './postgres'

var compression = require('express-compression')

const app = express();
app.use(cors());
app.use(compression());

//connect postgress client
async function main() {
    await pgclient.connect()
  
    pgclient.on('end', (err, cli) => {
      console.error('DATABASE CONNECTION ENDED. RETRYING IN 2 SECONDS...');
      setTimeout(() => {
        pgclient.connect();
      }, 1000)
     
    })

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/alltables', [express.json()], async (req, res) => {
    const listoftables = Object.keys(schema.sheets);

    const resultstodeliver = await Promise.all(listoftables.map(tablename => pgclient.query("SELECT * FROM " + tablename)));

    const result = resultstodeliver.map((result, index) => {
        return {
            name: listoftables[index],
            data: result.rows
        }
    });

    res.send(result);
})


app.get('/time', async (req, res) => {
    //select from database current time

    const resultfrompostgres = await pgclient.query('SELECT NOW()::text as now');

    res.send(resultfrompostgres.rows[0].now);
    
})

app.listen(8080, () => {
    console.log('Server started on port 8080');
}
)

};

main();