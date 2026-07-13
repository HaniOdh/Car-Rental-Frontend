import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'



function App() {

  return (
    <Router>
      <Layout />
      
      <Routes>
        <Route path='/' index element ={<Home />}/>
        <Route path='/Login' index element={<Login />} />
        <Route path='/Register' index element={<Register />} />
      </Routes>

    </Router>
  )
}

export default App
