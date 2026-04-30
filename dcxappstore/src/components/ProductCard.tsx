import "./Product.css";

interface Props {
  title: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, price, image }: Props) => {
  return (
    <div className="card">
      <img src={image} />
      <h4>{title}</h4>
      <p>${price}</p>
      <div>⭐⭐⭐⭐☆</div>
    </div>
  );
};

export default ProductCard;