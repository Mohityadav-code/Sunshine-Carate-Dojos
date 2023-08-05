import { Link } from "react-router-dom";
import "./Header.css"
export default function Header() {
    return (
      <header className="header">
        <nav>
          <div className="logo">
            <a href="index.html">
           Sunshine.<span>Karate</span>
            </a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/members"}>Members</Link>
            </li>
            <li>
              <Link to={"/tournaments"}>Tournaments</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  