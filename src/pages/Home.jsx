import AboutUs from "../components/Home/About/AboutUs";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <AboutUs />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
