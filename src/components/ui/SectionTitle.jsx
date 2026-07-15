import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../utils/motion';

/** Consistent section heading block: eyebrow label + heading + optional lead text. */
export default function SectionTitle({ eyebrow, title, text, align = 'center', light = false }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-4 ${alignClass} mb-12 md:mb-16`}
    >
      {eyebrow && <span className={`eyebrow ${light ? 'text-secondary' : ''}`}>{eyebrow}</span>}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl leading-tight ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {text && <p className={`text-lg ${light ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>}
    </motion.div>
  );
}
