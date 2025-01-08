'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { useSpring, animated, config } from 'react-spring'

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const numberAnimation = useSpring({
    from: { value: 0 },
    to: { value: 10000 },
    delay: 500,
    config: config.molasses
  })

  return (
    <div className="container mx-auto">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center py-20"
      >
        <motion.h1 
          className="text-5xl font-bold mb-6 text-blue-600"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          Welcome to Brimath
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto"
          variants={fadeIn}
        >
          Expert math tuition classes to help you excel in your studies and achieve your academic goals.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/signup">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <motion.section 
        className="py-16 bg-white rounded-lg shadow-xl"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-3xl font-semibold mb-10 text-center text-gray-800"
          variants={fadeIn}
        >
          Why Choose Brimath?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {[
            { icon: BookOpen, title: "Expert Tutors", description: "Learn from experienced educators passionate about mathematics." },
            { icon: Users, title: "Small Class Sizes", description: "Enjoy personalized attention in our small, focused study groups." },
            { icon: Trophy, title: "Proven Results", description: "Our students consistently achieve top grades and academic success." }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="text-center"
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <item.icon className="mx-auto h-16 w-16 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
        className="py-16 text-center"
      >
        <motion.h2 
          className="text-3xl font-semibold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Students Who Chose Brimath
        </motion.h2>
        <div className="flex items-center justify-center">
          <GraduationCap className="text-blue-500 h-12 w-12 mr-4" />
          <animated.span className="text-6xl font-bold text-blue-600">
            {numberAnimation.value.to((val: number) => `${Math.floor(val).toLocaleString()}+`)}
          </animated.span>
        </div>
        <motion.p
          className="mt-4 text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Join thousands of successful students who have improved their math skills with Brimath!
        </motion.p>
      </motion.section>
    </div>
  )
}

