//import { BrowserRouter as Router } from "react-router-dom";
import { NAVBAR } from "../NAVBAR/NAVBAR";
import { useProductContext } from "../BASE/AddToCartContext";


export const MAINAPP = () => {

  const { removeAllItems,itemsContainer } = useProductContext();

  const countItemsInContainer = () => {
    return itemsContainer.length;
  };
  console.log(itemsContainer);
  

  return (
    <>
      <NAVBAR itemsQuantity={countItemsInContainer()} removeItems={removeAllItems}/>
    </>
  );
};

// export default MAINAPP;
