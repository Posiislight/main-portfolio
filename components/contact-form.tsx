"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from 'lucide-react'

type Props = {
  defaultEmail?: string
}

export function ContactForm({ defaultEmail = "" }: Props) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')
    
    const mailtoUrl = `mailto:adelekeolamiposi@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(name as string)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`
    
    window.location.href = mailtoUrl
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          defaultValue={defaultEmail}
          required
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project or role..."
          required
          rows={5}
        />
      </div>
      <Button
        type="submit"
        className="bg-emerald-600 hover:bg-emerald-700"
      >
        <Send className="mr-2 h-4 w-4" />
        Send Message
      </Button>
    </form>
  )
}
