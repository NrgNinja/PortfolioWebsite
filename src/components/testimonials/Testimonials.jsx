import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/ye2.png'

// import Swiper core and required modules
import {Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
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
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                  {review}
                </small>
                {/* pic must be 150 x 150 */}
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials