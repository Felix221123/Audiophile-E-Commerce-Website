import { HeadersComp } from "../BASE/HEADERSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import { useState, useEffect } from "react";
import "./Speaker-styles.css";
import { SeeProductCompNormal } from "../BASE/SEEPRODUCTCOMPNORM";
import { SeeProductCompReverse } from "../BASE/SEEPRODUCTCOMPREVERSE";
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";




export const SPEAKERS = () => {
  const [speakerData, setspeakerData] = useState<AudioDataProps[]>([]);

  useEffect(() => {
    // Assuming data fetching is asynchronous
    // Set the state once the data is available
    setspeakerData(data);
  }, []); // Run the effect only once, on mount

  // adding an error boundary to when data is not loading
  if (speakerData.length === 0) {
    return null;
  }

  //getting the right data
  const indexedData = (index: number) => {
    return speakerData[index];
  };

  //routes
  const routing = [
    "speakers/product-detail-speakers-1",
    "speakers/product-detail-speakers-2",
  ];

  return (
    <>
      <HeadersComp header="SPEAKERS" />
      <div className="allProductsContainer">
        <SeeProductCompNormal
          productName={indexedData(5).name}
          productDescription={indexedData(5).description}
          isNewProduct={indexedData(5).new}
          isDesktop={indexedData(5).categoryImage.desktop}
          isMobile={indexedData(5).categoryImage.mobile}
          isTablet={indexedData(5).categoryImage.tablet}
          productRoute={routing[0]}
        />
        <SeeProductCompReverse
          productName={indexedData(4).name}
          productDescription={indexedData(4).description}
          isNewProduct={indexedData(4).new}
          isDesktop={indexedData(4).categoryImage.desktop}
          isMobile={indexedData(4).categoryImage.mobile}
          isTablet={indexedData(4).categoryImage.tablet}
          productRoute={routing[1]}
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
  );
};

// export default SPEAKERS;
