import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './component/Homepage'
import ImageSlide from './component/ImageSlide'
import SlideOnclick from './component/SlideOnclick'
import OnClickShowDetail from './component/OnClickShowDetail'
import ShowDataDetail from './component/ShowDataDetail'
import OpenCurrentimage from './component/OpenCurrentimage'


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

      </Routes>
    </div>
  )
}

export default App