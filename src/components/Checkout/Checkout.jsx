import { useState, useEffect, useContext } from "react";
import { CartContext } from "../../Cartcontext/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Timestamp, writeBatch } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";
import {
  documentId,
  collection,
  setDoc,
  doc,
  getDocs,
} from "firebase/firestore";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [products, setProducts] = useState([]);
  const { cart, total, clearCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Productos"));
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ id: doc.id, ...doc.data() });
        });
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);

    const orderRef = collection(db, "orders");
    const orderDoc = doc(orderRef, documentId());
    const orderData = {
      name,
      phone,
      email,
      cart,
      total,
      createdAt: Timestamp.now(),
    };

    await setDoc(orderDoc, orderData);

    const batch = writeBatch(db);

    cart.forEach((item) => {
      const productRef = doc(collection(db, "Productos"), item.id);

      batch.update(productRef, { stock: item.stock - item.quantity });
    });

    await batch.commit();

    setOrderId(orderDoc.id);
    setLoading(false);
    clearCart();
  };

  return (
    <div>
      <h2>Checkout</h2>
      <CheckoutForm createOrder={createOrder} loading={loading} />
      {orderId && <p>Order ID: {orderId}</p>}
    </div>
  );
};

export default Checkout;
