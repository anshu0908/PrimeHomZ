import React from 'react'

const ContactUs = () => {
  return (
    <div className='pt-40 mb-14 bg-[#F5F6F1]' >
      <div className='h-[55vw] w-[90vh] m-auto bg-[#f1f2ee]  border-b-stone-400 rounded-2xl' >
         <h1 className='text-center text-7xl text-[#3B3E2D] mb-8'>Contact Us</h1>
         <p className='text-center text-2xl'>Get in touch with our support team and with any <br />
          questions or queries you may have.</p>
      <div className='h-[40vw]' >
        {/* yha se row 1 start hai */}
       <div className=' Row 1 grid grid-cols-2  h-[5vw] mt-14 '>
        
           <div className='grid grid-cols-1 m-auto'>
              <label htmlFor="fullname" className="text-gray-700 pl-5 font-medium">
                Full name
              </label>
              <input
                id="fullname"
                placeholder="Enter your name"
                className="bg-white border-[#DBDED1] border-2 rounded-full px-5 py-3 h-12"
              />
      </div>
           <div className='grid grid-cols-1 m-auto'>
              <label htmlFor="PhoneNumber" className="text-gray-700 pl-5 font-medium">
                Phone Number
              </label>
              <input
                id="PhoneNumber"
                placeholder="Enter number"
                className="bg-white border-[#DBDED1] border-2 rounded-full px-5 py-3 h-12"
              />
      </div>


    </div>
    <div>
      {/* row 2 yha se start hai  */}
       <div className='Row 2 grid grid-cols-2  h-[5vw] mt-6 '>
        
           <div className='grid grid-cols-1 m-auto'>
              <label htmlFor="Email" className="text-gray-700 pl-5 font-medium">
                Email
              </label>
              <input
                id="Email"
                placeholder="Enter your mail"
                className="bg-white border-[#DBDED1] border-2 rounded-full px-5 py-3 h-12"
              />
      </div>
           <div className='grid grid-cols-1 m-auto'>
              <label htmlFor="interest" className="text-gray-700 pl-5 font-medium">
                I’m interested in? </label>
              
   <select className="bg-white appearance-none text-gray-700 border-[#DBDED1] border-2 rounded-full px-24 py-3 h-12 outline-none" id="interest" name="interest">
  <option value="">Select One</option>
  <option value="buying">buying</option>
  <option value="selling">selling</option> 
</select>
              
    </div>
    </div>
    </div>
    {/* row 3 yha se start hai */}
    <div>
       <div className="Row 3 grid grid-cols-1 mt-10 ">
            <label htmlFor="message" className="text-gray-700 ml-10 font-medium">
              Message
            </label>
            <textarea
              id="message"
              placeholder="I need help with..."
              className="bg-white border-[#DBDED1] border-2 h-48 rounded-2xl px-6 py-4 mx-4 "
            />
          </div>
    </div>
    {/* row 4 yha se start hai  */}
     <div className='grid grid-rows-2'>
       <button className='uppercase mt-8 border-2 p-4 text-lg text-white bg-[#3B3E2D] rounded-4xl'>send your message</button>
     </div>
    </div>
    </div>
    <div className='h-[100vh] w-screen '>
       <h1 className='text-center text-7xl mt-30 text-[#3B3E2D]'>Get in touch with PrimeHomz</h1>
       <div className=' map h-full w-full mt-20 flex'>
        <div className='w-[60vw] h-[40vw] p-4 ml-10 rounded-2xl overflow-hidden'>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4165.258679418501!2d77.02301591479747!3d28.464757307165748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1750750626040!5m2!1sen!2sin"
        className="w-full h-full border-0 rounded-3xl m-auto"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div className='h-[26vw] w-[30vw] flex-col m-auto mt-6 py-10 px-12 bg-white border-0 rounded-4xl'>
      <h1 className='text-black text-2xl text-center '>Get in touch, let us know how we can help</h1>
     
     <div>

      <h2 className='text-[#63655D] text-3xl text-left mt-10 '>
        Phone <br />
      <span className='text-black'>+91 892059 4962</span>  
      </h2>
      <h2 className='text-[#63655D] text-3xl text-left mt-10'>
         Email <br />
        <span className='text-black'>info@primehomz.com</span>

      </h2>
      
     </div>

    </div>
       </div>
    </div>
   </div>
   

    
  )
}

export default ContactUs