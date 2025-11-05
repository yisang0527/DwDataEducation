import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// 컴포넌트 import
import MainMenu from './Component/MainMenu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
      </Routes>
    </Router>
  )
}

export default App
  