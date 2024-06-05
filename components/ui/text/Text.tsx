'use client';

import React, { FC } from "react";
import TextType, { HeadingType } from "./text-type";
import TextGlobal from "./text.styled";
import useTheme from "@/theme/useTheme";

const Text: FC<TextType> = ({
  children,
  align = "inherit",
  paragraph,
  size,
  variant = "inherit",
  heading,
  color,
}) => {
  const {theme: {mode: { textColor },}


  } = useTheme();
  return (
    <>
      <TextGlobal />
      {paragraph ? (
        <p
          className={`${variant}`}
          style={{
            fontSize: size,
            textAlign: align,
            color: color ? color : textColor,
          }}
        >
          {children}
        </p>
      ) : heading ? (
        <Heading
          variant={heading}
          color={color ? color : textColor}
          align={align}
        >
          {children}
        </Heading>
      ) : (
        <span
          className={`${variant}`}
          style={{
            fontSize: size,
            textAlign: align,
            color: color ? color : textColor,
          }}
        >
          {children}
        </span>
      )}
    </>
  );
};

const Heading: FC<HeadingType> = ({
  variant,
  children,
  align,
  size,
  color,
}) => {
  switch (variant) {
    case "h1":
      return (
        <h1
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h4>
      );
    case "h5":
      return (
        <h5
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h5>
      );
    case "h6":
      return (
        <h6
          className={`${variant}`}
          style={{ fontSize: size, color: color, textAlign: align }}
        >
          {children}
        </h6>
      );
    default:
      return <></>;
  }
};

export default Text;