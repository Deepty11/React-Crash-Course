import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import jobs from './jobs.json'
import ViewAllJobs from './components/ViewAllJobs'

const App = () => {
  const recentJobs = jobs.slice(0,3)

  return (
    <>
    <NavBar/>
    <Hero/>
    <HomeCards/>
    <JobListings/>
    <ViewAllJobs/>
    </>
    
  )
}

export default App