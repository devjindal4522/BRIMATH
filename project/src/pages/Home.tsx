import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Excel in Mathematics with <span className="text-indigo-600">Brimath</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Unlock your mathematical potential with our expert tutors and proven methods
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center"
        >
          Get Started <ArrowRight className="ml-2" />
        </motion.button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <FeatureCard
          icon={<Star className="h-8 w-8 text-indigo-600" />}
          title="Expert Tutors"
          description="Learn from experienced mathematics educators passionate about student success"
        />
        <FeatureCard
          icon={<Users className="h-8 w-8 text-indigo-600" />}
          title="Small Groups"
          description="Personalized attention in small class sizes for optimal learning"
        />
        <FeatureCard
          icon={<BookOpen className="h-8 w-8 text-indigo-600" />}
          title="Comprehensive Curriculum"
          description="Structured learning path covering all key mathematical concepts"
        />
      </div>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          alt="Students learning"
          className="rounded-lg shadow-xl w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};

export default Home;