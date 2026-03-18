import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const { logIn, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        toast.success("SignIn successful.");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="p-8">
          <h2 className="text-2xl font-semibold pt-2 pb-1 text-center">
            Login your account
          </h2>
          <div className="divider"></div>
          <fieldset className="fieldset space-y-1">
            <label className="label font-semibold">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your email address"
              required
            />
            <label className="label font-semibold py-1">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your password"
              required
            />
            <div className="py-1">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <div className="text-[13px] py-3 flex justify-center">
              <p className="text-accent">
                Don’t Have An Account ?{" "}
                <Link
                  to="/auth/register"
                  className="text-secondary underline font-semibold cursor-pointer"
                >
                  Register
                </Link>
              </p>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
