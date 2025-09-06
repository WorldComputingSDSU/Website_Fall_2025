import { useState, useEffect } from "react";
import sampleImg from "../../assets/class.png"; // Replace with your actual image path
import imageImg from "../../assets/image.png"; // Add your second image
import "./Home.css";

function Home() {
  // Array of images for the slideshow - add your imported images here
  const images = [
    { src: sampleImg, alt: "WCO Group Meeting" },
    { src: imageImg, alt: "WCO Event" },
    // Add more images here as you import them
    // { src: yourImage3, alt: "Description" },
    // { src: yourImage4, alt: "Description" },
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
