import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-semibold pt-2 pb-1 text-center">
            Login your account
          </h2>
          <div className="divider"></div>
          <fieldset className="fieldset space-y-1">
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your email address"
            />
            <label className="label font-semibold py-1">Password</label>
            <input
              type="password"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your password"
            />
            <div className="py-1">
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-primary mt-4">Login</button>
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
        </div>
      </div>
    </div>
  );
};

export default Login;
