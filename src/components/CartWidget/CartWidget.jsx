import React from "react";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img className="CarImg" src={shop} alt="cart-wdiget" />
      {totalQuantity}
    </Link>
  );
};
export default CartWidget;
