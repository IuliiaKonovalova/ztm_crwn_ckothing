import { createAction } from "../../utils/reducer/reducer.utils";

const setCategoriesMap = (categoriesMap) => ({
  type: "SET_CATEGORIES_MAP",
  payload: categoriesMap,
});