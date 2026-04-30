import { useEffect, useState } from "react";
import "./HeroCarousel.css";

const images = [
  {
    url: "https://via.placeholder.com/900x300?text=OnePlus+5",
    title: "OnePlus 5",
    subtitle: "Dual Camera + Fast Performance",
  },
  {
    url: "https://via.placeholder.com/900x300?text=iPhone+6",
    title: "iPhone 6",
    subtitle: "Premium Design",
  },
  {
    url: "https://via.placeholder.com/900x300?text=Samsung+S5",
    title: "Samsung Galaxy S5",
    subtitle: "Powerful & Reliable",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="hero">

      {/* Slides */}
      <div
        className="hero-slider"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <div className="hero-slide" key={i}>
            <img src={img.url} />
            <div className="hero-content">
              <h2>{img.title}</h2>
              <p>{img.subtitle}</p>
              <button>Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      {/* Dots */}
      <div className="dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={i === current ? "dot active" : "dot"}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;