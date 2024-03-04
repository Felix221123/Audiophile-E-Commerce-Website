import { setScreenSizes } from "./SEEPRODUCTCOMPNORM";

interface GalleryProps {
  firstGallery: {
    mobile: string;
    tablet: string;
    desktop: string;

  };
  secondGallery: {
    mobile: string;
    tablet: string;
    desktop: string;

  };
  thirdGallery: {
    mobile: string;
    tablet: string;
    desktop: string;

  };
}

export const ProductDetailGalleryComp = ({
  firstGallery,
  secondGallery,
  thirdGallery,
}: GalleryProps) => {
  // setting the gallery images of the the products
  const imgFirstSrc = setScreenSizes(
    firstGallery.mobile,
    firstGallery.tablet,
    firstGallery.desktop
  );
  const imgSecondSrc = setScreenSizes(
    secondGallery.mobile,
    secondGallery.tablet,
    secondGallery.desktop
  );
  const imgThirdSrc = setScreenSizes(
    thirdGallery.mobile,
    thirdGallery.tablet,
    thirdGallery.desktop
  );

  return (
    <>
      <div className="allImageContainer">
        <div className="firstTwoImageContainer">
          <img src={imgFirstSrc} alt="first galelry image" />
          <img src={imgSecondSrc} alt="second gallery image" />
        </div>
        <div className="lastImageContainer">
          <img src={imgThirdSrc} alt="third image image" />
        </div>
      </div>
    </>
  );
};
