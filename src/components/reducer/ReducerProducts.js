import React, { useReducer } from "react";
const initialState = {
  selectedItems: [],
  total: 0,
  itemsCounter: 0,
  checkout: false,
};
const calcItems = (items) => {
  const itemsCounter = items.reduce(
    (acc, current) => acc + current.quantity,
    0
  );
  const total = items.reduce(
    (acc, current) => acc + current.price * current.quantity,
    0
  );
  return { itemsCounter, total };
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        selectedItems: [...state.selectedItems],
        ...calcItems(state.selectedItems),
        checkout: false,
      };
    case "REMOVE_ITEM":
      const filterItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...filterItems],
        ...calcItems(filterItems),
      };
    case "INCREASE_ITEM":
      const increaseItem = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[increaseItem].quantity++;
      return {
        ...state,
        ...calcItems(state.selectedItems),
      };
    case "DECREASE_ITEM":
      const decreaseItem = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseItem].quantity--;
      return {
        ...state,
        ...calcItems(state.selectedItems),
      };
    case "CLEAR":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        checkout: false,
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        total: 0,
        itemsCounter: 0,
        checkout: true,
      };
    default:
      return state;
  }
};
export const reducerContextProvider = React.createContext();
const ReducerProducts = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <reducerContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </reducerContextProvider.Provider>
  );
};

export default ReducerProducts;
