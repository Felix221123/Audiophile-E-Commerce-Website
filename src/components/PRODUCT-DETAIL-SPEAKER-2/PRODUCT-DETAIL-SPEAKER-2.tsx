import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";



export const ProductDetailSpeaker2 = () => {
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
          id={indexedData(4).id}
          slug={indexedData(4).slug}
          name={indexedData(4).name}
          image={indexedData(4).image}
          category={indexedData(4).category}
          categoryImage={indexedData(4).categoryImage}
          new={indexedData(4).new}
          price={indexedData(4).price}
          description={indexedData(4).description}
          features={indexedData(4).features}
          includes={indexedData(4).includes}
          gallery={indexedData(4).gallery}
          others={indexedData(4).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  )
}