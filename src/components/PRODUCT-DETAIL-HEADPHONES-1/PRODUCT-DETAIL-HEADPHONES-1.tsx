import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";




export const ProductDetailHeadphones1 = () => {
  const [productData, setproductData] = useState<AudioDataProps[]>([]);

  useEffect(() => {
    // fetching the data
    setproductData(data);
  }, []);

  // adding an error boundary to when data is not loading
  if (productData.length === 0) {
    return null;
  }


  //getting the right data
  const indexedData = (index: number) => {
    return productData[index];
  };

  return (
    <>
      <div className="mainProductsDetialsContainer">
        <ProductDetailComp
          id={indexedData(3).id}
          slug={indexedData(3).slug}
          name={indexedData(3).name}
          image={indexedData(3).image}
          category={indexedData(3).category}
          categoryImage={indexedData(3).categoryImage}
          new={indexedData(3).new}
          price={indexedData(3).price}
          description={indexedData(3).description}
          features={indexedData(3).features}
          includes={indexedData(3).includes}
          gallery={indexedData(3).gallery}
          others={indexedData(3).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  );
};
