import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiStar } from 'react-icons/fi';
import { testimonials } from '../../data/site';
import 'swiper/css';
import 'swiper/css/pagination';

/** Star rating row. */
function Stars({ rating }) {
  return (
    <div className="flex gap-1 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} aria-hidden="true" className={i < rating ? 'fill-accent' : 'opacity-30'} />
      ))}
    </div>
  );
}

/** Autoplaying testimonial carousel built on Swiper. */
export default function TestimonialSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{ 768: { slidesPerView: 2 }, 1280: { slidesPerView: 3 } }}
      className="!pb-14"
      aria-label="Customer testimonials"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.name} className="!h-auto">
          <figure className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-card">
            <Stars rating={t.rating} />
            <blockquote className="mt-5 flex-1 text-slate-600">“{t.quote}”</blockquote>
            <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
              <img
                src={t.photo}
                alt={t.name}
                loading="lazy"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-dark">{t.name}</p>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
