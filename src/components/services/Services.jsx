import React from 'react'
import './services.css'

const roles = [
  {
    title: 'Software Engineer',
    company: 'Honeywell Aerospace',
    dates: 'January 2025 – Present',
    bullets: [
      'Built an internal factory-loading tool from scratch using C# and WPF. It simplified the interface and loaded units under test up to four times as fast as the legacy tool.',
      'Develop and maintain aerospace test software, including tools that communicate with test equipment over USB-to-RS-422 connections.',
      'Take software changes through implementation, regression testing, peer review, formal qualification, and release.',
      'Debug embedded systems and test equipment, and use static analysis to identify and fix resource leaks.',
      'Maintain technical documentation and collaborate through code reviews, pair programming, and intern mentoring.',
    ],
  },
  {
    title: 'Big Data Software Engineering Research Intern',
    company: 'Illinois Tech',
    dates: 'May – August 2024',
    bullets: [
      'Built a multithreaded Rust tool for cryptographic hashing in Proof-of-Space research.',
      'Wrote Bash and Python benchmarks to compare throughput and latency.',
      'Worked with the DataSys Lab team to prepare research findings for submission.',
      'Co-authored a research paper on the project and helped prepare a poster that was presented at two research conferences.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Autodesk',
    dates: 'May – August 2023',
    bullets: [
      'Improved automated anomaly detection for cloud licensing services using Java.',
      'Built three Kibana detectors and monitors for unusual activity in service logs.',
      'Integrated Slack notifications to surface anomalies for the engineering team.',
    ],
  },
  {
    title: 'Software Engineering Intern',
    company: 'Endpoint',
    dates: 'June – September 2022',
    bullets: [
      'Wrote Python unit and integration tests to validate REST APIs on the Automation Squad.',
      'Added test cases for expected API behavior to the CI/CD pipeline to reduce manual verification.',
    ],
  },
]

export default function Services() {
  return (
    <section id="services">
      <h2>Work Experience</h2>
      <div className="container services__container">
        {roles.map(({ title, company, dates, bullets }) => (
          <article className="service" key={company}>
            <div className="service__head">
              <h3>{company}</h3>
              <p>{title}</p>
              {dates && <small>{dates}</small>}
            </div>
            <ul className="service__list">
              {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
