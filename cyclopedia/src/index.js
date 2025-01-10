import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import LifeCycleIndex from "./Component/LifeCycle/LifeCycleIndex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <LifeCycleIndex />
    <Footer />
  </React.StrictMode>
);