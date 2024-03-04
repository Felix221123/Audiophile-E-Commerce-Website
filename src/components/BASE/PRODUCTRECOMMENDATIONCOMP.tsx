import { setScreenSizes } from "./SEEPRODUCTCOMPNORM";
import { useNavigate } from "react-router-dom";

interface ProductRecommendationProps {
  firstImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  secondImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  thirdImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  productOneRecommendName: string;
  productTwoRecommendName: string;
  productThirdRecommendName: string;
}

export const ProductRecommendationComp = ({
  firstImage,
  secondImage,
  thirdImage,
  productOneRecommendName,
  productThirdRecommendName,
  productTwoRecommendName,
}: ProductRecommendationProps) => {
  //   setting the image for you make also like products
  const imgFirstSrc = setScreenSizes(
    firstImage.mobile,
    firstImage.tablet,
    firstImage.desktop
  );
  const imgSecondSrc = setScreenSizes(
    secondImage.mobile,
    secondImage.tablet,
    secondImage.desktop
  );
  const imgThirdSrc = setScreenSizes(
    thirdImage.mobile,
    thirdImage.tablet,
    thirdImage.desktop
  );

  //making a dictionary for mapping products to the correct urls
  const productNameURlMap: { [key: string]: string } = {
    "XX99 MARK I": "/headphones/product-detail-headphones-2/",
    "XX59": "/headphones/product-detail-headphones-3/",
    "ZX9 SPEAKER": "/speakers/product-detail-speakers-1/",
    "XX99 MARK II": "/headphones/product-detail-headphones-1/",
    "ZX7 SPEAKER": "/speakers/product-detail-speakers-2/",
    "YX1": "/earphones/product-detail-earphones-1/",
  };

  // initializing navigation routes
  const navigate = useNavigate();

  const handleRouteProductRecommendOne = (productName:string) => {
    let routeValue;

    for (const key in productNameURlMap) {
      const lowerProductOneName = productName.toLowerCase();
      
      if (key.toLowerCase() === lowerProductOneName) {
        routeValue = productNameURlMap[key];
        console.log(routeValue);
        navigate(`${routeValue.toLowerCase()}`);
      }
      
    }
  };

  const handleRouteProductRecommendThree = (productName:string) => {
    let routeValue;

    for (const key in productNameURlMap) {
      const lowerProductTwoName = productName.toLowerCase();
      
      if (key.toLowerCase() === lowerProductTwoName) {
        routeValue = productNameURlMap[key];
        console.log(routeValue);
        navigate(`${routeValue.toLowerCase()}`);
      }
      
    }
  };

  const handleRouteProductRecommendTwo = (productName:string) => {
    let routeValue;

    for (const key in productNameURlMap) {
      
      const lowerProductThirdName = productName.toLowerCase();

      if (key.toLowerCase() === lowerProductThirdName) {
        routeValue = productNameURlMap[key];
        console.log(routeValue);
        navigate(`${routeValue.toLowerCase()}`);
      }
      
    }
  };

  return (
    <>
      <div className="recommendationContainer">
        {/* header  */}
        <p className="txtRecommend uppercase font-bold text-center">you may also like</p>

        {/* product recommendation container */}
        <div className="productsRecommended">
          <div className="productDetailsContainer">
            <div className="imgContainer">
              <img src={imgFirstSrc} alt="first product recommended" />
            </div>
            <p className="productName font-bold uppercase">{productOneRecommendName}</p>
            <button
              className="seePorductBtn font-bold uppercase"
              onClick={() => handleRouteProductRecommendOne(productOneRecommendName)}
            >
              see product
            </button>
          </div>
          <div className="productDetailsContainer">
            <div className="imgContainer">
              <img src={imgSecondSrc} alt="second product recommended" />
            </div>
            <p className="productName font-bold uppercase">{productTwoRecommendName}</p>
            <button
              className="seePorductBtn font-bold uppercase"
              onClick={() => handleRouteProductRecommendTwo(productTwoRecommendName)}
            >
              see product
            </button>
          </div>
          <div className="productDetailsContainer">
            <div className="imgContainer">
              <img src={imgThirdSrc} alt="third product recommended" />
            </div>
            <p className="productName font-bold uppercase">{productThirdRecommendName}</p>
            <button
              className="seePorductBtn font-bold uppercase"
              onClick={() => handleRouteProductRecommendThree(productThirdRecommendName)}
            >
              see product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
