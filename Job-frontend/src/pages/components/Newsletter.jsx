import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const Newsletter = () => {
  return (
    <>
    <div className='py-4'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
            <FaEnvelopeOpenText className='text-2xl' />
            Email me for jobs
        </h3>
        <p className='text-sm text-gray-500'>I'm always looking for new opportunities.</p>

        <div className='w-full space-y-4'>
            <input type="email" name='email' id='email' placeholder='name@gmail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
            {/* <button className='w-full py-2 bg-blue-500 text-white font-bold'>Subscribe</button> */}
            <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none bg-secondary rounded-sm text-white font-semibold cursor-pointer focus' />
        </div>
    </div>

    <div className='py-4'>
        <h3 className='text-lg font-bold mb-2 flex items-center gap-2 '>
            <FaRocket className='text-2xl' />
            Email me for jobs
        </h3>
        <p className='text-sm text-gray-500'>I'm always looking for new opportunities.</p>

        <div className='w-full space-y-4'>
            <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border focus:outline-none bg-secondary rounded-sm text-white font-semibold cursor-pointer focus' />
        </div>
    </div>
    </>
  )
}

export default Newsletter