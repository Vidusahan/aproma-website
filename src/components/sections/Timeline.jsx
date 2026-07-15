import { motion } from 'framer-motion';
import { fadeUp, viewportOnce, staggerContainer } from '../../utils/motion';

/**
 * Vertical timeline used for the process section and company milestones.
 * `items` = [{ title, text, year? }]. When `numbered`, steps show 01/02/…
 */
export default function Timeline({ items = [], numbered = false }) {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="relative mx-auto max-w-3xl space-y-10 before:absolute before:left-6 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-secondary before:via-primary before:to-primary-100 md:before:left-8"
    >
      {items.map((item, i) => (
        <motion.li key={i} variants={fadeUp} custom={i} className="relative flex gap-6 pl-0 md:gap-8">
          <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-extrabold text-primary shadow-card ring-1 ring-primary/10 md:h-16 md:w-16 md:text-base">
            {item.year || (numbered ? String(i + 1).padStart(2, '0') : i + 1)}
          </span>
          <div className="pt-1 md:pt-3">
            <h3 className="text-lg font-bold text-dark md:text-xl">{item.title}</h3>
            <p className="mt-1.5 text-slate-500">{item.text}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
