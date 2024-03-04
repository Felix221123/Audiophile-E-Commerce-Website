import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";



export const ProductDetailHeadphones3 = () => {

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
          id={indexedData(1).id}
          slug={indexedData(1).slug}
          name={indexedData(1).name}
          image={indexedData(1).image}
          category={indexedData(1).category}
          categoryImage={indexedData(1).categoryImage}
          new={indexedData(1).new}
          price={indexedData(1).price}
          description={indexedData(1).description}
          features={indexedData(1).features}
          includes={indexedData(1).includes}
          gallery={indexedData(1).gallery}
          others={indexedData(1).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  )
}

