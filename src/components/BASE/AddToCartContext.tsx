import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

export interface ProductToAdd {
  id: number;
  name: string;
  price: number;
  slug: string;
  quantity: number;
}

export interface ItemsProps {
  itemsContainer: ProductToAdd[];
  addItemsToCart: (product: ProductToAdd) => void;
  removeAllItems: () => void;
}

const ProductContext = createContext<ItemsProps | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

interface ChildProps {
  children: ReactNode;
}

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]") as ProductToAdd[];


export const ProductProvider: React.FC<ChildProps> = ({ children }) => {
    const [itemsContainer, setItemsContainer] = useState<ProductToAdd[]>([]);
    
  const addItemsToCart = (product: ProductToAdd) => {
    const existingProductIndex = itemsContainer.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists, you may want to update quantity or take other action
      // For simplicity, we'll just return here
      return;
    }

    setItemsContainer((prevItems) => [...prevItems, product]);
  };

  const removeAllItems = () => {
    setItemsContainer([]);
  };

  return (
    <ProductContext.Provider
      value={{ itemsContainer, addItemsToCart, removeAllItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};
