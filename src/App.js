import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Contact from "./components/Contact";
import About from "./components/About";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen dark:bg-black bg-slate-50 dark:text-white">
        <Header
          links={[
            { id: 1, href: "/contact", text: "Contact" },
            { id: 2, href: "/about", text: "About" },
            {
              id: 3,
              href: "/cart",
              text: <FaShoppingCart />,
            },
          ]}
        />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//Add cart Logic add auth
