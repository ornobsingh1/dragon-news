
const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className=" flex flex-col gap-3 pt-3">
        {/* Google */}
        <button className="btn bg-white text-black border-[#e5e5e5] hover:bg-base-300">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google-logo"
          />
          Login with Google
        </button>
        {/* GitHub */}
        <button className="btn bg-white text-black border-[#e5e5e5] hover:bg-base-300">
          <img
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/github.png"
            alt="github"
          />
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
