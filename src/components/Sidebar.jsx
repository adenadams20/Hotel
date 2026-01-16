import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h4 className="mb-4">RED PRODUCT</h4>

      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/dashboard" className="sidebar-link">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/Hotels" className="sidebar-link">
            Liste des hôtels
          </Link>
        </li>
      </ul>
    </aside>
  );
}
