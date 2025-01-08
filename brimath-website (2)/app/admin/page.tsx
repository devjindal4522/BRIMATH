import { Metadata } from 'next'
import AdminPanel from './admin-panel'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Brimath Admin CMS',
  description: 'Content Management System for Brimath',
}

export default function AdminPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Brimath Admin CMS</h1>
        <Link href="/admin/signups-and-reviews">
          <Button>View Sign-ups & Reviews</Button>
        </Link>
      </div>
      <AdminPanel />
    </div>
  )
}

