// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Myimg from "../imgs/men.jpg";
import Myone from "../imgs/me4.jpg";
import Mytwo from "../imgs/me-3.jpg";
import Mythree from "../imgs/mythree.jpg";
import Myfour from "../imgs/myfour.jpg";
import Myfive from "../imgs/myfive.jpg";
// import required modules
import { Pagination, Navigation } from "swiper";
function Me() {
  return (
    <>
      <div className="Me">
        <h2 className="home-subtitle">
          Salom bu yerda shaxsiy rasmlarimni ko'rishingiz mumkin
        </h2>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            320: {
              //   width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            576: {
              //   width: 768,
              slidesPerView: 2,
            },
            768: {
              //   width: 768,
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              //   width: 768,
              slidesPerView: 3,
            },
          }}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="me-img" src={Myimg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="me-img" src={Myone} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="me-img" src={Mytwo} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="me-img" src={Mythree} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="me-img" src={Myfour} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="me-img" src={Myfive} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Me;
