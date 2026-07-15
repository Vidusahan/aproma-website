/**
 * Infinite CSS marquee of partner / client logos.
 * Logos are duplicated so the -50% translate loops seamlessly.
 */
export default function PartnerSlider({ items = [], grayscale = true }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden" role="region" aria-label="Partner logos">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="flex w-max animate-marquee items-center gap-14 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <img
            key={`${item.name}-${i}`}
            src={item.logo}
            alt={i < items.length ? item.name : ''}
            aria-hidden={i >= items.length}
            loading="lazy"
            className={`h-12 w-auto shrink-0 rounded-lg object-contain transition-all duration-300 ${
              grayscale ? 'grayscale opacity-60 hover:grayscale-0 hover:opacity-100' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
}
