import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState, useEffect } from "react";
import "./InputBox.scss";

interface InputBoxProps {
  value: string;
  label: string;
  onChange: Function;
  icon: React.ReactElement;
  iconHide?: React.ReactElement;
  type?: string;
}

const OutlinedInputStyle = {
  height: "64px",
  // width: "472px",
  borderRadius: "5px",
};

const InputBox: React.FC<InputBoxProps> = (props) => {
  const { value, label, onChange, icon, iconHide } = props;
  const [iconVisible, seticonVisible] = useState(true);

  const handleClickShowText = (e: any) => {
    if (iconHide) {
      seticonVisible(!iconVisible);
    }
  };

  useEffect(() => {
    if (iconHide) {
      seticonVisible(false);
    }
  }, []);
  return (
    <FormControl sx={{ m: 1, width: "40ch" }} variant="outlined">
      <InputLabel size="small" htmlFor="outlined-adornment-phone">
        {label}
      </InputLabel>
      <OutlinedInput
        sx={OutlinedInputStyle}
        size="small"
        id="outlined-adornment-phone"
        type={iconVisible ? "text" : "password"}
        value={value}
        onChange={onChange(label.toLowerCase())}
        endAdornment={
          <InputAdornment position="end">
            <IconButton edge="end" onClick={handleClickShowText}>
              {iconVisible ? icon : iconHide}
            </IconButton>
          </InputAdornment>
        }
        // style={{    height: '73%'}}
        label={label}
      />
    </FormControl>
  );
};

InputBox.defaultProps = {
  type: "text",
};

export default InputBox;
