'use client';

import { useState } from 'react';
import Image from 'next/image';

const artworks = [
  { id: 1, src: '/images/artwork-1.png', alt: 'Digital Illustration 1', title: 'Abstract Portrait' },
  { id: 2, src: '/images/artwork-2.png', alt: 'Digital Illustration 2', title: 'Geometric Design' },
  { id: 3, src: '/images/artwork-3.png', alt: 'Digital Illustration 3', title: 'Character Art' },
  { id: 4, src: '/images/artwork-4.jpg', alt: 'Digital Illustration 4', title: 'Nature Study' },
  { id: 5, src: '/images/artwork-5.jpg', alt: 'Digital Illustration 5', title: 'Modern Composition' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => setSelectedImage(artwork.src)}
            >
              <div className="aspect-square relative">
                <Image
                  src={artwork.src}
                  alt={artwork.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-medium">{artwork.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 modal-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content relative max-w-5xl max-h-[90vh] w-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Enlarged artwork"
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
