import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Sign-out successful.");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-between items-center my-6">
      <div className="">{user && user?.email}</div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img
          className="cursor-pointer w-11 h-11"
          src={user ? user.photoURL : userIcon}
          alt=""
        />

        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary font-semibold"
          >
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary font-semibold">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
