const blogs = [
  {
    title: "Understanding Modern Healthcare Technology",
    description:
      "Learn how modern technology are transforming the healthcare industry and improving patient care.",
    image: "images/blogs/blog-1.png",
    category: "Technology",
    readTime: "5 min read",
  },
  {
    title: "Managing Stress in Modern Life",
    description:
      "Expert tips and strategies for maintaining mental health and achieving work-life balance.",
    image: "images/blogs/blog-2.png",
    category: "Wellness",
    readTime: "4 min read",
  },
  {
    title: "Preventive Healthcare Guidelines",
    description:
      "Essential tips for maintaining good health and preventing common medical conditions.",
    image: "images/blogs/blog-3.png",
    category: "Health",
    readTime: "6 min read",
  },
];

export const BlogSection = () => {
  return (
    <section className="py-36 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4">Latest Health Insights</h2>
          <p className="text-gray-600">
            Stay informed with our expert healthcare articles and tips
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <a
              key={blog.title}
              href={`/blog/${blog.title.replace(/\s+/g, "-").toLowerCase()}`}
              className="block rounded-xl overflow-hidden border border-gray-100 hover:border-primary/20 transition-all animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6 flex flex-col h-full justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {blog.category}
                  </span>
                  <span className="text-gray-500 text-sm">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                  {blog.description}
                </p>
                <div className="mt-4">
                  <span className="text-primary font-medium hover:underline">
                  Read More →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" className="text-primary font-medium hover:underline">
            View All Articles →
          </a>
        </div>
      </div>
    </section>
  );
};
