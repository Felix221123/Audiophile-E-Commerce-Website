import TICKICON from "/assets/checkout/icon-order-confirmation.svg";
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../BASE/AddToCartContext";
import { getProductDetails } from "./CartItems";
import "../NAVBAR/Navbar-styles.css";
import { ProductToAdd } from "./AddToCartContext";

export const ComfirmationComp = () => {
  const navigate = useNavigate();

  const handleGoToHome = () => {
    // Use navigate to navigate back to the home page
    navigate("/home");
  };

  const { itemsContainer } = useProductContext();

  //getting the values from the local storage
  const storedQuantities = JSON.parse(
    localStorage.getItem("quantities") || "[]"
  ) as number[];

  const grandTotalAmount = () => {
    // Calculate the total amount based on updated quantities
    const totalAmount = itemsContainer.reduce((sum, item, index) => {
      return sum + item.price * storedQuantities[index];
    }, 0);

    // Format the total amount with commas
    return (totalAmount + 50).toLocaleString();
  };

  const ItemsInLocalStorage = JSON.parse(localStorage.getItem("itemsContainer") || "[]") as ProductToAdd[];

  const firstIndex = ItemsInLocalStorage[0];

  const restOfIndex = () => {
    // Check if more than one item is present
    if (ItemsInLocalStorage.length > 1) {
      // Return the rest of the items (excluding the first one)
      return ItemsInLocalStorage.slice(1);
    } else {
      // Return an empty array if only one item is present
      return [];
    }
  };

  const restOfIndexLength = () => {
    // Return the length of the rest of the items
    return restOfIndex().length;
  };

  return (
    <>
      <div className="confirmationContainer">
        {/* icon container */}
        <div className="imgContainer">
          <img src={TICKICON} alt="approval icon" />
        </div>

        {/* thank ya text */}
        <article className="thankYaTxt uppercase font-bold">
          THANK YOU FOR YOUR ORDER
        </article>

        {/* email text */}
        <p className="userEmailConf leading-6 font-medium">
          You will receive an email confirmation shortly.
        </p>

        {/* container for items bought */}
        <div className="itemsBoughtCont">
          <div className="itemsBoughtListed">
            {/* Displaying the first item */}
            <div key="firstItem" className="EachItemsContainer">
              {/* main product container */}
              <div className="mainProductContainer">
                <div className="ProductimgContainer">
                  <img
                    src={getProductDetails(firstIndex.name).image}
                    alt="product image"
                  />
                </div>
                <div className="productNamePriceBox">
                  <p className="cartProductName uppercase font-bold leading-6">
                    {getProductDetails(firstIndex.name).name}
                  </p>
                  <p className="cartProductPrice uppercase font-bold leading-6">
                    $ {firstIndex.price.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* setting the product Quantity */}
              <p className="setQuantity leading-6 font-bold">
                x{storedQuantities[0]}
              </p>
            </div>
            <hr className="thin-line"/>

            {restOfIndexLength() > 1 && (
              <p className="restStatement font-bold">
                and {restOfIndexLength()} other item(s)
              </p>
            )}
          </div>
          <div className="itemsGrandTotal">
            <article className="confTotal uppercase font-medium leading-6">
              GRAND TOTAL
            </article>
            <p className="confAmount uppercase font-bold">$ {grandTotalAmount()}</p>
          </div>
        </div>

        {/* back to home button */}
        <button
          className="backToHome uppercase font-bold"
          onClick={handleGoToHome}
        >
          BACK TO HOME
        </button>
      </div>
    </>
  );
};
