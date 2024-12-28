import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutTeam } from "@/components/about/AboutTeam";
import { Helmet } from "react-helmet";
import "../styles/scrollbar.css";

const About = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Helmet>
        <title>About Nivaran AI - Healthcare Innovation Through Artificial Intelligence</title>
        <meta 
          name="description" 
          content="Learn about Nivaran AI's mission to revolutionize healthcare through artificial intelligence. Discover our journey, meet our expert team, and see how we're making healthcare more accessible." 
        />
        <meta 
          name="keywords" 
          content="Nivaran AI, healthcare technology, artificial intelligence in healthcare, medical innovation, healthcare solutions, AI diagnostic tools" 
        />
        <meta 
          property="og:title" 
          content="About Nivaran AI - Healthcare Innovation Through Artificial Intelligence" 
        />
        <meta 
          property="og:description" 
          content="Learn about Nivaran AI's mission to revolutionize healthcare through artificial intelligence. Discover our journey, meet our expert team, and see how we're making healthcare more accessible." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nivaran.ai/about" />
      </Helmet>
      
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutJourney />
      <AboutTeam />
      <Footer />
    </div>
  );
};

export default About;