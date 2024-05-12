// Importing necessary React and Swiper components
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import facultyImage from '../assets/img/t1.jpg';
import { Link } from 'react-router-dom';

SwiperCore.use([Autoplay, Pagination]);

function TeamHome() {
  // Sample data for team members
  const teamMembers = [
    { id: 1, image: "img/t1.jpg", role: "CEO", name: "Abbie Miller", links: ["In", "Tw", "Dr"] },
    { id: 2, image: "img/t2.jpg", role: "Senior Designer", name: "John Doe", links: ["In", "Tw", "Dr"] },
    { id: 3, image: "img/t1.jpg", role: "CEO", name: "Abbie Miller", links: ["In", "Tw", "Dr"] },
    { id: 4, image: "img/t2.jpg", role: "Senior Designer", name: "John Doe", links: ["In", "Tw", "Dr"] },
    { id: 1, image: "img/t1.jpg", role: "CEO", name: "Abbie Miller", links: ["In", "Tw", "Dr"] },
    { id: 2, image: "img/t2.jpg", role: "Senior Designer", name: "John Doe", links: ["In", "Tw", "Dr"] },
    { id: 3, image: "img/t1.jpg", role: "CEO", name: "Abbie Miller", links: ["In", "Tw", "Dr"] },
    { id: 4, image: "img/t2.jpg", role: "Senior Designer", name: "John Doe", links: ["In", "Tw", "Dr"] },
    // Add more members as required
  ];

  return (
    <div>
      <div className="section over-hide padding-top-120 padding-top-mob-nav ">
        <div className="section-1400 pt-xl-4">
          <div className="container-fluid padding-top-bottom-80">
            <div className="row">
              <div className="col-lg">
                <h2 className="display-8 mb-3">Expert Educators</h2>
                <p className="lead mb-0 title-text-left-line-small">at Lecturepedia</p>
              </div>
              <div className="col-lg-6 align-self-center mt-5 mt-lg-0 text-left text-lg-right">
                   <Link to="/" className="btn btn-dark-1 animsition-link">View All<i className="uil uil-arrow-right size-22 ml-3"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section over-hide padding-top-bottom-120 bg-light-2">
        <div className="section-1400">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="section swiper-team-2 padding-bottom-80 over-hide">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={30}
                    resistance={true}
                    resistanceRatio={0}
                    speed={500}
                    loop={true}
                    centeredSlides={false}
                    grabCursor={false}
                    freeMode={false}
                    touchStartPreventDefault={false}
                    pagination={{
                      el: '.swiper-pagination-bullets',
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      575: { slidesPerView: 2, loop: false },
                      991: { slidesPerView: 3, loop: false },
                      1199: { slidesPerView: 4, loop: true }
                    }}
                    className="swiper-wrapper"
                  >
                    {teamMembers.map((member) => (
                      <SwiperSlide className="swiper-slide" key={member.id}>
                        <div className="team-wrap-2 pb-4 img-wrap bg-white text-center">
                          <img src={facultyImage} alt={member.name} />
                          <h6 className="mb-1 mt-4">{member.name}</h6>
                          <p className="mb-1 color-secondary size-14">{member.role}</p>
                        </div>
                      </SwiperSlide>
                    ))}
                    <div className="swiper-pagination"></div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHome;
