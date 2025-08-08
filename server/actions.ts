"use server"

export async function sendContactMessage(formData: FormData): Promise<{
  ok: boolean
  message: string
}> {
  // Honeypot
  if ((formData.get("company") as string)?.trim()) {
    return { ok: true, message: "Thanks! We will be in touch." }
  }

  const name = (formData.get("name") as string | null)?.trim() || ""
  const email = (formData.get("email") as string | null)?.trim() || ""
  const message = (formData.get("message") as string | null)?.trim() || ""

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." }
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailValid) {
    return { ok: false, message: "Please enter a valid email." }
  }

  // Simulate IO
  await new Promise((r) => setTimeout(r, 900))

  // In a real app: send via email provider or persist to DB
  console.log("New contact message:", { name, email, message })

  return {
    ok: true,
    message:
      "Message sent successfully. I will get back to you within 1 to 2 business days.",
  }
}
