import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data';

function HomeScreen() {
  //useState function return an array that contains (a variable) and (a function to updaye this variable)
  // example https://zh-hans.reactjs.org/docs/hooks-state.html
  const [products, setProducts] = useState([]);
  //useEffect two parameters(function,array)
  // after rendering this component,we run function inside useEffect only one time
  //here we call an api and get products from backend.
  useEffect(() => {
    const fetchData = async () => {
      //send an axios request to this address,return result
      const result = await axios.get('/api/products');
      //result.data = products in backend
      setProducts(result.data);
    };
    fetchData();
  }, []);

  return (
    //those data(products from back end )
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            {/* link :no page refresh ,to= href*/}
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>

            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
