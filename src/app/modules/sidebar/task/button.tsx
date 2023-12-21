import React, { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="w-full text-left pl-3 py-3 flex">
      {children}
    </button>
  );
}

export default Button;
