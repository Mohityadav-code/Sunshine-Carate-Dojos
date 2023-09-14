import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import logo from "./SunshineLogo.png";

export default function Header() {
  const [isChecked, setIsChecked] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    setIsChecked(false);
  }, [location]);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsChecked(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <header className="z-50 w-full h-full header" ref={menuRef}>
      <nav>
        <div className="z-50 ">
          <img className="px-2 my-4 ml-4 " width={40} src={logo} alt="logo" />
        </div>
        <input type="checkbox" id="menu-toggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link className="text-lg font-bold uppercase " to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg font-bold uppercase " to={"/about"}>
              About Us
            </Link>
          </li>
          <li>
            <Link className="text-lg font-bold uppercase " to={"/member"}>
              Members
            </Link>
          </li>
          <li>
            <Link className="text-lg font-bold uppercase " to={"/contactUs"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
