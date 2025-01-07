import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Layout/Header";
import ContactIndex from "./Component/Contact/ContactIndex";
import Footer from "./Component/Layout/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ContactIndex />
    <Footer />
  </React.StrictMode>
);