import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout-Styles.css";
import {
  GrandTotal,
  ShippingCostComp,
  TotalPrice,
  VATPrice,
  getProductDetails,
} from "../BASE/CartItems";
import { useProductContext } from "../BASE/AddToCartContext";
import CASHONDELIVERY from "/assets/checkout/icon-cash-on-delivery.svg";
import { FOOTER } from "../BASE/FOOTER";
import { ComfirmationComp } from "../BASE/CONFIRMATION";

export const CHECKOUT = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Use navigate to navigate back to the previous page
    navigate(-1);
  };

  const { itemsContainer, removeAllItems } = useProductContext();

  const [formData, setFormData] = useState({
    customerName: "",
    customerEmail: "",
    customerphoneNum: "",
    customerhomeAddress: "",
    customerZipCode: "",
    customerCity: "",
    customerCountry: "",
  });

  const [formDataError, setFormDataError] = useState<Record<string, boolean>>({
    customerName: false,
    customerEmail: false,
    customerphoneNum: false,
    customerhomeAddress: false,
    customerZipCode: false,
    customerCity: false,
    customerCountry: false,
  });

  const [formEmoneyData, setformEmoneyData] = useState({
    customerEMoneyNum: "",
    customerEMoneyPin: "",
  });

  const [formEmoneyDataError, setformEmoneyDataError] = useState<
    Record<string, boolean>
  >({
    customerEMoneyNum: false,
    customerEMoneyPin: false,
  });

  const handleEmoneyForms = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setformEmoneyData((prevData) => {
      return { ...prevData, [id]: value };
    });

    setformEmoneyDataError((prevError) => {
      return { ...prevError, [id]: false };
    });
  };

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => {
      // console.log("Setting Form Data:", { ...prevData, [id]: value });
      return { ...prevData, [id]: value };
    });

    setFormDataError((prevError) => {
      // console.log("Setting Form Error:", { ...prevError, [id]: false });
      return { ...prevError, [id]: false };
    });
  };

  //getting the values from the local storage
  const storedQuantities = JSON.parse(
    localStorage.getItem("quantities") || "[]"
  ) as number[];

  const redBorderLine = {
    // borderColor: "#CD2C2C",
    border: "2px solid #CD2C2C",
    transition: "0.5s",
  };

  const normalBorderLine = {
    borderColor: "",
  };

  const errorTextClr = {
    color: "#CD2C2C",
  };
  const nomalerrorTextClr = {
    color: "",
  };

  // payment options
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (selectedPaymentMethod === "cashOnDelivery") {
      // Handle the case where cash on delivery is selected
      // Handle the case where cash on delivery is selected
      console.log("Processing Cash on Delivery");

      // Set errors for e-Money fields to false
      setFormDataError({
        ...formDataError,
      });

      // Check for empty fields
      const newFormDataError: Record<string, boolean> = {};

      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim() === "") {
          newFormDataError[key] = true;
        }
      });

      // If there are other empty fields, set errors and return
      if (Object.keys(newFormDataError).length > 0) {
        setFormDataError((prevError) => ({
          ...prevError,
          ...newFormDataError,
        }));
        console.log("Please fill in all required fields.");
        return;
      }

      // Clear any existing form data errors
      setFormDataError({});

      setFormSubmitted(true);
    } else if (selectedPaymentMethod === "eMoney") {
      console.log("processing on electronic money");
      // Check for empty fields for other payment methods
      const newFormDataError: Record<string, boolean> = {};

      Object.entries(formData).forEach(([key, value]) => {
        if (value.trim() === "") {
          newFormDataError[key] = true;
        }
      });
      Object.entries(formEmoneyData).forEach(([key, value]) => {
        if (value.trim() === "") {
          newFormDataError[key] = true;
        }
      });

      if (Object.keys(newFormDataError).length > 0) {
        // Set errors only for empty fields
        setFormDataError(newFormDataError);
        setformEmoneyDataError(newFormDataError);
        console.log("Please fill in all required fields.");
        return;
      }

      // Clear any existing form data errors
      setFormDataError({});
      setformEmoneyDataError({});

      // Perform your form submission logic here
      console.log("Form submitted successfully!");
      setFormSubmitted(true);
    }
  };

  // New state variable for controlling the loading animation
  const [showLoadingAnimation, setShowLoadingAnimation] = useState(false);

  useEffect(() => {
    if (formSubmitted) {
      // Show loading animation for 3 seconds
      document.body.classList.add("overlay-active-spinner");
      setShowLoadingAnimation(true);
      setTimeout(() => {
        setShowLoadingAnimation(false);
        document.body.classList.remove("overlay-active-spinner");
      }, 3000);
    }
  }, [formSubmitted]);

  useEffect(() => {
    const handleOverlayStyle = () => {
      if (formSubmitted) {
        // document.body.classList.add("overlay-active");

        // Simulate an asynchronous operation (replace this with your actual logic)
        const timeoutId = setTimeout(async () => {
          try {
            removeAllItems();
          } catch (error) {
            console.error("Async operation failed:", error);
          } finally {
            // Reset formSubmitted after the animation and async operation
            setFormSubmitted(true);
          }
        }, 3000);

        // Cleanup the timeout on component unmount or form submission failure
        return () => {
          clearTimeout(timeoutId);
        };
      }
    };

    return handleOverlayStyle();
  }, [formSubmitted, removeAllItems]);

  return (
    <>
      {showLoadingAnimation && (
        <div className="Spincontainer">
          <div className="spinner"></div>
        </div>
      )}

      {!showLoadingAnimation && (
        <div style={{ backgroundColor: "#F1F1F1" }}>
          <div className="mainCheckContainer">
            <button
              className="goBackBtnCheck leading-6 font-medium"
              onClick={handleGoBack}
            >
              Go Back
            </button>

            {/* checkout and pay container box */}
            <div className="checkoutSummayBox">
              {/* checkout forms box */}
              <div className="checkoutContainer">
                <h1 className="font-bold uppercase">checkout</h1>

                {/* main forms */}
                <form action="" id="userBillingInfo">
                  {/* billing details container */}
                  <div className="billingDetialsContainer">
                    <article className="formsHeader uppercase font-bold">
                      Billing Details
                    </article>
                    <div className="nameAddressContainer">
                      {/* name container */}
                      <div className="nameContainer">
                        <label
                          htmlFor="customerName"
                          className="font-bold"
                          style={
                            formDataError.customerName
                              ? errorTextClr
                              : nomalerrorTextClr
                          }
                        >
                          Name
                          <input
                            type="text"
                            id="customerName"
                            value={formData.customerName}
                            onChange={handleFormsChange}
                            style={
                              formDataError.customerName
                                ? redBorderLine
                                : normalBorderLine
                            }
                            className={
                              formDataError.customerName ? "shakeX" : "noShake"
                            }
                          />
                          {formDataError.customerName && (
                            <span className="errorTxt font-medium">
                              Wrong format
                            </span>
                          )}
                        </label>
                      </div>

                      {/* address container */}
                      <div className="emailAddressContainer">
                        <label
                          htmlFor="customerEmail"
                          className="font-bold"
                          style={
                            formDataError.customerName
                              ? errorTextClr
                              : nomalerrorTextClr
                          }
                        >
                          Email Address
                          <input
                            type="text"
                            id="customerEmail"
                            value={formData.customerEmail}
                            onChange={handleFormsChange}
                            style={
                              formDataError.customerName
                                ? redBorderLine
                                : normalBorderLine
                            }
                            className={
                              formDataError.customerEmail ? "shakeX" : "noShake"
                            }
                          />
                          {formDataError.customerEmail && (
                            <span className="errorTxt font-medium">
                              Wrong format
                            </span>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* phone number container */}
                    <div className="phoneNumContainer">
                      <label
                        htmlFor="customerphoneNum"
                        className="font-bold"
                        style={
                          formDataError.customerName
                            ? errorTextClr
                            : nomalerrorTextClr
                        }
                      >
                        Phone Number
                        <input
                          type="text"
                          id="customerphoneNum"
                          value={formData.customerphoneNum}
                          onChange={handleFormsChange}
                          style={
                            formDataError.customerphoneNum
                              ? redBorderLine
                              : normalBorderLine
                          }
                        />
                        {formDataError.customerphoneNum && (
                          <span className="errorTxt font-medium">
                            Wrong format
                          </span>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* shipping info container */}
                  <div className="shippingInfoContainer">
                    <article className="formsHeader uppercase font-bold">
                      shipping info
                    </article>

                    {/* address container */}
                    <div className="addressContainer">
                      <label
                        htmlFor="customerhomeAddress"
                        className="font-bold"
                        style={
                          formDataError.customerName
                            ? errorTextClr
                            : nomalerrorTextClr
                        }
                      >
                        Address
                        <input
                          type="text"
                          id="customerhomeAddress"
                          value={formData.customerhomeAddress}
                          onChange={handleFormsChange}
                          style={
                            formDataError.customerhomeAddress
                              ? redBorderLine
                              : normalBorderLine
                          }
                          className={
                            formDataError.customerhomeAddress
                              ? "shakeX"
                              : "noShake"
                          }
                        />
                        {formDataError.customerhomeAddress && (
                          <span className="errorTxt font-medium">
                            Wrong format
                          </span>
                        )}
                      </label>
                    </div>

                    {/* zip code and city container */}
                    <div className="zipCodeCityContainer">
                      {/* zip code container */}
                      <div className="zipCodeContainer">
                        <label
                          htmlFor="customerZipCode"
                          className="font-bold"
                          style={
                            formDataError.customerName
                              ? errorTextClr
                              : nomalerrorTextClr
                          }
                        >
                          ZIP Code
                          <input
                            type="text"
                            id="customerZipCode"
                            value={formData.customerZipCode}
                            onChange={handleFormsChange}
                            style={
                              formDataError.customerZipCode
                                ? redBorderLine
                                : normalBorderLine
                            }
                            className={
                              formDataError.customerZipCode
                                ? "shakeX"
                                : "noShake"
                            }
                          />
                          {formDataError.customerZipCode && (
                            <span className="errorTxt font-medium">
                              Wrong format
                            </span>
                          )}
                        </label>
                      </div>

                      {/* city container */}
                      <div className="cityContainer">
                        <label
                          htmlFor="customerCity"
                          className="font-bold"
                          style={
                            formDataError.customerName
                              ? errorTextClr
                              : nomalerrorTextClr
                          }
                        >
                          City
                          <input
                            type="text"
                            id="customerCity"
                            value={formData.customerCity}
                            onChange={handleFormsChange}
                            style={
                              formDataError.customerCity
                                ? redBorderLine
                                : normalBorderLine
                            }
                            className={
                              formDataError.customerCity ? "shakeX" : "noShake"
                            }
                          />
                          {formDataError.customerCity && (
                            <span className="errorTxt font-medium">
                              Wrong format
                            </span>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* country container */}
                    <div className="countryContainer">
                      <label
                        htmlFor="customerCountry"
                        className="font-bold"
                        style={
                          formDataError.customerCountry
                            ? errorTextClr
                            : nomalerrorTextClr
                        }
                      >
                        Country
                        <input
                          type="text"
                          id="customerCountry"
                          value={formData.customerCountry}
                          onChange={handleFormsChange}
                          style={
                            formDataError.customerCountry
                              ? redBorderLine
                              : normalBorderLine
                          }
                          className={
                            formDataError.customerCountry ? "shakeX" : "noShake"
                          }
                        />
                        {formDataError.customerCountry && (
                          <span className="errorTxt font-medium">
                            Wrong format
                          </span>
                        )}
                      </label>
                    </div>
                  </div>

                  {/* payment details container */}
                  <div className="paymentDetailsContainer">
                    <article className="formsHeader uppercase font-bold">
                      payment details
                    </article>

                    {/* payment methods container */}
                    <div className="paymentContainers">
                      <p className="customerPaymentMethod font-bold">
                        Payment Method
                      </p>

                      {/* e-Money container */}
                      <div className="userChoicePaymentContainer">
                        <div className="eMoneyContainer">
                          <input
                            type="radio"
                            id="eMoney"
                            name="paymentMethod"
                            onChange={() => handlePaymentMethodChange("eMoney")}
                          />
                          <label htmlFor="eMoney" className="method font-bold">
                            e-Money
                          </label>
                        </div>

                        {/* Cash on delivery container */}
                        <div className="cashOnDeliveryContainer">
                          <input
                            type="radio"
                            id="cashOnDelivery"
                            name="paymentMethod"
                            onChange={() =>
                              handlePaymentMethodChange("cashOnDelivery")
                            }
                          />
                          <label
                            htmlFor="cashOnDelivery"
                            className="method font-bold"
                          >
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* component unmounts based on selected payment method */}
                    {selectedPaymentMethod === "eMoney" && (
                      <div className="eMoneyContainerOptionsContainer">
                        {/* e money number */}
                        <div className="eMoneyNumberContainer">
                          <label
                            htmlFor="customerEMoneyNum"
                            className={`font-bold`}
                            style={
                              formEmoneyDataError.customerEMoneyNum
                                ? errorTextClr
                                : nomalerrorTextClr
                            }
                          >
                            e-Money Number
                            <input
                              type="text"
                              id="customerEMoneyNum"
                              value={formEmoneyData.customerEMoneyNum}
                              onChange={handleEmoneyForms}
                              style={
                                formEmoneyDataError.customerEMoneyNum
                                  ? redBorderLine
                                  : normalBorderLine
                              }
                              className={
                                formEmoneyDataError.customerEMoneyNum
                                  ? "shakeX"
                                  : "noShake"
                              }
                            />
                            {formEmoneyDataError.customerEMoneyNum && (
                              <span className="errorTxt font-medium">
                                Wrong format
                              </span>
                            )}
                          </label>
                        </div>

                        {/* e money pin */}
                        <div className="eMoneyPinContainer">
                          <label
                            htmlFor="customerEMoneyPin"
                            className="font-bold"
                            style={
                              formEmoneyDataError.customerEMoneyPin
                                ? errorTextClr
                                : nomalerrorTextClr
                            }
                          >
                            e-Money PIN
                            <input
                              type="text"
                              id="customerEMoneyPin"
                              value={formEmoneyData.customerEMoneyPin}
                              onChange={handleEmoneyForms}
                              style={
                                formEmoneyDataError.customerEMoneyPin
                                  ? redBorderLine
                                  : normalBorderLine
                              }
                              className={
                                formEmoneyDataError.customerEMoneyPin
                                  ? "shakeX"
                                  : "noShake"
                              }
                            />
                            {formEmoneyDataError.customerEMoneyPin && (
                              <span className="errorTxt font-medium">
                                Wrong format
                              </span>
                            )}
                          </label>
                        </div>
                      </div>
                    )}

                    {selectedPaymentMethod === "cashOnDelivery" && (
                      <div className="cashOnDeliveryOption">
                        <img
                          src={CASHONDELIVERY}
                          alt="cash on delivery image"
                        />
                        <p className="txt font-medium">
                          The ‘Cash on Delivery’ option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>

              {/* summary container box */}
              <div className="summaryContainerBox">
                <article className="uppercase font-bold">summary</article>

                <div className="summaryItemsContainer">
                  {itemsContainer.map((item, index) => {
                    const productDetails = getProductDetails(item.name);
                    return (
                      <div key={index} className="EachItemsContainer">
                        {/* main product container */}
                        <div className="mainProductContainer">
                          <div className="ProductimgContainer">
                            <img
                              src={productDetails.image}
                              alt="product image"
                            />
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
                        <p className="setQuantity leading-6 font-bold">
                          x{storedQuantities[index]}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="totalContainerComp">
                  <div className="mainPricingContianer">
                    <TotalPrice quantities={storedQuantities} />
                    <ShippingCostComp />
                    <VATPrice quantities={storedQuantities} />
                  </div>

                  <div className="grandTotalCont">
                    <GrandTotal quantities={storedQuantities} />
                  </div>
                </div>

                <button
                  className="payBtn uppercase font-bold"
                  onClick={(e) => handleFormSubmit(e)}
                >
                  CONTINUE & PAY
                </button>
              </div>
            </div>
          </div>
          <FOOTER />

          {/* confirmation email container */}
          {formSubmitted && (
            <div className="confirmationContianer">
              <ComfirmationComp />
            </div>
          )}
        </div>
      )}
    </>
  );
};
