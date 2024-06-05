'use client';

import { FC } from "react";
import NormalButton from "./Button.style";
import { ButtonType } from ".";
import useTheme from "@/theme/useTheme";

const Button: FC<ButtonType> = ({ variant = "text", children, color }) => {
  const {theme: { primaryColor },} = useTheme();

  return (
    <NormalButton theme={{ primaryColor }} variant={variant} color={color}>
      {children}
    </NormalButton>
  );
};
export default Button;