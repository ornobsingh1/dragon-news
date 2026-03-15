import swimmingImage from "../assets/swimming.png";
import classImage from "../assets/class.png";
import playImage from "../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-semibold mb-3">Q-zone</h2>

      <div className="space-y-3">
        <img src={swimmingImage} alt="" />
        <img src={classImage} alt="" />
        <img src={playImage} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
