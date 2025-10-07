import ReactFullpage from '@fullpage/react-fullpage'
import { SkillsSection } from './SkillsSection'
import { ExperienceSection } from './ExperienceSection'
import { ProjectsSection } from './ProjectsSection'
import { resumeData } from '../data/resumeData'
// import ayushCasual from '../assets/ayush-casual.png'
import ayushArchitectural from '../assets/ayush-architectural.png'

export function Resume() {
  return (
    <div className='min-h-screen bg-white text-gray-900'>
      {/* Print styles - hidden on screen */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          .no-print {
            display: none;
          }
          .print-page {
            max-width: none;
            margin: 0;
            padding: 1rem;
          }
        }
        
        /* Fullpage.js custom styles */
        .fp-enabled body {
          overflow: hidden;
        }
        
        .section {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>

      <ReactFullpage
        scrollingSpeed={1000}
        navigation={true}
        navigationPosition={'right'}
        showActiveTooltip={true}
        sectionsColor={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
        credits={{ enabled: false }}
        render={({ fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              {/* Section 1: Hero/Portfolio Title */}
              <div className='section' data-anchor='hero'>
                <div className='w-full max-w-7xl mx-auto px-6 py-12'>
                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen'>
                    {/* Left Side - Title and Info */}
                    <div className='space-y-8'>
                      {/* Header with name */}
                      <div className='border-b border-gray-200 pb-6'>
                        <h1 className='text-sm font-medium text-gray-600 tracking-wider uppercase mb-2'>
                          {resumeData.contactInfo.name},{' '}
                          {resumeData.contactInfo.title}
                        </h1>
                      </div>

                      {/* Large Portfolio Title */}
                      <div className='space-y-4'>
                        <h2 className='text-8xl lg:text-9xl font-bold text-gray-900 leading-none tracking-tight'>
                          2025
                        </h2>
                        <h3 className='text-4xl lg:text-5xl font-bold text-gray-900 leading-none'>
                          Portfolio
                        </h3>
                      </div>

                      {/* View Work Button */}
                      <div className='pt-8'>
                        <button
                          onClick={() => fullpageApi?.moveSectionDown()}
                          className='px-8 py-3 border border-gray-900 text-gray-900 font-medium tracking-wider uppercase text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300'
                        >
                          VIEW MY WORK
                        </button>
                      </div>
                    </div>

                    {/* Right Side - Personal Images */}
                    <div className='grid grid-cols-1 gap-6 h-full'>
                      {/* Top Image - Casual Outdoor */}
                      {/* <div className='aspect-[4/3] bg-gray-100 rounded overflow-hidden'>
                        <img
                          src={ayushCasual}
                          alt='Ayush Gupta - Casual Photo'
                          className='w-full h-full object-cover'
                        />
                      </div> */}

                      {/* Bottom Image - Architectural Setting */}
                      <div className='aspect-[9/10] bg-gray-100 rounded overflow-hidden'>
                        <img
                          src={ayushArchitectural}
                          alt='Ayush Gupta - Professional Photo'
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Philosophy */}
              <div className='section' data-anchor='philosophy'>
                <div className='w-full max-w-7xl mx-auto px-6 py-12'>
                  <div className='space-y-12'>
                    <div className='border-b border-gray-200 pb-6'>
                      <h2 className='text-sm font-medium text-gray-600 tracking-wider uppercase'>
                        My Philosophy
                      </h2>
                    </div>

                    <div className='grid md:grid-cols-2 gap-16 items-start'>
                      {/* Left side - Architectural image */}
                      <div className='aspect-[4/3] bg-gray-100 overflow-hidden'>
                        <img
                          src='https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop&crop=entropy'
                          alt='Architectural Structure'
                          className='w-full h-full object-cover grayscale'
                        />
                      </div>

                      {/* Right side - Philosophy text */}
                      <div className='flex items-center'>
                        <p className='text-lg leading-relaxed text-gray-900'>
                          {resumeData.philosophy}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: My Background */}
              <div className='section' data-anchor='background'>
                <div className='w-full max-w-7xl mx-auto px-6 py-12'>
                  <div className='space-y-12'>
                    <div className='border-b border-gray-200 pb-6'>
                      <h2 className='text-sm font-medium text-gray-600 tracking-wider uppercase'>
                        My Background
                      </h2>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-16'>
                      {/* Skills Column */}
                      <div className='lg:col-span-1'>
                        <SkillsSection skills={resumeData.skills} />
                      </div>

                      {/* Experience Column */}
                      <div className='lg:col-span-2'>
                        <ExperienceSection experience={resumeData.experience} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 4: Projects */}
              <div className='section' data-anchor='projects'>
                <div className='w-full max-w-6xl mx-auto px-6 py-12'>
                  <ProjectsSection projects={resumeData.projects} />
                </div>
              </div>

              {/* Section 5: Contact */}
              <div className='section' data-anchor='contact'>
                <div className='w-full h-full px-4 md:px-8 py-6 md:py-8'>
                  <div className='h-full flex flex-col justify-between'>
                    {/* Header with name in top right */}
                    {/* <div className='flex justify-end'>
                      <div className='text-right'>
                        <p className='text-base md:text-lg font-normal text-gray-900'>
                          {resumeData.contactInfo.name}
                        </p>
                      </div>
                    </div> */}

                    {/* Main title - left aligned and vertically centered */}
                    <div className='flex-1 flex items-center justify-start'>
                      <div>
                        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-none'>
                          Contact
                          <br />
                          Information
                        </h1>
                      </div>
                    </div>

                    {/* Footer - Contact details and button */}
                    <div className='flex mt-64 flex-col lg:flex-row lg:justify-between lg:items-end space-y-8 lg:space-y-0'>
                      {/* Contact Details in horizontal layout */}
                      <div className='flex flex-col sm:flex-row sm:space-x-8 md:space-x-12 lg:space-x-20 space-y-6 sm:space-y-0'>
                        {/* Address */}
                        <div className='space-y-2 md:space-y-3'>
                          <h3 className='text-xs md:text-sm font-bold text-gray-900 tracking-wider uppercase'>
                            ADDRESS
                          </h3>
                          <div className='text-sm md:text-base text-gray-900 leading-relaxed'>
                            <p>Pune, India</p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className='space-y-2 md:space-y-3'>
                          <h3 className='text-xs md:text-sm font-bold text-gray-900 tracking-wider uppercase'>
                            EMAIL
                          </h3>
                          <div className='text-sm md:text-base text-gray-900'>
                            <a
                              href={`mailto:${resumeData.contactInfo.email}`}
                              className='hover:text-gray-600 transition-colors break-all md:break-normal'
                            >
                              {resumeData.contactInfo.email}
                            </a>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className='space-y-2 md:space-y-3'>
                          <h3 className='text-xs md:text-sm font-bold text-gray-900 tracking-wider uppercase'>
                            PHONE
                          </h3>
                          <div className='text-sm md:text-base text-gray-900'>
                            <a
                              href={`tel:${resumeData.contactInfo.phone}`}
                              className='hover:text-gray-600 transition-colors'
                            >
                              {resumeData.contactInfo.phone}
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Get in Touch Button */}
                      {/* <div className='flex justify-center lg:justify-end'>
                        <button className='px-6 md:px-8 py-2 md:py-3 border border-gray-900 text-gray-900 font-medium tracking-wider uppercase text-xs md:text-sm hover:bg-gray-900 hover:text-white transition-colors duration-300'>
                          GET IN TOUCH
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          )
        }}
      />
    </div>
  )
}
