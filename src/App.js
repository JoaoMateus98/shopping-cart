import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

const CartContext = createContext();

const App = () => {
  const [games, setGames] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <CartContext.Provider value={{ cartItems, setCartItems }}>
                <Shop gameList={games} setGames={setGames} />
              </CartContext.Provider>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
