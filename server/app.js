import express from 'express';
import parserBody from 'body-parser';
import { config } from '../etc/config.json';
import * as dbUtil from './utils/db.js';


const app = express();


dbUtil.initConnection();


app.use( parserBody.json() );


app.get('/notes', (req, res)=>{
    dbUtil.getNotes().then((data) => res.send(data))
});
app.post('/notes', (req, res)=>{
    dbUtil.createNote(req.body).then((data) => res.send(data))
});
app.delete('/notes/:id', (req, res)=>{
    dbUtil.removeNote(req.params.id).then((data) => res.send(data))
});


const port = config.app.port;
const server = app.listen(port, () => {
    console.log('app started on http//localhost:' + port);
});