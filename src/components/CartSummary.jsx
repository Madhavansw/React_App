import { useCart } from "../context/CartContext";

function CartSummary() {

  const { state } = useCart();

  const totalItems = state.cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = state.cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );

  return (
    <div>

      <h2>Shopping Cart Summary</h2>

      <h3>Total Items: {totalItems}</h3>

      <h3>Total Price: ₹{totalPrice}</h3>

    </div>
  );
}

export default CartSummary;