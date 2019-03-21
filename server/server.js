require('dotenv').config();
const express = require('express');
const path = require( 'path');

const app = express();


const PORT = process.env.PORT || 5555;
const pathToIndexHtml = path.join(__dirname,'build', 'index.html');
const pathToBuildFolder = path.join(__dirname, 'build');

app.use(express.static(pathToBuildFolder));


app.get('/', (req, res) => {
  res.sendFile(pathToIndexHtml);
  // res.send("Hi there");
})

app.listen(PORT, () => console.log(`Express app listening at http://localhost:${PORT}`));
