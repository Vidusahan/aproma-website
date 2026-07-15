import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiSearch, FiArrowRight, FiCalendar } from 'react-icons/fi';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import CTA from '../components/sections/CTA';
import { blogs, blogCategories } from '../data/blogs';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

const PAGE_SIZE = 6;

export default function Blog() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const featured = blogs.find((b) => b.featured);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return blogs.filter((b) => {
      const catOk = category === 'All' || b.category === category;
      const qOk =
        !q || b.title.toLowerCase().includes(q) || b.excerpt.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [category, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const shown = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <SEO
        title="Blog"
        description="Solar energy guides, tariff explainers and technology insights for Sri Lankan homes and businesses — from the Aproma Energy team."
        keywords="solar blog Sri Lanka, net metering guide, solar loan guide"
      />
      <PageHeader
        title="Solar Insights & Guides"
        subtitle="Plain-language articles on going solar in Sri Lanka — tariffs, technology and real numbers."
        breadcrumb={[{ label: 'Blog' }]}
        image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="section">
        <div className="container-x">
          {/* Featured post */}
          {featured && category === 'All' && !search && page === 1 && (
            <motion.article
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group mb-16 grid overflow-hidden rounded-[2rem] bg-white shadow-card transition-shadow hover:shadow-soft lg:grid-cols-2"
            >
              <div className="relative h-72 overflow-hidden lg:h-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-6 top-6 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-dark">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="flex items-center gap-2 text-sm text-slate-400">
                  <FiCalendar aria-hidden="true" /> {featured.date} · {featured.readTime}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-dark md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-slate-500">{featured.excerpt}</p>
                <Link
                  to={`/blog/${featured.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-all hover:gap-3.5"
                >
                  Read the article <FiArrowRight aria-hidden="true" />
                </Link>
              </div>
            </motion.article>
          )}

          {/* Toolbar: categories + search */}
          <div className="mb-12 flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Filter articles by category">
              {blogCategories.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => {
                    setCategory(c);
                    setPage(1);
                  }}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                    category === c
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-light text-slate-600 hover:bg-primary-50 hover:text-primary'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-xs">
              <FiSearch
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-search"
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
                placeholder="Search articles…"
                className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-5 text-sm focus:border-primary"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {shown.map((b, i) => (
              <BlogCard key={b.id} post={b} index={i} />
            ))}
          </motion.div>

          {shown.length === 0 && (
            <p className="py-16 text-center text-slate-400">
              No articles match your search. Try a different term or category.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="mt-14 flex justify-center gap-2" aria-label="Blog pagination">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  aria-current={page === i + 1 ? 'page' : undefined}
                  className={`h-11 w-11 rounded-full text-sm font-semibold transition-all ${
                    page === i + 1
                      ? 'bg-primary text-white shadow-soft'
                      : 'bg-light text-slate-600 hover:bg-primary-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
