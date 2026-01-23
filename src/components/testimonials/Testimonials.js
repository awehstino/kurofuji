import "./testimonials.css"
import lucho from "../../assets/lucho.jpg"
import faith from "../../assets/IMG-20230916-WA0096.jpg"


import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  let reviews = [{
  name : "Lucho",
  img : lucho,
  paragraph :"Augustine John is an exceptional Front-End Developer. His technical skills and dedication to delivering high-quality results are truly impressive."
   },
   {
    name : "Faith Akpan",
    img : faith,
    paragraph :"Working with Augustine was a great experience. He is a talented developer who brings creativity and precision to every project."
     }
  ]
  return (
    <section id="testimonials" data-aos="fade-up">
      <h5 >Review from partners</h5>
      <h2 >Testimonials</h2>
      <Swiper  className="container testimony_container"   modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}>
        {reviews.map(({name,img,paragraph},index)=>{
          return (
            <SwiperSlide className="testimonial" key={index}>
          <div className="card-border"></div>
          <div className="partner_avatar">
            <img src={img} alt="" />
          </div>
          <h5 className="partner_name">{name}</h5>
            <small className="partner_review">{paragraph}</small>
        </SwiperSlide>
          )
        })}

      </Swiper>
    </section>
  )
}

export default Testimonials