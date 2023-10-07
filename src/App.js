import './App.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Single from './pages/Single';
import { AppContext } from './helper/context';
import { useState } from 'react';

function App() {
  const [allApiData, setAllApiData] = useState([]);
   
  return (
    <div className='app'>
         <AppContext.Provider
      value={{allApiData, setAllApiData}}>
       <BrowserRouter>
      <Routes>
 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/single" element={<Single/>}/>
     
      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
    </div>
  );
}


export default App;
