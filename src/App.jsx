import Home from "./components/Principal/Home";
import CartWidget from "./components/CartWidget/CartWidget";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return(
  <DataProvider> 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<CartWidget/>}></Route>
  </Routes>
  </BrowserRouter>
  </DataProvider>
)
    
}

export default App;
