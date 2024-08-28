import React from 'react'
import {Router, createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'


const App = () => {

  // Add Job
  const addJob = async (newJob) => {
    let res = await fetch("/api/jobs", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob)
    })

    return 
  }

  // Delete Job
  const deleteJob = async (id) => {
    let res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE"
    })

    return
  }

  // Edit Job
  const editJob = async (job) => {
    let res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(job)
    })

    return
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/edit-job/:id' element={<EditJobPage editJob={editJob}/>} loader = {jobLoader}/>
        <Route path='/jobs/:id' element={<JobPage deleteJob = {deleteJob}/>} loader = {jobLoader}/>
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    ))

  return (
    <RouterProvider router={router}/>
  )
}

export default App