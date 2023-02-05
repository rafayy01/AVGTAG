const express = require('express'),
dbOperation = require('./dbFiles/dbOperation'),
cors = require('cors');

const API_PORT = process.env.PORT || 5000;
const app = express();


let client;
let session;

// app.use(express.json());
// app.use(express.urlencoded());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(cors());

// app.get('./api', function(req, res) {
app.post('/api', async(req, res) => {
    console.log('Called');
    const result = await dbOperation.getinitialData(req.body.name);
    res.send(result);
    // result.recordset
});

// app.get('./quit', function(req, res) {
app.post('/quit', function(req, res) {
    console.log('Called quit');
    res.send({result: 'Good Bye' })
})

// dbOperation.getEntryPoint().then(res => {
//     console.log(res);
// })

app.listen(API_PORT, () => console.log(`listensing on port ${API_PORT}`));
