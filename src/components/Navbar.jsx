export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar bg-white shadow-sm px-4 d-flex align-items-center justify-content-between">
      
      {/* LEFT */}
      <div className="d-flex align-items-center">
        <button
          className="btn d-md-none me-3"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        <h5 className="mb-0 fw-bold">Liste des hôtels</h5>
      </div>

      {/* CENTER */}
      <div className="d-none d-md-flex">
        <div className="input-group">
          <span className="input-group-text bg-light border-0">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control border-0 bg-light"
            placeholder="Recherche"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="d-flex align-items-center gap-3">
        <i className="bi bi-bell fs-5 position-relative">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
            3
          </span>
        </i>

        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-circle"
          width="35"
          height="35"
        />
      </div>
    </nav>
  );
}
