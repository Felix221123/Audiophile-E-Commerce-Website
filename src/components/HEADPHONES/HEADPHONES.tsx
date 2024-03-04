import { HeadersComp } from "../BASE/HEADERSCOMP";
import data from "../../data.json";
import { useState, useEffect } from "react";
import { SeeProductCompNormal } from "../BASE/SEEPRODUCTCOMPNORM";
import "./headphones-styles.css"
import { SeeProductCompReverse } from "../BASE/SEEPRODUCTCOMPREVERSE";
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";


export interface AudioDataProps {
  id: number;
  slug: string;
  name: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    second: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    third: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

export const HEADPHONES = () => {
  const [headPhonesData, setheadPhonesData] = useState<AudioDataProps[]>([]);

  useEffect(() => {
    // Assuming data fetching is asynchronous
    // Set the state once the data is available
    setheadPhonesData(data);
  }, []); // Run the effect only once, on mount

  // adding an error boundary to when data is not loading
  if (headPhonesData.length === 0) {
    return null;
  }

  //getting the right data
  const indexedData = (index: number) => {
    return headPhonesData[index];
  };

  //routes
  const routing = [
    "headphones/product-detail-headphones-1",
    "headphones/product-detail-headphones-2",
    "headphones/product-detail-headphones-3",
  ];

  return (
    <>
      <HeadersComp header="HEADPHONES" />
      <div className="allProductsContainer">
        <SeeProductCompNormal
          productName={indexedData(3).name}
          productDescription={indexedData(3).description}
          isNewProduct={indexedData(3).new}
          isDesktop={indexedData(3).categoryImage.desktop}
          isMobile={indexedData(3).categoryImage.mobile}
          isTablet={indexedData(3).categoryImage.tablet}
          productRoute={routing[0]}
        />
        <SeeProductCompReverse
          productName={indexedData(2).name}
          productDescription={indexedData(2).description}
          isNewProduct={indexedData(2).new}
          isDesktop={indexedData(2).categoryImage.desktop}
          isMobile={indexedData(2).categoryImage.mobile}
          isTablet={indexedData(2).categoryImage.tablet}
          productRoute={routing[1]}
        />
        <SeeProductCompNormal
          productName={indexedData(1).name}
          productDescription={indexedData(1).description}
          isNewProduct={indexedData(1).new}
          isDesktop={indexedData(1).categoryImage.desktop}
          isMobile={indexedData(1).categoryImage.mobile}
          isTablet={indexedData(1).categoryImage.tablet}
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
  );
};
