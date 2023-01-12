import { useState, useEffect } from "react";
import Card from "./Card";

export async function fetchGames(numOfGames, setIsListEmpty) {
  console.log("fetched");

  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.REACT_APP_API_KEY}&page_size=${numOfGames}`
    );
    const responseJson = await response.json();

    //list successfully filled
    setIsListEmpty(false);
    return responseJson.results;
  } catch {
    console.log("failed to retrive games");
  }
}

const Shop = ({ gameList, setGames }) => {
  const [isListEmpty, setIsListEmpty] = useState(true);

  useEffect(() => {
    if (gameList.length === 0) {
      fetchGames(20, setIsListEmpty).then((val) =>
        setGames(gameList.concat(val))
      );
    }
  }, [gameList, setGames]);

  return (
    <div className="games-container">
      {isListEmpty ? (
        <>Loading...</>
      ) : (
        gameList.map((game) => <Card key={game.id} game={game} />)
      )}
    </div>
  );
};

export default Shop;
