
import React from "react";
import { RadioProps } from "./Radio.types";

/**
 * Component for radio button
 */
export const Radio = ({
  label,
  value,
  checked = false,
  disabled = false,
  ...props
}: RadioProps) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        {...props}
      />
      {label}
    </label>
  );
};
