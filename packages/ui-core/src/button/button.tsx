import React from "react";

interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <button>
      <span>{label}</span>
    </button>
  )
}
