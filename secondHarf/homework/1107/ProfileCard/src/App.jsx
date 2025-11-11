import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProfileCard from './ProfileCard'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProfileCard />} />
        </Routes>
      </Router>
    </>
  )
}