import "./Connect.css";

function Connect() {
  return (
    <section className="connect-section">
      <div className="connect-container">
        <div className="connect-content">
          <h2 className="connect-title">Connect With Us</h2>
          <p className="connect-description">
            Join our Discord community to connect with fellow members, get
            updates on events, and participate in discussions about technology
            and computing.
          </p>
        </div>

        <div className="discord-widget-container">
          <iframe
            src="https://discord.com/widget?id=1327329013991215104&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            title="WCO Discord Server"
            className="discord-widget"
          />
        </div>
      </div>
    </section>
  );
}

export default Connect;
