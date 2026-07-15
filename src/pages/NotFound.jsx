import SEO from '../components/ui/SEO';
import Button from '../components/ui/Button';
import { FiSun } from 'react-icons/fi';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you’re looking for doesn’t exist." />
      <section className="flex min-h-screen flex-col items-center justify-center bg-light px-4 text-center">
        <FiSun className="text-6xl text-accent" aria-hidden="true" />
        <h1 className="mt-6 text-7xl font-extrabold text-primary md:text-9xl">404</h1>
        <p className="mt-4 text-xl font-semibold text-dark">This page is off the grid.</p>
        <p className="mt-2 max-w-md text-slate-500">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back to the light.
        </p>
        <Button to="/" size="lg" className="mt-8">
          Back to Home
        </Button>
      </section>
    </>
  );
}
