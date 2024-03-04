import { useEffect, useState } from "react";
import { ProductDetailComp } from "../BASE/PRODUCTDETAILSCOMP";
import { AudioDataProps } from "../HEADPHONES/HEADPHONES";
import data from "../../data.json";
import "../static/productDetailsStyles.css"
import { MENUCONTAINER } from "../BASE/MENUCONTAINER";
import { AVATAR } from "../BASE/AVATAR";
import { FOOTER } from "../BASE/FOOTER";



export const ProductDetailSpeaker1 = () => {
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
          id={indexedData(5).id}
          slug={indexedData(5).slug}
          name={indexedData(5).name}
          image={indexedData(5).image}
          category={indexedData(5).category}
          categoryImage={indexedData(5).categoryImage}
          new={indexedData(5).new}
          price={indexedData(5).price}
          description={indexedData(5).description}
          features={indexedData(5).features}
          includes={indexedData(5).includes}
          gallery={indexedData(5).gallery}
          others={indexedData(5).others}
        />
      </div>
      {/* component unmounts */}
      <MENUCONTAINER />
      <AVATAR />
      <FOOTER />
    </>
  )
}

