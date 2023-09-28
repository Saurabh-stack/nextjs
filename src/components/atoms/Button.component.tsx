import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  isDisable?: boolean;
  isLoading?: boolean;
  color?: string;
  onClick?: MouseEventHandler;
  type?: "submit";
};

const Button_Chakra: React.FC<ButtonProps> = ({
  color,
  isDisable,
  isLoading,
  children,
  className,
  onClick,
  type,
  ...rest
}) => {
  return (
    <Button
      colorScheme={color ? color : "teal"}
      spinnerPlacement="start"
      isDisabled={isDisable || isLoading}
      isLoading={isLoading}
      className={className}
      onClick={onClick}
      type={type}
      {...rest}
    >
      {children}
    </Button>
  );
};
export default Button_Chakra;
