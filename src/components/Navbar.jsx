import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make navbar visible when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const handleChange = () => {
    setMenu(!menu);
  };

  const handleNavigation = (section) => {
    if (!isHomePage) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  const NavItem = ({ to, children }) => {
    if (isHomePage) {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightColor transition-all cursor-pointer"
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <span
        onClick={() => handleNavigation(to)}
        className="hover:text-brightColor transition-all cursor-pointer"
      >
        {children}
      </span>
    );
  };

  return (
    <div
      className={`fixed w-full top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-darkBackground text-white shadow-lg">
        <div className="flex items-center">
          <RouterLink to="/">
            <h1 className="font-semibold text-xl cursor-pointer">Destinova</h1>
          </RouterLink>
        </div>
        <nav className="hidden lg:flex flex-row items-center gap-6">
          <NavItem to="home">Home</NavItem>
          <NavItem to="stats">Stats</NavItem>
          <NavItem to="features">Features</NavItem>
          <NavItem to="destination">Destination</NavItem>
          <NavItem to="about">About</NavItem>
          <NavItem to="testimonials">Testimonials</NavItem>
          <NavItem to="contact">Contact</NavItem>
        </nav>

        <div className="hidden lg:flex flex-row items-center gap-4">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor="bg-white" />
        </div>

        <div className="lg:hidden flex items-center p-2" onClick={handleChange}>
          <AiOutlineMenu size={25} />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } lg:hidden flex flex-col absolute bg-darkBackground text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 shadow-lg`}
      >
        <NavItem to="home">Home</NavItem>
        <NavItem to="stats">Stats</NavItem>
        <NavItem to="features">Features</NavItem>
        <NavItem to="destination">Destination</NavItem>
        <NavItem to="about">About</NavItem>
        <NavItem to="testimonials">Testimonials</NavItem>
        <NavItem to="contact">Contact</NavItem>

        <div className="flex flex-col lg:hidden lg:flex-row items-center gap-4">
          <h1 className="hover:text-brightColor transition-all cursor-pointer">
            Register
          </h1>
          <Button title="Login" backgroundColor="bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
