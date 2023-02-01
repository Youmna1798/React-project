import React from "react";
import { Link } from 'react-router-dom';
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";
import '../navbar.css';

export default function Navbar() {
  const { lang, setLang } = useContext(LangContext);

  let toggleLang = () => {
    lang === "en" ? setLang("ar") : setLang("en");
  };
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link className="navbar-brand" style={{color:'white'}} to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav" >
            <li className="nav-item" >
              <Link className="nav-link" style={{color:'white'}} to="/Movies">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " style={{color:'white'}} to="/favorites">
                Favorites
              </Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" style={{color:'white'}} to="/add-user">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={{color:'white'}} to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
            <button className="btn btn-primary info" style={{backgroundColor:'#820000', borderColor:'#820000'}}onClick={toggleLang}>
            {lang}
          </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
