import { NextResponse } from 'next/server'
import { getQuotes } from '@/lib/quotes'

export async function GET() {
  const quotes = await getQuotes()
  return NextResponse.json({ quotes })
}
