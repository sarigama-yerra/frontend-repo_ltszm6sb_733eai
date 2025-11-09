import { motion } from 'framer-motion';

const items = [
  {
    title: 'Pastries',
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=1887&auto=format&fit=crop',
    desc: 'House-made, flaky, and golden.'
  },
  {
    title: 'Gourmet Toasties',
    img: 'https://images.unsplash.com/photo-1565895405135-6d38e39f86a1?q=80&w=1974&auto=format&fit=crop',
    desc: 'Melted, layered, and satisfying.'
  },
  {
    title: 'Fresh Bread',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop',
    desc: 'Baked daily with time-honoured methods.'
  },
  {
    title: 'Coffee',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop',
    desc: 'Rich, smooth, and locally roasted.'
  },
  {
    title: 'Breakfasts',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1974&auto=format&fit=crop',
    desc: 'Start your day deliciously.'
  },
  {
    title: 'Catering',
    img: 'https://images.unsplash.com/photo-1543352634-8730a9e52c38?q=80&w=1974&auto=format&fit=crop',
    desc: 'Beautiful spreads for any occasion.'
  }
];

export default function MenuHighlights() {
  return (
    <section id="menu" className="bg-[#fff8f1] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Menu Highlights</h2>
            <p className="mt-2 text-neutral-700">A taste of our favourites.</p>
          </div>
          <a href="#" className="hidden rounded-full border border-amber-600 px-5 py-2 text-amber-700 transition-colors hover:bg-amber-600 hover:text-white md:inline-block">View Full Menu</a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-90" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-serif text-2xl text-white drop-shadow">{item.title}</h3>
                <p className="mt-1 max-w-xs text-white/90">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <a href="#" className="rounded-full border border-amber-600 px-5 py-2 text-amber-700 transition-colors hover:bg-amber-600 hover:text-white">View Full Menu</a>
        </div>
      </div>
    </section>
  );
}
