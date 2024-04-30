import Home from "./components/Principal/Home";
import CartWidget from "./components/CartWidget/CartWidget";
import HistoriaCabj from "./components/HistoriaCabj/HistoriaCabj";
import DataProvider from "./components/Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return(
  <DataProvider> 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<CartWidget/>}></Route>
    <Route path="/historia" element={<HistoriaCabj/>}></Route>
  </Routes>
  </BrowserRouter>
  </DataProvider>
)
    
}

export default App;
