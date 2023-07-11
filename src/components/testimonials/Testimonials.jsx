import React from 'react'
import './testimonials.css'
// pic must be 150 x 150 for best results
import AVTR1 from '../../assets/ye2.png'
import AVTR2 from '../../assets/darya.png'
import AVTR3 from '../../assets/gian.png'

// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
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
  {
    avatar: AVTR1,
    name: 'Kanye West',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita placeat suscipit, voluptas dolores pariatur perferendis. Consequatur neque error sequi minus nisi quibusdam officiis sit atque, ducimus omnis deserunt soluta deleniti ab tempora libero reprehenderit repellat veritatis enim modi? Non nulla optio deserunt facilis impedit suscipit, culpa vel temporibus saepe illum blanditiis rerum accusantium reprehenderit doloremque exercitationem in inventore dolor.'
  },
  {
    avatar: AVTR1,
    name: 'Kanye West',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias expedita placeat suscipit, voluptas dolores pariatur perferendis. Consequatur neque error sequi minus nisi quibusdam officiis sit atque, ducimus omnis deserunt soluta deleniti ab tempora libero reprehenderit repellat veritatis enim modi? Non nulla optio deserunt facilis impedit suscipit, culpa vel temporibus saepe illum blanditiis rerum accusantium reprehenderit doloremque exercitationem in inventore dolor.'
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