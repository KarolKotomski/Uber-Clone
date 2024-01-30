import Wallet from "./icons/Wallet";
import Tag from "./icons/Tag";
import HeadSet from "./icons/HeadSet";
import AccountPerson from "./icons/AccountPerson";
import Gear from "./icons/Gear";
import UserDropdownMenuButton from "./buttons/UserDropDownMenuButton";

const UserDropDownMenu = () => {
  return (
    <ul className="flex flex-col whitespace-nowrap rounded-lg bg-lightGrey2 text-base">
      <li className="rounded-t-lg transition-all duration-200 hover:bg-lightGrey">
        <UserDropdownMenuButton icon={<Wallet />} text={"Wallet"} />
      </li>
      <li className="transition-all duration-200 hover:bg-lightGrey">
        <UserDropdownMenuButton icon={<Tag />} text={"Discounts"} />
      </li>
      <li className="transition-all duration-200 hover:bg-lightGrey">
        <UserDropdownMenuButton icon={<HeadSet />} text={"Support"} />
      </li>
      <li className="transition-all duration-200 hover:bg-lightGrey">
        <UserDropdownMenuButton
          icon={<AccountPerson />}
          text={"Account management"}
        />
      </li>
      <li className="rounded-b-lg transition-all duration-200 hover:bg-lightGrey">
        <UserDropdownMenuButton icon={<Gear />} text={"Settings"} />
      </li>
    </ul>
  );
};

export default UserDropDownMenu;
