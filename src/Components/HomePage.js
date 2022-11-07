import React, { useState } from 'react'
import "../styles.css"
import SplineComponent from './Spline'

function HomePage() {
  const pages = ['homepage', 'spline']
  const [selectedPage, setSelectedPage] = useState(pages[0])
  const goToSplinePage = () => {
    setSelectedPage(pages[1])
  }

  return (
    <>
    {selectedPage === pages[0] && (
      <div className='homepage'>
        <div className="titlediv">
          <p className='title'>Ismaël Lamgadar</p>
        </div>
        <div class="text-box">
          <button className="button-53" onClick={goToSplinePage}>Explore!</button>
        </div>
    </div>
    )}
    {selectedPage === pages[1] && (
      <SplineComponent />
    )}
    </>
  )
}

export default HomePage