import styled from "styled-components";
import { ButtonType } from "./type";
import { alertColor, AlertColorType } from "../color/alert";

const normalButton = styled.button<ButtonType>`
  //background color
  background-color: ${props =>  props.variant === 'text' || props.variant === 'outlined' ? 'transparent' : (props.color ? alertColor[props.color as keyof AlertColorType] : (props.color ? alertColor[props.color] : props.theme.primaryColor.color))};
  // border
  border: 1.8px solid ${props => props.variant === 'outlined' ? (props.color ? alertColor[props.color as keyof AlertColorType] : props.theme.primaryColor.color) : 'transparent'};
  // color
  color: ${props => props.variant === 'outlined' || props.variant === 'text' ? props.color ? alertColor[props.color as keyof AlertColorType] : props.theme.primaryColor.color : '#F9F9F9'};
`;
export default normalButton;