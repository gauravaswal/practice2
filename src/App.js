import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link

} from "react-router-dom";

import HomeScreen from "./pages/Home"
import Product from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"

function App() {
  
  return (
    <BrowserRouter >
              <Routes >
            <Route path="/"  exact element={<HomeScreen />} />
            <Route path="/product" exact element={<Product />} />
            <Route path="/product-detail" element={<ProductDetail />} />

          </Routes>
    </BrowserRouter>
  );
}

export default App;
