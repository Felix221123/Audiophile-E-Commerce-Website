import { useNavigate } from "react-router-dom";

export interface ContainerProps {
  productName: string;
  productDescription: string;
  isNewProduct: boolean;
  isMobile: string;
  isTablet: string;
  isDesktop: string;
  productRoute: string;
}

//setting the screen sizes for the images
export const setScreenSizes = (
  mobile: string,
  tablet: string,
  desktop: string
) => {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1439;

  return isMobile ? mobile : isTablet ? tablet : desktop;
};

export const SeeProductCompNormal = ({
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
      <div className="productContainer">
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
