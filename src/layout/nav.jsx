import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBar() {
  const[selected , SetSelected] = useState("home")
  const[link , setlink] = useState('home')

  const handleScroll = (sectionId, linkName) => {
    setlink(linkName)
    SetSelected(linkName)
    
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    // Close mobile navbar after clicking
    const navbarCollapse = document.getElementById("navbarSupportedContent")
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const toggler = document.querySelector(".navbar-toggler")
      if (toggler) toggler.click()
    }
  }

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid w-100 p-0">
          <a className="navbar-brand m-0 p-0" href="#">
            <h1 className="heading">BRUTAL</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className={`nav-item- ${selected === "home" ? "selected" : ""}`} onClick={() => SetSelected("home")}>
                <Link className={`nav-link- ${link === "home" ? "nav-link-selected" : ""}`} onClick={() => setlink("home")} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className={`nav-item- ${selected === "about" ? "selected" : ""}`}>
                <a className={`nav-link- ${link === "about" ? "nav-link-selected" : ""}`} onClick={() => handleScroll("About", "about")} href="#About">
                  About
                </a>
              </li>
              <li className={`nav-item- ${selected === "work" ? "selected" : ""}`}>
                <a className={`nav-link- ${link === "work" ? "nav-link-selected" : ""}`} onClick={() => handleScroll("Products", "work")} href="#Products">
                  Products
                </a>
              </li>
              <li className={`nav-item- ${selected === "blog" ? "selected" : ""}`} onClick={() => SetSelected("blog")}>
                <Link className={`nav-link- ${link === "blog" ? "nav-link-selected" : ""}`} onClick={() => setlink("blog")} to="/cart">
                  Cart
                </Link>
              </li>
              <li className={`nav-item- ${selected === "contact" ? "selected" : ""}`}>
                <a className={`nav-link- ${link === "contact" ? "nav-link-selected" : ""}`} onClick={() => handleScroll("Contact", "contact")} href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <Link to="/Form" className="neo-btn">Login</Link>
        </div>
      </nav>
    </>
  );
}
