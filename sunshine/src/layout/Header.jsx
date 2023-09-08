import { Link } from "react-router-dom";
import "./Header.css"
import logo from "./SunshineLogo.png"
export default function Header() {
    return (
      <header className="header">
        <nav>
          <div className="">
               {/* <a href="index.html">
           Sunshine.<span>Karate</span>
            </a> */}
            <img className=" px-2 ml-4 my-2"  width={40} src={logo} alt="logo" />
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">
            &#9776;
          </label>
          <ul className="menu">
            <li>
              <Link className=" uppercase text-lg font-bold" to={"/"}>Home</Link>
            </li>
            <li>
              <Link className=" uppercase text-lg font-bold" to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link className=" uppercase text-lg font-bold" to={"/member"}>Members</Link>
            </li>
            <li>
              <Link className=" uppercase text-lg font-bold" to={"/tournaments"}>Tournaments</Link>
            </li>
            <li>
              <Link className=" uppercase text-lg font-bold" to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  