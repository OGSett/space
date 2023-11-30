
import { Route, Routes, useLocation, BrowserRouter as Router} from 'react-router-dom';
import {useEffect} from 'react'
import './App.css';

import Destination from './Destination';
import Home from './Home';
import Crew from './Crew';
import Technology from './Technology';
import useFetch from './useFetch';


function App() {

  const { data, isLoading, error } = useFetch();
    const BodyStyleHandler = () => {
      const location = useLocation();
      useEffect(() => {
        console.log("Current path:", location.pathname);
        document.body.className = ''; 
        if (location.pathname === '/home')
        {
          document.body.classList.add('home-style');
        } 
        else if (location.pathname === '/')
        {
          document.body.classList.add('home-style');
        }
        else if (location.pathname === '/destination')
        {
          document.body.classList.add('destination-style');
        }
        else if (location.pathname === '/crew')
        {
          document.body.classList.add('crew-style');
        }
        else if (location.pathname === '/technology')
        {
          document.body.classList.add('technology-style');
        }
      }, [location.pathname]);  
    };
      
      return (
      <Router>
        <BodyStyleHandler />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/destination" element={<Destination data={data} isLoading={isLoading} error={error}/>} />
          <Route path="/crew" element={<Crew data={data} isLoading={isLoading} error={error}/>} />
          <Route path="/technology" element={<Technology data={data} isLoading={isLoading} error={error}/>} />
        </Routes>
    </Router>
  );
}

export default App;
