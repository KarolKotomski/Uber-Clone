import CloseCross from "../icons/CloseCross";

const CloseButton = () => {
  return (
    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-greyActive">
      <CloseCross />
    </button>
  );
};

export default CloseButton;
