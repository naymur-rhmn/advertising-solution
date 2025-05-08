import { Link, NavLink } from "react-router-dom";
import bar from "../../assets/images/menuIcon/menu-icon.png";
import close from "../../assets/images/menuIcon/arrowClose.png";
import { useState } from "react";
// #838383
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleNavMenu = () => setToggle((prev) => !prev);

  return (
    <header className="bg-[#6F1AD0] bg-opacity-20 backdrop-blur-3xl sticky top-0 z-[100]">
      <div className="h-[76px] relative">
        <div className="max-w-screen-lg mx-auto p-4 h-full">
          <div className="flex h-full w-full items-center ">
            {/* logo */}
            <div className="pr-[100px] ">
              <NavLink className="hy-logo z-0 relative" to="/" end>
                <p className="font-yatra tracking-wide text-[28px] bg-gradient-to-r from-[#f9a658] to-[#e4b283] bg-clip-text text-transparent z-50 relative">
                  Adaptive
                </p>
                {/* Hybird */}
              </NavLink>
            </div>
            {/* nav */}
            <nav className="hidden md:flex justify-around items-center w-full">
              <ul className="flex gap-4 text-black font-extralight">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mobile">Mobile</NavLink>
                <NavLink to="/dmp">DMP</NavLink>
                <NavLink to="/display">Display</NavLink>
                <NavLink to="/semantica">Semantica</NavLink>
                <NavLink to="/platform">Platform</NavLink>
                <NavLink to="/about">About</NavLink>
                {/* <li>Display</li>
                <li>Mobile</li>
                <li>DMP</li>
                <li>Semantica 360&deg;</li>
                <li>About</li> */}
              </ul>
            </nav>

            {/* mobile menu  */}
            {/* <div className="md:hidden flex items-center justify-end w-full">
              {/* aa */}
            {/* </div> */}

            {/* Responsive menu open close */}
            <div className="block md:hidden relative z-50 ml-auto">
              {!toggle ? (
                <img
                  onClick={handleNavMenu}
                  className="h-10  w-10 cursor-pointer transform scale-x-[-1]"
                  src={bar}
                />
              ) : (
                <img
                  onClick={handleNavMenu}
                  className="h-10  w-10 cursor-pointer"
                  src={close}
                />
              )}
            </div>
            <div
              className={`absolute top-0 left-0 h-[100vh] w-full bg-[#321767] z-10  flex justify-center items-center ${
                toggle ? "block" : "hidden"
              }`}
            >
              <nav className="flex flex-col items-center gap-6">
                <ul className="flex font-bold text-lg flex-col gap-4 text-white">
                  <NavLink onClick={handleNavMenu} to="/">
                    Home
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/mobile">
                    Mobile
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/dmp">
                    DMP
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/display">
                    Display
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/semantica">
                    Semantica
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/platform">
                    Platform
                  </NavLink>
                  <NavLink onClick={handleNavMenu} to="/about">
                    About
                  </NavLink>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* user */}
        {/* <div className="absolute right-10 top-0 bg-red-300 h-full  items-center md:flex hidden">
          user
        </div> */}
      </div>
    </header>
  );
}

export default Navbar;
