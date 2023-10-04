import HeroSection from "../component/HeroSection";
import Trusted from "../component/Trusted";
import HomeImage from "../assests/hero-section-img.jpeg";
import FeatureProducts from "../component/FeatureProducts";
import Services from "../component/Services";
import Contact from "./Contact";

const Home = () => {
  const data = {
    firstName: "My",
    lastName: "Store",
    imgsrc: HomeImage,
  };
  return (
    <>
      <div>
        <HeroSection myData={data} />
        <FeatureProducts />
        <Services />
        <Trusted />
        <Contact />
      </div>
    </>
  );
};

export default Home;
