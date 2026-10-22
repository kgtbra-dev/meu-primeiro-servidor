import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("Servidor rodando!");
});

app.get("/status", (req, res) => {
    res.json({status: 'online', sprint: 1});
});
app.get("/sobre", (req, res) => {
    res.send('Meu primeiro servidor Node.js com Express e ES Modules');
});

const PORT = 3000;
app.listen(PORT, ( ) =>{
    console.log(`Servidor em http://localhost:${PORT}`);
});