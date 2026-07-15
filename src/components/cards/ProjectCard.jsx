import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiZap, FiTrendingDown, FiArrowRight } from 'react-icons/fi';
import { fadeUp } from '../../utils/motion';
import { caseStudies } from '../../data/projects';

/** Project portfolio card. Links to a case study when one exists for the project. */
export default function ProjectCard({ project, index = 0 }) {
  const hasCaseStudy = caseStudies.some((c) => c.id === project.id);

  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-card transition-shadow hover:shadow-soft"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-primary backdrop-blur">
          {project.category}
        </span>
        <div className="absolute bottom-5 left-5 right-5">
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-200">
            <FiMapPin aria-hidden="true" /> {project.location}
          </p>
        </div>
      </div>
      <div className="p-6">
        <dl className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <FiZap aria-hidden="true" /> Capacity
            </dt>
            <dd className="mt-1 font-bold text-dark">{project.capacity}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <FiTrendingDown aria-hidden="true" /> Savings
            </dt>
            <dd className="mt-1 font-bold text-primary">{project.savings}</dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-400">Completed {project.completed}</span>
          {hasCaseStudy ? (
            <Link
              to={`/case-studies/${project.id}`}
              className="inline-flex items-center gap-1.5 font-semibold text-primary hover:gap-2.5 transition-all"
            >
              View details <FiArrowRight aria-hidden="true" />
            </Link>
          ) : (
            <span className="text-slate-400">{project.client}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
