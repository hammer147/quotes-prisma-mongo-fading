import { NextResponse } from 'next/server'
import { getRandomQuote } from '@/lib/quotes'

export async function GET() {
  const randomQuote = await getRandomQuote()
  return NextResponse.json({ randomQuote })
}
