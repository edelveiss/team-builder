import React from "react";
import { useHistory } from "react-router-dom";
import homeBanner from "../assets/web-development-team.png";
function Home() {
  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src={homeBanner}
        alt="web-development-team banner"
      />
    </div>
  );
}

export default Home;

// <button
//         onClick={routeToShop}
//         className="md-button shop-button"
//       >
//         Shop now!
//       </button>
