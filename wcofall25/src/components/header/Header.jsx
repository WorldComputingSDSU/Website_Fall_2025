import "./Header.css";
import wcologo from "../../assets/wcologo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <header className="wco-header-bar">
      <div className="wco-header-logo" onClick={() => go("/")}>
        <img src={wcologo} alt="WCO Logo" />
      </div>

      <div className="wco-header-right-container">
        <div className="wco-header-right-items" onClick={() => go("/projects")}>
          Projects
        </div>
        <div
          className="wco-header-right-items"
          onClick={() => go("/membership")}>
          Membership Form
        </div>
      </div>

      <button
        className="wco-header-menu-button"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}>
        ☰
      </button>

      {menuOpen && (
        <div className="wco-header-menu">
          <div className="wco-header-menu-item" onClick={() => go("/projects")}>
            Projects
          </div>
          <div
            className="wco-header-menu-item"
            onClick={() => go("/membership")}>
            Membership Form
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
