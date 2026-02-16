'use client';

const basePath = process.env.NODE_ENV === 'production' ? '/simple-photo-app' : '';

export default function DiscoStory() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section - Text Only */}
      <section className="min-h-[60vh] flex items-center justify-center text-center px-4 py-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            The Disco Dance Floor
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            She had a vision — a real, light-up disco dance floor for her best friend's bachelorette party. 
            Not a vinyl mat. A handmade, LED-lit, individually addressable dance floor that would glow in every color of the rainbow.
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-gray-900 mt-8">
            And she made it real.
          </p>
        </div>
      </section>

      <div className="border-t-2 border-gray-200 my-12"></div>

      {/* Background Story */}
      <section className="prose prose-lg max-w-none px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800">
          Melinda is a doer. During COVID, while the world was contracting, she expanded. She opened her own business — her own brow studio — having spent years preparing for exactly that moment. She had worked the front desk at an aesthetician's office while still in school, then built her skills as a brow artist, then studied locations and leases, and when the timing was right, she took action. That's who she is. She sees, she plans, she acts.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          So when her best friend got engaged, and the friend group's tradition called for an over-the-top bachelorette party, Melinda stepped up. She planned every detail — the Airbnb six hours away, the evening outings, the decorations. She envisioned a 70s disco theme. And at the center of that vision: a dazzling disco dance floor.
        </p>
      </section>

      <div className="border-t-2 border-gray-200 my-12"></div>

      {/* The Planning Phase */}
      <section className="prose prose-lg max-w-none px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800">
          She came to Bob — a proficient Maker with a full workshop — not with expectations that he would do all the work. She came with a request for consultation. She had already a plan for a version of a dance floor she could do herself: a simple platform with a vinyl overlay. She wasn't asking him to build her dream. She was asking if he had any tips that might make it a little easier or a little cooler.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          Bob listened. Then he asked: <em>Have you ever thought about putting real LEDs under acrylic?</em>
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          Her eyes lit up. She thought it was beyond what was possible for her to implement. But she didn't dismiss it. She asked questions. Then she researched materials and costs. She priced out lumber and LEDs and microcontrollers. She drove across town to inspect acrylic on resale sites, calling Bob— <em>I'm here, I'm looking at it, could this work?</em> She bought two pieces on the spot because a good deal doesn't wait.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          She decided the full vision was within reach in terms of time, budget and capability. And then she built it.
        </p>
      </section>

      <div className="border-t-2 border-gray-200 my-12"></div>

      {/* The Building Begins */}
      <section className="px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          The floor was a rectangular wooden grid — sturdy lumber forming a frame of foot-square cells.
        </p>
        
        <div className="my-12">
          <img 
            src={`${basePath}/photos/IMG_1530.jpeg`}
            alt="Clamping a wood glue-up on a workbench"
            className="w-full rounded-lg shadow-2xl"
          />
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            Bar clamps tightening a wood glue-up on the workbench
          </p>
        </div>
      </section>

      {/* Wiring & Electronics */}
      <section className="px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          Under each cell: individually addressable RGB LEDs wired through a harness of connectors, soldered by hand. Over each cell: acrylic, sanded to a frost so the light would diffuse evenly across the square.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          She learned to solder with mentorship from Bob — connecting colored wires in precise patterns, slipping heat-shrink tubing over each joint, sealing it with a heat gun. She was good at it. Better than some who had done it before.
        </p>

        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div>
            <img 
              src={`${basePath}/photos/IMG_1593.jpeg`}
              alt="RGB LEDs being wired in wooden frame"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-sm text-gray-600 text-center mt-4 italic">
              Wiring RGB LEDs inside the wooden frame
            </p>
          </div>
          <div>
            <img 
              src={`${basePath}/photos/IMG_1597.jpeg`}
              alt="Close-up of stripped wires in alligator clips"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-sm text-gray-600 text-center mt-4 italic">
              Prepping wires for LED connections
            </p>
          </div>
        </div>
      </section>

      {/* Assembly Progress */}
      <section className="px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          She carefully peeled the protective backing off the acrylic in one piece — slowly, patiently folding it back on itself so it wouldn't tear. She drilled through acrylic and wood. She was there for every step — the wiring, the assembly, the testing.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          Bob designed the engineering. He solved the structural problems and often pulled her into the problem-solving so she could see it and contribute. She showed up week after week — once a week at first, then twice as the deadline approached.
        </p>

        <div className="space-y-12 my-12">
          <div>
            <img 
              src={`${basePath}/photos/IMG_1534.jpeg`}
              alt="Partially assembled disco floor"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-sm text-gray-600 text-center mt-4 italic">
              Progress: Some cells with LEDs mounted, others still empty
            </p>
          </div>
          
          <div>
            <img 
              src={`${basePath}/photos/IMG_1681.jpeg`}
              alt="Completed disco floor grid with all LEDs mounted"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-sm text-gray-600 text-center mt-4 italic">
              Complete: All LED modules mounted in the grid
            </p>
          </div>
        </div>
      </section>

      {/* The Payoff */}
      <section className="px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800 mb-8">
          A microcontroller ran the color patterns across the floor — reds, blues, greens, pinks, teals shifting and cycling through each cell. Bob customized the code so the patterns looked good across the columns. Melinda said she was curious to learn the programming someday. That door is still open.
        </p>

        <div className="my-12">
          <video 
            src={`${basePath}/photos/IMG_1616.mov`}
            controls
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg shadow-2xl"
          />
          <p className="text-sm text-gray-600 text-center mt-4 italic">
            The floor comes alive — colors cycling in the darkness
          </p>
        </div>
      </section>

      <div className="border-t-2 border-gray-200 my-12"></div>

      {/* Conclusion */}
      <section className="prose prose-lg max-w-none px-4 py-12">
        <p className="text-lg leading-relaxed text-gray-800">
          She saw something in her mind — a glowing dance floor in a darkened room, her best friend's joy, a party no one would forget — and she made it exist in the physical world. Piece by piece. Wire by wire. Solder joint by solder joint.
        </p>
        <p className="text-lg leading-relaxed text-gray-800 mt-6">
          This is what she does. She envisions, she plans, she builds, she delivers. She did it with her business. She did it with this floor. She will do it with whatever comes next.
        </p>
        <p className="text-xl font-semibold text-gray-900 text-center mt-12 mb-8">
          So, Melinda — what will you manifest next?
        </p>
        <p className="text-lg text-gray-700 text-center italic">
          Whenever you're ready, the world is your workshop! And it is patiently waiting for you.
        </p>
      </section>
    </div>
  );
}
