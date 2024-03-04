import IMAGEAVATARMOBILE from "/assets/shared/mobile/image-best-gear.jpg";
import IMAGEAVATARTABLET from "/assets/shared/tablet/image-best-gear.jpg";
import IMAGEAVATARDESKTOP from "/assets/shared/desktop/image-best-gear.jpg";
import "./components.css";

export const AVATAR = () => {
  //setting the screen sizes for the images
    const setScreenSizes = (mobile: string, tablet: string, desktop: string) => {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1439;

        return isMobile ? mobile : isTablet ? tablet : desktop;
    };

    const description = [
        "Bringing you the best audio gear",
        "Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.",
    ];

    return (
        <>
        <div className="mainAvatarContainer">
            <div className="txtdescription">
            <p className="headertxt uppercase font-bold">
                Bringing you the <span>best</span> audio gear
            </p>
            <p className="txtdescription leading-6 font-normal">
                {description[1]}
            </p>
            </div>
            <div className="imgContainer">
            <img
                src={setScreenSizes(
                IMAGEAVATARMOBILE,
                IMAGEAVATARTABLET,
                IMAGEAVATARDESKTOP
                )}
                alt=""
            />
            </div>
        </div>
        </>
    );
};
