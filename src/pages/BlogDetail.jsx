import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiUser, FiLink } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';
import { useState } from 'react';
import SEO from '../components/ui/SEO';
import PageHeader from '../components/ui/PageHeader';
import BlogCard from '../components/cards/BlogCard';
import SectionTitle from '../components/ui/SectionTitle';
import CTA from '../components/sections/CTA';
import { blogs, getBlogById } from '../data/blogs';
import { fadeUp, staggerContainer, viewportOnce } from '../utils/motion';

/** Social share buttons for the current article URL. */
function ShareButtons({ title }) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent;

  const links = [
    {
      icon: <FaFacebookF />,
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`,
    },
    {
      icon: <FaXTwitter />,
      label: 'Share on X',
      href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    },
    {
      icon: <FaLinkedinIn />,
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    },
    {
      icon: <FaWhatsapp />,
      label: 'Share on WhatsApp',
      href: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
    },
  ];

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-semibold text-slate-400">Share:</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
        >
          {l.icon}
        </a>
      ))}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-light text-slate-500 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-white"
      >
        <FiLink />
      </button>
      {copied && <span className="text-xs font-medium text-primary">Link copied</span>}
    </div>
  );
}

export default function BlogDetail() {
  const { id } = useParams();
  const post = getBlogById(id);

  if (!post) return <Navigate to="/blog" replace />;

  const related = blogs.filter((b) => b.id !== id && b.category === post.category).slice(0, 3);
  const fallbackRelated = related.length
    ? related
    : blogs.filter((b) => b.id !== id).slice(0, 3);

  return (
    <>
      <SEO title={post.title} description={post.excerpt} image={post.image} />
      <PageHeader
        title={post.title}
        breadcrumb={[{ label: 'Blog', to: '/blog' }, { label: post.category }]}
        image={post.image}
      />

      <article className="section">
        <div className="container-x mx-auto max-w-3xl">
          {/* Meta row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-5 border-b border-slate-100 pb-8 text-sm text-slate-400"
          >
            <span className="flex items-center gap-1.5">
              <FiUser aria-hidden="true" /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <FiCalendar aria-hidden="true" /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <FiClock aria-hidden="true" /> {post.readTime}
            </span>
            <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold text-primary">
              {post.category}
            </span>
          </motion.div>

          {/* Body */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 space-y-6"
          >
            {post.content.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-lg leading-relaxed text-slate-600"
              >
                {para}
              </motion.p>
            ))}
          </motion.div>

          {/* Share */}
          <div className="mt-12 border-t border-slate-100 pt-8">
            <ShareButtons title={post.title} />
          </div>
        </div>
      </article>

      {/* Related posts */}
      <section className="section bg-light">
        <div className="container-x">
          <SectionTitle eyebrow="Keep Reading" title="Related articles" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
          >
            {fallbackRelated.map((b, i) => (
              <BlogCard key={b.id} post={b} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
