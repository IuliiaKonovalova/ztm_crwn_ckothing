import { createContext, useState } from "react";




export const BagContext = createContext({
  products: [],
  isBagDropdownOpen: false,
  setIsBagDropdownOpen: () => {},
});

export const BagProvider = ({ children }) => {
  // const [products, setProducts] = useState(PRODUCTS_DATA);

  const [isBagDropdownOpen, setIsBagDropdownOpen] = useState(false);

  const value = {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    // products,
    // setProducts,
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}