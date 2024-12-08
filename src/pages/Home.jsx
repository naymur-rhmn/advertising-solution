import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Overview from "../components/Home/Overview/Overview";
import PlatformOverview from "../components/Home/PlatformOverview/PlatformOverview";
import LoadingComponent from "../components/Home/LoadingComponent";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Overview />
      <PlatformOverview />
      <Footer />
      <LoadingComponent />
    </>
  );
}

export default Home;
