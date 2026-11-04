
import {
  createContext,
  useContext,
  useReducer
} from "react";

// STEP 1: Create Context
const CartContext = createContext(null);

// STEP 2: Create Initial State
const initialState = {
  cartItems: [],
};

// STEP 3: Create Reducer
function cartReducer(state, action) {

  switch (action.type) {

    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          action.payload
        ]
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          item => item.id !== action.payload
        )
      };

    // UPDATE ITEM
    case "UPDATE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, ...action.payload }
            : item
        )
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: []
      };

    default:
      return state;
  }
}
// STEP 4: Create Provider
export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// STEP 5: Create Custom Hook
export function useCart() {

  const context = useContext(CartContext);

  if (context === null) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
