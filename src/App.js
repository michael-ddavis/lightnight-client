import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import SingleEvent from './pages/SingleEvent';
import VisionPartners from './pages/VisionPartners';

function App() {
  return (
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/{id}" element={<SingleEvent />} />
      <Route path="/vision" element={<VisionPartners />} />
    </Route>
   </Routes>
  );
}

export default App;
