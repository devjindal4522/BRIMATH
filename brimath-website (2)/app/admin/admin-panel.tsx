'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const initialContent = {
  home: {
    title: 'Welcome to Brimath',
    description: 'Expert math tuition classes to help you excel in your studies and achieve your academic goals.',
  },
  courses: [
    { id: 1, title: "Elementary Math", description: "Build a strong foundation in basic math concepts." },
    { id: 2, title: "Algebra", description: "Master algebraic equations and problem-solving techniques." },
    { id: 3, title: "Geometry", description: "Explore shapes, sizes, and spatial relationships." },
    { id: 4, title: "Calculus", description: "Dive into differential and integral calculus." },
  ],
  testimonials: [
    { id: 1, name: "John D.", content: "Brimath helped me improve my math grades significantly! The tutors are patient and explain concepts clearly.", rating: 5 },
    { id: 2, name: "Sarah M.", content: "The tutors are knowledgeable and patient. I've seen a huge improvement in my confidence with math. Highly recommended!", rating: 5 },
    { id: 3, name: "Alex K.", content: "I went from struggling with math to loving it, thanks to Brimath! The personalized approach really works.", rating: 4 },
    { id: 4, name: "Emily R.", content: "Brimath's courses are well-structured and easy to follow. I'm finally understanding calculus!", rating: 5 },
  ],
  plans: [
    { id: 1, name: "Basic", price: "$50/month", features: ["1 course", "Weekly assignments", "Email support"] },
    { id: 2, name: "Standard", price: "$100/month", features: ["2 courses", "Weekly assignments", "Email & chat support", "Monthly 1-on-1 session"] },
    { id: 3, name: "Premium", price: "$200/month", features: ["All courses", "Weekly assignments", "Priority support", "Weekly 1-on-1 sessions"] },
  ],
}

export default function AdminPanel() {
  const [content, setContent] = useState(initialContent)
  const [newTestimonial, setNewTestimonial] = useState({ name: '', content: '', rating: 5 })

  const handleHomeChange = (field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      home: {
        ...prev.home,
        [field]: value
      }
    }))
  }

  const handleItemChange = (section: 'courses' | 'testimonials' | 'plans', id: number, field: string, value: string | number) => {
    setContent(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }))
  }

  const handleNewTestimonialChange = (field: string, value: string | number) => {
    setNewTestimonial(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTestimonial = () => {
    const newId = Math.max(...content.testimonials.map(t => t.id)) + 1
    setContent(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, { id: newId, ...newTestimonial }]
    }))
    setNewTestimonial({ name: '', content: '', rating: 5 })
  }

  const handleSave = () => {
    console.log('Saving content:', content)
    // Here you would typically send the content to your backend API
    alert('Content saved successfully!')
  }

  return (
    <Tabs defaultValue="home" className="w-full">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="home">Home</TabsTrigger>
        <TabsTrigger value="courses">Courses</TabsTrigger>
        <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
        <TabsTrigger value="plans">Plans</TabsTrigger>
        <TabsTrigger value="add-testimonial">Add Testimonial</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <Card>
          <CardHeader>
            <CardTitle>Edit Home Page</CardTitle>
            <CardDescription>Update the main content of your home page</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="home-title" className="text-sm font-medium">Title</label>
              <Input
                id="home-title"
                value={content.home.title}
                onChange={(e) => handleHomeChange('title', e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="home-description" className="text-sm font-medium">Description</label>
              <Textarea
                id="home-description"
                value={content.home.description}
                onChange={(e) => handleHomeChange('description', e.target.value)}
              />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="courses">
        <Card>
          <CardHeader>
            <CardTitle>Edit Courses</CardTitle>
            <CardDescription>Update your course offerings</CardDescription>
          </CardHeader>
          <CardContent>
            {content.courses.map((course) => (
              <div key={course.id} className="mb-4 p-4 border rounded">
                <Input
                  value={course.title}
                  onChange={(e) => handleItemChange('courses', course.id, 'title', e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  value={course.description}
                  onChange={(e) => handleItemChange('courses', course.id, 'description', e.target.value)}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="testimonials">
        <Card>
          <CardHeader>
            <CardTitle>Edit Testimonials</CardTitle>
            <CardDescription>Update student testimonials</CardDescription>
          </CardHeader>
          <CardContent>
            {content.testimonials.map((testimonial) => (
              <div key={testimonial.id} className="mb-4 p-4 border rounded">
                <Input
                  value={testimonial.name}
                  onChange={(e) => handleItemChange('testimonials', testimonial.id, 'name', e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  value={testimonial.content}
                  onChange={(e) => handleItemChange('testimonials', testimonial.id, 'content', e.target.value)}
                  className="mb-2"
                />
                <Input
                  type="number"
                  min="1"
                  max="5"
                  value={testimonial.rating}
                  onChange={(e) => handleItemChange('testimonials', testimonial.id, 'rating', parseInt(e.target.value))}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="plans">
        <Card>
          <CardHeader>
            <CardTitle>Edit Plans</CardTitle>
            <CardDescription>Update your pricing plans</CardDescription>
          </CardHeader>
          <CardContent>
            {content.plans.map((plan) => (
              <div key={plan.id} className="mb-4 p-4 border rounded">
                <Input
                  value={plan.name}
                  onChange={(e) => handleItemChange('plans', plan.id, 'name', e.target.value)}
                  className="mb-2"
                />
                <Input
                  value={plan.price}
                  onChange={(e) => handleItemChange('plans', plan.id, 'price', e.target.value)}
                  className="mb-2"
                />
                <Textarea
                  value={plan.features.join('\n')}
                  onChange={(e) => handleItemChange('plans', plan.id, 'features', e.target.value.split('\n'))}
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="add-testimonial">
        <Card>
          <CardHeader>
            <CardTitle>Add New Testimonial</CardTitle>
            <CardDescription>Add a new student testimonial</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor="new-testimonial-name" className="text-sm font-medium">Name</label>
                <Input
                  id="new-testimonial-name"
                  value={newTestimonial.name}
                  onChange={(e) => handleNewTestimonialChange('name', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="new-testimonial-content" className="text-sm font-medium">Content</label>
                <Textarea
                  id="new-testimonial-content"
                  value={newTestimonial.content}
                  onChange={(e) => handleNewTestimonialChange('content', e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="new-testimonial-rating" className="text-sm font-medium">Rating</label>
                <Select
                  value={newTestimonial.rating.toString()}
                  onValueChange={(value) => handleNewTestimonialChange('rating', parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a rating" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <SelectItem key={rating} value={rating.toString()}>{rating} Star{rating !== 1 ? 's' : ''}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddTestimonial}>Add Testimonial</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <div className="mt-4">
        <Button onClick={handleSave}>Save All Changes</Button>
      </div>
    </Tabs>
  )
}

