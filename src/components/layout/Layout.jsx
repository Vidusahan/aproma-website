import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { pageTransition } from '../../utils/motion';

/** Simple full-screen loader shown while lazy pages load. */
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-primary" />
    </div>
  );
}

/** App shell: navbar + animated routed page + footer. */
export default function Layout() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <AnimatePresence mode="wait">
          <motion.div key={location.pathname} {...pageTransition}>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
