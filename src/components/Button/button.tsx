import React from "react";

export type ButtonProps = {
  color: string;
  backgroundColor: string;
  children: React.ReactNode;
  onClick: () => void;
};

export function Button({
  color,
  backgroundColor,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button onClick={onClick} style={{ backgroundColor, color }}>
      {children}
    </button>
  );
}
