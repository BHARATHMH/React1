import React from 'react'
import Navigation from './Components/Navigation.js'
import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import TodoList from './Components/Todolist.js'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <div>
           <Navigation></Navigation>
        </div>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App