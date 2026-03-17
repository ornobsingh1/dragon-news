import { Link, NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center my-6">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img className="cursor-pointer" src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary font-semibold">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
