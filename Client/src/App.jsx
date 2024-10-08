import { useState } from 'react'
import './App.css'
import HotelsRoutes from './routes/hotelRoutes'
import PlacesRoutes from './routes/placesRoutes'
import FlightsRoutes from './routes/flightsRoute'
import HomeRoutes from './routes/homeRoutes'
import PackageRoute from './routes/packagesRoutes'
import AllRoutes from './routes/allRoutes'

function App() {
  return (
    <>
    <AllRoutes />
    <HomeRoutes />
    <HotelsRoutes />
    <PlacesRoutes />
    <FlightsRoutes />
    <PackageRoute />
    </>
  )
}

export default App
