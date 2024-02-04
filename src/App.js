// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React from "react";
import Header from "./Header";
import MainOffer from "./MainOffer";
import Data from "./Data";
import Highlights from "./Highlights";
import GetOffers from "./GetOffers";
import Download from "./Download";
import Footer from "./Footer";
// import HotOfferData from "./HotOfferData";
// import HotOffer from "./HotOffer";

function App() {
  const menuItems = [
    "Get GOMO SIM",
    "Get Offers",
    "'Mo Creds",
    "Roaming",
    "Donation",
    "Help Center",
  ];

  return (
    <div className="App">
      <Header
        logoSmallSrc="https://www.gomo.ph/homepage/gomo2.svg"
        logoLargeSrc="https://www.gomo.ph/homepage/gomo_logo.svg"
        menuItems={menuItems}
        cartItemCount={5}
        mobileButtonLabel="Get GOMO SIM"
      />
      <MainOffer />
      <Data />
      {/* <GetOffers /> */}
      {/* <HotOfferData /> */}
      <Highlights />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
