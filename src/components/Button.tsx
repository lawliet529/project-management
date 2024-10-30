import { MouseEventHandler } from "react";

function Button({
  children,
  onClick,
  ...props
}: {
  children?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
