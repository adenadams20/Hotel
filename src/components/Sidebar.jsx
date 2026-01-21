import { Link } from "react-router-dom";

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`bg-dark text-white vh-100 position-fixed top-0 start-0 p-3
      ${isOpen ? "d-block" : "d-none d-md-block"}`}
      style={{ width: "250px" }}
    >
      {/* LOGO */}
      <h4 className="fw-bold mb-4">RED PRODUCT</h4>

      {/* MENU */}
      <ul className="nav flex-column gap-2">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/dashboard">
            <i className="bi bi-grid me-2"></i> Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white active" to="/hotels">
            <i className="bi bi-building me-2"></i> Liste des hôtels
          </Link>
        </li>
      </ul>

      {/* USER */}
      <div className="position-absolute bottom-0 start-0 w-100 p-3 border-top">
        <div className="d-flex align-items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-circle"
            width="35"
            height="35"
          />
          <div>
            <div className="fw-bold">Mouhamet Badiane</div>
            <small className="text-success">● en ligne</small>
          </div>
        </div>
      </div>
    </aside>
  );
}
