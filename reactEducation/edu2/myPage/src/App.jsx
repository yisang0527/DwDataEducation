import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import HomeIndex from './pages/HomeIndex'
import About from './pages/About'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio';
import Welcome from './pages/Welcome';
import Counter from './pages/Counter';
import ProfileCard from './ProfileCard';
import LikeButton from './LikeButton';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomeIndex />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>

      <Welcome name="이순신" age="24" />
      <Counter />
      <ProfileCard name="이재영" age="27" hobby="영화감상, 기타연주" />
      <LikeButton />
    </>
  )
}

export default App
