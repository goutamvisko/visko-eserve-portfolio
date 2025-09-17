import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Award, HeadphonesIcon,Globe } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Shield className="w-10 h-10 text-indigo-600" />,
    title: "Trusted & Secure",
    description:
      "We follow industry best practices to deliver highly secure and reliable solutions.",
  },
  {
    id: 2,
    icon: <Zap className="w-10 h-10 text-indigo-600" />,
    title: "Fast Delivery",
    description:
      "Our agile approach ensures we deliver quality projects on time, every time.",
  },
  {
    id: 3,
    icon: <Users className="w-10 h-10 text-indigo-600" />,
    title: "Expert Team",
    description:
      "A dedicated team of professionals with deep expertise across multiple domains.",
  },
  {
    id: 4,
    icon: <Award className="w-10 h-10 text-indigo-600" />,
    title: "Proven Excellence",
    description:
      "Award-winning services with a track record of successful client partnerships.",
  },
  {
    id: 5,
    icon: <HeadphonesIcon className="w-10 h-10 text-indigo-600" />,
    title: "24/7 Support",
    description:
      "We’re always available to assist our clients and ensure smooth operations.",
  },
  {
    id: 6,
    title: "Global Reach",
    icon: <Globe size={28} className="text-indigo-500" />,
    description: "Serving clients worldwide with scalable solutions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-indigo-50 py-20" id="why-us">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
            Why Choose <span className="text-orange-500">Us</span>?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We combine creativity, expertise, and dedication to bring your ideas to life with unmatched quality.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition flex flex-col items-center text-center"
            >
              <div className="bg-indigo-100 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
