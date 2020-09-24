import React from "react";

import FooterBL from "../../assets/images/footer-bl.svg";
import FooterBR from "../../assets/images/footer-br.svg";

import SubscribeCta from "../subscribe-cta/subscribe-cta";

const Footer = () => {
  return (
    <footer className=" bg-brandDarker relative" style={{height:"600px"}}>
      <div className="overflow-hidden absolute bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4">
        <img alt="" src={FooterBL} />
      </div>
      <div className="overflow-hidden absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
        <img alt="" src={FooterBR} />
      </div>
      <div className="mx-auto max-w-6xl transform -translate-y-1/2">
        <SubscribeCta />
      </div>
    </footer>
  );
};

export default Footer;
