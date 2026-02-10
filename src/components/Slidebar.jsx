import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Images
import slide1 from "../assets/img/ten11_slide1.jpg";
import slide2 from "../assets/img/ten11_slide2.jpg";
import slide3 from "../assets/img/ten11_slide3.jpg";
import slide4 from "../assets/img/ten11_slide4.jpg";
import slide5 from "../assets/img/ten11_slide5.jpg";
import slide6 from "../assets/img/slide6.png";

const data = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3 },
  { id: 4, src: slide4 },
  { id: 5, src: slide5 },
  { id: 6, src: slide6 },
];

export default function Slidebar() {
  return (
    <div className="w-full relative group">
      {/* TAILWIND CUSTOMIZATION FOR SWIPER:
        1. [&_.swiper-button-prev]: Styles the PREV arrow
        2. [&_.swiper-pagination-bullet]: Styles the dots
        3. md:[&_...]: Applies styles only on Desktop
      */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full 
          /* --- Navigation Arrows (Hidden on Mobile, Visible on Desktop) --- */
          [&_.swiper-button-next]:hidden md:[&_.swiper-button-next]:flex
          [&_.swiper-button-prev]:hidden md:[&_.swiper-button-prev]:flex
          
          /* Arrow Styling */
          [&_.swiper-button-next]:w-12 [&_.swiper-button-next]:h-12
          [&_.swiper-button-prev]:w-12 [&_.swiper-button-prev]:h-12
          [&_.swiper-button-next]:bg-white/10 [&_.swiper-button-prev]:bg-white/10
          [&_.swiper-button-next]:backdrop-blur-sm [&_.swiper-button-prev]:backdrop-blur-sm
          [&_.swiper-button-next]:rounded-full [&_.swiper-button-prev]:rounded-full
          [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white
          [&_.swiper-button-next]:after:text-xl [&_.swiper-button-prev]:after:text-xl
          [&_.swiper-button-next]:after:font-bold [&_.swiper-button-prev]:after:font-bold
          
          /* Hover Effects */
          hover:[&_.swiper-button-next]:bg-white hover:[&_.swiper-button-next]:text-black
          hover:[&_.swiper-button-prev]:bg-white hover:[&_.swiper-button-prev]:text-black
          
          /* --- Pagination Dots --- */
          [&_.swiper-pagination-bullet]:bg-white/70 
          [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:h-2
          [&_.swiper-pagination-bullet-active]:w-6 [&_.swiper-pagination-bullet-active]:rounded-md
          [&_.swiper-pagination-bullet-active]:bg-white
        "
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            {/* Responsive Height Strategy:
               - h-[50vh]: Mobile (Small, easy to scroll past)
               - md:h-[70vh]: Tablet
               - lg:h-[85vh]: Desktop (Full Hero experience)
            */}
            <div className="relative w-full h-[40vh] sm:h-[60vh] md:h-[40vh] lg:h-[85vh]">
              
              {/* Image */}
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover "
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Content Wrapper */}
              <div className="absolute bottom-10 sm:bottom-16 md:bottom-24 w-full px-4 sm:px-10 flex flex-col items-center text-center">
                {/* Buttons */}
                <div className="grid grid-cols-2 gap-3 sm:gap-5 w-full max-w-[320px] sm:max-w-[450px]">
                  <Link
                    to="/product/men"
                    className="group relative overflow-hidden bg-white text-black 
                    py-3 sm:py-4 px-4 
                    text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase 
                    transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                  >
                    <span className="relative z-10 md:py-5">Shop Men</span>
                  </Link>

                  <Link
                    to="/product/woman"
                    className="group relative overflow-hidden border border-white text-white 
                    py-3 sm:py-4 px-4 
                    text-xs sm:text-sm md:text-base font-bold tracking-widest uppercase 
                    transition-all duration-300 hover:bg-white hover:text-black"
                  >
                    <span className="relative z-10">Shop Women</span>
                  </Link>
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}