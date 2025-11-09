import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  useEffect(() => {
    const img = new Image();
    img.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop';
  }, []);

  return (
    <section id="home" ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[#fff8f1] text-neutral-900">
      {/* Background image with parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop"
          alt="Freshly baked pastries and coffee at Woodward St Bakery Café"
          className="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#fff8f1]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md ring-1 ring-white/20"
        >
          <MapPin size={16} /> 216 Woodward St, Whitfield, QLD
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="font-serif text-4xl leading-tight text-white drop-shadow md:text-6xl"
        >
          Welcome to Woodward St Bakery Café
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mt-4 max-w-3xl text-base text-white/90 md:text-lg"
        >
          House-made pastries, gourmet toasties, freshly baked bread, and hot coffee.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="group relative inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-white shadow-lg transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span className="relative z-10 font-medium">View Menu</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-amber-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
          </a>
          <a
            href="#visit"
            className="group relative inline-flex items-center justify-center rounded-full bg-white/90 px-6 py-3 text-neutral-900 shadow-lg transition-transform duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            <span className="relative z-10 font-medium">Visit Us</span>
            <span className="pointer-events-none absolute inset-0 rounded-full bg-white opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, repeat: Infinity, repeatType: 'mirror', duration: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
        >
          <ArrowDown className="mx-auto" />
        </motion.div>
      </div>

      {/* Ambient particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/40"
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [-10, -40 - (i % 10), -80],
              x: [0, (i % 2 === 0 ? 1 : -1) * (10 + (i % 5) * 6)],
            }}
            transition={{ duration: 6 + (i % 5), delay: i * 0.12, repeat: Infinity }}
            style={{ top: `${10 + (i % 10) * 8}%`, left: `${(i * 37) % 100}%` }}
          />
        ))}
      </div>
    </section>
  );
}
