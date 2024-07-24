import React from "react";
import "./Footer.css";
import DesktopLB from "../../assets/images/Background_files/DesktopLB.png";
import DesktopRM from "../../assets/images/Background_files/DesktopRM.png";
import DesktopRB from "../../assets/images/Background_files/DesktopRB.png";

const Footer = () => {
  return (
    <article className="bg-bottom">
      <div className="bg-LB">
        <img src={DesktopLB} alt="bg-LB" />
      </div>
      <div className="bg-RM">
        <img src={DesktopRM} alt="bg-RM" />
      </div>
      <div className="bg-RB">
        <img src={DesktopRB} alt="bg-RB" />
      </div>
    </article>
  );
};

export default Footer;
