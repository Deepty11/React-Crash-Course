import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import jobs from '../src/jobs.json'
import JobListing from './components/JobListing'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  const recentJobs = jobs.slice(0,3)

  return (
    <>
    <NavBar/>
    <Hero 
    title = "Become a React Dev" 
    subtitle="Find the React job that fits your skills and needs"/>
    
    {/* <!-- Developers and Employers --> */}
    <HomeCards/>

    {/* <!-- Browse Jobs --> */}
    <JobListings>
      {recentJobs.map(job => <JobListing 
          jobType={job.type}
          jobTitle={job.title}
          jobDescription={job.description}
          salary={job.salary}
          location={job.location}/>)}
    </JobListings>
    <ViewAllJobs/>
    </>
    
  )
}

export default App