import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import showBook from './pages/showBook'
import EditBook from './pages/EditBook'
import DeleteBook from './pages/DeleteBook';
const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/book/create' element={<showBook/>}/>
    <Route path='/book/details/:id' element={<CreateBook/>}/>
    <Route path='/book/edit/:id' element={<EditBook/>}/>
    <Route path='/book/delete/:id' element={<DeleteBook/>}/>

   </Routes>
  )
}

export default App