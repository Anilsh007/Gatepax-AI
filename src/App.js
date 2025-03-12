import SideNavBar from './SideNavBar/SideNavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Integrations from './Components/Integrations';
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <SideNavBar />
        <div className='main-wrapper'>
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Integrations" element={<Integrations />} />
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
