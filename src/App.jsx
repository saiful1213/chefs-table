import { useState } from "react";
import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes";
import './App.css'

function App() {
  const [onScroll, setOnScroll] = useState(false);

  // hide menu on scroll
  let prevScrollpos = window.scrollY;

  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      setOnScroll(false)
    } else {
      setOnScroll(true);
    }
    prevScrollpos = currentScrollPos;
  }


  return (
    <div>
      <div className={`fixed w-full ${!onScroll ? 'top-0' : '-top-16'} my-transition`}>
        <Navbar></Navbar>
      </div>
      <div className="max-w-7xl mx-auto my-5">
        <Banner></Banner>
        <Recipes></Recipes>
      </div>
    </div>
  )
}

export default App
