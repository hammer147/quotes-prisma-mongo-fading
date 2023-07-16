import { QuoteType } from '@/types'
import Quote from './Quote'
import { getRandomQuote } from '@/lib/quotes'

export default async function Home() {
  const quote = await getRandomQuote()
  return <Quote quote={quote} />
}
