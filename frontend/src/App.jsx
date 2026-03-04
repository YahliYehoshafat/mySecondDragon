import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './pages/Home';
import CreateANewPet from './pages/CreateANewPet';
import PetInfo from './pages/PetInfo';
import PetProperties from './pages/PetProperties';
import PetStatus from './pages/PetStatus';
import 'bootstrap/dist/css/bootstrap.min.css'; 
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/PetInfo" element={<PetInfo />} /> 
        <Route path="/CreateANewPet" element={<CreateANewPet />} /> 
        <Route path="/PetProperties" element={<PetProperties />} /> 
        <Route path="/PetStatus" element={<PetStatus />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;