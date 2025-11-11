import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LikeButton from './likeButton'

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LikeButton />} />
        </Routes>
      </Router>

    </>
  )
}