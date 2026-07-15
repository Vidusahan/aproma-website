import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';
import { fadeUp } from '../../utils/motion';

/** Blog listing card with category badge and meta row. */
export default function BlogCard({ post, index = 0 }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-soft"
    >
      <Link to={`/blog/${post.id}`} className="flex h-full flex-col">
        <div className="relative h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute left-5 top-5 rounded-full bg-accent px-3.5 py-1.5 text-xs font-bold text-dark">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <FiCalendar aria-hidden="true" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock aria-hidden="true" /> {post.readTime}
            </span>
          </div>
          <h3 className="mt-3 text-lg font-bold leading-snug text-dark transition-colors group-hover:text-primary line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm text-slate-500 line-clamp-3">{post.excerpt}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read article <FiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
