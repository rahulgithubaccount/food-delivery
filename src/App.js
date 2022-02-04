
import './App.css';
import Product from './Components/Product';

import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Checkout from './Components/Checkout';

function App() {
  return (
  <div>
   
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<App />}/>
        <Route index element={<Product />} />
      
        <Route path = "/checkout"  element={<Checkout />} />
      
    </Routes>
 
    </BrowserRouter>
   
  </div>
  );
}

export default App;
