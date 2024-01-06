import userPicture from "../../images/user.jpeg";
import Chevron from "../icons/Chevron";

const UserButton = () => {
  return (
    <button className="flex items-center gap-1">
      <img src={userPicture} alt="user logo" className="w-10 rounded-full" />
      <Chevron />
    </button>
  );
};

export default UserButton;
