import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Building2, Users, Trophy, Target, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "20+ years experience in Healthcare Innovation"
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "Leading AI integration in healthcare"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Patient Care Director",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop",
      bio: "Specialist in Patient Experience Enhancement"
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Foundation",
      description: "Nivaran AI was established with a vision to revolutionize healthcare"
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Launched our first AI-powered diagnostic tools"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Extended our services to multiple countries"
    },
    {
      year: "2023",
      title: "Innovation Award",
      description: "Recognized for breakthrough healthcare technology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Discover Who We Are and What Drives Us
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-12"
          >
            <img 
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop" 
              alt="Healthcare Technology" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-8">
              Welcome to Nivaran, your trusted partner in comprehensive healthcare solutions. 
              We are committed to delivering compassionate care, innovative treatments, and 
              a seamless patient experience through our AI-powered healthcare platform.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To revolutionize healthcare by making it accessible, affordable, and 
                impactful for every individual through artificial intelligence and 
                innovative technology solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Trophy className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Prioritize patient-centric care with empathy and respect</li>
                <li>• Leverage cutting-edge AI technology in all our services</li>
                <li>• Empower individuals to lead healthier lives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center gap-8 mb-8"
              >
                <div className="w-24 text-xl font-bold text-primary">{milestone.year}</div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">The experts behind our innovation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nivaran?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Dedicated professionals committed to excellence</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Building2 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art technology and infrastructure</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Care</h3>
              <p className="text-gray-600">Tailored solutions for your unique needs</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Always here when you need us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <Button asChild size="lg" className="rounded-full">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;