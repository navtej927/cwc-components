import React from "react";

interface ButtonProps {
  children: string;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, disabled } = props;
  return (
    <button disabled={disabled}>
      { children}
    </button>
  )
}
