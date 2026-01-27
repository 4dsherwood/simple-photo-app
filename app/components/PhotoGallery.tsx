'use client';

import { useState } from 'react';

// Sample photo data - replace with your own images
const samplePhotos = [
  { id: 1, title: 'Photo 1', url: 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Photo+1' },
  { id: 2, title: 'Photo 2', url: 'https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Photo+2' },
  { id: 3, title: 'Photo 3', url: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Photo+3' },
  { id: 4, title: 'Photo 4', url: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Photo+4' },
  { id: 5, title: 'Photo 5', url: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=Photo+5' },
  { id: 6, title: 'Photo 6', url: 'https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Photo+6' },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof samplePhotos[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {samplePhotos.map((photo) => (
          <div
            key={photo.id}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-white font-semibold">{photo.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Simple lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[90vh] object-contain"
            />
            <p className="text-white text-center mt-4 text-xl">
              {selectedPhoto.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
