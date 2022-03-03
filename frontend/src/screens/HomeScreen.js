import { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
//import data from '../data';// from front end,static data
// use reducer to record all changes in the state of UI
import logger from 'use-reducer-logger';

//define reducer function
//it accepts two parameters(currState,action that changes currState or create a new state)
//reducer是一个函数(currState, action) => newState：接收当前应用的state和触发的动作action，计算并返回最新的state。
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      // it happens when we start sending an Ajax request to backend
      //here we keep previous state,and only update loading to true
      return { ...state, loading: true }; //show loading box in ui
    case 'FETCH_SUCCESS':
      //here we keep previous state,and only update
      //playload  contains all data from backend // fetch success = no need to loading box
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      //here we keep previous state,and update :fill error with error message  inside action.playload
      return { ...state, loading: false, error: action.payload };
    default:
      // return currState
      return state;
  }
};

function HomeScreen() {
  //useState function return an array that contains (a variable) and (a function to update this variable)
  // example https://zh-hans.reactjs.org/docs/hooks-state.html
  //const [products, setProducts] = useState([]);

  //use reducer func
  //dispatch is to call an action and update state
  //useReducer(reducer fuc,default state)
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });

  //useEffect two parameters(function,array)
  // after rendering this component,we run function inside useEffect only one time
  //here we call an api and get products from backend.
  useEffect(() => {
    //define func
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        //send an axios request to this address,return result
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
      //result.data = products in backend
      //setProducts(result.data);
    };
    //call func
    fetchData();
  }, []);

  return (
    //those data(products from back end )
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {loading ? (
          <div>Loading...</div> //if loading is true
        ) : error ? (
          <div>{error}</div> //otherviews if error is true
        ) : (
          products.map((product) => (
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
          ))
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
