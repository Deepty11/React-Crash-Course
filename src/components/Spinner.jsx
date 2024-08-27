import React from 'react'
import { ClipLoader } from 'react-spinners'

const override = {
    display: "block",
    margin: "100px Auto",
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color="#4833ca"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
        override={override}
      />
  )
}

export default Spinner