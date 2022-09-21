
import './App.css';  
import Navbar from './Components/Navbar';  
import Homepage from './pages/Homepage';
import {Routes,Route} from "react-router-dom";
import Productdetails from './pages/productdetails';
function App() {
  return (
  <>
   <Navbar/>
  <Routes>
   
<Route path="/" element={<Homepage/>}/>
<Route path ="/product_details/:productSlug" element={<Productdetails/>}/>

  </Routes>
  </>
  
  );
}

export default App;
