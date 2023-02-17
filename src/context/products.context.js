import { createContext, useState, useEffect } from "react";
import { getCategorizedAndDocuments } from "../utils/firebase/firebase.utils";

import SHOP_DATA from "../data/shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesMap = await getCategorizedAndDocuments();
      setCategoriesMap(categoriesMap);
      console.log(categoriesMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
}