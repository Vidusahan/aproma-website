import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Reusable button with a material-style ripple on click.
 * Renders a <Link> when `to` is provided, an <a> when `href` is provided,
 * otherwise a native <button>.
 */
const variants = {
  primary:
    'bg-primary text-white hover:bg-primary-800 shadow-soft hover:shadow-glow',
  secondary:
    'bg-white text-primary border border-primary/20 hover:border-primary hover:bg-primary-50',
  accent: 'bg-accent text-dark hover:bg-amber-400 shadow-soft',
  ghost: 'bg-white/10 text-white border border-white/30 backdrop-blur hover:bg-white/20',
  dark: 'bg-dark text-white hover:bg-slate-800',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm md:text-base',
  lg: 'px-8 py-4 text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = {
      id: Date.now(),
      x: e.clientX - rect.left - size / 2,
      y: e.clientY - rect.top - size / 2,
      size,
    };
    setRipples((r) => [...r, ripple]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== ripple.id)), 600);
  };

  const classes = `relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full bg-white/40 animate-ping"
          style={{ left: r.x, top: r.y, width: r.size, height: r.size, animationDuration: '600ms' }}
        />
      ))}
    </>
  );

  if (to)
    return (
      <Link to={to} className={classes} onClick={addRipple} {...props}>
        {content}
      </Link>
    );
  if (href)
    return (
      <a href={href} className={classes} onClick={addRipple} {...props}>
        {content}
      </a>
    );
  return (
    <button className={classes} onClick={(e) => { addRipple(e); props.onClick?.(e); }} {...props}>
      {content}
    </button>
  );
}
