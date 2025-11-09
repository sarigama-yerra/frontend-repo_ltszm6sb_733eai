import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Years of baking joy', value: '10+' },
    { label: 'Happy mornings served', value: '5,000+' },
    { label: 'Pastries baked weekly', value: '1,200+' },
  ];

  return (
    <section id="about" className="relative bg-[#fffaf4] py-24 text-neutral-800">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?q=80&w=1974&auto=format&fit=crop"
            alt="Artisan bread on a rustic wooden surface"
            className="h-[420px] w-full rounded-2xl object-cover shadow-xl"
            loading="lazy"
          />
          <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-full bg-amber-200/60 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-rose-200/60 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Locally baked, lovingly served.</h2>
          <p className="mt-4 text-lg text-neutral-700">
            Every bite tells a story — crafted with care, passion, and the finest ingredients in Cairns.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-xl bg-white/70 p-4 text-center shadow-sm ring-1 ring-black/5 backdrop-blur"
              >
                <div className="font-serif text-2xl text-amber-700">{s.value}</div>
                <div className="text-xs text-neutral-600">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
