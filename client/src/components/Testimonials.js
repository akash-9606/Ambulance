import '../styles/Testimonials.css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import { StarIcon } from '@heroicons/react/24/solid';
import { testimonials } from './Data';

const Testimonial = () => {
  return (
    <section className='testimonials'>
      <div className='container'>
        <div className='text-content'>
          <h3>What People Are Saying</h3>
          <p>
            Real voices. Real impact. Discover how <strong>Smart Life Care</strong> is making emergency healthcare accessible, efficient, and compassionate.
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, EffectFade, Navigation]}
          loop={true}
          speed={800}
          effect='fade'
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.name}>
              <div className="testimonial-item">
                <img src={testimonial.src} alt={testimonial.name} className="testimonial-img" />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.job}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p>
                  <i className="quote">&#8220;</i>
                  {testimonial.comment}
                  <i className="quote">&#8221;</i>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

