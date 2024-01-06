import { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  labelText?: string;
};

const RideNavbarButton = ({ icon, labelText }: Props) => {
  return (
    <button className="flex items-center gap-2">
      {icon}
      {labelText}
    </button>
  );
};

export default RideNavbarButton;
