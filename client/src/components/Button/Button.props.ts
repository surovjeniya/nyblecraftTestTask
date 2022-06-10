import React, { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}
