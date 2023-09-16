import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './component/Homepage'
import ImageSlide from './component/ImageSlide'
import SlideOnclick from './component/SlideOnclick'
import OnClickShowDetail from './component/OnClickShowDetail'
import ShowDataDetail from './component/ShowDataDetail'
import OpenCurrentimage from './component/OpenCurrentimage'
import BootstrapDropNav from './component/BootstrapDropNav'
import SideDashboard from './component/SideDashboard'
import Slideleft from './component/Slideleft'
import Slideminicontent from './component/Slideminicontent'
import SlideOneRow from './component/SlideOneRow'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/imageslide' element={<ImageSlide/>}/>
        <Route path='/slideonclick' element={<SlideOnclick/>}/>
        <Route path='/event' element={<OnClickShowDetail/>}/>
        <Route path='/showdatadetail/:id' element={<ShowDataDetail/>}/>
        <Route path='/currentimage' element={<OpenCurrentimage/>}/>
        <Route path='/bootstrapnav' element={<BootstrapDropNav/>}/>
        <Route path='/sidedashboard' element={<SideDashboard/>}/>
        <Route path='/slideleft' element={<Slideleft/>}/>
        <Route path='/slideimage' element={<Slideminicontent/>}/>
        <Route path='/slideonerow' element={<SlideOneRow/>}/>

      </Routes>
    </div>
  )
}

export default App