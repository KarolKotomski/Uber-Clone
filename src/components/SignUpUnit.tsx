type Props = {
  purpose: string;
};

const SignUpUnit = ({ purpose }: Props) => {
  return (
    <div className="flex cursor-pointer items-center justify-between border-b border-b-black pb-10 hover:text-greyActive">
      <h2 className="pr-5 font-UberMove text-[1.75rem] font-bold sm:text-[2rem] lg:text-[2.25rem]">
        Sign up to {purpose}
      </h2>
      <svg
        aria-hidden="true"
        focusable="false"
        fill="currentColor"
        viewBox="0 0 36 36"
        className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
};

export default SignUpUnit;
