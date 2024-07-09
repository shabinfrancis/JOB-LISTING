import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'


const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/all-jobs/${id}`)
          .then(res => res.json())
          .then(data => setJob(data))
    }, [])

    const handleApply = async() => {
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }
  return (
    
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <PageHeader />
        <h2>Job Details: {id}</h2>
        <h1>{job.JobDetails}</h1>

        <button className='bg-secondary px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails