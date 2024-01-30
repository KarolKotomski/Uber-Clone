import userPicture from "../../images/user.jpeg";

const UserButton = () => {
  return (
    <button className="flex items-center gap-1">
      <img src={userPicture} alt="user logo" className="w-10 rounded-full" />
    </button>
  );
};

export default UserButton;
