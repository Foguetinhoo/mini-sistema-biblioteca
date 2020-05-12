const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan('dev'));
server.use('/api/v1',require('./routes/routes'));

server.listen(process.env.SERVER_PORT, err => {
    if(err)  throw new Error(err);
    console.log(`servidor rodando em http//${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/${process.env.SERVER_URI}`)
})

