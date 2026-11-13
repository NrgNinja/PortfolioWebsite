import React from 'react'
import './testimonials.css'

const data = [
  {
    name: 'Sundeep Bollipo',
    role: 'Senior Engineering Manager',
    company: 'Autodesk',
    review: '"Renato has created a positive experience during his internship and it was fun working together. He demonstrated the skill set to conduct research, learn, implement, establish a feedback loop, & deliver the project outcomes. His ability to remain humble and work inclusively, while at the same time ensuring that requirements were understood & a continuous feedback loop is maintained, resulted in a successful project with a working model & detailed presentation. His adaptability to the changing environment is particularly impressive & has been essential to the success of the project!"'
  },
  {
    name: 'Tom Fowler',
    role: 'Senior Software Engineer',
    company: 'Autodesk',
    review: '“Renato joined our team as a summer intern, where he was tasked with automating anomaly detection in our service logs. It was really cool to see him ramp up and acquire the expertise needed to deliver a working solution. He was a pleasure to work with, always asked good questions and kept the team informed on critical project milestones.”'
  },
  {
    name: 'Momal Ijaz',
    role: 'Senior AI Software Engineer',
    company: 'Revolut',
    review: '"I have personally worked with Renato, and I think that his drive for learning, his "getting-done" mindset, and his "going extra mile" attitude has really inspired me and helped us both pull off a research publication that got accepted into CVPR 2022! I would totally recommend him for potential great challenging projects. I can assure you he will surprise you!"'
  },
  {
    name: 'Gianfranco Amati',
    role: 'Avionics Technician',
    company: 'United States Air Force',
    review: '"Renato\'s positive energy is contagious, fueling his incredible work ethic and passion for innovation. His attention to detail is unmatched, ensuring every project is executed flawlessly. Beyond his talents, Renato\'s thoughtfulness and excellent people skills make him a pleasure to work with. I am grateful to have worked with him in the past performing research & I\'m also super lucky to call him my friend.”'
  },
  {
    name: 'Darya Farsinejad',
    role: 'Senior Specialist',
    company: 'Walt Disney World',
    review: '“Renato is a hard-working individual that exuberates a positive attitude and energy in any environment that he is in. He takes leadership to the next level with his unique creativity and care for his craft. I have had the pleasure of observing and working alongside Renato through multiple programs and events [with L.E.A.R.N.]. Renato is a mentor, team player, and most definitely a dedicated worker!”'
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ name, role, company, review }, index) => (
          <details className="testimonial" name="testimonials" key={name} open={index === 0}>
            <summary>
              <span className="client__name">{name}</span>
              <span className="client__role">{role} at {company}</span>
            </summary>
            <blockquote className="client__review">{review}</blockquote>
          </details>
        ))}
      </div>
    </section>
  )
}
