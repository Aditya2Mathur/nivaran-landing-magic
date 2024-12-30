import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutMission } from "@/components/about/AboutMission";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutFounders } from "@/components/about/AboutTeam";

const About = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Helmet>
        <title>About Us - Nivaran AI</title>
        <meta name="description" content="Learn about Nivaran AI's mission to revolutionize healthcare through artificial intelligence. Discover our journey, meet our expert team, and see how we're making healthcare more accessible." />
        <meta name="keywords" content="Nivaran AI, healthcare technology, artificial intelligence in healthcare, medical innovation, healthcare solutions, AI diagnostic tools" />
        <meta property="og:title" content="About Us - Nivaran AI" />
        <meta property="og:description" content="Learn about Nivaran AI's mission to revolutionize healthcare through artificial intelligence. Discover our journey, meet our expert team, and see how we're making healthcare more accessible." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://nivaran.ai/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Nivaran AI" />
        <meta name="twitter:description" content="Learn about Nivaran AI's mission to revolutionize healthcare through artificial intelligence. Discover our journey, meet our expert team, and see how we're making healthcare more accessible." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://nivaran.ai/about" />
      </Helmet>
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutJourney />
      <AboutFounders />
      <Footer />
    </div>
  );
};

export default About;