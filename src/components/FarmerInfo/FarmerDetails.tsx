import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import { FarmerType, SignupState, STATE } from "../../model/interfaces";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { addUserDetails } from "../../state/slices/profileSlice";

interface FarmerDetailsProps {
  personalDetails?: FarmerType;
  setPersonalDetails?: Function;
}

const FarmerDetails: React.FC<FarmerDetailsProps> = (props) => {
  const userDetails = useSelector((state: STATE) => state.profile.userDetails);
  const [values, setValues] = useState<FarmerType>(userDetails);
  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };
  useEffect(() => {
    return () => {
      dispatch(addUserDetails(values));
    };
  }, [values]);

  return (
    <Box
      sx={{
        textAlign: "start",
        padding: "2rem 3rem",
        marginTop: "50px",
      }}
      id="create-profile"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "600", mb: "2rem", fontSize: "36px" }}
      >
        Farmer Information
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      >
        Fill in the data for your profile. It will only take a couple of
        minutes.
      </Typography>
      <Box className="form-details">
        <TextField
          fullWidth
          id="standard-error"
          label="Name"
          value={values.name}
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "name")}
        />
        <TextField
          fullWidth
          id="standard-error"
          label="Phone Number"
          value={values.phone}
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "phone")}
        />
        <TextField
          fullWidth
          id="standard-error"
          label="Email"
          value={values.email}
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "email")}
        />
        <FormControl required sx={{ m: 1, minWidth: 120, width: "100%" }}>
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            sx={{ width: "100%" }}
          >
            <DatePicker
              label="Birthday"
              value={values.birthday}
              onChange={(newValue) => {
                setValues({ ...values, birthday: `${newValue}` });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120, width: "100%" }}>
          <InputLabel id="demo-simple-select-required-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={values.gender}
            label="Gender"
            onChange={(event: SelectChangeEvent) => {
              setValues({ ...values, gender: event.target.value });
            }}
          >
            <MenuItem value={"M"}>Male</MenuItem>
            <MenuItem value={"F"}>Female</MenuItem>
            <MenuItem value={"Non"}>Non Binary</MenuItem>
          </Select>
          <FormHelperText>Required</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
};

export default FarmerDetails;
