import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../assets/img/ten11_slide1.jpg";
import slide2 from "../assets/img/ten11_slide2.jpg";
import slide3 from "../assets/img/ten11_slide3.jpg";
import slide4 from "../assets/img/ten11_slide4.jpg";
import slide5 from "../assets/img/ten11_slide5.jpg";
import slide6 from "../assets/img/slide6.png"
const data = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3 },
  { id: 4, src: slide4 },
  { id: 5, src: slide5},
  {id : 6,src: slide6 }
];

export default function Slidebar() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="w-full h-[35vh] pt-5 sm:h-[300px] md:h-[500px] lg:h-[110vh] lg:pt-5 mt-8">
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* btn in slide */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 w-full max-w-[300px] px-4">
                <Link
                  to="/product/men"
                  className="flex-1 bg-white text-black px-3 py-2.5 text-center font-bold text-sm rounded-md hover:bg-gray-100 transition shadow-md"
                >
                  SHOP MEN
                </Link>
                <Link
                  to="/product/woman"
                  className="flex-1 bg-white text-black px-3 py-2.5 text-center font-bold text-sm rounded-md hover:bg-gray-100 transition shadow-md"
                >
                  SHOP WOMAN
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}