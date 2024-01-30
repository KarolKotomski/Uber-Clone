import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  text: string;
  isFlexCol?: boolean;
};

const DropdownMenuButton = ({ icon, text, isFlexCol }: Props) => {
  return (
    <button
      className={`flex w-full items-center gap-2 px-4 py-[0.875rem] ${isFlexCol && "flex-col"}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default DropdownMenuButton;
