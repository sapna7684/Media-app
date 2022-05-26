import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { Navbar,Search, PinDetails, CreatePin, Feed } from '../components'

export const Pins = ({user}) => {
  const [searchTearm, setSearchTearm] = useState('')
  return (
    <div className='px-2 md:px-5'>
       <div className="bg-gray-50">
         <Navbar searchTearm={searchTearm} setSearchTearm={setSearchTearm} user={user}/> 
       </div>
       <div className="h-full">
         <Routes>
           <Route path='/' element={<Feed/>} />
           <Route path='/category/:categoryId' element={<Feed/>} />
           <Route path='/pin-detail/:pinId' element={<PinDetails user={user} />} />
           <Route path='/create-pin' element={<CreatePin user={user} />} />
           <Route path='/search' element={<Search searchTearm={searchTearm} setSearchTearm={setSearchTearm}/>} />
         </Routes>
       </div>
    </div>
  )
}
