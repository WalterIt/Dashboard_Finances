import { forwardRef } from "react";
import { AvatarImage, AvatarWrapper } from "./avatar.styled";
import { AvatarProps } from "./type";

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const { src, alt, size, styles, classes, varient, onClick, avatar, name } =
    props;
  return (
    <AvatarWrapper
      size={size}
      varient={varient}
      style={{ ...styles }}
      className={`avatar ${classes ? classes : {}}`}
    >
      <AvatarImage
        src={src || avatar}
        alt={alt || name}
        ref={ref}
        onClick={onClick}
      />
    </AvatarWrapper>
  );
});

Avatar.displayName = 'Avatar';

export default Avatar;
