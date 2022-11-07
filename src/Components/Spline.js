import React, { useState } from 'react'
import '../styles.css'
import Spline from '@splinetool/react-spline';
import { PacmanLoader } from 'react-spinners';
import { Backdrop, CircularProgress } from '@mui/material';



function SplineComponent() {
  const [loaded, setLoaded] = useState(false)
  const setLoadTrue = () => {
  setLoaded(true);
}
  return (
    <>
      <Spline onLoad={setLoadTrue} scene="https://prod.spline.design/vK547L8bXFKg6EyQ/scene.splinecode" />
      <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={!loaded}
    >
      <CircularProgress  color='inherit' />
    </Backdrop>
</>
  )
}

export default SplineComponent