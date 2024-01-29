import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
};

const DropdownMenuButton = ({ icon, text }: Props) => {
  return (
    <button className="flex items-center gap-2 px-4 py-[0.875rem]">
      {icon}
      {text}
    </button>
  );
};

export default DropdownMenuButton;
