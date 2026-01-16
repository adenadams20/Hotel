import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="layout">
      <Sidebar isOpen={open} />
      <div className="main">
        <Navbar toggleSidebar={() => setOpen(!open)} />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
