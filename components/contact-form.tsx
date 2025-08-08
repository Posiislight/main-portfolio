"use client"

import { useState, useTransition } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { sendContactMessage } from "@/server/actions"
import { Loader2, Send } from 'lucide-react'

type Props = {
  defaultEmail?: string
}

export function ContactForm({ defaultEmail = "" }: Props) {
  const [isPending, startTransition] = useTransition()
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(
    null
  )

  async function onSubmit(formData: FormData) {
    setStatus(null)
    startTransition(async () => {
      const res = await sendContactMessage(formData)
      setStatus(res)
      if (res.ok) {
        ;(document.getElementById("contact-form") as HTMLFormElement)?.reset()
      }
    })
  }

  return (
    <form id="contact-form" action={onSubmit} className="grid gap-4">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        className="hidden"
        aria-hidden="true"
      />
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
        disabled={isPending}
        className="bg-emerald-600 hover:bg-emerald-700"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
      {status && (
        <p
          role="status"
          className={
            status.ok
              ? "text-sm text-emerald-600"
              : "text-sm text-destructive"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  )
}
