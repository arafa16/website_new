
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Contain from "./pages/Contain";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/products/ProductList";


function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Contain />} />
          <Route path="/product" element={<ProductList /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App;
