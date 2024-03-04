import HEADPHONESNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SPEAKERSNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EARPHONESNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import ARROWRIGHT from "/assets/shared/desktop/icon-arrow-right.svg";
import { useNavigate } from "react-router-dom";
import "./components.css";

export const navList = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

export const MENUCONTAINER = () => {
  const navigate = useNavigate();

  const handleNavigateToComponent = (item: string) => {
    navigate(`/${item.toLowerCase()}/`);
  };

  return (
    <>
      <div className="navLinkContainer">
        {/* container for headphones */}
        <div className="headerPhonesContainer">
          <div className="imgContainer">
            <img
              src={HEADPHONESNAVIMAGE}
              alt="image of the headphone"
              className="navImageStyle"
            />
          </div>

          <div className="ashContainer">
            <p className="navTitle">{navList[1]}</p>
            <div
              onClick={() => handleNavigateToComponent(navList[1])}
              className="shopLink"
            >
              SHOP{" "}
              <span>
                <img src={ARROWRIGHT} alt="arrow right icon" />
              </span>
            </div>
          </div>
        </div>

        {/* container for speakers */}
        <div className="speakersContainer">
          <div className="imgContainer">
            <img
              src={SPEAKERSNAVIMAGE}
              alt="image of the speaker"
              className="navImageStyle"
            />
          </div>

          <div className="ashContainer">
            <p className="navTitle">{navList[2]}</p>
            <div
              onClick={() => handleNavigateToComponent(navList[2])}
              className="shopLink"
            >
              SHOP{" "}
              <span>
                <img src={ARROWRIGHT} alt="arrow right icon" />
              </span>
            </div>
          </div>
        </div>

        {/* container for earphones */}
        <div className="earphonesContainer">
          <div className="imgContainer">
            <img
              src={EARPHONESNAVIMAGE}
              alt="image of the earphone"
              className="navImageStyle"
            />
          </div>
          <div className="ashContainer">
            <p className="navTitle">{navList[3]}</p>
            <div
              onClick={() => handleNavigateToComponent(navList[3])}
              className="shopLink"
            >
              SHOP{" "}
              <span>
                <img src={ARROWRIGHT} alt="arrow right icon" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default MENUCONTAINER
