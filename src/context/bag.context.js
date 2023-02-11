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

const removeProductFromBag = (bagProducts, productToRemoveFromBag) => {
  const existingBagItem = bagProducts.find(
    (bagProduct) => bagProduct.id === productToRemoveFromBag.id
  );


  existingBagItem.quantity = 0;

  const newBagProducts = bagProducts.filter((bagProduct) =>
    bagProduct.id !== productToRemoveFromBag.id);
  return newBagProducts;
}

export const BagContext = createContext({
  isBagDropdownOpen: false,
  setIsBagDropdownOpen: () => {},
  bagProducts: [],
  addItemsToBag: () => {},
  bagTotalItemsCount: 0,
  removeItemsFromBag: () => {},
});

export const BagProvider = ({ children }) => {
  const [bagProducts, setProductToBag] = useState([]);
  const [bagTotalItemsCount, setBagTotalItemsCount] = useState(0);

  useEffect(() => {
    let newTotalItemsCount = bagProducts.reduce((accumulator, bagProduct) => accumulator + bagProduct.quantity, 0);
    setBagTotalItemsCount(newTotalItemsCount);
  }, [bagProducts]);

  const addItemsToBag = (productToAddToBag) => {
    setProductToBag(addBagItems(bagProducts, productToAddToBag))
  }

  const removeItemsFromBag = (productToRemoveFromBag) => {
    setProductToBag(removeProductFromBag(bagProducts, productToRemoveFromBag))
  }

  const [isBagDropdownOpen, setIsBagDropdownOpen] = useState(false);

  const value = {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount,
    removeItemsFromBag,
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}