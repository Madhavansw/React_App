
import { useCart } from "../context/CartContext";

function CartItems() {

  const { state, dispatch } = useCart();

  // Remove product
  const handleRemove = (id) => {

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: id
    });

  };

  // Update product
  const handleUpdate = (item) => {

    dispatch({
      type: "UPDATE_ITEM",
      payload: {
        id: item.id,
        quantity: (item.quantity || 1) + 1
      }
    });

  };

  return (
    <div>

      <h2>Cart Items</h2>

      {state.cartItems.map((item, index) => (

        <div key={`${item.id}-${index}`}>

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>

          <p>Quantity: {item.quantity || 1}</p>

          <button onClick={() => handleUpdate(item)}>
            Increase Quantity
          </button>

          <button onClick={() => handleRemove(item.id)}>
            Remove
          </button>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default CartItems;
