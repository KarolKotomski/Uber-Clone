import DropdownMenuButton from "./buttons/UserDropDownMenuButton";
import UserButton from "./buttons/UserButton";
import AccountPerson from "./icons/AccountPerson";
import CloseCross from "./icons/CloseCross";
import Gear from "./icons/Gear";
import HeadSet from "./icons/HeadSet";
import Tag from "./icons/Tag";
import Ticket from "./icons/Ticket";
import Wallet from "./icons/Wallet";

type Props = {
  handleClose: () => void;
};

const SideModalMenu = ({ handleClose }: Props) => {
  return (
    <>
      <div
        className="m-4 ml-auto w-fit cursor-pointer fill-black"
        onClick={handleClose}
      >
        <CloseCross />
      </div>
      <div className="flex items-center justify-between p-4">
        <h3 className="font-UberMove text-[2rem] font-bold">User</h3>
        <UserButton />
      </div>
      <nav>
        <div className="grid grid-cols-3 items-center gap-4 whitespace-nowrap px-4 py-2">
          <div className="rounded-lg bg-lightGrey2 transition-colors duration-300 hover:bg-whiteHover">
            <DropdownMenuButton
              icon={<Ticket />}
              text="My rides"
              isFlexCol={true}
            />
          </div>
          <div className="rounded-lg bg-lightGrey2 transition-colors duration-300 hover:bg-whiteHover">
            <DropdownMenuButton
              icon={<Wallet />}
              text="Wallet"
              isFlexCol={true}
            />
          </div>
          <div className="rounded-lg bg-lightGrey2 transition-colors duration-300 hover:bg-whiteHover">
            <DropdownMenuButton
              icon={<Tag />}
              text="Discounts"
              isFlexCol={true}
            />
          </div>
        </div>
        <div>
          <div className="transition-colors duration-300 hover:bg-lightGrey">
            <DropdownMenuButton icon={<HeadSet />} text="Support" />
          </div>
          <div className="transition-colors duration-300 hover:bg-lightGrey">
            <DropdownMenuButton
              icon={<AccountPerson />}
              text="Account management"
            />
          </div>
          <div className="transition-colors duration-300 hover:bg-lightGrey">
            <DropdownMenuButton icon={<Gear />} text="Settings" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default SideModalMenu;
