import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";
import CartProvider from "./helpers/CartProvider";

const App = () => {
  const [games, setGames] = useState([]);

  return (
    <Router>
      <CartProvider
        children={
          <>
            <header>
              <Nav />
            </header>
            <main>
              <Routes>
                <Route path="/shopping-cart" element={<Home />} />
                <Route
                  path="/shopping-cart/shop"
                  element={<Shop gameList={games} setGames={setGames} />}
                />
                <Route path="/shopping-cart/cart" element={<Cart />} />
              </Routes>
            </main>
          </>
        }
      />
    </Router>
  );
};

export default App;
