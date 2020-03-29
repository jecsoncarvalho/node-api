const express = require('express');

const app = express();

app.get('/', (req, resp) => {
    return resp.json({
        usuario: 'Jecson',
        idade: 27
    });
})

app.listen(3333);