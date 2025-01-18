import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import "./CSS/index.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Component/Pages/About";
import Home from "./Component/Pages/Home";
import Crypto from "./Component/Pages/Crypto";
import NotFound from "./Component/Pages/NotFound";
import Product from "./Component/ProductPages/Product";
import ProductDetails from "./Component/ProductPages/ProductDetails";
import ProductList from "./Component/ProductPages/ProductList";
import CreateProduct from "./Component/ProductPages/CreateProduct";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/crypto/:symbol/:id" element={<Crypto />}></Route>
        {/* Optional Paramter Technique */}
        <Route path="/crypto/:symbol" element={<Crypto />}></Route>
        <Route path="product">
          <Route index element={<Product />}></Route>
          <Route path="Details/:id" element={<ProductDetails />}></Route>
          <Route path="List" element={<ProductList />}></Route>
          <Route path="create" element={<CreateProduct />}></Route>
        </Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      <div id="footer" className="w-100">
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
