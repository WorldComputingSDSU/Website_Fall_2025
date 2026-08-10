import "./Connect.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socials = [
  {
    name: "Instagram",
    blurb:
      "Photos from our meetings, guest speakers, and events throughout the semester.",
    handle: "@wcosdsu",
    url: "https://www.instagram.com/wcosdsu",
    icon: <InstagramIcon fontSize="inherit" />,
    iconClass: "connect-social-icon-instagram",
  },
  {
    name: "LinkedIn",
    blurb:
      "Club updates, member milestones, and opportunities from our network.",
    handle: "WCO SDSU",
    url: "https://www.linkedin.com/company/wcosdsu/",
    icon: <LinkedInIcon fontSize="inherit" />,
    iconClass: "connect-social-icon-linkedin",
  },
];

function Connect() {
  return (
    <section className="connect-section">
      <div className="connect-container">
        <div className="connect-header">
          <h2 className="connect-title">Connect With Us</h2>
          <p className="connect-description">
            Join our Discord to talk with fellow members and get updates on
            events, and follow us on Instagram and LinkedIn to keep up with
            everything we have going on!
          </p>
        </div>

        <div className="connect-panels">
          <div className="connect-panel">
            <h3 className="connect-panel-title">Discord</h3>
            <p className="connect-panel-text">
              Where we share announcements, project updates, and everyday
              conversation.
            </p>
            <iframe
              src="https://discord.com/widget?id=1327329013991215104&theme=dark"
              title="WCO Discord Server"
              className="connect-panel-media discord-widget"
              allowtransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </div>

          {socials.map((social) => (
            <div className="connect-panel" key={social.name}>
              <h3 className="connect-panel-title">{social.name}</h3>
              <p className="connect-panel-text">{social.blurb}</p>
              <div className="connect-panel-media connect-social">
                <span className={`connect-social-icon ${social.iconClass}`}>
                  {social.icon}
                </span>
                <span className="connect-social-handle">{social.handle}</span>
                <a
                  className="connect-social-button"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  Follow Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connect;
