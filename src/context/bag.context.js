import { createContext, useState, useEffect } from "react";


const addBagItems = (bagProducts, productToAddToBag) => {

  const existingBagItem = bagProducts.find(
    (bagProduct) => bagProduct.id === productToAddToBag.id
  );

  if (existingBagItem) {
    return bagProducts.map((bagProduct) =>
      bagProduct.id === productToAddToBag.id
        ? { ...bagProduct, quantity: bagProduct.quantity + 1 }
        : bagProduct
    );
  }
  return [...bagProducts, { ...productToAddToBag, quantity: 1 }]
}

export const BagContext = createContext({
  isBagDropdownOpen: false,
  setIsBagDropdownOpen: () => {},
  bagProducts: [],
  addItemsToBag: () => {},
  bagTotalItemsCount: 0,
});

export const BagProvider = ({ children }) => {
  const [bagProducts, setProductToBag] = useState([]);
  const [bagTotalItemsCount, setBagTotalItemsCount] = useState(0);

  useEffect(() => {
    let newTotalItemsCount = bagProducts.reduce((accumulator,   ) => accumulator + bagProduct.quantity, 0);
    setBagTotalItemsCount(newTotalItemsCount);
  }, [bagProducts]);

  const addItemsToBag = (productToAddToBag) => {
    setProductToBag(addBagItems(bagProducts, productToAddToBag))
  }

  const [isBagDropdownOpen, setIsBagDropdownOpen] = useState(false);

  const value = {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount,
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}