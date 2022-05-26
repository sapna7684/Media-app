import { useEffect } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom'
import { Login } from './components/Login';
import { Home } from './pages/Home';
import { fetchUsers } from './utils/fetchUsers';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const user = fetchUsers();
    if(!user) navigate('/login')
  }, [navigate])
  
  return (
    <Routes>
      <Route path="login" element={<Login/>}/>
      <Route path="/*" element={<Home/>}/>
    </Routes>
  );
}

export default App;
