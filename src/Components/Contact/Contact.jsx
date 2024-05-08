import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_40ml1zg', 'template_ph219ht', form.current, {
        publicKey: '5l2x0bRibkUEZjuFR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 3000); // Hide the popup after 3 seconds
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id='contact' className='text-white'>
      <div className='p-4 md:p-8'>
        <h1 className='text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl'>Contact Me</h1>
        <form className='flex flex-col items-center' onSubmit={sendEmail} ref={form}>
          <div className='md:w-3/4 lg:w-2/3 xl:w-1/2'>
            <div className='flex flex-col md:flex-row'>
              <input
                id='name'
                type='text'
                className='my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:mr-2 outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Name'
                name="user_name"
              />
              <input
                id='email'
                type='email'
                className='my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:w-1/2 md:ml-2 outline-none focus:ring-2 focus:ring-blue-600'
                placeholder='Email'
                name="user_email"
              />
            </div>
            <textarea
              id='message'
              rows='5'
              placeholder='Say Something'
              className='my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600'
              name="message"
            ></textarea>
          </div>
          <button
            type='submit'
            className='border-2 text-md mt-5 rounded-md py-2 px-4 bg-[#ff014f] hover:bg-[#ff80a7] text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600'
          >
            Send Message
          </button>
        </form>
        {showPopup && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white p-6 rounded-md shadow-md'>
              <h2 className='text-2xl font-bold mb-4 text-black'>Message Sent</h2>
              <p className='text-black'>Your message has been sent successfully.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
