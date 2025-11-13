import About from "../components/Home/About";
import ContactUs from "../components/Home/ContactUs";
import Mission from "../components/Home/Mission";
import ProjectsGallery from "../components/Home/ProjectsGallery";
import ProjectSlider from "../components/Home/ProjectSlider";

const Home = () => {
  return (
    <div>
      <ProjectSlider />
      <About />
      <Mission />
      <ProjectsGallery />
      <ContactUs />
    </div>
  );
};

export default Home;
