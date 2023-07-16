import prisma from './prisma'

export async function getQuotes() {
  return await prisma.quote.findMany()
}

export async function getRandomQuote() {

  const quoteCount = await prisma.quote.count()
  const skip = Math.floor(Math.random() * quoteCount)
  return (await prisma.quote.findMany({
    take: 1,
    skip: skip
  }))[0]
}
