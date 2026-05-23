import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, message } = body

  const payload = new URLSearchParams({
    access_key: process.env.WEB3FORMS_KEY ?? "",
    name,
    email,
    message,
  })

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: payload.toString(),
  })

  const data = await res.json()

  if (data.success) {
    return NextResponse.json({ success: true })
  }

  return NextResponse.json({ success: false }, { status: 500 })
}
