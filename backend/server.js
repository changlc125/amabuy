//create a express server
import express from 'express';
import data from './data.js';

// call express() method to return a express object
const app = express();

//two parameters:
//1)url that we are gonna serve 2) a function that responds to the api when users go to this address
//2-1) the function accepts two parameters:request and respond object
app.get('/api/products', (req, res) => {
  //send data back to frontend
  res.send(data.products);
});

// return prodcut infomation based on the slug of the product
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  //if product exists
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//define a port that we are gonna to respond for backend
//set the environment variable PORT to tell your web server what port to listen on.
//whatever is in the environment variable PORT, or 5000 if there's nothing there.(default port to 5000 if you dont set it)
const port = process.env.PORT || 5000;
//the server starts and will be ready for response thing to front end
//listen(port,callback function )
//when server is ready, it will call the callback function
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
