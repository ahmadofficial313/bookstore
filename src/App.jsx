// App.js
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  const location = useLocation();
  const isRegisterPage = location.pathname === '/register';

  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      {!isRegisterPage && <Navbar />}
      <Outlet />
      {!isRegisterPage && <Footer />}
    </div>
  );
}

export default App;
