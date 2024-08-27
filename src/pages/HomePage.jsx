import React from 'react'
import NavBar from '../../src/components/NavBar'
import Hero from '../../src/components/Hero'
import HomeCards from '../../src/components/HomeCards'
import JobListings from '../../src/components/JobListings'
import ViewAllJobs from '../../src/components/ViewAllJobs'

const HomePage = () => {
  return (
   <>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
  )
}

export default HomePage