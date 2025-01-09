import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Plan {
  id: number;
  name: string;
  price: number;
  duration: string;
  features: string[];
  recommended?: boolean;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    price: 99,
    duration: "month",
    features: [
      "2 sessions per week",
      "Basic course materials",
      "Email support",
      "Practice worksheets",
      "Monthly progress report"
    ]
  },
  {
    id: 2,
    name: "Premium",
    price: 199,
    duration: "month",
    features: [
      "3 sessions per week",
      "Advanced course materials",
      "Priority email support",
      "Practice worksheets",
      "Weekly progress report",
      "1-on-1 mentoring",
      "Mock tests"
    ],
    recommended: true
  },
  {
    id: 3,
    name: "Elite",
    price: 299,
    duration: "month",
    features: [
      "5 sessions per week",
      "Complete course materials",
      "24/7 support",
      "Custom practice worksheets",
      "Weekly progress report",
      "1-on-1 mentoring",
      "Mock tests",
      "Competition preparation",
      "Parent consultations"
    ]
  }
];

const PlanCard: React.FC<{ plan: Plan }> = ({ plan }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`bg-white p-8 rounded-lg shadow-lg relative ${
      plan.recommended ? 'border-2 border-indigo-600' : ''
    }`}
  >
    {plan.recommended && (
      <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
        Recommended
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${plan.price}</span>
      <span className="text-gray-600">/{plan.duration}</span>
    </div>
    <ul className="space-y-3 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          <span className="text-gray-600">{feature}</span>
        </li>
      ))}
    </ul>
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full py-2 rounded-md font-semibold transition-colors ${
        plan.recommended
          ? 'bg-indigo-600 text-white hover:bg-indigo-700'
          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
      }`}
    >
      Get Started
    </motion.button>
  </motion.div>
);

const Plans: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4">Tuition Plans</h2>
        <p className="text-xl text-gray-600">Choose the plan that best fits your learning needs</p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map(plan => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;