import React, { useState } from 'react';
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop/Shop.js';
import Cart from './components/Cart';
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

  const [cartCounter, setCartCounter] = useState(0)
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Container className="App">
        <Header cartCounter={cartCounter} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route exact path="/shop" component={Shop} />
              <Route path="/shop/men" component={Men} />
              <Route path="/shop/women" component={Women} />
            </Switch>
      </Container>
    </Router >
  );
}

export default App;
