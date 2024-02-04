import "./Footer.css";

const FooterLinkSection = ({ links }) => (
  <div className="grid-container">
    {links.map((link, index) => (
      <div key={index} className={`grid-item ${link.className}`}>
        {link.title}
      </div>
    ))}
  </div>
);

const SocialIcons = ({ socialMedia }) => (
  <div className="social-icons">
    {socialMedia.map((media, index) => (
      <a
        key={index}
        href={media.url}
        target="_blank"
        rel="noreferrer"
        className="social-icon"
      >
        <img src={media.icon} alt={media.name} />
      </a>
    ))}
  </div>
);

function Footer() {
  const footerLinks = [
    { title: "About GOMO", className: "about-gomo" },
    { title: "Terms & Conditions", className: "terms-conditions" },
    { title: "ASC Ref. Codes", className: "asc-ref" },
    { title: "Privacy Policy", className: "privacy-policy" },
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/getgomo/",
      icon: "https://www.gomo.ph/homepage/Facebook.svg",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/gomo_ph",
      icon: "https://www.gomo.ph/homepage/Twitter.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gomo.ph/",
      icon: "https://www.gomo.ph/homepage/Instagram.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@gomo.ph",
      icon: "https://www.gomo.ph/homepage/TikTok.svg",
    },
  ];

  return (
    <>
      <div className="gomo-bg main-container">
        <div className="footer-content">
          <img
            className="gomo-h gomo-block hover-gomo-cursor-pointer gomo-mb-6 lg-gomo-mb logo-image"
            src="https://www.gomo.ph/homepage/gomo_logo.svg"
            alt="GOMO Logo"
          />
          <div className="flex-container">
            <FooterLinkSection links={footerLinks} />
            <div className="follow-us-section">
              <div className="follow-us-title">Follow Us</div>
              <SocialIcons socialMedia={socialMediaLinks} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
