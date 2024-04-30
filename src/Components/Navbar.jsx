import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { user, logout } = useAuth();

  const notifyLogout = () => toast.success("Successfully Logged Out");

  const handleLogout = () => {
    logout();
    notifyLogout();
  };

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light" // Set theme based on local storage.
  );

  // To save the theme to localStorage and set attribute to the HTML element.
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]); // theme set to the dependency array, to call the useEffect after theme is changed.

  // To toggle the theme
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="shadow-md">
      <Tooltip id="my-tooltip" />
      <div className="navbar max-w-7xl w-[95%] md:w-[93%] mx-auto md:h-[80px] ">
        <div className="navbar-start gap-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden pl-0 pr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-semibold *:py-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/profile-update"}>Update Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact Us</NavLink>
              </li>
              <li>
                <NavLink>All Art & craft Items</NavLink>
              </li>
              <li>
                <NavLink>Add Craft Item</NavLink>
              </li>
              <li>
                <NavLink>My Art&Craft List</NavLink>
              </li>
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-2xl font-spartan pt-1 md:text-4xl min-w-full flex items-center cursor-pointer font-bold "
          >
            Art<span className="text-[#E56997] font-bold">Fusion</span>.
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-base  font-semibold px-1">
            <li className="hover:bg-none">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/all"}>All Art & Craft Items</NavLink>
            </li>
            {/* <li className="hover:bg-none">
              <NavLink to={"/profile-update"}>Update Profile</NavLink>
            </li> */}
            {user ? (
              <>
                {/* <li className="hover:bg-none">
                  <NavLink to={"/contact"}>Contact Us</NavLink>
                </li> */}

                <li>
                  <NavLink to={"/add"}>Add Craft Item</NavLink>
                </li>
                <li>
                  <NavLink to={"/my_list"}>My Art & Craft List</NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
        <div className="navbar-end gap-1 md:gap-3">
          {user ? (
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={user.displayName}
              data-tooltip-place="left"
              className="dropdown dropdown-end tooltip tooltip-left"
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-8 md:w-10 rounded-full">
                  <img
                    src={
                      user?.photoURL ||
                      "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-semibold shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to={"/profile-update"} className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-2 md:gap-3">
              <Link to={"/login"}>
                <button className="font-semibold text-sm md:text-base hover:text-[#E56997]">
                  Login
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="font-semibold text-sm md:text-base hover:text-[#E56997]">
                  Register
                </button>
              </Link>
            </div>
          )}
          <label className="cursor-pointer grid place-items-center">
            <input
              onChange={handleToggle}
              type="checkbox"
              checked={theme === "synthwave"}
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
