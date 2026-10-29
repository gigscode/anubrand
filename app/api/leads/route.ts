import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  const data = body as Record<string, unknown>
  if (typeof data.name !== 'string' || !data.name.trim() || typeof data.email !== 'string' || !data.email.includes('@') || typeof data.phone !== 'string' || !data.phone.trim() || !data.consent) {
    return NextResponse.json({ error: 'Please provide valid required fields and consent.' }, { status: 400 })
  }
  return NextResponse.json({ configured: false, error: 'Lead storage is not configured. Please use the WhatsApp enquiry path.' }, { status: 503 })
}
