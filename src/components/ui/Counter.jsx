import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/** Animated statistic counter that starts when scrolled into view. */
export default function Counter({ value, suffix = '', label, light = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="text-center">
      <div
        className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight ${
          light ? 'text-white' : 'text-primary'
        }`}
      >
        {inView ? <CountUp end={value} duration={2.4} separator="," /> : 0}
        <span className="text-accent">{suffix}</span>
      </div>
      <p className={`mt-2 text-sm md:text-base font-medium ${light ? 'text-slate-300' : 'text-slate-500'}`}>
        {label}
      </p>
    </div>
  );
}
