import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  grade: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    grade: "Grade 12",
    content: "Brimath helped me achieve an A+ in Advanced Mathematics. The tutors are exceptional!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    grade: "Grade 11",
    content: "The personalized attention and structured approach helped me overcome my fear of mathematics.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    grade: "Grade 10",
    content: "From struggling with basic concepts to excelling in competitive mathematics, Brimath made it possible.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    rating: 5
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="font-semibold">{testimonial.name}</h3>
        <p className="text-sm text-gray-600">{testimonial.grade}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700">{testimonial.content}</p>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
        <p className="text-xl text-gray-600">Discover how Brimath has transformed students' mathematical journey</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;