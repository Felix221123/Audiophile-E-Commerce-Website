import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";



export const ProductDetailEarphones1 = () => {

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
          id={indexedData(0).id}
          slug={indexedData(0).slug}
          name={indexedData(0).name}
          image={indexedData(0).image}
          category={indexedData(0).category}
          categoryImage={indexedData(0).categoryImage}
          new={indexedData(0).new}
          price={indexedData(0).price}
          description={indexedData(0).description}
          features={indexedData(0).features}
          includes={indexedData(0).includes}
          gallery={indexedData(0).gallery}
          others={indexedData(0).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  )
}