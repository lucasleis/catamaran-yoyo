import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './components/GalleryPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;
