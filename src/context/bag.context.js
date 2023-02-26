import {
  createContext, useState, useEffect, useReducer
} from "react";

const getExistingBagItem = (bagProducts, itemToCheck) => {
  return bagProducts.find(
    (bagProduct) => bagProduct.id === itemToCheck.id
  )
}


const addBagItems = (bagProducts, productToAddToBag) => {

  const existingBagItem = getExistingBagItem(bagProducts, productToAddToBag);

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

  const existingBagItem = getExistingBagItem(
    bagProducts,
    productToRemoveFromBag
  )

  existingBagItem.quantity = 0;

  const newBagProducts = bagProducts.filter((bagProduct) =>
    bagProduct.id !== productToRemoveFromBag.id);

  return newBagProducts;
}

const decreaseItemsFromBagPage = (bagProducts, productToDecreaseFromBag) => {

  const existingBagItem = getExistingBagItem(
    bagProducts,
    productToDecreaseFromBag
  )

  if (existingBagItem.quantity === 1) {
    return bagProducts.filter(
      (bagProduct) => bagProduct.id !== productToDecreaseFromBag.id
    )
  }

  return bagProducts.map((bagProduct) =>
    bagProduct.id === productToDecreaseFromBag.id
      ? { ...bagProduct, quantity: bagProduct.quantity - 1 }
      : bagProduct
  );
}

const increaseItemsFromBagPage = (bagProducts, productToIncreaseFromBag) => {

  return bagProducts.map((bagProduct) =>
    bagProduct.id === productToIncreaseFromBag.id
      ? { ...bagProduct, quantity: bagProduct.quantity + 1 }
      : bagProduct
  );
}

export const BagContext = createContext({
  isBagDropdownOpen: false,
  setIsBagDropdownOpen: () => {},
  bagProducts: [],
  addItemsToBag: () => {},
  bagTotalItemsCount: 0,
  removeItemsFromBag: () => {},
  decreaseItemsFromBag: () => {},
  increaseItemsFromBag: () => {},
  totalBagPrice: 0,
});

const INITIAL_STATE = {
  isBagDropdownOpen: false,
  bagProducts: [],
  bagTotalItemsCount: 0,
  totalBagPrice: 0,
};

const bagReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_BAG':
      return { ...state, ...payload };
    default:
      throw new Error(`Unhandled type ${type} in bagReducer`);
  }
};

export const BagProvider = ({ children }) => {
  // const [isBagDropdownOpen, setIsBagDropdownOpen] = useState(false);
  // const [bagProducts, setProductToBag] = useState([]);
  // const [bagTotalItemsCount, setBagTotalItemsCount] = useState(0);
  // const [totalBagPrice, setTotalBagPrice] = useState(0);

  // useEffect(() => {
  //   let newTotalItemsCount = bagProducts.reduce(
  //     (accumulator, bagProduct) => accumulator + bagProduct.quantity, 0
  //   );
  //   setBagTotalItemsCount(newTotalItemsCount);
  // }, [bagProducts]);

  // useEffect(() => {
  //   let newTotalBagPrice = bagProducts.reduce(
  //     (accumulator, bagProduct) => accumulator + bagProduct.price * bagProduct.quantity, 0
  //   );
  //   setTotalBagPrice(newTotalBagPrice);
  // }, [bagProducts]);

  const [
    {
      isBagDropdownOpen,
      bagProducts,
      bagTotalItemsCount,
      totalBagPrice,
    },
    dispatch
  ] = useReducer(bagReducer, INITIAL_STATE);

  const updateBagItemsReducer = (newBagProducts) => {
    const mewBagTotalItemsCount = newBagProducts.reduce(
      (accumulator, bagProduct) => accumulator + bagProduct.quantity, 0
    );
    const newTotalBagPrice = newBagProducts.reduce(
      (accumulator, bagProduct) => accumulator + bagProduct.price * bagProduct.quantity, 0
    );

    dispatch({
      type: 'SET_BAG', payload: {
        bagProducts: newBagProducts,
        bagTotalItemsCount: mewBagTotalItemsCount,
        totalBagPrice: newTotalBagPrice,
      }
    })
  }


  const addItemsToBag = (productToAddToBag) => {
    const newBagProducts = addBagItems(bagProducts, productToAddToBag)
    updateBagItemsReducer(newBagProducts);
  }

  const removeItemsFromBag = (productToRemoveFromBag) => {
    const newBagProducts = 
      removeProductFromBag(bagProducts, productToRemoveFromBag)

    updateBagItemsReducer(newBagProducts);
  }

  const decreaseItemsFromBag = (productToDecreaseFromBag) => {
    const newBagProducts = 
      decreaseItemsFromBagPage(bagProducts, productToDecreaseFromBag)

    updateBagItemsReducer(newBagProducts);
  }

  const increaseItemsFromBag = (productToIncreaseFromBag) => {
    const newBagProducts = 
      increaseItemsFromBagPage(bagProducts, productToIncreaseFromBag)

    updateBagItemsReducer(newBagProducts);
  }


  const value = {
    isBagDropdownOpen,
    setIsBagDropdownOpen: true,
    bagProducts,
    addItemsToBag,
    bagTotalItemsCount,
    removeItemsFromBag,
    decreaseItemsFromBag,
    increaseItemsFromBag,
    totalBagPrice,
  };

  return (
    <BagContext.Provider value={value}>
      {children}
    </BagContext.Provider>
  );
}