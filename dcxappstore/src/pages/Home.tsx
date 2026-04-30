import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import ProductGrid from "../components/ProductGrid";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container flex-col">
        <HeroCarousel />
        <Featured />
        <ProductGrid />
      </div>
    </div>
  );
};

export default Home;