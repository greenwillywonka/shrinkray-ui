import { Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Links from './pages/Links.jsx';
import AddLink from './pages/AddLink.jsx';


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
        <Route path="/addlink" element={<AddLink />} />
      </Route>
    </Routes>
  );
}

export default App
