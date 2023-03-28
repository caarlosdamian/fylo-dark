import React from 'react';
import { Button } from '../../components/button/Button';
import './Contact.scss'

export const Contact = () => {
  return (
    <section className='contact'>
      <div className="contact__wrapper">
       <div className="contact__wrapper--info">
       <span className="title">Get early access today</span>
       <span className="desc">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</span>
       </div>
       <div className="contact__wrapper--controls">
        <input type="text" className="input" placeholder='email@example.com' />
        <Button label='Get Started For Free' />

       </div>
      </div>
    </section>
  )
}
