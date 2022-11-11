import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { FarmType, STATE } from "../../model/interfaces";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useSelector, useDispatch } from "react-redux";
import { addFarmDetails } from "../../state/slices/profileSlice";

interface FarmerDetailsProps {
  personalDetails?: FarmType;
  setPersonalDetails?: Function;
}

const FarmDetails: React.FC<FarmerDetailsProps> = (props) => {
  const { profile } = useSelector((state: STATE) => state);
  const [values, setValues] = useState<FarmType>(
    profile.farms?.[0]
      ? profile.farms[0]
      : {
          name: "",
          address: "",
          city: "",
          country: "",
          zip: "",
        }
  );
  const dispatch = useDispatch();

  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  useEffect(() => {
    return () => {
      dispatch(addFarmDetails(values));
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
        Farm Information
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
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "name")}
        />
        <TextField
          fullWidth
          id="standard-error"
          label="Address"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "address")}
        />

        <FormControl required sx={{ m: 1, minWidth: 120, width: "100%" }}>
          <InputLabel id="demo-simple-select-required-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={values.city}
            label="City"
            onChange={(event: SelectChangeEvent) => {
              setValues({ ...values, city: event.target.value });
            }}
          >
            <MenuItem value={"M"}>New York</MenuItem>
            <MenuItem value={"F"}>San Jose</MenuItem>
            <MenuItem value={"Non"}>Georgia</MenuItem>
          </Select>
        </FormControl>
        <Box component="form" sx={{ width: "100%" }}>
          <FormControl sx={{ width: "33ch", float: "left" }}>
            <InputLabel id="demo-simple-select-required-label">
              Country
            </InputLabel>
            <Select
              labelId="demo-simple-select-required-label"
              id="demo-simple-select-required"
              value={values.country}
              label="Country"
              onChange={(event: SelectChangeEvent) => {
                setValues({ ...values, country: event.target.value });
              }}
            >
              <MenuItem value={"M"}>US</MenuItem>
              <MenuItem value={"F"}>Canada</MenuItem>
              <MenuItem value={"Non"}>UK</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ m: 1, width: "33ch", float: "right" }}
            id="standard-error"
            label="Zip"
            variant="standard"
            onChange={(e) => handleChange(e, "zip")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FarmDetails;
