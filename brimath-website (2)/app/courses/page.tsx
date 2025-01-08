'use client'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { BookOpen, Calculator, Shapes, ActivityIcon as Function } from 'lucide-react'
import { motion } from 'framer-motion'

const courses = [
  { id: 1, title: "Elementary Math", description: "Build a strong foundation in basic math concepts.", icon: BookOpen },
  { id: 2, title: "Algebra", description: "Master algebraic equations and problem-solving techniques.", icon: Calculator },
  { id: 3, title: "Geometry", description: "Explore shapes, sizes, and spatial relationships.", icon: Shapes },
  { id: 4, title: "Calculus", description: "Dive into differential and integral calculus.", icon: Function },
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

export default function Courses() {
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
        Our Courses
      </motion.h1>
      <motion.div className="grid gap-6 md:grid-cols-2" variants={containerVariants}>
        {courses.map((course) => (
          <motion.div key={course.id} variants={itemVariants}>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-blue-600">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {<course.icon className="mr-2 h-6 w-6" />}
                  </motion.div>
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{course.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

