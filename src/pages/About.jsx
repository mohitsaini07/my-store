import HeroSection from "../component/HeroSection";
import AboutImage from "../assests/about-image.jpg";
import { useProductContext } from "../context/ProductContext";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    firstName: "E-",
    lastName: "Commerce",
    imgsrc: AboutImage,
  };

  return (
    <div>
      <HeroSection myData={data} imgsrc={AboutImage} />
      {myName}
    </div>
  );
};

export default About;
