import Hero from "../components/Home/Hero/Hero";
import Overview from "../components/Home/Overview/Overview";
import PlatformOverview from "../components/Home/PlatformOverview/PlatformOverview";
import Features from "../components/Home/Features/Features";
import ImageBanner from "../components/Home/ImageBanner/ImageBanner";
import BrandCollaborations from "../components/Home/BrandCollaboration/BrandCollaborations";

function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <PlatformOverview />
      <Features />
      {/* <ImageBanner /> */}
      <BrandCollaborations />
    </>
  );
}

export default Home;
