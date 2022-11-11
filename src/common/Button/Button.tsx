import { LoadingButton } from "@mui/lab";
import React from "react";

interface ButtonProps {
  color?: string;
  width?: string;
  margin?: number;
  loading?: boolean;
  children?: React.ReactElement | string;
  height?: string;
  disabled?: boolean;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { color, width, margin, loading, onClick, height, disabled } = props;
  return (
    <LoadingButton
      sx={{
        m: margin,
        width: width,
        backgroundColor: color,
        height: height,
        fontSize: "15px",
      }}
      disabled={disabled}
      onClick={() => onClick()}
      loading={loading}
      variant="contained"
    >
      {props.children}
    </LoadingButton>
  );
};

Button.defaultProps = {
  color: "#1a3447",
  width: "41ch",
  margin: 1,
  loading: false,
  height: "60px",
};

export default Button;
