import React from 'react'
import {Routes , Route} from "react-router-dom"
import HomeSection from '../Components/HomeSection'


export const Allroutes = () => {
  return (
    <div>

<Routes>

<Route path='/' element={<HomeSection/>}/>

</Routes>

    </div>
  )
}
