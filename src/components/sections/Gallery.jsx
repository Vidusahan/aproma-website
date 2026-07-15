import { motion } from 'framer-motion';
import { scaleIn, staggerContainer, viewportOnce } from '../../utils/motion';

/** Responsive image grid with hover zoom. `images` = array of URLs. */
export default function Gallery({ images = [], alt = 'Project photo' }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className="grid grid-cols-2 gap-4 md:grid-cols-3"
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          variants={scaleIn}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <img
            src={src}
            alt={`${alt} ${i + 1}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
        </motion.div>
      ))}
    </motion.div>
  );
}
