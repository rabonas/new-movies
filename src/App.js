import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header"
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import NotFound from "./pages/NotFound";
import Catalog from "./pages/Catalog";
import Search from "./pages/Search";
import ViewMovies from "./pages/ViewMovies";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
      <div className="wrapper">
        <BrowserRouter>
          <ScrollToTop/>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/catalog/:genreid" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/movie/:id" element={<ViewMovies />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
