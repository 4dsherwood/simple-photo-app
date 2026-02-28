import DiscoStory from './components/PhotoGallery';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="text-center mb-6">
          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
            v2 (Feb 28, 2026)
          </span>
        </div>
      </div>
      <DiscoStory />
    </main>
  );
}
