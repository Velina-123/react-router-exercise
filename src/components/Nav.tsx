import { NavLink } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
