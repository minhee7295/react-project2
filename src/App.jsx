import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import MovieDetail from './component/MovieDetail'

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<LoginPage />} />
      <Route path='/movie/:id' element={<MovieDetail />} />
    </Routes>
  )
}

export default App
