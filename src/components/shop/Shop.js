import { useState, useEffect } from "react";

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

const Shop = ({ gameList, setGames }) => {
  const [gameImage, setGameImage] = useState(null);

  useEffect(() => {
    if (gameList.length !== 0) {
      setGameImage(testCard(gameList));
    } else {
      fetchGames(20).then((val) => setGames(gameList.concat(val)));
      console.log("fetched");
    }
  }, [gameList, setGames]);

  return <>{gameImage === null ? <>loading...</> : <>{gameImage}</>}</>;
};

export default Shop;

function testCard(gameList) {
  return <ul>{gameList.map((game) => {})}</ul>;
}
