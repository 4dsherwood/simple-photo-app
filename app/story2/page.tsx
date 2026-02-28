import DiscoStoryOriginal from '../components/DiscoStoryOriginal';

export default function Story2() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="text-center mb-6">
          <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm font-semibold uppercase tracking-wide">
            ORIGINAL version
          </span>
        </div>
      </div>
      <DiscoStoryOriginal />
    </main>
  );
}
