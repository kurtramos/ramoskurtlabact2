import React from "react";
import "./DataOffers.css"; 

function DataOffers(props) {
  return (
    <div className="card-container">
      <div className="content-container">
        <img className="hot-offer" src={props.bannerImage} alt="Offer Banner" />
        <div className="data-container">
          <img className="data-image" src={props.dataImage} alt={props.title} />
        </div>
        <div className="details-container">
          <div className="data-text-container">
            <div className="data-text">{props.dataAmount}</div>
            <div className="expiry-text">{props.expiry}</div>
            <div className="hidden-text">{props.hiddenText}</div>
          </div>
          <div className="price-container">
            <div className="original-price">{props.originalPrice}</div>
            <div className="discounted-price">{props.discountedPrice}</div>
          </div>
          <div className="more-details">
            {props.detailsText}
            <i className="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataOffers;
