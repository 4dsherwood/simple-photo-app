import Link from 'next/link';

const basePath = process.env.NODE_ENV === 'production' ? '/simple-photo-app' : '';

const photos = [
  'IMG_1530.jpeg',
  'IMG_1534.jpeg',
  'IMG_1535.jpeg',
  'IMG_1543.jpeg',
  'IMG_1544.jpeg',
  'IMG_1547.jpeg',
  'IMG_1548.jpeg',
  'IMG_1551.jpeg',
  'IMG_1552.jpeg',
  'IMG_1554.jpeg',
  'IMG_1591.jpeg',
  'IMG_1593.jpeg',
  'IMG_1594.jpeg',
  'IMG_1595.jpeg',
  'IMG_1596.jpeg',
  'IMG_1597.jpeg',
  'IMG_1598 (1).jpeg',
  'IMG_1598.jpeg',
  'IMG_1600.jpeg',
  'IMG_1602.jpeg',
  'IMG_1604.jpeg',
  'IMG_1606.jpeg',
  'IMG_1609.jpeg',
  'IMG_1610.jpeg',
  'IMG_1611.jpeg',
  'IMG_1680.jpeg',
  'IMG_1681.jpeg',
  'IMG_1682.jpeg',
  'IMG_1683.jpeg',
  'IMG_1684.jpeg',
  'IMG_1685.jpeg',
  'IMG_1686.jpeg',
  'IMG_1687.jpeg',
  'IMG_1929.jpeg',
  'IMG_1932.jpeg',
  'IMG_1936.jpeg',
  'IMG_1939.jpeg',
  'IMG_1940.jpeg',
  'IMG_1947.jpeg',
  'IMG_1951.jpeg',
  'IMG_1952.jpeg',
  'IMG_1953.jpeg',
  'IMG_1955.jpeg',
  'IMG_1956.jpeg',
  'IMG_1957.jpeg',
  'IMG_1958.jpeg',
  'IMG_1959.jpeg',
  'IMG_1961.jpeg',
  'IMG_1962.jpeg',
  'IMG_1972.jpeg',
  'IMG_9465.jpeg',
];

const videos = [
  'IMG_1533.mov',
  'IMG_1549.mov',
  'IMG_1601.mov',
  'IMG_1616.mov',
  'IMG_1617.mov',
  'IMG_1624.mov',
  'IMG_1948.mov',
  'IMG_1950.mov',
];

export default function PhotoIndexPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Photo Index</h1>
            <p className="text-gray-600 mt-2">
              A complete index of the photo and video assets in the project.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              View Story 1
            </Link>
            <Link
              href="/story2"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              View Story 2
            </Link>
          </div>
        </div>

        <div className="border-t-2 border-gray-200 my-10"></div>

        <section>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900">Photos</h2>
            <span className="text-sm text-gray-500">{photos.length} files</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {photos.map((fileName) => (
              <figure key={fileName} className="flex flex-col">
                <a
                  href={`${basePath}/photos/${encodeURIComponent(fileName)}`}
                  className="group"
                >
                  <img
                    src={`${basePath}/photos/${encodeURIComponent(fileName)}`}
                    alt={fileName}
                    className="w-full aspect-square object-cover rounded-md shadow group-hover:shadow-lg transition"
                    loading="lazy"
                  />
                </a>
                <figcaption className="text-xs text-gray-600 mt-2 break-words">
                  {fileName}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="border-t-2 border-gray-200 my-10"></div>

        <section>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-semibold text-gray-900">Videos</h2>
            <span className="text-sm text-gray-500">{videos.length} files</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {videos.map((fileName) => (
              <figure key={fileName} className="flex flex-col">
                <video
                  src={`${basePath}/photos/${encodeURIComponent(fileName)}`}
                  controls
                  preload="metadata"
                  className="w-full rounded-md shadow"
                />
                <figcaption className="text-xs text-gray-600 mt-2 break-words">
                  {fileName}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
