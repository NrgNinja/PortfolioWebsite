import React from 'react'
import './testimonials.css'
// pic must be 150 x 150 for best results
import AVTR2 from '../../assets/darya.png'
import AVTR3 from '../../assets/gian.png'
import AVTR4 from '../../assets/momal.png'
import AVTR5 from '../../assets/tom.png'
import AVTR6 from '../../assets/sundeep.png'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR6,
    name: 'Sundeep Bollipo - Engineering Manager at Autodesk',
    review: '"Renato has created a positive experience during his internship and it was fun working together. He demonstrated the skill set to conduct research, learn, implement, establish a feedback loop, & deliver the project outcomes. His ability to remain humble and work inclusively, while at the same time ensuring that requirements were understood & a continuous feedback loop is maintained, resulted in a successful project with a working model & detailed presentation. His adaptability to the changing environment is particularly impressive & has been essential to the success of the project!"'
  },
  {
    avatar: AVTR5,
    name: 'Tom Fowler - Senior Software Engineer at Autodesk',
    review: '“Renato joined our team as a summer intern, where he was tasked with automating anomaly detection in our service logs. It was really cool to see him ramp up and acquire the expertise needed to deliver a working solution. He was a pleasure to work with, always asked good questions and kept the team informed on critical project milestones.”'
  },
  {
    avatar: AVTR4,
    name: 'Momal Ijaz - Software Engineer at super.AI',
    review: '"I have personally worked with Renato, and I think that his drive for learning, his "getting-done" mindset, and his "going extra mile" attitude has really inspired me and helped us both pull off a research publication that got accepted into CVPR 2022! I would totally recommend him for potential great challenging projects. I can assure you he will surprise you!"'
  },
  {
    avatar: AVTR3,
    name: 'Gianfranco Amati - UI/UX Researcher at UCF',
    review: '"Renato\'s positive energy is contagious, fueling his incredible work ethic and passion for innovation. His attention to detail is unmatched, ensuring every project is executed flawlessly. Beyond his talents, Renato\'s thoughtfulness and excellent people skills make him a pleasure to work with. I am grateful to have worked with him in the past performing research & I\'m also super lucky to call him my friend.”'
  },
  {
    avatar: AVTR2,
    name: 'Darya Farsinejad - High Impact Practices Manager at UCF',
    review: '“Renato is a hard-working individual that exuberates a positive attitude and energy in any environment that he is in. He takes leadership to the next level with his unique creativity and care for his craft. I have had the pleasure of observing and working alongside Renato through multiple programs and events [with L.E.A.R.N.]. Renato is a mentor, team player, and most definitely a dedicated worker!”'
  },
]

const Testimonials = () =>
{
  return (
    <section id='testimonials'>
      <h5>Reviews From Faculty, Managers, & Professors</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {
          data.map(({ avatar, name, review }, index) =>
          {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt="profile pic"/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials