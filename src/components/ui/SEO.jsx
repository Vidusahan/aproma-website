import { Helmet } from 'react-helmet-async';

/** Per-page SEO tags: title, description, keywords and Open Graph. */
export default function SEO({ title, description, keywords, image }) {
  const fullTitle = `${title} | Aproma Energy Solutions (Pvt) Ltd`;
  const ogImage =
    image ||
    'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80';
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
