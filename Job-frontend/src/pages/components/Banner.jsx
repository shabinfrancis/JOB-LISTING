import React from 'react'
import { FiMapPin, FiSearch } from 'react-icons/fi'

const Banner = ({ query, handleInputChange }) => {


    return (
        <div className='max-w-screen-3xl container mx-auto xl:px-4 md py-20 py-14'>
            <h1 className='text-5xl font-bold text-black mb-3'>Find your <span className='text-secondary'>new job</span>!</h1>
            <p className='text-lg text-black/70 mb-3'>Thousands of jobs in the field of engineering & technology sectorsare waiting for you!!</p>

            <form>
                <div className='flex justify-start md:flex-row flex-col md:gap-0'>
                    <div className='flex md:rounded-d-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full'>
                        <input type="text" name='title' id='title'
                            placeholder='Find your job'
                            className='block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
                            onChange={handleInputChange}
                            value={query} />
                        <FiSearch className='absolute mt-3 ml-2 text-gray-400' />
                    </div>
                    <div className='flex md:rounded-s-none shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'>
                        <input type="text" name='title' id='title'
                            placeholder='Location'
                            className='block flex-1 border-0 bg-transparent py-2 pl-8 text-gray-900 placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
                        />
                        <FiMapPin className='absolute mt-3 ml-2 text-gray-400' />
                    </div>
                    <button className='bg-secondary text-white py-2 px-4 rounded-md shadow-sm hover
                    hover:bg-secondary/90'>Search</button>
                </div>
            </form>
        </div>
    )
}

export default Banner