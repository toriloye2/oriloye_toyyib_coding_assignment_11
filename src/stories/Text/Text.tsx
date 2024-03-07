import React from "react";
import type { TextProps } from "./Text.types";

/**
 * Simple text component
 */
export const Text = ({
  size = 'medium',
  color= 'black',
  content,
  ...props
}: TextProps) => {
  return (
    <textarea
      // type="text"
      className={['storybook-text', `storybook-text--${size}`].join(' ')}
      style={{ color }}
      {...props}
    >
      {content}
    </textarea>
  );
};
