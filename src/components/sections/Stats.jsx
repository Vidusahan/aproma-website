import { motion } from 'framer-motion';
import Counter from '../ui/Counter';
import { stats } from '../../data/site';
import { staggerContainer, fadeUp, viewportOnce } from '../../utils/motion';

/** Dark band with four animated counters. */
export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-dark py-20">
      {/* Subtle gradient glows */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-64 w-64 rounded-full bg-primary/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-x grid grid-cols-2 gap-10 lg:grid-cols-4"
      >
        {stats.map((s, i) => (
          <motion.div key={s.label} variants={fadeUp} custom={i}>
            <Counter value={s.value} suffix={s.suffix} label={s.label} light />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
