import { useEffect } from "react";
import Card from "./Card";
import "./Shop.css";

export async function fetchGames(numOfGames) {
  console.log("fetched");
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

const Shop = ({ gameList, setGames }) => {
  useEffect(() => {
    if (gameList.length === 0) {
      fetchGames(20).then((val) => setGames(gameList.concat(val)));
    }
  }, [gameList, setGames]);

  return (
    <div className="games-container">
      {gameList.length === 0 ? (
        <>Loading...</>
      ) : (
        gameList.map((game) => <Card key={game.id} game={game} />)
      )}
    </div>
  );
};

export default Shop;
