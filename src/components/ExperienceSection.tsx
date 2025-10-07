import type { Experience } from '../types/resume'

interface ExperienceSectionProps {
  experience: Experience[]
}

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <div className='space-y-8'>
      <div className='border-b border-gray-200 pb-4'>
        <h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider'>
          Experience
        </h2>
      </div>

      <div className='space-y-8'>
        {experience.map((exp, index) => (
          <div key={index} className='grid md:grid-cols-3 gap-6'>
            {/* Company and Duration */}
            <div className='space-y-2'>
              <h3 className='font-medium text-gray-900'>{exp.company}</h3>
              <p className='text-sm text-gray-600'>{exp.duration}</p>
              {exp.location && (
                <p className='text-sm text-gray-600'>{exp.location}</p>
              )}
            </div>

            {/* Position and Description */}
            <div className='md:col-span-2 space-y-3'>
              <h4 className='font-medium text-gray-900'>{exp.position}</h4>
              <ul className='space-y-2'>
                {exp.description.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className='text-gray-600 flex items-start'
                  >
                    <span className='w-1.5 h-1.5 bg-gray-900 rounded-full mr-3 mt-2 flex-shrink-0'></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
