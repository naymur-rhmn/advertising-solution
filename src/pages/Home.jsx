import Hero from "../components/Home/Hero/Hero";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";
import Overview from "../components/Home/Overview/Overview";
import PlatformOverview from "../components/Home/PlatformOverview/PlatformOverview";
import Features from "../components/Home/Features/Features";
import ImageBanner from "../components/Home/ImageBanner/ImageBanner";
import BrandCollaborations from "../components/Home/BrandCollaboration/BrandCollaborations";

function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <OtherProjects /> */}
      <Hero />
      <Overview />
      <PlatformOverview />
      <Features />
      <ImageBanner />
      <BrandCollaborations />
      <Footer />
    </>
  );
}

export default Home;
