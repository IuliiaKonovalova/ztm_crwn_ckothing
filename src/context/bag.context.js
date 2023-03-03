import {
  createContext, useState, useReducer
} from "react";

import { createAction } from '../utils/reducer/reducer.utils';

// get existing bag item
const getExistingBagItem = (bagProducts, itemToCheck) => {
  return bagProducts.find(
    (bagProduct) => bagProduct.id === itemToCheck.id
  )
}

// add items to bag
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

// remove items from bag
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

// decrease items from bag
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

// increase items from bag
const increaseItemsFromBagPage = (bagProducts, productToIncreaseFromBag) => {
  return bagProducts.map((bagProduct) =>
    bagProduct.id === productToIncreaseFromBag.id
      ? { ...bagProduct, quantity: bagProduct.quantity + 1 }
      : bagProduct
  );
}

const BAG_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_CART_COUNT: 'SET_CART_COUNT',
  SET_CART_TOTAL: 'SET_CART_TOTAL',
};

const INITIAL_STATE = {
  isBagDropdownOpen: false,
  bagProducts: [],
  bagTotalItemsCount: 0,
  totalBagPrice: 0,
};

// bag reducer
const bagReducer = (state, action) => {
  const { type, payload } = action;
  console.log('action', action);

  switch (type) {
    case BAG_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case BAG_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isBagDropdownOpen: payload,
      }
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const BagContext = createContext({
  isBagDropdownOpen: true,
  setIsBagDropdownOpen: () => {},
  bagProducts: [],
  addItemsToBag: () => {},
  bagTotalItemsCount: 0,
  removeItemsFromBag: () => {},
  decreaseItemsFromBag: () => {},
  increaseItemsFromBag: () => {},
  totalBagPrice: 0,
});

export const BagProvider = ({ children }) => {

  // const [isBagDropdownOpen, setIsBagDropdownOpen] = useState(false);

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
    // update total bag items count
    const newBagTotalItemsCount = newBagProducts.reduce(
      (accumulator, bagProduct) => accumulator + bagProduct.quantity, 0
    );
  
    // update total bag price 
    const newTotalBagPrice = newBagProducts.reduce(
      (accumulator, bagProduct) => accumulator + bagProduct.price * bagProduct.quantity, 0
    );

    // create payload
    const payload = {
      bagProducts: newBagProducts,
      bagTotalItemsCount: newBagTotalItemsCount,
      totalBagPrice: newTotalBagPrice,
    };

    // dispatch action to update bag items
    dispatch({ type: BAG_ACTION_TYPES.SET_CART_ITEMS, payload })
  }

  const addItemsToBag = (productToAddToBag) => {
    const newBagProducts = addBagItems(bagProducts, productToAddToBag)
    updateBagItemsReducer(newBagProducts);
  }

  const removeItemsFromBag = (productToRemoveFromBag) => {
    const newBagProducts = removeProductFromBag(
      bagProducts, productToRemoveFromBag
    )

    updateBagItemsReducer(newBagProducts);
  }

  const decreaseItemsFromBag = (productToDecreaseFromBag) => {
    const newBagProducts = decreaseItemsFromBagPage(
      bagProducts, productToDecreaseFromBag
    )

    updateBagItemsReducer(newBagProducts);
  }

  const increaseItemsFromBag = (productToIncreaseFromBag) => {
    const newBagProducts = 
      increaseItemsFromBagPage(bagProducts, productToIncreaseFromBag)

    updateBagItemsReducer(newBagProducts);
  }

  const setIsBagDropdownOpen = (bool) => {
    dispatch(createAction(BAG_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  }


  const value = {
    isBagDropdownOpen,
    setIsBagDropdownOpen,
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