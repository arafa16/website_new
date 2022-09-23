
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Contain from "./pages/Contain";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductList from "./pages/products/ProductList";
import Home from "./pages/home/Home";
import Login from "./pages/sign/Login";
import ProjectPortofolio from "./pages/project/ProjectPortofolio";


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" 
              element={
                <>
                  <Header />
                  <Home />
                  <Footer />
                </>
              } 
            />
            <Route path="/product" 
              element={
                <>
                  <Header />
                  <ProductList />
                  <Footer />
                </>
                } 
              />
            <Route path="/project" 
              element={
                <>
                  <Header />
                  <ProjectPortofolio />
                  <Footer />
                </>
                } 
              />
            <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
    </>
      
  )
}

export default App;
