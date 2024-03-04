import { navList } from "./MENUCONTAINER";
import LOGO from "/assets/shared/desktop/logo.svg";
import { useNavigate } from "react-router-dom";
import { FACEBOOKICON } from "../ICONS/FACEBOOKICON";
import { INSTAGRAMICON } from "../ICONS/INSTAGRAMICON";
import { TWITTER } from "../ICONS/TWITTERICON";

export const FOOTER = () => {
  const navigate = useNavigate();

  const handleNavigateToComponent = (item: string) => {
    navigate(`/${item.toLowerCase()}/`);
  };

  const txt = [
    "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
    "Copyright 2021. All Rights Reserved",
  ];

  return (
    <>
      <footer>
        <div className="logoNavListContainer">
          <div className="imageLogoContainer">
            <img src={LOGO} alt="company logo" />
          </div>
          <nav className="footerNavListContainer">
            <div
              className="footerNavs font-bold leading-6"
              onClick={() => handleNavigateToComponent(navList[0])}
            >
              {navList[0]}
            </div>
            <div
              className="footerNavs font-bold leading-6"
              onClick={() => handleNavigateToComponent(navList[1])}
            >
              {navList[1]}
            </div>
            <div
              className="footerNavs font-bold leading-6"
              onClick={() => handleNavigateToComponent(navList[2])}
            >
              {navList[2]}
            </div>
            <div
              className="footerNavs font-bold leading-6"
              onClick={() => handleNavigateToComponent(navList[3])}
            >
              {navList[3]}
            </div>
          </nav>
        </div>

        <div className="copyrightsSocialMediaContainer">
          <div className="footerTxtContainer">
            <p className="txtdecription leading-6 font-normal">{txt[0]}</p>
            <p className="copyright leading-6 font-bold">{txt[1]}</p>
          </div>
          <div className="socialMediaContainer">
            <FACEBOOKICON />
            <TWITTER />
            <INSTAGRAMICON />
          </div>
        </div>
      </footer>
    </>
  );
};
