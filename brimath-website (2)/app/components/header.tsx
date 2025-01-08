import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-bold text-blue-600">Brimath</Link>
          <ul className="hidden md:flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</Link></li>
            <li><Link href="/testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</Link></li>
            <li><Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">Courses</Link></li>
            <li><Link href="/plans" className="text-gray-600 hover:text-blue-600 transition-colors">Plans</Link></li>
          </ul>
          <Link href="/signup">
            <Button variant="outline" className="hidden md:inline-flex">Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}

