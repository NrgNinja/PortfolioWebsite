import React from 'react'
import './experience.css'

const skills = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'C#', 'Python', 'Java', 'Rust', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks and platforms',
    items: ['.NET', 'WPF', 'XAML', 'React', 'Unity', 'Linux', 'Microsoft Access'],
  },
  {
    title: 'Testing and debugging',
    items: ['Unit, integration, and regression testing', 'Coverity', 'Valgrind', 'Embedded debugging with TRACE32', 'RS-232 & RS-422', 'SCPI'],
  },
  {
    title: 'Development tools',
    items: ['Git', 'GitHub', 'Subversion', 'TortoiseSVN', 'Jira', 'Visual Studio', 'VS Code'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        {skills.map(({ title, items }) => (
          <div key={title}>
            <h3>{title}</h3>
            <ul className="experience__content">
              {items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
