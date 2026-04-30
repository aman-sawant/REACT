import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import ProductGrid from "../components/ProductGrid";
import HeroCarousel from "../components/HeroCarousel";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container flex-col">
        <HeroCarousel />
        <Featured />
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Home;