import ProductCard from "./ProductCard";
import "./Product.css";

const products = [
  { title: "Samsung Galaxy S5", price: 699, image: "https://via.placeholder.com/150" },
  { title: "Xbox One", price: 399, image: "https://via.placeholder.com/150" },
  { title: "PlayStation 4", price: 499, image: "https://via.placeholder.com/150" },
  { title: "OnePlus 5", price: 699, image: "https://via.placeholder.com/150" },
  { title: "Vizio Smart TV", price: 599, image: "https://via.placeholder.com/150" },
  { title: "Microsoft Surface", price: 399, image: "https://via.placeholder.com/150" },
];

const ProductGrid = () => {
  return (
    <div className="grid">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};

export default ProductGrid;