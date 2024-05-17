const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public-landing-page'))

// Set the port number (replace 3000 with your desired port)
const port = process.env.PORT || 5135;

app.get('/', function(req, res){
 
  res.status(200).sendFile(__dirname + '/index.html', 'isUtf8')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


