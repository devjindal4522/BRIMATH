'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Mock data for sign-ups and reviews
const mockSignups = [
  { id: 1, name: 'John Doe', email: 'john@example.com', date: '2023-05-01' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', date: '2023-05-02' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', date: '2023-05-03' },
]

const mockReviews = [
  { id: 1, name: 'Alice Brown', rating: 5, content: 'Great tutoring service!', date: '2023-05-01' },
  { id: 2, name: 'Charlie Davis', rating: 4, content: 'Very helpful tutors.', date: '2023-05-02' },
  { id: 3, name: 'Eva White', rating: 5, content: 'Improved my grades significantly.', date: '2023-05-03' },
]

export default function SignupsAndReviews() {
  const [signups] = useState(mockSignups)
  const [reviews] = useState(mockReviews)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Sign-ups and Reviews</h1>
      <Tabs defaultValue="signups">
        <TabsList>
          <TabsTrigger value="signups">Sign-ups</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="signups">
          <Card>
            <CardHeader>
              <CardTitle>Recent Sign-ups</CardTitle>
              <CardDescription>View all recent student sign-ups</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {signups.map((signup) => (
                    <TableRow key={signup.id}>
                      <TableCell>{signup.name}</TableCell>
                      <TableCell>{signup.email}</TableCell>
                      <TableCell>{signup.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
              <CardDescription>View all recent student reviews</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Content</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell>{review.name}</TableCell>
                      <TableCell>{review.rating} / 5</TableCell>
                      <TableCell>{review.content}</TableCell>
                      <TableCell>{review.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

