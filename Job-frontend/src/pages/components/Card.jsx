import React from 'react'
import {Link} from 'react-router-dom';
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';

const Card = ({ data }) => {
    const {_id, companyName, jobTitle, companyLogo, minPrice, maxPrice, salaryType, jobLocation, postingDate, description} = data;
    return (
        <>
            <div className='card'>
                <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
                    <img src={companyLogo} alt="image" />
                    <div>
                        <h4 className='text-black mb-1'>{companyName}</h4>
                        <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>

                        <div>
                            <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
                            <span className='flex items-center gap-2'><FiClock/>{salaryType}</span>
                            <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}-{maxPrice}</span>
                            <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
                        </div>

                        <p className='text-base text-black/70'>{description}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Card