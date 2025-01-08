'use client'

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const plans = [
  { 
    id: 1, 
    name: "Basic", 
    price: "$50/month", 
    features: ["1 course", "Weekly assignments", "Email support"],
    recommended: false
  },
  { 
    id: 2, 
    name: "Standard", 
    price: "$100/month", 
    features: ["2 courses", "Weekly assignments", "Email & chat support", "Monthly 1-on-1 session"],
    recommended: true
  },
  { 
    id: 3, 
    name: "Premium", 
    price: "$200/month", 
    features: ["All courses", "Weekly assignments", "Priority support", "Weekly 1-on-1 sessions"],
    recommended: false
  },
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

export default function Plans() {
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
        Choose Your Plan
      </motion.h1>
      <motion.div className="grid gap-6 md:grid-cols-3" variants={containerVariants}>
        {plans.map((plan) => (
          <motion.div key={plan.id} variants={itemVariants}>
            <Card className={`flex flex-col ${plan.recommended ? 'border-blue-500 border-2' : ''}`}>
              {plan.recommended && (
                <motion.div 
                  className="bg-blue-500 text-white text-center py-2 text-sm font-semibold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Recommended
                </motion.div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <motion.p 
                  className="text-3xl font-bold text-center mb-4"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  {plan.price}
                </motion.p>
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full"
                >
                  <Button className="w-full" variant={plan.recommended ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

