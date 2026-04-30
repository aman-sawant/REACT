import { useState } from "react";
import "./Featured.css";

type Item = {
  title: string;
  desc: string;
  image: string;
};

const data: Record<string, Item> = {
  "Featured Item": {
    title: "Welcome to Store",
    desc: "Explore our top products and latest deals.",
    image: "https://via.placeholder.com/200",
  },
  "Best Seller": {
    title: "Apple iPhone 6",
    desc: "A premium smartphone with sleek design.",
    image: "https://via.placeholder.com/200",
  },
  "Summer Discount": {
    title: "Samsung Galaxy S5",
    desc: "Hot deals this summer!",
    image: "https://via.placeholder.com/200",
  },
  "Premium Product": {
    title: "MacBook Pro",
    desc: "Powerful and premium experience.",
    image: "https://via.placeholder.com/200",
  },
  "Gift Idea": {
    title: "Smart Watch",
    desc: "Perfect gift for everyone.",
    image: "https://via.placeholder.com/200",
  },
};

const Featured = () => {
  const [selected, setSelected] =
    useState<keyof typeof data>("Featured Item"); // ✅ default

  const current = data[selected];

  return (
    <div className="featured">

      {/* LEFT MENU */}
      <div className="left">
        {Object.keys(data).map((item, index) => (
          <div
            key={item}
            className={`item ${selected === item ? "active" : ""} ${index === 0 ? "header" : ""}`}
            onClick={() => setSelected(item as keyof typeof data)}
          >
            {item}
          </div>
        ))}
      </div>

      {/* RIGHT CONTENT */}
      <div className="right">
        <div className="content">
          <h2>{current.title}</h2>
          <p>{current.desc}</p>
          <button>Read More</button>
        </div>

        <div className="image">
          <img src={current.image} alt={current.title} />
        </div>
      </div>

    </div>
  );
};

export default Featured;