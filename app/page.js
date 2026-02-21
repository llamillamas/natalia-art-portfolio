'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Gallery from '@/components/Gallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Gallery />
      <Footer />
    </>
  )
}
