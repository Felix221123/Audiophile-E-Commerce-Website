import { useNavigate } from "react-router-dom";
import { ContainerProps } from "./SEEPRODUCTCOMPNORM"
import {setScreenSizes} from "./SEEPRODUCTCOMPNORM"


export const SeeProductCompReverse = ({
  productName,
  productDescription,
  isNewProduct,
  isDesktop,
  isMobile,
  isTablet,
  productRoute,
}: ContainerProps) => {
  const imgSrc = setScreenSizes(isMobile, isTablet, isDesktop);

  // setting navigation
  const navigate = useNavigate();

  const handleRouting = (item: string) => {
    navigate(`/${item.toLowerCase()}/`);
  };

  return (
    <>
      <div className="productContainerReverse">

        {/* image container  */}
        <div className="productImageContainer">
          <img src={imgSrc} alt="product image" />
        </div>
        
        {/* image description */}
        <div className="productDescriptionContainer">
          {isNewProduct && (
            <p className="txtNewProduct font-normal">NEW PRODUCT</p>
          )}
          <p className="productName font-bold uppercase">{productName}</p>
          <p className="productDescription font-medium leading-6">{productDescription}</p>
          <button
            className="productBtn uppercase font-bold"
            onClick={() => handleRouting(productRoute)}
          >
            see product
          </button>
        </div>

      </div>
    </>
  );
};

