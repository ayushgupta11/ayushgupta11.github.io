import type { Project } from '../types/resume'

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className='space-y-8'>
      <div className='border-b border-gray-200 pb-4'>
        <h2 className='text-sm font-medium text-gray-600 uppercase tracking-wider'>
          Selected Projects
        </h2>
      </div>

      <div className='grid md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <div key={index} className='space-y-4'>
            {/* Project Header */}
            <div className='flex justify-between items-start'>
              <div>
                <h3 className='text-lg font-medium text-gray-900'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-600'>{project.year}</p>
              </div>
              {project.status && (
                <span className='px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded'>
                  {project.status}
                </span>
              )}
            </div>

            {/* Project Image Placeholder */}
            <div className='aspect-[4/3] bg-gray-50 rounded border flex items-center justify-center'>
              <div className='text-center text-gray-600 flex'>
                {/* <div className='w-12 h-12 mx-auto mb-2 bg-gray-100 rounded flex items-center justify-center'>
                  <span className='text-sm'>📐</span>
                </div>
                <p className='text-xs'>Project Image</p> */}
                <img
                  src={project.image}
                  alt='image'
                  className='w-full h-full aspect-[3/2]'
                />
              </div>
            </div>

            {/* Project Description */}
            <p className='text-gray-600 text-sm leading-relaxed'>
              {project.description}
            </p>

            {/* Technologies/Materials */}
            <div className='space-y-2'>
              <p className='text-xs font-medium text-gray-600 uppercase tracking-wider'>
                Materials & Techniques
              </p>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
