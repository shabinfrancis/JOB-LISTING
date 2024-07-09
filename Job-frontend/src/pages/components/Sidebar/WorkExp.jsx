import React from 'react'
import InputField from '../InputField'

const WorkExp = ({handleChange}) => {
  return (
    <div className="space-y-5">
        <h3 className='sidebar-label-container text-md font-small mb-2'>Work Experience</h3>
        <div>
          <label className="sidebar-label-container">
            <input type='radio' name='test' id='test' value="" onChange={handleChange} />
            <span className='checkmark'></span>Any experience
          </label>

           <InputField
            handleChange={handleChange} 
            value='Internship' 
            title='Internship'
            name='test' 
          />
          <InputField 
            handleChange={handleChange} 
            value='Work remotely' 
            title='Work remotely'
            name='test'
          />
          
        </div>
      </div>
  )
}

export default WorkExp