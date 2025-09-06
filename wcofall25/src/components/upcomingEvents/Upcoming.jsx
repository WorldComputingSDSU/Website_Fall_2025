import "./Upcoming.css";
import { events } from "./Data";

function Upcoming() {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getEventTypeColor = (type) => {
    return type === "Workshop" ? "#3b82f6" : "#10b981";
  };

  return (
    <section className="upcoming-section">
      <div className="upcoming-container">
        <div className="upcoming-header">
          <h2 className="upcoming-title">Upcoming Events</h2>
          <p className="upcoming-subtitle">
            Join us for workshops, meetings, and networking events
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <div
                  className="event-type"
                  style={{ backgroundColor: getEventTypeColor(event.type) }}>
                  {event.type}
                </div>
                <div className="event-status">{event.status}</div>
              </div>

              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>

              <div className="event-details">
                <div className="event-detail">
                  <span className="detail-icon">📅</span>
                  <span className="detail-text">{formatDate(event.date)}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-icon">🕒</span>
                  <span className="detail-text">{event.time}</span>
                </div>
                <div className="event-detail">
                  <span className="detail-icon">📍</span>
                  <span className="detail-text">{event.location}</span>
                </div>
              </div>

              <button className="event-button">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Upcoming;
