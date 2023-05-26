import { useState } from "react";
import "./Navbar.scss";
import { logo, profile } from "../../../assests";
import { Link } from "react-router-dom";
import Container from "../../container/Container";

import { MdAccountCircle } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import { RxCross2 } from "react-icons/rx";
import { AiFillMessage, AiFillHeart } from "react-icons/ai";
import { RiSettings5Fill } from "react-icons/ri";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <nav className="navbar-container-menus">
            <div className="navbar-container-menus-item align-item-center">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/">
                <p>Create your free signature</p>
              </Link>
              <Link to="/">
                <p>Privacy Policy</p>
              </Link>
              <Link to="/">
                <p>Contact us</p>
              </Link>
              <Link to="/">
                <p>Pricing</p>
              </Link>
              <Link to="/">
                <p>About us</p>
              </Link>
            </div>
          </nav>

          <div className="navbar-container-profile">
            <div className="navbar-container-profile-login">
              <Link to="/login">Login</Link>
            </div>
            <img src={profile} alt="profile" />
            <div className="navbar-container-profile-menuicon">
              {show ? (
                <RxCross2 onClick={() => setShow(false)} />
              ) : (
                <VscMenu onClick={() => setShow(true)} />
              )}
            </div>
          </div>
        </div>
      </div>

      {showDropdown ? <DropdownMenu /> : ""}

      {show ? <Mobile /> : ""}
    </>
  );
};

export default Navbar;

///////////
// Sub Components

const Mobile = () => {
  return (
    <div className="mobile-navbar">
      <Container className="half">
        <div className="mobile">
          <Container className="md">
            <nav className="mobile-container-menus">
              <div className="mobile-container-menus-input m-3">
                <input type="text" placeholder="Browser" />
                <BiSearch />
              </div>
              <div className="mobile-container-menus-item align-item-center">
                <Link to="support">
                  <p>Support</p>
                </Link>
                <Link to="/aboutus">
                  <p>About us</p>
                </Link>
                <Link to="/vender-signin">
                  <p>Vendor</p>
                </Link>
                <Link to="/customersignin">
                  <p>Customer</p>
                </Link>
              </div>
            </nav>
          </Container>
        </div>
      </Container>
    </div>
  );
};

const DropdownMenu = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      {display ? (
        <div className="dropdown">
          <div className="dropdown-container">
            <div className="dropdown-container-item">
              <Link
                to="/customer-message/1"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                <AiFillMessage />
                <p>Message</p>
              </Link>
            </div>
            <div className="dropdown-container-item">
              <Link
                to="/favourite"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                <AiFillHeart />
                <p>Favourite</p>
              </Link>
            </div>
            <div className="dropdown-container-item">
              <Link
                to="/customer-profile"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                <MdAccountCircle />
                <p>My account</p>
              </Link>
            </div>
            <div className="dropdown-container-item">
              <Link
                to="/customer-settings"
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                <RiSettings5Fill />
                <p>Settings</p>
              </Link>
            </div>
            <div className="dropdown-container-logout">
              <button
                onClick={() => {
                  setDisplay(!display);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
