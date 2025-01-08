import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Layout/Header";
import Footer from "./Component/Layout/Footer";
import MovieList from "./Component/Movie/MovieList";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <MovieList/>
    <Footer />
  </React.StrictMode>
);