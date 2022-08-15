import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCartItem } from "./redux/cartItem/cartItemSlice";

const CartContext = createContext();

export function CartProvider({ children }) {
  const dispatch = useDispatch();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    dispatch(fetchCartItem(1)).then((res) => {
      const payload = res.payload;
      const count = payload.reduce((acc, obj) => {
        return acc + obj.product_qty
      }, 0);
      setCartItemCount(count); 
    });
  }, []);

  return (
    <CartContext.Provider value={{ cartItemCount, setCartItemCount  }}>{children}</CartContext.Provider>
  );
}

export default CartContext;
