import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import Cart from "./components/cart/Cart";

async function fetchGames(numOfGames) {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=${numOfGames}`
    );
    const responseJson = await response.json();

    return responseJson.results;
  } catch {
    console.log("failed to retrive games");
  }
}

const App = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    if (games.length === 0) {
      fetchGames(10).then((val) => setGames(games.concat(val)));
      console.log("fetched");
    }
  }, [games]);

  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop gameList={games} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
