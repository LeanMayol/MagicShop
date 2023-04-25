import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <h3>MagicShop</h3>
      </Link>
      <div className="Categories">
        <NavLink
          to={`/category/Hombre`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Hombre
        </NavLink>
        <NavLink
          to={`/category/Mujer`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Mujer
        </NavLink>
        <NavLink
          to={`/category/Niño`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Niño
        </NavLink>
        <NavLink
          to={`/category/Accesorio`}
          className={({ isActive }) => (isActive ? "ActiveOption" : "option")}
        >
          Accesorios
        </NavLink>
      </div>

      <CartWidget />
    </nav>
  );
};

export default NavBar;
