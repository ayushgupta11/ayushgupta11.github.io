import type { ContactInfo } from '../types/resume'

interface ResumeHeaderProps {
  contactInfo: ContactInfo
  philosophy?: string
}

export function ResumeHeader({ contactInfo, philosophy }: ResumeHeaderProps) {
  return (
    <div className='space-y-8'>
      {/* Name and Title Section */}
      <div className='border-b border-gray-200 pb-8'>
        <div className='flex flex-col md:flex-row md:justify-between md:items-start gap-6'>
          <div className='flex-1'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-900 mb-2'>
              {contactInfo.name}
            </h1>
            <p className='text-xl text-gray-600'>{contactInfo.title}</p>
          </div>

          {/* Contact Information */}
          <div className='md:text-right space-y-1 text-sm text-gray-600'>
            <div className='bg-gray-50 p-4 rounded border'>
              <div className='space-y-1'>
                <p>{contactInfo.email}</p>
                <p>{contactInfo.phone}</p>
                <div className='text-xs whitespace-pre-line'>
                  {contactInfo.address}
                </div>
                {contactInfo.website && (
                  <p className='text-gray-900'>{contactInfo.website}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      {philosophy && (
        <div className='max-w-3xl'>
          <h2 className='text-sm font-medium text-gray-600 mb-4 uppercase tracking-wider'>
            My Philosophy
          </h2>
          <p className='text-lg leading-relaxed text-gray-900'>{philosophy}</p>
        </div>
      )}
    </div>
  )
}
