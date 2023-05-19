import "./itemdetail.css";
import ItemCount from "../itemcount/itemcount";
const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };
  return (
    <article className="card-item">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>

        <p className="Info">Precio: {price}</p>
      </section>
      <footer className="ItemFooter">
        {quantityAdded > 0 ? (
          <Link to="/cart" className="Option">
            Terminar compra
          </Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
        )}
      </footer>
    </article>
  );
};

export default ItemDetail;
