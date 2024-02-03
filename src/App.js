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

// export default App;

/*import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />

      <Footer />
   <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
 */
import React from "react";
import Header from "./Header";
import MainOffer from "./MainOffer";

import GetOffers from "./GetOffers";
import Footer from "./Footer";

export default function App() {
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

      <GetOffers />
      <Footer />

    </div>
  );
}
