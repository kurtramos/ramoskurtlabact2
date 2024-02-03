import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="component-container">
        <div className="footer-content">
          <img
            className="logo-img"
            src="https://www.gomo.ph/homepage/gomo_logo.svg"
            alt="GOMO Logo"
          />
          <div className="flex-container">
            <div className="grid-container">
              <div className="menu-item order-1">About GOMO</div>
              <div className="menu-item order-2">ASC Ref. Codes</div>
              <div className="menu-item order-1">Terms & Conditions</div>
              <div className="menu-item order-3">Privacy Policy</div>
            </div>
            <div className="social-container">
              <div className="follow-text">Follow Us</div>
              <div className="social-icons">
                <a href="https://www.facebook.com/getgomo/" target="_blank">
                  <img
                    src="https://www.gomo.ph/homepage/Facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="https://twitter.com/gomo_ph" target="_blank">
                  <img
                    src="https://www.gomo.ph/homepage/Twitter.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="https://www.instagram.com/gomo.ph/" target="_blank">
                  <img
                    src="https://www.gomo.ph/homepage/Instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="https://www.tiktok.com/@gomo.ph" target="_blank">
                  <img
                    src="https://www.gomo.ph/homepage/TikTok.svg"
                    alt="TikTok"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
