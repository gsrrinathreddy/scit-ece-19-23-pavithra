import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Experience from './pages/Experience';
import Hobbies from './pages/Hobbies';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
<Routes>
  <Route path="/Aboutus" element={<Aboutus/>}/>
  <Route path="/Experience" element={<Experience/>}/>
  <Route path="/Hobbies" element={<Hobbies/>}/>
  
</Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
