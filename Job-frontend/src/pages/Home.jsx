import { useEffect, useState } from 'react'
import React from 'react'
import Banner from './components/Banner'
import Card from './components/Card';
import Jobs from './Jobs';
import Newsletter from './components/Newsletter';
import Sidebar from './components/Sidebar/Sidebar';

const Home = () => {
  const [selectCategory, setSelectCategogary] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:8080/all-jobs").then(res => res.json()).then(data => {
      setJobs(data);
      setLoading(false);
    })
  }, [])

  // console.log(jobs);

  const [query, setQuery] = useState('');
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }

  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) != -1);
  // console.log(filteredItems);

  //Radio feature
  const handleChange = (event) => {
    setSelectCategogary(event.target.value);
  }

  //button based filtering
  const handleClick = (event) => {
    setSelectCategogary(event.target.value);
  }

  const onClickhandler = (event) => {
    setSelectCategogary(event.target.value);
  }

  //calculate index range
  const calcPageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  }

  //function for next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }

  //function for last page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  //main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredJobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() || 
        parseInt(maxPrice) <= parseInt(selected) || 
        postingDate >= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() || 
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()
      ));
      console.log(filteredJobs);
    }

    //slice data based on current page
    const { startIndex, endIndex } = calcPageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(filteredItems, selectCategory, query);

  return (
    <>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/* main content */}
      <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

        {/* Left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} onClickhandler={onClickhandler}/>
        </div>

        {/* Job cards */}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            // loading ? <Jobs result={result} /> : (<p>Loading...</p>)
            loading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>
              <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
              <p className='text-center text-2xl font-bold'>No jobs found</p>
            </>
          }

          {/* Pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }
        </div>

        {/* Right side */}
        <div className='bg-white p-4 rounded'><Newsletter /></div>

      </div>
    </>
  )
}

export default Home