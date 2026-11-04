
import { useCart } from "../context/CartContext";

function ProductList() {

  // Access dispatch from Context
  const { dispatch } = useCart();

  // Available products
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 }
  ];

  // Add product to cart
  const handleAddToCart = (product) => {

    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });

  };

  return (
    <div className="product-container">

      <h2>Available Products</h2>

      {products.map((product) => (

        <div key={product.id} className="product-card">

          <h3>{product.name}</h3>

          <p>Price: ₹{product.price}</p>

          <button onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>

        </div>

      ))}

    </div>
  );
}

export default ProductList;

