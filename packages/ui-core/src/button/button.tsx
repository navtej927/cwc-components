import React from "react";
import { upperCase } from '@cwcode/ui-utils';
console.log("upperCase", upperCase)
interface ButtonProps {
  label: string;
}

export const Button = (props: ButtonProps) => {
  const { label } = props;
  return (
    <button>
      <span>{upperCase(label)}</span>
    </button>
  )
}
