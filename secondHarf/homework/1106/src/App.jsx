import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Buyer from './page/Buyer';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Buyer />} />
          <Route path="/Buyer/*" element={<Buyer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
