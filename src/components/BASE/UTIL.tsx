import { ProductToAdd } from "./AddToCartContext";

// util.js
export const getItemsAndQuantitiesFromLocalStorage = () => {
    const storedItems = JSON.parse(localStorage.getItem("itemsContainer") || "[]") as ProductToAdd[];
    const storedQuantities = JSON.parse(localStorage.getItem("quantities") || "[]") as number[];
    return { items: storedItems, quantities: storedQuantities };
};