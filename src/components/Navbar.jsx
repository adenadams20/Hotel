export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar bg-white shadow p-3 px-3">
      <button
        className="btn d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <span className="ms-3 fw-bold">Liste des hôtels</span>

      <div>
        <div className="btn btn-transparent border px-5 text-start">
            <i className="bi text-start bi-search"></i>

        </div>
      </div>
    </nav>
  );
}
