import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import {
  FiHome, FiBriefcase, FiBatteryCharging, FiZap, FiTool, FiWind, FiTruck, FiBarChart2,
} from 'react-icons/fi';
import { fadeUp } from '../../utils/motion';

// Icon lookup keyed by the `icon` field in services data
const icons = {
  home: <FiHome />,
  building: <FiBriefcase />,
  factory: <FiTool />,
  hybrid: <FiZap />,
  offgrid: <FiWind />,
  battery: <FiBatteryCharging />,
  ev: <FiTruck />,
  audit: <FiBarChart2 />,
};

/** Card linking to a service detail page, with hover lift + image zoom. */
export default function ServiceCard({ service, index = 0 }) {
  return (
    <motion.article
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-white shadow-card transition-shadow duration-300 hover:shadow-soft"
    >
      <Link to={`/services/${service.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
          <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/90 text-xl text-primary backdrop-blur">
            {icons[service.icon] || <FiZap />}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-dark transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">{service.short}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Learn more
            <FiArrowUpRight
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
