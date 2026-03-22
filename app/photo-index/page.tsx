import Link from 'next/link';

const basePath = process.env.NODE_ENV === 'production' ? '/simple-photo-app' : '';

const photos = [
  {
    fileName: 'IMG_1530.jpeg',
    id: 'P1',
    caption: 'Clamping a wood glue-up',
  },
  {
    fileName: 'IMG_1534.jpeg',
    id: 'P2',
    caption: 'Partially assembled disco floor with some LEDs',
  },
  {
    fileName: 'IMG_1535.jpeg',
    id: 'P3',
    caption: 'Close-up of acrylic material preparation',
  },
  {
    fileName: 'IMG_1543.jpeg',
    id: 'P4',
    caption: 'Unwrapping acrylic sheet on workshop floor',
  },
  {
    fileName: 'IMG_1544.jpeg',
    id: 'P5',
    caption: 'Large acrylic sheet laid flat on workshop floor',
  },
  {
    fileName: 'IMG_1547.jpeg',
    id: 'P6',
    caption: 'Marking cut lines on large acrylic sheet',
  },
  {
    fileName: 'IMG_1548.jpeg',
    id: 'P7',
    caption: 'Acrylic sheet prepared and measured for cutting',
  },
  {
    fileName: 'IMG_1551.jpeg',
    id: 'P8',
    caption: 'Workshop table setup with acrylic and materials',
  },
  {
    fileName: 'IMG_1552.jpeg',
    id: 'P9',
    caption: 'Cut acrylic panels stacked on workshop surface',
  },
  {
    fileName: 'IMG_1554.jpeg',
    id: 'P10',
    caption: 'Acrylic panels in assembly process',
  },
  {
    fileName: 'IMG_1591.jpeg',
    id: 'P11',
    caption: 'LED soldering work at bench station',
  },
  {
    fileName: 'IMG_1594.jpeg',
    id: 'P12',
    caption: 'Detail of LED wiring connections',
  },
  {
    fileName: 'IMG_1595.jpeg',
    id: 'P13',
    caption: 'Person soldering LED connections at workbench',
  },
  {
    fileName: 'IMG_1596.jpeg',
    id: 'P14',
    caption: 'Breadboard setup for LED control',
  },
  {
    fileName: 'IMG_1598.jpeg',
    id: 'P15',
    caption: 'Close-up of wiring connection details',
  },
  {
    fileName: 'IMG_1600.jpeg',
    id: 'P16',
    caption: 'Attaching acrylic panels to wooden frame',
  },
  {
    fileName: 'IMG_1602.jpeg',
    id: 'P17',
    caption: 'LED panel being assembled in frame',
  },
  {
    fileName: 'IMG_1604.jpeg',
    id: 'P18',
    caption: 'Components and wiring details',
  },
  {
    fileName: 'IMG_1606.jpeg',
    id: 'P19',
    caption: 'Detail of panel construction progress',
  },
  {
    fileName: 'IMG_1609.jpeg',
    id: 'P20',
    caption: 'Sanding acrylic to create frosted finish',
  },
  {
    fileName: 'IMG_1610.jpeg',
    id: 'P21',
    caption: 'LED mounting and hardware setup',
  },
  {
    fileName: 'IMG_1611.jpeg',
    id: 'P22',
    caption: 'Grid panel construction in progress',
  },
  {
    fileName: 'IMG_1681.jpeg',
    id: 'P23',
    caption: 'Disco floor grid with LEDs mounted',
  },
  {
    fileName: 'IMG_1682.jpeg',
    id: 'P24',
    caption: 'Grid panels being assembled together',
  },
  {
    fileName: 'IMG_1683.jpeg',
    id: 'P25',
    caption: 'Panels being installed in frame',
  },
  {
    fileName: 'IMG_1684.jpeg',
    id: 'P26',
    caption: 'Overview of grid assembly progress',
  },
  {
    fileName: 'IMG_1685.jpeg',
    id: 'P27',
    caption: 'Wiring installation in frame assembly',
  },
  {
    fileName: 'IMG_1686.jpeg',
    id: 'P28',
    caption: 'Detail of completed frame assembly',
  },
  {
    fileName: 'IMG_1687.jpeg',
    id: 'P29',
    caption: 'Final assembly of grid system',
  },
  {
    fileName: 'IMG_1929.jpeg',
    id: 'P30',
    caption: 'Finished panel assembly ready for testing',
  },
  {
    fileName: 'IMG_1932.jpeg',
    id: 'P31',
    caption: 'LED testing configuration and setup',
  },
  {
    fileName: 'IMG_1936.jpeg',
    id: 'P32',
    caption: 'Testing color patterns on LED display',
  },
  {
    fileName: 'IMG_1939.jpeg',
    id: 'P33',
    caption: 'Testing brightness levels of LEDs',
  },
  {
    fileName: 'IMG_1940.jpeg',
    id: 'P34',
    caption: 'Control software interface for LEDs',
  },
  {
    fileName: 'IMG_1947.jpeg',
    id: 'P35',
    caption: 'Night testing environment for LEDs',
  },
  {
    fileName: 'IMG_1951.jpeg',
    id: 'P36',
    caption: 'Animation sequence display testing',
  },
  {
    fileName: 'IMG_1952.jpeg',
    id: 'P37',
    caption: 'Color gradient test pattern display',
  },
  {
    fileName: 'IMG_1953.jpeg',
    id: 'P38',
    caption: 'Full grid illumination during testing',
  },
  {
    fileName: 'IMG_1955.jpeg',
    id: 'P39',
    caption: 'Synchronized color display test',
  },
  {
    fileName: 'IMG_1956.jpeg',
    id: 'P40',
    caption: 'Brightness adjustment testing',
  },
  {
    fileName: 'IMG_1957.jpeg',
    id: 'P41',
    caption: 'Color mixing effects demonstration',
  },
  {
    fileName: 'IMG_1958.jpeg',
    id: 'P42',
    caption: 'Display running pattern sequence',
  },
  {
    fileName: 'IMG_1959.jpeg',
    id: 'P43',
    caption: 'Grid performance during testing',
  },
  {
    fileName: 'IMG_1961.jpeg',
    id: 'P44',
    caption: 'LED response time testing',
  },
  {
    fileName: 'IMG_1962.jpeg',
    id: 'P45',
    caption: 'System stability during operation',
  },
  {
    fileName: 'IMG_1972.jpeg',
    id: 'P46',
    caption: 'Final display verification and testing',
  },
  {
    fileName: 'IMG_9465.jpeg',
    id: 'P47',
    caption: 'Acrylic panels with metal strapping detail',
  },
  {
    fileName: 'IMG_1597.jpeg',
    id: 'P48',
    caption: 'Prepping wires for LED connections',
  },
  {
    fileName: 'IMG_1598 (1).jpeg',
    id: 'P49',
    caption: 'Alternate angle of wiring connection details',
  },
  {
    fileName: 'IMG_1680.jpeg',
    id: 'P50',
    caption: 'Disco floor grid preparation phase',
  },
];

const videos = [
  { fileName: 'IMG_1533.mov', id: 'M1' },
  { fileName: 'IMG_1549.mov', id: 'M2' },
  { fileName: 'IMG_1601.mov', id: 'M3' },
  { fileName: 'IMG_1617.mov', id: 'M4' },
  { fileName: 'IMG_1624.mov', id: 'M5' },
  { fileName: 'IMG_1948.mov', id: 'M6' },
  { fileName: 'IMG_1950.mov', id: 'M7' },
  { fileName: 'IMG_1616.mov', id: 'M8' },
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
            {photos.map(({ fileName, id, caption }) => (
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
                  {id && caption ? (
                    <span className="block text-gray-500">
                      {id} — {caption}
                    </span>
                  ) : null}
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
            {videos.map(({ fileName, id }) => (
              <figure key={fileName} className="flex flex-col">
                <video
                  src={`${basePath}/photos/${encodeURIComponent(fileName)}`}
                  controls
                  preload="metadata"
                  className="w-full rounded-md shadow"
                />
                <figcaption className="text-xs text-gray-600 mt-2 break-words">
                  {fileName}
                  {id && <span className="block text-gray-500">{id}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
