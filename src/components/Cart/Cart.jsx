import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../Cartcontext/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/" className="Option">
          {" "}
          Productos{" "}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="cart-items-container">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carrito
      </button>
      <Link to="/checkout" className="Option">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;
