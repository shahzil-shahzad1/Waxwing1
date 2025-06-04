import FadeInSection from '@/components/FadeinSection'
import React from 'react'

const AboutLanding = () => {
  return (
     <main className="bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] text-gray-50 min-h-screen px-6 py-20 flex items-center">
      <FadeInSection direction="down" classes="max-w-5xl mx-auto text-center">
      {/* <div className="max-w-5xl mx-auto text-center"> */}
        <h1 className="text-3xl md:text-5xl max-sm:text-[1.75rem] font-semibold mb-4">
            <span className='leading-snug'>
          We’re on a mission to power the web with speed, beauty, reliability and delivered with</span>
           <span className="text-red-500">❤️</span>
            
        </h1>
        <a href='/privacy' className="text-[#28e4e4] underline hover:text-[#81f1f1f5] cursor-pointer mb-16">
          Read our principles →
        </a>
      {/* </div> */}
      </FadeInSection>
     </main>
  )
}

export default AboutLanding
