import logo from "../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="flex justify-center items-center flex-col p-8 gap-2">
      <img className="w-100" src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      {/* <p>Sunday, November 27, 2025</p> */}
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM MM, yyyy")}
      </p>
    </div>
  );
};

export default Header;
