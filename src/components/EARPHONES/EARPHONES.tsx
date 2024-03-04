import { HeadersComp } from "../BASE/HEADERSCOMP"
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import { useState, useEffect } from "react";
import "./Earphones-styles.css"
import { SeeProductCompNormal } from "../BASE/SEEPRODUCTCOMPNORM";
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";




export const EARPHONES = () => {

  const [earPhonesData, setearPhonesData] = useState<AudioDataProps[]>([]);
  
  useEffect(() => {
    // Assuming data fetching is asynchronous
    // Set the state once the data is available
    setearPhonesData(data);
  }, []); // Run the effect only once, on mount

  // adding an error boundary to when data is not loading
  if (earPhonesData.length === 0) {
    return null;
  }

  //getting the right data
  const indexedData = (index: number) => {
    return earPhonesData[index];
  };

  //routes
  const routing = [
    "earphones/product-detail-earphones-1",
  ];


  return (
    <>
      <HeadersComp header="EARPHONES" />
      <div className="allProductsContainer">
      <SeeProductCompNormal
          productName={indexedData(0).name}
          productDescription={indexedData(0).description}
          isNewProduct={indexedData(0).new}
          isDesktop={indexedData(0).categoryImage.desktop}
          isMobile={indexedData(0).categoryImage.mobile}
          isTablet={indexedData(0).categoryImage.tablet}
          productRoute={routing[0]}
        />
      </div>

      <div className="navLinkContainerBox">
        <MENUCONTAINER />
      </div>

      {/* container for avatar and footer */}
      <div className="avatarContainerFooter">
        <AVATAR />
        <FOOTER />
      </div>
    </>
  )
}


// export default EARPHONES; 

