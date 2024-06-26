import { FC } from "react";

import { ChoiceWrapper, ChoiceCircle, Dot } from "./choice.styled";
import { ChoiceProps } from "./type";
import Text from "../text/Text";
import useTheme from "../../theme/useTheme";

const Choice: FC<ChoiceProps> = ({
  label,
  name,
  onChange,
  value,
  selected,
}) => {
  const { theme } = useTheme();
  const isSelected = selected === value ? true : false;
  const handleChoice = () => {
    onChange && onChange(value.toString());
  };
  return (
    <ChoiceWrapper onClick={handleChoice}>
      <ChoiceCircle theme={theme} selected={isSelected}>
        <Dot theme={theme} selected={isSelected} />
        <input
          type="radio"
          name={name}
          className="input-radio"
          checked={isSelected}
          onChange={handleChoice}
          value={value}
        />
      </ChoiceCircle>
      <Text>{label}</Text>
    </ChoiceWrapper>
  );
};
export default Choice;