import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../hook/provider/AuthProvider";

const NavBar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  console.log(user)

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSignOutUser = () => {
    userSignOut()
    .then(() => {
      console.log('log out')
    })
  }
  const navItem = (
    <>
      <li className="hover:text-orange-600 transition-all duration-1000 ease-in-out">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/Biodatas"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          Biodatas
        </NavLink>
      </li>
      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          CONTACT us
        </NavLink>
      </li>

      <li className="hover:text-orange-600 transition duration-300 ease-in-out">
        <NavLink
          to="dashboard"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-orange-600 border-b-2 border-orange-600"
              : ""
          }
        >
          DASHBOARD
        </NavLink>
      </li>
    </>
  );

  return (
    <Navbar
      fluid
      rounded
      className={`w-11/12 mx-auto fixed top-0 left-0 right-0 z-10 text-slate-200 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <Navbar.Brand>
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          HeartBond
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL}
                rounded
                bordered
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">
                {user?.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
          
           
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleSignOutUser}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/login">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                login
              </span>
            </button>
          </Link>
        )}

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>{navItem}</Navbar.Collapse>
    </Navbar>
  );
};
export default NavBar;
