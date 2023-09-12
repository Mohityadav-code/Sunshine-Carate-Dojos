import { Link } from "react-router-dom";
import "./Header.css"
import logo from "./SunshineLogo.png"
export default function Header() {
    return (
      <header className="z-50 header">
        <nav>
          <div className="z-50 ">
               {/* <a href="index.html">
           Sunshine.<span>Karate</span>
            </a> */}
            <img className="px-2 my-4 ml-4 "  width={40} src={logo} alt="logo" />
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link className="text-lg font-bold uppercase " to={"/"}>Home</Link>
            </li>
            <li>
              <Link className="text-lg font-bold uppercase " to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link className="text-lg font-bold uppercase " to={"/member"}>Members</Link>
            </li>
            <li>
              <Link className="text-lg font-bold uppercase " to={"/tournaments"}>Tournaments</Link>
            </li>
            <li>
              <Link className="text-lg font-bold uppercase " to={"/contactUs"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  