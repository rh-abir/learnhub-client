import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import avator from "../../../assets/avator.jpg";
import { AuthContext } from "../../../provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  console.log(user);

  const navLink = (
    <>
      <li>
        <Link to="/courses">Courese</Link>
      </li>
      <li>
        <Link>Blog</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // console.log()
        toast.success("LogOut Successfully !");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="navbar bg-base-100  border-b-2 rounded-full">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link
            to="/"
            className="btn hover:bg-white btn-ghost text-xl hidden lg:block"
          >
            LeanHub
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold">{navLink}</ul>
        </div>

        <div className="navbar-end">
          {/* uesr profile */}
          {!user ? (
            <button className="btn btn-primary btn-outline">
              <Link to="/login">Log In</Link>
            </button>
          ) : (
            <div className="flex-none z-10">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user ? user?.photoURL : avator} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  {user && (
                    <>
                      <li>
                        <Link to="/dashboard" className="justify-between">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogOut}
                          className="justify-between"
                        >
                          Log Out
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
