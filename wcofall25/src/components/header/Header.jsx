import "./Header.css";
import wcologo from "../../assets/wcoLogoOrb.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/hackathon", label: "Hackathon" },
  { path: "/projects", label: "Projects" },
  { path: "/membership", label: "Membership Form" },
  { path: "/exec", label: "Exec Board" },
];

function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (path) => {
    setMenuOpen(false);
    navigate(path);
  };

  const classFor = (base, path) =>
    pathname === path ? `${base} wco-header-active` : base;

  return (
    <header className="wco-header-bar">
      <div className="wco-header-logo" onClick={() => go("/")}>
        <img src={wcologo} alt="WCO Logo" />
      </div>

      <div className="wco-header-right-container">
        {navLinks.map((link) => (
          <div
            key={link.path}
            className={classFor("wco-header-right-items", link.path)}
            onClick={() => go(link.path)}>
            {link.label}
          </div>
        ))}
      </div>

      <button
        className="wco-header-menu-button"
        aria-label="Open menu"
        onClick={() => setMenuOpen((v) => !v)}>
        ☰
      </button>

      {menuOpen && (
        <div className="wco-header-menu">
          {navLinks.map((link) => (
            <div
              key={link.path}
              className={classFor("wco-header-menu-item", link.path)}
              onClick={() => go(link.path)}>
              {link.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
