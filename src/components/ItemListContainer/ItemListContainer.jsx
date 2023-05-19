import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../service/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [Productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(db, "Productos"), where("category", "==", categoryId))
      : collection(db, "Productos");

    getDocs(collectionRef)
      .then((response) => {
        const productosAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProductos(productosAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{greeting}</h1>
          <ItemList Productos={Productos} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
