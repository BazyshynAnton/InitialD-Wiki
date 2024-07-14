'use client'

import HomePage from '@/components/homePage/HomePage'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 100000))
  return <HomePage />
}
