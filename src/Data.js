import DataOffers from "./DataOffers";

const dataOffersList = [
  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/Genesis_In_App_SIM_Tile_30_GB_No_Expiry_21334b3651.jpg?updated_at=2023-03-27T03:26:17.204Z",
    title: "Offer 1",
    dataAmount: "30GB Data",
    expiry: "No Expiry",
    hiddenText: "Jan 1 - Jul 6",
    originalPrice: "₱499",
    discountedPrice: "₱399",
    detailsText: "More details",
  },

  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/GOMO_Roam_Data_eec5941faa.png?updated_at=2023-10-16T02:08:32.763Z",
    title: "Offer 1",
    dataAmount: "GOMO Roam",
    expiry: "1 GB Data",
    hiddenText: "3 Days",
    originalPrice: "₱499",
    discountedPrice: "₱399",
    detailsText: "More details",
  },
  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/Genesis_In_App_SIM_Tile_25_GB_Bundle_6b344e1834.jpg?updated_at=2023-03-27T03:26:17.349Z",
    title: "Offer 1",
    dataAmount: "25GB Data Bundle",
    expiry: "No Expiry",
    hiddenText: "Jan 1 - Jul 6",
    originalPrice: "",
    discountedPrice: "₱499",
    detailsText: "More details",
  },
  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/HONG_KONG_1_e647299395.png?updated_at=2023-10-16T02:08:33.221Z",
    title: "Offer 1",
    dataAmount: "GOMO Roam Hong Kong",
    expiry: "3 GB Data",
    hiddenText: "5 Days",
    originalPrice: "₱699",
    discountedPrice: "₱599",
    detailsText: "More details",
  },
  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/THAILAND_1_8b0c379704.png?updated_at=2023-10-16T02:08:29.762Z",
    title: "Offer 1",
    dataAmount: "GOMO Roam Thailand",
    expiry: "15 GB Data",
    hiddenText: "8 Days",
    originalPrice: "₱899",
    discountedPrice: "₱799",
    detailsText: "More details",
  },
  {
    bannerImage: "https://www.gomo.ph/banner/hot.png",
    dataImage:
      "https://gomocdn-prod.lotusflare.com/uploads/SINGAPORE_1_7497f5841f.png?updated_at=2023-10-16T02:08:32.791Z",
    title: "Offer 1",
    dataAmount: "GOMO Roam Singapore",
    expiry: "20 GB Data",
    hiddenText: "30 Days",
    originalPrice: "₱1,599",
    discountedPrice: "₱1,499",
    detailsText: "More details",
  },
 
];

function Data() {
  return (
    <div className="data-offers">
      {dataOffersList.map((offer, index) => (
        <DataOffers key={index} {...offer} />
      ))}
    </div>
  );
}

export default Data;
