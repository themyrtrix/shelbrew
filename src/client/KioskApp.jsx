import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DiningOptionScreen from './pages/DiningOptionScreen'
import MenuScreen from './pages/MenuScreen'

function KioskApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiningOptionScreen />} />
        <Route path="/menu" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
};

export default KioskApp
