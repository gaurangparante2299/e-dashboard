const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send("App is started")
})

app.listen(5000);