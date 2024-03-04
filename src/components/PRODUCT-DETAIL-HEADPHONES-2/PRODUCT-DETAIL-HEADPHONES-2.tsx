import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";



export const ProductDetailHeadphones2 = () => {

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
          id={indexedData(2).id}
          slug={indexedData(2).slug}
          name={indexedData(2).name}
          image={indexedData(2).image}
          category={indexedData(2).category}
          categoryImage={indexedData(2).categoryImage}
          new={indexedData(2).new}
          price={indexedData(2).price}
          description={indexedData(2).description}
          features={indexedData(2).features}
          includes={indexedData(2).includes}
          gallery={indexedData(2).gallery}
          others={indexedData(2).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  )
}

