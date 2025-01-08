'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, name: "John D.", content: "Brimath helped me improve my math grades significantly! The tutors are patient and explain concepts clearly.", rating: 5 },
  { id: 2, name: "Sarah M.", content: "The tutors are knowledgeable and patient. I've seen a huge improvement in my confidence with math. Highly recommended!", rating: 5 },
  { id: 3, name: "Alex K.", content: "I went from struggling with math to loving it, thanks to Brimath! The personalized approach really works.", rating: 4 },
  { id: 4, name: "Emily R.", content: "Brimath's courses are well-structured and easy to follow. I'm finally understanding calculus!", rating: 5 },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export default function Testimonials() {
  return (
    <motion.div 
      className="container mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        variants={itemVariants}
        className="text-4xl font-bold mb-6 text-center text-blue-600"
      >
        What Our Students Say
      </motion.h1>
      <motion.div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2" variants={containerVariants}>
        {testimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={itemVariants}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{testimonial.name}</span>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <motion.p 
                  className="text-gray-600 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{testimonial.content}"
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

