import { useProductContext } from "../BASE/AddToCartContext";
import "../NAVBAR/Navbar-styles.css";
import XX59IMG from "/assets/cart/image-xx59-headphones.jpg";
import XX99IIMG from "/assets/cart/image-xx99-mark-one-headphones.jpg";
import XX99IIIMG from "/assets/cart/image-xx99-mark-two-headphones.jpg";
import YX1IMG from "/assets/cart/image-yx1-earphones.jpg";
import ZX7IMG from "/assets/cart/image-zx7-speaker.jpg";
import ZX9IMG from "/assets/cart/image-zx9-speaker.jpg";
import { useState, useEffect } from "react";
import "./components.css";

export interface ProductDetails {
  name: string;
  image: string;
}

//trying to map all names to their other names
export const mapProductNames: { [key: string]: ProductDetails } = {
  "YX1 Wireless Earphones": { name: "YX1", image: YX1IMG },
  "XX59 Headphones": { name: "XX59", image: XX59IMG },
  "XX99 Mark I Headphones": { name: "XX99 Mark I", image: XX99IIMG },
  "XX99 Mark II Headphones": { name: "XX99 Mark II", image: XX99IIIMG },
  "ZX7 Speaker": { name: "ZX7 Speaker", image: ZX7IMG },
  "ZX9 Speaker": { name: "ZX9 Speaker", image: ZX9IMG },
};

// Function to get details for a product name
export const getProductDetails = (productName: string) => {
  return mapProductNames[productName];
};

interface TotalPriceProps {
  quantities: number[];
}

export const TotalPrice: React.FC<TotalPriceProps> = ({ quantities }) => {
  const { itemsContainer } = useProductContext();

  // Calculate the total amount based on updated quantities
  const totalAmount = itemsContainer.reduce((sum, item, index) => {
    return sum + item.price * quantities[index];
  }, 0);

  // Format the total amount with commas
  const formattedTotalAmount = totalAmount.toLocaleString();

  return (
    <>
      <div className="totalContainer">
        <p className="totalTxt leading-6 font-medium">TOTAL</p>
        <p className="totalAmount font-bold">$ {formattedTotalAmount}</p>
      </div>
    </>
  );
};

export const VATPrice: React.FC<TotalPriceProps> = ({ quantities }) => {
  const { itemsContainer } = useProductContext();

  // Calculate the total amount based on updated quantities
  const totalAmount = itemsContainer.reduce((sum, item, index) => {
    return sum + item.price * quantities[index];
  }, 0);

  // Format the total amount with commas
  const totalVAT = (totalAmount * 0.2).toLocaleString();

  return (
    <>
      <div className="totalContainer">
        <p className="totalTxt leading-6 font-medium">VAT (INCLUDED)</p>
        <p className="totalAmount font-bold">$ {totalVAT}</p>
      </div>
    </>
  );
};

export const ShippingCostComp = () => {
  const shippingCost = 50;
  return (
    <>
      <div className="totalContainer">
        <p className="totalTxt leading-6 font-medium uppercase">shipping</p>
        <p className="totalAmount font-bold">$ {shippingCost}</p>
      </div>
    </>
  );
};

export const GrandTotal: React.FC<TotalPriceProps> = ({ quantities }) => {
  const { itemsContainer } = useProductContext();

  // Calculate the total amount based on updated quantities
  const totalAmount = itemsContainer.reduce((sum, item, index) => {
    return sum + item.price * quantities[index];
  }, 0);

  // Format the total amount with commas
  const grandTotal = (totalAmount + 50).toLocaleString();

  return (
    <>
      <div className="totalContainerForTotal">
        <p className="totalTxt leading-6 font-medium">GRAND TOTAL</p>
        <p className="GrandAmount font-bold">$ {grandTotal}</p>
      </div>
    </>
  );
};

export const ItemsContainer = () => {
  //setting up the items in cart
  const { itemsContainer } = useProductContext();

  // Initialize quantities for each item based on the current state
  const initialQuantities = itemsContainer.map((item) => item.quantity || 0);
  const [quantities, setQuantities] = useState(initialQuantities);

  // ... (other code)

  // Function to handle increment for a specific item
  const handleIncrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = newQuantities[index] + 1;
      return newQuantities;
    });
  };

  // Function to handle decrement for a specific item
  const handleDecrement = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] = newQuantities[index] - 1;
      }
      return newQuantities;
    });
  };

  useEffect(() => {
    // Save items and quantities to local storage whenever they change
    const storedItems = localStorage.setItem(
      "itemsContainer",
      JSON.stringify(itemsContainer)
    );
    const storedResetedQuantites = localStorage.setItem(
      "quantities",
      JSON.stringify(quantities)
    );
    console.log(storedItems);
    console.log(storedResetedQuantites);
  }, [itemsContainer, quantities]); // Add items and quantities to the dependency array

  return (
    <>
      <div className="wholeItemsContainer">
        {itemsContainer.map((item, index) => {
          const productDetails = getProductDetails(item.name);
          return (
            <div key={index} className="EachItemsContainer">
              {/* main product container */}
              <div className="mainProductContainer">
                <div className="ProductimgContainer">
                  <img src={productDetails.image} alt="product image" />
                </div>
                <div className="productNamePriceBox">
                  <p className="cartProductName uppercase font-bold leading-6">
                    {productDetails.name}
                  </p>
                  <p className="cartProductPrice uppercase font-bold leading-6">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* setting the product Quantity */}
              <div className="setProductContainer">
                <button
                  className="decrementBtn"
                  onClick={() => handleDecrement(index)}
                >
                  -
                </button>
                <p className="setPorductQuantity">{quantities[index]} </p>
                <button
                  className="incrementBtn"
                  onClick={() => handleIncrement(index)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <TotalPrice quantities={quantities} />
    </>
  );
};
