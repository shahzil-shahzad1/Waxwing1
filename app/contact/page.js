import React from 'react'
import ContactPage from './ContactComponents/SelectContact'
import PhoneSection from './ContactComponents/Phone'
import EmailSection from './ContactComponents/Email'
import ContactForm from './ContactComponents/Form'

const page = () => {
  return (
    <div className='relative z-[1] overflow-hidden w-full'>
      <ContactPage/>
      <PhoneSection/>
      <EmailSection/>
      <ContactForm/>
    </div>
  )
}

export default page
