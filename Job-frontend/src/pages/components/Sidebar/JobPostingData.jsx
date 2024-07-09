import React from 'react'
import InputField from '../InputField';

const JobPostingData = ({handleChange}) => {
    const now = new Date();
    const dayAgo = new Date(now-24*60*60*60*1000);
    const weekAgo = new Date(now-7*24*60*60*60*1000);
    const monthAgo = new Date(now-30*24*60*60*60*1000);

    const dayAgoDate = dayAgo.toISOString().slice(0, 10);
    const weekAgoDate = weekAgo.toISOString().slice(0, 10);
    const monthAgoDate = monthAgo.toISOString().slice(0, 10);
  return (
    <div className="space-y-5">
        <h3 className='sidebar-label-container text-md font-small mb-2'>Date of posting</h3>
        <div>
          <label className="sidebar-label-container">
            <input type='radio' name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>All time
          </label>

           <InputField
            handleChange={handleChange} 
            value={dayAgoDate} 
            title='Last 24 hours ago'
            name='test' 
          />
          <InputField 
            handleChange={handleChange} 
            value={weekAgoDate} 
            title='Last 7 days'
            name='test'
          />
          <InputField
            handleChange={handleChange} 
            value={monthAgoDate}
            title='Last month'
            name='test'
          />
          <InputField
            handleChange={handleChange} 
            value='boston'
            title='Boston' 
            name='test'
          />
        </div>
      </div>
  )
}

export default JobPostingData