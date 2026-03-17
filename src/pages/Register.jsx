import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <div className="p-8">
          <h2 className="text-2xl font-semibold pt-2 pb-1 text-center">
            Register your account
          </h2>
          <div className="divider"></div>
          <fieldset className="fieldset space-y-1">
            <label className="label font-semibold">Your Name</label>
            <input
              type="text"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your name"
            />
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your Photo URL"
            />
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

            <label className="label pt-3 text-accent">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>

            <button className="btn btn-primary mt-4">Register</button>

            <div className="text-[13px] py-3 flex justify-center">
              <p className="text-accent">
                Already have an Account ?{" "}
                <Link
                  to="/auth/login"
                  className="text-secondary underline font-semibold cursor-pointer"
                >
                  Login
                </Link>
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
