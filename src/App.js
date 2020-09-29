import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import Store from './components/store/Store';
import About from './components/about/About';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import { ProductDetail } from './components/detail/ProductDetail';



function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path="/" component={Store}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/cart" component={Cart}></Route>
        <Route exact path="/products:{productId}" component={ProductDetail}></Route>
        {/* <Redirect to="/"></Redirect> */}
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
