import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name?.value;
    const photo = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    createUser(email, password)
      .then((result) => {
        const user = result?.user;
        setUser(user);
        console.log(user);
        toast.success("Signup successful!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="p-8">
          <h2 className="text-2xl font-semibold pt-2 pb-1 text-center">
            Register your account
          </h2>
          <div className="divider"></div>
          <fieldset className="fieldset space-y-1">
            <label className="label font-semibold">Your Name</label>
            <input
              name="name"
              type="text"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your name"
              required
            />
            <label className="label font-semibold">Photo URL</label>
            <input
              name="photo"
              type="text"
              className="input w-full bg-base-200 border-none"
              placeholder="Enter your Photo URL"
              required
            />
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

            <label className="label pt-3 text-accent">
              <input type="checkbox" className="checkbox" />
              Accept Term & Conditions
            </label>

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>

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
        </form>
      </div>
    </div>
  );
};

export default Register;
