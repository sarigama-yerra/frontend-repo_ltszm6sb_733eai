import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function VisitContact() {
  return (
    <section id="visit" className="relative bg-[#fffaf4] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-5xl">Visit & Contact</h2>
          <p className="mt-2 text-neutral-700">We'd love to see you at our café in Whitfield.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5"
          >
            <iframe
              title="Woodward St Bakery Café Location"
              src="https://www.google.com/maps?q=216%20Woodward%20St,%20Whitfield,%20QLD%204870,%20Australia&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Contact */}
          <div className="grid grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="font-medium text-neutral-900">Address</div>
                    <div className="text-neutral-700">216 Woodward St, Whitfield 4870</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="font-medium text-neutral-900">Phone</div>
                    <div className="text-neutral-700">(07) 0000 0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 text-amber-700" />
                  <div>
                    <div className="font-medium text-neutral-900">Hours</div>
                    <div className="text-neutral-700">Open 7 AM – 3 PM (Breakfast everyday)</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onSubmit={(e) => e.preventDefault()}
              className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm text-neutral-700">Name</label>
                  <input type="text" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 outline-none ring-amber-500 focus:bg-white focus:ring-2" placeholder="Your name" />
                </div>
                <div>
                  <label className="mb-1 block text-sm text-neutral-700">Email</label>
                  <input type="email" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 outline-none ring-amber-500 focus:bg-white focus:ring-2" placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm text-neutral-700">Message</label>
                  <textarea rows="4" className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 outline-none ring-amber-500 focus:bg-white focus:ring-2" placeholder="How can we help?" />
                </div>
              </div>
              <button type="submit" className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-600 px-5 py-2 text-white shadow transition hover:bg-amber-700">
                <Send size={16} /> Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
