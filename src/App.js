import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop/Shop.js';
import Cart from './components/Cart/Cart';
import styled from 'styled-components';
import Men from './components/Shop/Men';
import Women from './components/Shop/Women';
import './normalize.css';
import './style.css';

const Container = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr;
`

function App() {

  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartCounter(cartItems.length);
  }, [cartItems]);

  return (
    <Router>
      <Container className="App">
        <Header cartCounter={cartCounter} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart">
            <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </Route>
              <Route exact path="/shop" component={Shop} />
              <Route path="/shop/men">
                <Men cartItems={cartItems} setCartItems={setCartItems}/>
              </Route>
              <Route path="/shop/women" >
                <Women cartItems={cartItems} setCartItems={setCartItems} />
              </Route>
            </Switch>
      </Container>
    </Router >
  );
}

export default App;
