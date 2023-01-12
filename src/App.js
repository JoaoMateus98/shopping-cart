import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

const App = () => {
  const [games, setGames] = useState([]);

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
            element={<Shop gameList={games} setGames={setGames} />}
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
