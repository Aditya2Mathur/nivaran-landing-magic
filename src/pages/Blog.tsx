import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white w-full overflow-x-hidden">
      <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 animate-fade-up">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden animate-fade-up">
            <img
              src={`https://via.placeholder.com/400x200?text=Blog+Post+${index + 1}`}
              alt={`Blog Post ${index + 1}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Blog Post Title {index + 1}</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <a
                href={`/blog/${index + 1}`}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Read More
              </a>
            </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </main>
      <Footer />
    </div>
  );
};

export default About;