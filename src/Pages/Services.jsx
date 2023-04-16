import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Img from "../imgs/img.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
function Services() {
  return (
    <>
      <section className="services">
        <h3 className="services-title">Hizmatlar</h3>
        <div className="services-box">
          <div className="services-card">
            <div className="icon-box">
              <i class="bx bxs-cog"></i>
            </div>
            <h4 className="card-title">
              Kompyuterlarga texnik hizmat ko'rsatish
            </h4>
            <p>
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS, JavaScript
            </p>
          </div>
          <div className="services-card">
            <div className="icon-box">
              <i class="bx bxl-figma"></i>
            </div>
            <h4 className="card-title">Web dizayn yaratish</h4>
            <p>
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS, JavaScript
            </p>
          </div>
          <div className="services-card">
            <div className="icon-box">
              <i class="bx bxl-react"></i>
            </div>
            <h4 className="card-title">Web sahifa yaratish</h4>
            <p>
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS, JavaScript
            </p>
          </div>
          <div className="services-card">
            <div className="icon-box">
              <i class="bx bxs-book-bookmark"></i>
            </div>
            <h4 className="card-title">Dasturlash boyicha ta'lim berish</h4>
            <p>
              Well organized and easy to understand Web building tutorials with
              lots of examples of how to use HTML, CSS, JavaScript
            </p>
          </div>
        </div>
        <div className="testimonials">
          <h3 className="services-title">Fikirlar</h3>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            // loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="test-img-box">
                <img src={Img} alt="" className="test-img" />
                <h5 className="test-name">Ozodbek Ziyodov</h5>
                <h6 className="test-prof">Front-end Developer</h6>
                <p className="test-text">
                  Designed and published by Måns Grebäck, Hastafi Pro is a bold
                  serif font reminiscent of old Casablanca, with both European
                  and North African influences. Combining bold thick weight with
                  sleek, elegant lines, Hastafi combines character with grace.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-img-box">
                <img src={Img} alt="" className="test-img" />
                <h5 className="test-name">Hasanboy Nurmuhammadov</h5>
                <h6 className="test-prof">Front-end Developer</h6>
                <p className="test-text">
                  Designed and published by Måns Grebäck, Hastafi Pro is a bold
                  serif font reminiscent of old Casablanca, with both European
                  and North African influences. Combining bold thick weight with
                  sleek, elegant lines, Hastafi combines character with grace.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="test-img-box">
                <img src={Img} alt="" className="test-img" />
                <h5 className="test-name">Hasanboy Naimov</h5>
                <h6 className="test-prof">Front-end Developer</h6>
                <p className="test-text">
                  Designed and published by Måns Grebäck, Hastafi Pro is a bold
                  serif font reminiscent of old Casablanca, with both European
                  and North African influences. Combining bold thick weight with
                  sleek, elegant lines, Hastafi combines character with grace.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Services;
