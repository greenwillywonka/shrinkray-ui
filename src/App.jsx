import { Routes, Route } from 'react-router';
import { AuthProvider } from './AuthContext.jsx';

import MainLayout from './layouts/MainLayout.jsx';
import ProtectedLayout from './layouts/ProtectedLayout.jsx';
import Home from './pages/Home.jsx';
import Links from './pages/Links.jsx';
import AddLink from './pages/AddLink.jsx';
// import NewUser from './pages/NewUser.jsx';

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Logout from './pages/Logout.jsx';

function App() {
  return (
  <AuthProvider>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<ProtectedLayout />}>
        <Route path="/links" element={<Links />} />
        <Route path="/addlink" element={<AddLink />} />
        <Route path="/logout" element={<Logout />} />
        {/* <Route path="/newuser" element={<NewUser />} /> */}
      </Route>
    </Routes>
  </AuthProvider>
  );
}

export default App
