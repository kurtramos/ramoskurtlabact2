import "./Header.css";

function Header() {
  return (
    <>
      <div className="gomo-bg-gomoPurple header-content gomo-w-full header">
        <div className="header-inner-container">
          <div className="logo-container">
            <img
              className="logo-small"
              src="https://www.gomo.ph/homepage/gomo2.svg"
              alt="GOMO Logo Small"
            />
            <img
              className="logo-large"
              src="https://www.gomo.ph/homepage/gomo_logo.svg"
              alt="GOMO Logo Large"
            />
          </div>
          <div className="menu-container">
            <div className="menu-btns-container">
              <div className="menu-btn hover:gomo-cursor-pointer active">
                Get Offers
              </div>
              <div className="menu-btn hover:gomo-cursor-pointer">
                'Mo Creds
              </div>
              <div className="menu-btn hover:gomo-cursor-pointer">Roaming</div>
              <div className="menu-btn hover:gomo-cursor-pointer">Donation</div>
              <div className="menu-btn hover:gomo-cursor-pointer">
                Help Center
              </div>
            </div>
            <div className="get-sim-button">Get GOMO SIM</div>
            <div className="shop-cart">
              <img
                className="cart-icon"
                src="https://www.gomo.ph/homepage/gomo1.svg"
                alt="Shopping Cart"
              />
              <div className="cart-badge">0</div>
            </div>
          </div>
          <div className="get-sim-button-mobile">Get GOMO SIM</div>
        </div>
      </div>
      <div className="drop-menu">
        <div className="menu-content">
          <div className="menu-btn">Get GOMO SIM</div>
          <div className="menu-btn active">Get Offers</div>
          <div className="menu-btn">'Mo Creds</div>
          <div className="menu-btn">Roaming</div>
          <div className="menu-btn">Donation</div>
          <div className="menu-btn">Help Center</div>
        </div>
        <div className="menu-mask" />
      </div>
    </>
  );
}

export default Header;
