const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.use("/", express.static("Front"));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});