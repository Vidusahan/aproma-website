import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

/** Breadcrumb trail. `items` = [{ label, to? }] — last item is the current page. */
export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-300">
        <li>
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <FiChevronRight aria-hidden="true" className="text-slate-400" />
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-secondary">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
