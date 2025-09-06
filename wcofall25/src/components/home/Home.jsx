import { useState, useEffect } from "react";
import sampleImg from "../../assets/class.png";
import meetingImg from "../../assets/meeting.png";
import websiteMeeting from "../../assets/websiteMeeting.png";
import firstMeeting from "../../assets/firstMeeting.png";
import "./Home.css";

function Home() {
  const images = [
    { src: sampleImg, alt: "WCO Group Meeting" },
    { src: meetingImg, alt: "WCO Meeting" },
    { src: websiteMeeting, alt: "WCO Website Meeting" },
    { src: firstMeeting, alt: "WCO First Meeting" },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Animation states
  const [showTitle, setShowTitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Staggered animation sequence
  useEffect(() => {
    // Show title first
    setTimeout(() => {
      setShowTitle(true);
    }, 300);

    // Show content after title
    setTimeout(() => {
      setShowContent(true);
    }, 800);

    // Show image last
    setTimeout(() => {
      setShowImage(true);
    }, 1200);
  }, []);

  // Auto-advance slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <main className="home">
      <div className="wco-hero-row">
        <div className="wco-hero-left">
          <h1 className={`wco-hero-title ${showTitle ? "slide-up" : ""}`}>
            WORLD COMPUTING ORGANIZATION
          </h1>
          <p className={`wco-hero-desc ${showContent ? "slide-up" : ""}`}>
            We're a club on campus at San Diego State University trying to help
            you learn, grow, and connect with others in the tech industry
            through various workshops, projects, and events.
          </p>
          <div className={`wco-hero-btns ${showContent ? "slide-up" : ""}`}>
            <button className="wco-btn wco-btn-primary">Join Us!</button>
          </div>
        </div>
        <div className="wco-hero-right">
          <div className={`slideshow-container ${showImage ? "flip-in" : ""}`}>
            <img
              src={images[currentImageIndex].src}
              alt={images[currentImageIndex].alt}
              className="wco-hero-img slideshow-image"
            />

            {/* Navigation arrows */}
            <button
              className="slideshow-arrow slideshow-arrow-left"
              onClick={goToPrevious}>
              &#8249;
            </button>
            <button
              className="slideshow-arrow slideshow-arrow-right"
              onClick={goToNext}>
              &#8250;
            </button>

            {/* Dots indicator */}
            <div className="slideshow-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`slideshow-dot ${
                    index === currentImageIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
