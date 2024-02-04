import "./Download.css"; 

function Download() {
  return (
    <>
      <div className="lg:gomo-flex divStyle">
        <img
          className="gomo-mx-auto gomo-w-[126px] lg:gomo-ml-[80px] lg:gomo-w-[200px] gomo-mb-5 lg:gomo-mb-0 lg:gomo-mr-[50px] imgStyle"
          src="https://gomocdn-prod.lotusflare.com/uploads/Group_1420070327_9bbac60c8b.png?updated_at=2023-12-06T16:39:06.162Z"
        />
        <div className="gomo-mx-auto lg:gomo-mx-0 gomo-w-[290px] lg:gomo-w-auto lg:gomo-mt-[60px] textDiv">
          <div className="gomo-text-[24px] gomo-font-bold gomo-text-center gomo-mb-5 lg:gomo-text-[40px] lg:gomo-text-left lg:gomo-mb-6 lg:gomo-leading-[64px] textStyle">
            {"Only available in the GOMO PH app."}
            <br />
            {"Download now!"}
          </div>
          <div className="gomo-text-2xl gomo-font-bold gomo-text-center gomo-mb-5 lg:gomo-text-[32px] lg:gomo-text-left lg:gomo-mb-8 subTextStyle">
            {"Available for iOS and Android."}
          </div>
          <div className="lg:gomo-flex flexDiv">
          </div>
          <div className="gomo-flex-container">
        <a
          href="https://apps.apple.com/app/id6443997082"
          target="_blank"
          className="gomo-link"
        >
          <img
            className="gomo-image gomo-mx-auto gomo-w-[165px] gomo-mb-2 lg:gomo-mr-4"
            src="https://www.gomo.ph/homepage/apple.svg"
            alt="Apple Logo"
          />
        </a>{" "}
        <a
          href="https://play.google.com/store/apps/details?id=ph.com.globe.gomo"
          target="_blank"
          className="gomo-link"
        >
          <img
            className="gomo-image gomo-mx-auto gomo-w-[165px] gomo-mb-2 lg:gomo-mr-4"
            src="https://www.gomo.ph/homepage/google.svg"
            alt="Google Logo"
          />
        </a>{" "}
        <a
          href="https://appgallery.huawei.com/app/C107905999"
          target="_blank"
          className="gomo-link"
        >
          <img
            className="gomo-image gomo-mx-auto gomo-w-[165px]"
            src="https://www.gomo.ph/homepage/app.svg"
            alt="AppGallery Logo"
          />
        </a>
      </div>
      
        </div>
      </div>
     
    </>
  );
}

export default Download;
