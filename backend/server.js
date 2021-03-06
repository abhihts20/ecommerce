import express from 'express';
import data from './data.js';

const app = express();


app.get('/', (req, res) => {
    res.send({"key": "Hello world"});
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
