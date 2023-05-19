import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [Productos, setProductos] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();
  useEffect(() => {
    setLoading(true);
    const docRef = doc(db, "Productos", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productsAdapted = { id: response.id, ...data };
        setProductos(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...Productos} />
    </div>
  );
};
export default ItemDetailContainer;
