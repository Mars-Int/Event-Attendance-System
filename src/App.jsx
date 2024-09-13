import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import {Attendence, Dashboard, Login} from './pages'
import { Header } from './components'

function HeaderWrapper() {
  const location = useLocation()
  const showHeader = location.pathname !== '/'

  return showHeader ? <Header /> : null
}

function App() {

  return (
    <>
      <Router>
        <HeaderWrapper/>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/home' element = {<Dashboard/>}/>
        <Route path='/attendance' element = {<Attendence/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
