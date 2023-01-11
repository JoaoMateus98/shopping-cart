import { useState, useEffect } from "react";

const Shop = ({ gameList }) => {
  const [gameImage, setGameImage] = useState(null);

  useEffect(() => {
    if (gameList.length !== 0) {
      setGameImage(testCard(gameList));
    }
  }, [gameList]);

  return <>{gameImage === null ? <>loading...</> : <>{gameImage}</>}</>;
};

export default Shop;

function testCard(gameList) {
  // return <img src={firstGame.background_image} width="256" height="144" />;

  return (
    <ul>
      {gameList.map((game) => {
        return (
          <img
            key={game.id}
            src={game.background_image}
            width="256"
            height="144"
          />
        );
      })}
    </ul>
  );
}
