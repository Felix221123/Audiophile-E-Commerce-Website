import { useState } from "react";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import { setScreenSizes } from "./SEEPRODUCTCOMPNORM";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../BASE/AddToCartContext";
import "./components.css";
import { formatFeaturesWithLineBreaks } from "./HEADERSCOMP";
import { ProductDetailGalleryComp } from "./PRODUCTDETAILGALLERYCOMP";
import { ProductRecommendationComp } from "./PRODUCTRECOMMENDATIONCOMP";

interface ProductSubset {
  id: number;
  name: string;
  price: number;
  slug: string;
  quantity: number;
}

export const ProductDetailComp: React.FC<AudioDataProps> = (props) => {
  const imgSrc = setScreenSizes(
    props.image.mobile,
    props.image.tablet,
    props.image.desktop
  );

  // handling go back functionality
  const URLmaproute: { [key: string]: string } = {
    "/headphones/product-detail-headphones-2/": "/headphones/",
    "/headphones/product-detail-headphones-3/": "/headphones/",
    "/speakers/product-detail-speakers-1/": "/speakers/",
    "/headphones/product-detail-headphones-1/": "/headphones/",
    "/speakers/product-detail-speakers-2/": "/speakers/",
    "/earphones/product-detail-earphones-1/": "/earphones/",
  };

  // initializing navigation routes
  const navigate = useNavigate();

  const handleRouting = () => {
    let routeValue;

    for (const key in URLmaproute) {
      if (key === location.pathname.toLowerCase()) {
        routeValue = URLmaproute[key];
        navigate(`${routeValue.toLowerCase()}`);
        break;
      }
    }
  };

  const [itemsQuantity, setitemsQuantity] = useState(1);

  const handleIncrement = () => {
    setitemsQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleDecrement = () => {
    if (itemsQuantity > 1) {
      setitemsQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const { addItemsToCart } = useProductContext();

  const handleAddToCart = () => {
    // Extract a subset of properties from AudioDataProps
    const { id, name, price, slug } = props;

    // Create a product object with the necessary details
    const productToAdd: ProductSubset = {
      id,
      name,
      price,
      slug,
      quantity: itemsQuantity
    };

    // Add the product to the cart
    addItemsToCart(productToAdd);
  };

  const formatPriceWithComma = (price: number) => {
    if (price > 999) {
      // Convert the price to a string
      const priceString = price.toString();

      // Split the price string into whole and decimal parts
      const [wholePart, decimalPart] = priceString.split(".");

      // Insert commas into the whole part
      const formattedWholePart = wholePart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );

      // Combine the whole part and decimal part back
      const formattedPrice = decimalPart
        ? `${formattedWholePart}.${decimalPart}`
        : formattedWholePart;

      return formattedPrice;
    }

    // If the price is not greater than 999, return it as is
    return price.toString();
  };

  return (
    <>
      <button
        className="goBackBtn leading-6 font-medium"
        onClick={handleRouting}
      >
        Go Back
      </button>

      {/* add to cart functionality here */}
      <div className="addProductToCartContainer">
        <div className="productImageContainer">
          <img src={imgSrc} alt="product Image" />
        </div>

        <div className="addToCartProductSession">
          {props.new && (
            <p className="txtNewProduct font-normal">NEW PRODUCT</p>
          )}
          <h1 className="font-bold uppercase">{props.name}</h1>
          <p className="productDescriptionInCart font-medium">
            {props.description}
          </p>
          <p className="productPrice font-bold uppercase">
            $ {formatPriceWithComma(props.price)}
          </p>

          {/* setting the items quantity */}
          <div className="quantityAddToCartBtnContainer">
            <div className="setQuantityContainer">
              <button className="decrementBtn" onClick={handleDecrement}>
                -
              </button>
              <p className="setPorductQuantity">{itemsQuantity}</p>
              <button className="incrementBtn" onClick={handleIncrement}>
                +
              </button>
            </div>
            <button className="addToCartBtn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      {/* features and box container */}
      <div className="featureBoxContainer">
        {/* feature container */}
        <div className="featureContainer">
          <article className="leading-9 font-bold uppercase">features</article>
          <p className="wholeProductArt">
            {formatFeaturesWithLineBreaks(props.features)}
          </p>
        </div>

        {/* In the box container */}
        <div className="boxContainer">
          <article className="leading-9 font-bold uppercase">
            in the box
          </article>
          <div className="productInsideInfo">
            <div className="row-div">
              <span className="font-medium">{props.includes[0].quantity}x</span>
              <span className="font-medium">{props.includes[0].item}</span>
            </div>
            <div className="row-div">
              <span className="font-medium">{props.includes[1].quantity}x</span>
              <span className="font-medium">{props.includes[1].item}</span>
            </div>
            <div className="row-div">
              <span className="font-medium">{props.includes[2].quantity}x</span>
              <span className="font-medium">{props.includes[2].item}</span>
            </div>
            <div className="row-div">
              <span className="font-medium">{props.includes[3].quantity}x</span>
              <span className="font-medium">{props.includes[3].item}</span>
            </div>
            {props.includes.length >= 5 && (
              <div className="row-div">
                <span className="font-medium">
                  {props.includes[4].quantity}x
                </span>
                <span className="font-medium">{props.includes[4].item}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* photo gallery */}
      <div className="photoGalleryContainer">
        <ProductDetailGalleryComp
          firstGallery={props.gallery.first}
          secondGallery={props.gallery.second}
          thirdGallery={props.gallery.third}
        />
      </div>

      {/* product recommendation session */}
      <div className="productRecommedationSession">
        <ProductRecommendationComp
          firstImage={props.others[0].image}
          secondImage={props.others[1].image}
          thirdImage={props.others[2].image}
          productOneRecommendName={props.others[0].name}
          productTwoRecommendName={props.others[1].name}
          productThirdRecommendName={props.others[2].name}
        />
      </div>
    </>
  );
};
