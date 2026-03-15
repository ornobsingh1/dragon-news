import FindUs from "../FindUs";
import Qzone from "../Qzone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div className="sticky top-6 max-h-screen overflow-y-auto space-y-6">
      <SocialLogin />
      <FindUs />
      <Qzone />
    </div>
  );
};

export default RightAside;
