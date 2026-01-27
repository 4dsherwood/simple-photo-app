import PhotoGallery from './components/PhotoGallery';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Simple Photo App
          </h1>
          <p className="text-xl text-gray-600">
            A static-first Next.js application
          </p>
        </header>
        
        <PhotoGallery />
      </div>
    </main>
  );
}
