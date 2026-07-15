import { motion } from 'framer-motion';
import Breadcrumb from './Breadcrumb';

/** Dark hero band used at the top of every inner page. */
export default function PageHeader({ title, subtitle, breadcrumb = [], image }) {
  return (
    <header className="relative overflow-hidden bg-dark pt-32 pb-20 md:pt-40 md:pb-28">
      {image && (
        <img
          src={image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-20"
          loading="eager"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-primary-900/80" />
      <div className="container-x relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <Breadcrumb items={breadcrumb} />
          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl text-white leading-tight">{title}</h1>
          {subtitle && <p className="mt-5 text-lg text-slate-300">{subtitle}</p>}
        </motion.div>
      </div>
    </header>
  );
}
