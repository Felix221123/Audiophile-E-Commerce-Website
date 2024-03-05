import LOGO from "/assets/shared/desktop/logo.svg";
import HAMBURGER from "/assets/shared/tablet/icon-hamburger.svg";
import CART from "/assets/shared/desktop/icon-cart.svg";
import HEADPHONESNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import SPEAKERSNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import EARPHONESNAVIMAGE from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import ARROWRIGHT from "/assets/shared/desktop/icon-arrow-right.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar-styles.css";
import { ItemsContainer } from "../BASE/CartItems";

interface QuantityProps {
  itemsQuantity: number;
  removeItems: () => void;
}

export const NAVBAR = ({ itemsQuantity, removeItems }: QuantityProps) => {
  const [menuBarVisibility, setMenuBarVisibility] = useState(false);
  const [cartVisibility, setCartVisibility] = useState(false);
  const [activeComponent, setActiveComponent] = useState("HOME");

  // setting navigation
  const navigate = useNavigate();
  // const controls = useAnimation();

  // animation controls
  const getMenuAnimationVariants = () => ({
    hidden: { left: -300, opacity: 0 },
    visible: { left: 0, opacity: 1 },
    exit: { left: -300, opacity: 0 },
  });

  const getCartAnimationVariants = () => {
    const isSmallScreen = window.innerWidth < 768;
    const isMediumScreen =
      window.innerWidth >= 768 && window.innerWidth <= 1439;

    if (isSmallScreen) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      };
    } else if (isMediumScreen) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      };
    } else {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 },
      };
    }
  };

  const togglingMenuBar = () => {
    // setting the toggling of the menu bar
    setMenuBarVisibility((previsibility) => !previsibility);
    if (cartVisibility) {
      setCartVisibility(false);
    }
  };

  const togglingCart = () => {
    //setting the toggling for the cart Container
    setCartVisibility((previsibility) => !previsibility);
    if (menuBarVisibility) {
      setMenuBarVisibility(false);
    }
  };

  //list of navigation
  const navList = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

  // navigate onto component
  const handleNavigateToComponent = (item: string) => {
    setActiveComponent(item);
    navigate(`/${item.toLowerCase()}/`);
    setMenuBarVisibility(true);
    setCartVisibility(false);

    setTimeout(() => {
      setMenuBarVisibility(false);
      // setCartVisibility(false);
    }, 1);
  };

  // updates the body background whenever the visiblity of the menu changes
  useEffect(() => {
    const isHomeOrIndexRoute = [
      "/",
      "/home/",
      "/headphones/product-detail-headphones-1/",
      "/headphones/product-detail-headphones-2/",
      "/headphones/product-detail-headphones-3/",
      "/speakers/product-detail-speakers-1/",
      "/speakers/product-detail-speakers-2/",
      "/earphones/product-detail-earphones-1/",
      "/checkout/",
    ].includes(location.pathname.toLowerCase());

    console.log("isHomeOrIndexRoute:", isHomeOrIndexRoute);

    // Check conditions and update overlay styles
    if (window.innerWidth < 1440 && menuBarVisibility) {
      document.body.classList.add("overlay-active");
    } else if (window.innerWidth > 0 && cartVisibility) {
      document.body.classList.add("overlay-active");
    } else {
      document.body.classList.remove("overlay-active");
    }

    // Add class to .overflowContainer if on the home or index route
    if (isHomeOrIndexRoute) {
      document
        .querySelector(".overflowContainer")
        ?.classList.add("addMarginTop");
    } else {
      document
        .querySelector(".overflowContainer")
        ?.classList.remove("addMarginTop");
    }

    // Cleanup the overlay styles on component unmount
    return () => {
      document.body.classList.remove("overlay-active");
      document
        .querySelector(".overflowContainer")
        ?.classList.remove("addMarginTop");
    };
  }, [menuBarVisibility, cartVisibility]);

  return (
    <>
      <header>
        <div className="headers-menubarContainer">
          <img
            src={HAMBURGER}
            alt="menu bar"
            className="menuBar"
            onClick={togglingMenuBar}
          />
        </div>

        <div className="logoContainer">
          <img src={LOGO} alt="company logo" className="logo" />
        </div>

        {/* desktop design in displaying the navList */}
        <div className="navContainer">
          <nav>
            {navList.map((item, index) => (
              <div key={index} onClick={() => handleNavigateToComponent(item)}>
                {item}
              </div>
            ))}
          </nav>
        </div>

        <div className="cartContainerBtn">
          {itemsQuantity > 0 && (
            <div className="itemsCount font-bold">{itemsQuantity}</div>
          )}
          <img src={CART} alt="cart icon" onClick={togglingCart} />
        </div>
      </header>

      {/* menu visibility for mobile and tablet views */}
      <AnimatePresence>
        {menuBarVisibility && (
          <div className={`menuBarContainer`}>
            <motion.div
              className="overflowContainer"
              initial={getMenuAnimationVariants().hidden}
              animate={getMenuAnimationVariants().visible}
              exit={getMenuAnimationVariants().exit}
              transition={{ duration: 0.5 }}
            >
              {/* container for headphones */}
              <div className="headerPhonesContainer">
                <div className="imgContainer">
                  <img
                    src={HEADPHONESNAVIMAGE}
                    alt="image of the headphone"
                    className="navImageStyle"
                  />
                </div>

                <div className="ashContainer">
                  <p className="navTitle">{navList[1]}</p>
                  <div
                    onClick={() => handleNavigateToComponent(navList[1])}
                    className="shopLink"
                  >
                    SHOP{" "}
                    <span>
                      <img src={ARROWRIGHT} alt="arrow right icon" />
                    </span>
                  </div>
                </div>
              </div>

              {/* container for speakers */}
              <div className="speakersContainer">
                <div className="imgContainer">
                  <img
                    src={SPEAKERSNAVIMAGE}
                    alt="image of the speaker"
                    className="navImageStyle"
                  />
                </div>

                <div className="ashContainer">
                  <p className="navTitle">{navList[2]}</p>
                  <div
                    onClick={() => handleNavigateToComponent(navList[2])}
                    className="shopLink"
                  >
                    SHOP{" "}
                    <span>
                      <img src={ARROWRIGHT} alt="arrow right icon" />
                    </span>
                  </div>
                </div>
              </div>

              {/* container for earphones */}
              <div className="earphonesContainer">
                <div className="imgContainer">
                  <img
                    src={EARPHONESNAVIMAGE}
                    alt="image of the earphone"
                    className="navImageStyle"
                  />
                </div>
                <div className="ashContainer">
                  <p className="navTitle">{navList[3]}</p>
                  <div
                    onClick={() => handleNavigateToComponent(navList[3])}
                    className="shopLink"
                  >
                    SHOP{" "}
                    <span>
                      <img src={ARROWRIGHT} alt="arrow right icon" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* cart visiblity goes here */}
      <AnimatePresence>
        {cartVisibility && (
          <motion.div
            className={"cartContainer"}
            initial={getCartAnimationVariants().hidden}
            animate={getCartAnimationVariants().visible}
            exit={getCartAnimationVariants().exit}
            transition={{ duration: 0.5 }}
          >
            <div className="cartHeaders">
              <p className="cartDesign ">
                CART {itemsQuantity > 0 && <span>({itemsQuantity})</span>}
              </p>
              {itemsQuantity > 0 && (
                <button
                  onClick={removeItems}
                  className="removebtn leading-6 font-medium"
                >
                  Remove all
                </button>
              )}
            </div>

            {/* when the items quantity is zero  */}
            {itemsQuantity === 0 && (
              <p className="emptyCart leading-6 font-medium">
                Your Cart is Empty
              </p>
            )}

            {/* when an item quanity is more then zero  */}
            {itemsQuantity > 0 && (
              <div className="itemsContainer">
                <ItemsContainer />
              </div>
            )}

            {/* checkout button */}
            {itemsQuantity > 0 && (
              <button
                className="checkoutBtn font-bold"
                onClick={() => handleNavigateToComponent("checkout")}
              >
                CHECKOUT
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* main contents when navbar's are clicked */}
      <div className="mainContents">
        {activeComponent === "HOME"}
        {activeComponent === "HEADPHONES"}
        {activeComponent === "SPEAKERS"}
        {activeComponent === "EARPHONES"}
        {activeComponent === "CHECKOUT"}
      </div>
    </>
  );
};
