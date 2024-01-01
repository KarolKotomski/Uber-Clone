type Props = {
  secondaryButtonText?: string;
};

const SecondaryButton = ({ secondaryButtonText }: Props) => {
  return <button>{secondaryButtonText}</button>;
};

export default SecondaryButton;
