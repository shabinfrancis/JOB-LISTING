import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExp from './WorkExp'

const Sidebar = ({ handleChange, handleClick }) => {
  return (
    <>
      <div className="space-y-5">
        <h3 className='sidebar-label-container text-lg font-bold mb-2'>
          Filters
        </h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingData handleChange={handleChange}/>
        <WorkExp handleChange={handleChange}/>
      </div>
    </>
  )
}

export default Sidebar