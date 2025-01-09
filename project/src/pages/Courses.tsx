import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Trophy, ArrowRight } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  level: string;
  duration: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Basic Mathematics",
    description: "Build a strong foundation in core mathematical concepts",
    icon: <BookOpen className="w-8 h-8 text-indigo-600" />,
    features: [
      "Number Systems",
      "Basic Algebra",
      "Geometry Fundamentals",
      "Elementary Statistics"
    ],
    level: "Beginner",
    duration: "3 months"
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    description: "Master complex mathematical principles and problem-solving",
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    features: [
      "Advanced Algebra",
      "Calculus",
      "Trigonometry",
      "Probability"
    ],
    level: "Intermediate",
    duration: "6 months"
  },
  {
    id: 3,
    title: "Competitive Mathematics",
    description: "Prepare for mathematics competitions and olympiads",
    icon: <Trophy className="w-8 h-8 text-indigo-600" />,
    features: [
      "Number Theory",
      "Combinatorics",
      "Mathematical Reasoning",
      "Complex Problem Solving"
    ],
    level: "Advanced",
    duration: "6 months"
  }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-lg shadow-lg"
  >
    <div className="mb-4">{course.icon}</div>
    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
    <p className="text-gray-600 mb-4">{course.description}</p>
    <div className="mb-4">
      <div className="flex items-center mb-2">
        <span className="font-semibold mr-2">Level:</span>
        <span className="text-gray-600">{course.level}</span>
      </div>
      <div className="flex items-center">
        <span className="font-semibold mr-2">Duration:</span>
        <span className="text-gray-600">{course.duration}</span>
      </div>
    </div>
    <h4 className="font-semibold mb-2">What you'll learn:</h4>
    <ul className="space-y-2 mb-6">
      {course.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <ArrowRight className="w-4 h-4 mr-2 text-indigo-600" />
          {feature}
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
    >
      Learn More
    </motion.button>
  </motion.div>
);

const Courses: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Our Courses</h2>
        <p className="text-xl text-gray-600">Choose the perfect course to achieve your mathematical goals</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;