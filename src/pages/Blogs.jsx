import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Web Development",
    description:
      "Explore how AI tools like ChatGPT and Copilot are changing the way developers build websites.",
    image: "https://cdn2.hubspot.net/hubfs/389011/Technology_Blogs.jpg",
    date: "Aug 20, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS in 2025",
    description:
      "A complete guide to building responsive, modern, and fast websites with Tailwind CSS.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkAUwNygfqJ3BsVX94qBskmPA61yShieRybqLO9s-X2OKvP09cO8Lzn7z6asY97nipFtk&usqp=CAU",
    date: "Aug 10, 2025",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "The Future of JavaScript Frameworks",
    description:
      "React, Vue, Svelte, or Next.js? Let's dive into where frontend is heading.",
    image:
      "https://previews.123rf.com/images/pratyaksa/pratyaksa1702/pratyaksa170200023/72273416-blogger-writing-article-blogging-concept-blog-concept-internet-contents.jpg",
    date: "Jul 28, 2025",
    author: "Michael Lee",
  },
  {
    id: 4,
    title: "The Future of Nodejs Frameworks",
    description:
      "React, Vue, Svelte, or Next.js? Let's dive into where frontend is heading.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MAPr4LuDwGD4HAENAUoN7hm9n59nDLbai5rXLcUBqrhFUprhVoTQTKmGGfbXJj4J_bw&usqp=CAU",
    date: "Jul 28, 2025",
    author: "Michael Lee",
  },
  {
    id: 5,
    title: "The Future of Php Frameworks",
    description:
      "React, Vue, Svelte, or Next.js? Let's dive into where frontend is heading.",
    image:
      "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=1000&format=pjpg&exif=0&iptc=0",
    date: "Jul 28, 2025",
    author: "Michael Lee",
  },
  {
    id: 6,
    title: "The Future of React Frameworks",
    description:
      "React, Vue, Svelte, or Next.js? Let's dive into where frontend is heading.",
    image:
      "https://img.freepik.com/premium-photo/blog-text-office-desk-surrounded-with-notepad-laptop-computer_176814-709.jpg?semt=ais_hybrid&w=740&q=80",
    date: "Jul 28, 2025",
    author: "Michael Lee",
  },
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
        {/* Back Button */}
        <div className="max-w-6xl mx-auto px-6 mt-20">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:shadow-lg shadow-pink-500/30 transition-all duration-300"
          >
            <ArrowLeft size={18} className="mt-0.5" />
          </Link>
        </div>
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold"
          >
            Our Blogs
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-100"
          >
            Insights, tutorials, and stories from our creative team.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
    {/* Blog Grid */}
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  {blogPosts.map((post, index) => (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition group flex flex-col"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">
          {post.date} • {post.author}
        </p>
        <h3 className="text-xl font-bold mt-2 text-gray-800 group-hover:text-orange-500 transition">
          {post.title}
        </h3>
        <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
          {post.description}
        </p>
        {/* <button className="mt-4 text-orange-500 font-medium hover:text-orange-600 transition self-start">
          Read More →
        </button> */}
      </div>
    </motion.div>
  ))}
</section>

    </div>
  );
}
