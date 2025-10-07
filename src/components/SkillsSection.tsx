import type { Skill } from '../types/resume'

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <div className='space-y-8'>
      <div className='border-b border-gray-200 pb-4'>
        <h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider'>
          Skills
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {skills.map((skillGroup, index) => (
          <div key={index} className='space-y-4'>
            <h3 className='text-sm font-medium text-gray-600 uppercase tracking-wider'>
              {skillGroup.category}
            </h3>
            <ul className='space-y-2'>
              {skillGroup.items.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className='text-gray-900 flex items-center'
                >
                  <span className='w-1.5 h-1.5 bg-gray-900 rounded-full mr-3 flex-shrink-0'></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
