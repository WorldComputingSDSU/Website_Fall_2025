import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="wco-header-bar">
      <div className="wco-header-logo" onClick={() => navigate("/")}>
        WCO
      </div>
      <div className="wco-header-right-container">
        <div
          className="wco-header-right-items"
          onClick={() => navigate("/projects")}>
          Projects
        </div>
        <div
          className="wco-header-right-items"
          onClick={() => navigate("/MembershipForm")}>
          Membership Form
        </div>
      </div>
    </header>
  );
}

export default Header;
