import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto py-8">
      <nav className="mb-6 flex space-x-4">
        <Link href="/admin">
          <Button variant="outline">Dashboard</Button>
        </Link>
        <Link href="/admin/signups-and-reviews">
          <Button variant="outline">Sign-ups & Reviews</Button>
        </Link>
      </nav>
      {children}
    </div>
  )
}

