// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Myimg from "../imgs/remove.png";
import Myone from "../imgs/myone.jpg";
import Mytwo from "../imgs/mytwo.jpg";
import Mythree from "../imgs/mythree.jpg";
import Myfour from "../imgs/myfour.jpg";
import Myfive from "../imgs/myfive.jpg";
// import required modules
import { Pagination, Navigation } from "swiper";
function Me() {
  return (
    <>
      <div className="Me">
        <h2 className="home-subtitle">Hello I’m Hasanboy</h2>
        <p className="home-text">
          I work as a front-end developer in the city of Chust. I love to work
          on anything code, from designing simple HTML pages to solving complex
          problems. I love to illustrate as well.I am currently working mostly
          with the react library
        </p>
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
