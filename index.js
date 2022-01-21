import express from "express";
import filmes from './src/data/filmes.json'
const teste = filmes
const server = express();



server.get('/filmes', (req,res)=>{
    return res.json(teste)
})

server.listen(3000, ()=>{
    console.log("server starting")
})