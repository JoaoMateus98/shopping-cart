import "./Home.css";
import homeImage from "../../images/home.png";

function Home() {
  return (
    <div className="home-container">
      <section className="message-container">
        <h1>Welcome To The World Of Gaming</h1>
        <p>THE WORLDS FIRST GAMING MARKETPLACE</p>
      </section>
      <section className="home-image-container">
        <img src={homeImage} alt="" />
      </section>
    </div>
  );
}

export default Home;
