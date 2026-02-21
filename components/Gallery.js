'use client'

import { useState } from 'react'
import Image from 'next/image'

const artworks = [
  {
    id: 1,
    src: '/natalia-art-portfolio/images/artwork-1.png',
    alt: 'Artwork 1',
    title: 'Artwork 1',
  },
  {
    id: 2,
    src: '/natalia-art-portfolio/images/artwork-2.png',
    alt: 'Artwork 2',
    title: 'Artwork 2',
  },
  {
    id: 3,
    src: '/natalia-art-portfolio/images/artwork-3.png',
    alt: 'Artwork 3',
    title: 'Artwork 3',
  },
  {
    id: 4,
    src: '/natalia-art-portfolio/images/artwork-4.jpg',
    alt: 'Artwork 4',
    title: 'Artwork 4',
  },
  {
    id: 5,
    src: '/natalia-art-portfolio/images/artwork-5.jpg',
    alt: 'Artwork 5',
    title: 'Artwork 5',
  },
]

export default function Gallery() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <section id="gallery" className="bg-primary py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl sm:text-4xl font-bold text-secondary mb-12 text-center">
          Gallery
        </h3>

        {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative overflow-hidden rounded-lg bg-gray-900 aspect-square cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedId(selectedId === artwork.id ? null : artwork.id)}
            >
              <img
                src={artwork.src}
                alt={artwork.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end justify-start p-4">
                <div className="text-secondary text-sm sm:text-base font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {artwork.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for expanded view */}
        {selectedId && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedId(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] bg-primary rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-secondary hover:text-gray-300 text-2xl z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
                onClick={() => setSelectedId(null)}
              >
                ×
              </button>
              <img
                src={artworks.find((a) => a.id === selectedId)?.src}
                alt="Expanded artwork"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
