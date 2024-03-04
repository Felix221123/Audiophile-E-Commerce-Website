// import { useNavigate } from "react-router-dom";
import HOMEIMAGEHEADERMOBILE from "/assets/home/mobile/image-header.jpg";
import IMAGEEARPHONESYX1MOBILE from "/assets/home/mobile/image-earphones-yx1.jpg";
import IMAGESPEAKERZX7MOBILE from "/assets/home/mobile/image-speaker-zx7.jpg";
import IMAGESPEAKERZX9MOBILE from "/assets/home/mobile/image-speaker-zx9.png";
import HOMEIMAGEHEADERTABLET from "/assets/home/tablet/image-header.jpg";
import IMAGEEARPHONESYX1TABLET from "/assets/home/tablet/image-earphones-yx1.jpg";
import IMAGESPEAKERZX7TABLET from "/assets/home/tablet/image-speaker-zx7.jpg";
import IMAGESPEAKERZX9TABLET from "/assets/home/tablet/image-speaker-zx9.png";
import HOMEIMAGEHEADERDESKTOP from "/assets/home/desktop/image-hero.jpg";
import IMAGEEARPHONESYX1DESKTOP from "/assets/home/desktop/image-earphones-yx1.jpg";
import IMAGESPEAKERZX7DESKTOP from "/assets/home/desktop/image-speaker-zx7.jpg";
import IMAGESPEAKERZX9DESKTOP from "/assets/home/desktop/image-speaker-zx9.png";
import "./Home-styles.css";
import { useNavigate } from "react-router-dom";
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";

export const HOME = () => {
  //setting the screen sizes for the images
  const setScreenSizes = (mobile: string, tablet: string, desktop: string) => {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1439;

    return isMobile ? mobile : isTablet ? tablet : desktop;
  };

  // setting navigation
  const navigate = useNavigate();

  const handleRouting = (item: string) => {
    navigate(`/${item.toLowerCase()}/`);
  };

  return (
    <>
      <div>
        <div className="headerContainer">
          <img
            src={setScreenSizes(
              HOMEIMAGEHEADERMOBILE,
              HOMEIMAGEHEADERTABLET,
              HOMEIMAGEHEADERDESKTOP
            )}
            alt="image headers"
          />

          <div className="descriptionContainer">
            <p className="newProduct font-normal">NEW PRODUCT</p>
            <h1 className="productName font-bold uppercase">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="productDescription leading-6 font-medium">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button
              className="seeProductBtn uppercase font-bold"
              onClick={() => handleRouting("HEADPHONES")}
            >
              See Product
            </button>
          </div>
        </div>
      </div>
      <div className="navLinkContainerBox">
        <MENUCONTAINER />
      </div>
      <div className="allItemsContainer">
        {/* container for speaker ZX9 */}
        <div className="zx9SpeakerContainer">
          <div className="imgContainer">
            <img
              src={setScreenSizes(
                IMAGESPEAKERZX9MOBILE,
                IMAGESPEAKERZX9TABLET,
                IMAGESPEAKERZX9DESKTOP
              )}
              alt="speaker zx9 image"
            />
          </div>
          <div className="speakerdescriptionContainer">
            <p className="productName font-bold leading-10">ZX9 SPEAKER</p>
            <p className="productDescription font-medium">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button
              className="productBtN uppercase"
              onClick={() => handleRouting("speakers/product-detail-speakers-1")}
            >
              See Product
            </button>
          </div>
        </div>

        {/* container for speaker ZX7 */}
        <div className="zX7speakerContainer">
          <div className="speakerDescriptionContainer">
            <p className="productName uppercase font-bold">ZX7 SPEAKER</p>
            <button
              className="productBtn uppercase font-bold"
              onClick={() => handleRouting("speakers/product-detail-speakers-2")}
            >
              See Product
            </button>
          </div>

          <div className="imgContainer">
            <img
              src={setScreenSizes(
                IMAGESPEAKERZX7MOBILE,
                IMAGESPEAKERZX7TABLET,
                IMAGESPEAKERZX7DESKTOP
              )}
              alt="zx7 image"
            />
          </div>
        </div>

        {/* container for yx1 earphones */}
        <div className="yx1earphonesContainer">
          <div className="imgContainer">
            <img
              src={setScreenSizes(
                IMAGEEARPHONESYX1MOBILE,
                IMAGEEARPHONESYX1TABLET,
                IMAGEEARPHONESYX1DESKTOP
              )}
              alt="yx1 earphone image"
            />
          </div>

          <div className="productDetailsContainer">
            <p className="productName font-bold">YX1 EARPHONES</p>
            <button
              className="productBtn uppercase font-bold"
              onClick={() => handleRouting("earphones/product-detail-earphones-1")}
            >
              See Product
            </button>
          </div>
        </div>
      </div>

      {/* container for avatar and footer */}
      <div className="avatarContainerFooter">
        <AVATAR />
        <FOOTER />
      </div>
    </>
  );
};
