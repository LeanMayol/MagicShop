import "./itemdetail.css";
import ItemCount from "../itemcount/itemcount";
const ItemDetail = ({ id, name, img, description, category, price, stock }) => {
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
        <ItemCount
          initial={1}
          stock={5}
          onAdd={(quantity) => console.log("Cantidad agregada", quantity)}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
