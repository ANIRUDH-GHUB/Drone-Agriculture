import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import ImageUpload from "../../../common/ImageUpload/ImageUpload";
import { STATE, PilotCertificateType } from "../../../model/interfaces";
import { addPilotCertificateInfo } from "../../../state/slices/profileSlice";

const VerifyPilot: React.FC = (props) => {
  const { profile } = useSelector((state: STATE) => state);
  const [values, setValues] = useState<PilotCertificateType>(
    profile.pilotCertificate
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
      dispatch(addPilotCertificateInfo(values));
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
        Let’s verify your pilot certificiation.
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", fontSize: "28px" }}
        >
          Remote Pilot Certificate
        </Typography>
        <TextField
          fullWidth
          id="standard-error"
          value={values.certificatinId}
          label="Certificate ID number"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "certificatinId")}
        />
        <TextField
          fullWidth
          id="standard-error"
          value={values.name}
          label="Name of Certificate Holder"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "name")}
        />
        <TextField
          fullWidth
          id="standard-error"
          value={values.address}
          label="Phone Number"
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
            value={values.zip}
            label="Zip code"
            variant="standard"
            onChange={(e) => handleChange(e, "zip")}
          />
          <Box component="form" sx={{ width: "100%" }}>
            <FormControl required sx={{ m: 1, minWidth: 120, width: "100%" }}>
              <InputLabel id="demo-simple-select-required-label">
                Gender
              </InputLabel>
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
            </FormControl>
            <TextField
              sx={{ m: 1, width: "33ch", float: "left" }}
              id="standard-error"
              value={values.height}
              label="Height"
              variant="standard"
              onChange={(e) => handleChange(e, "height")}
            />
            <TextField
              sx={{ m: 1, width: "33ch", float: "right" }}
              id="standard-error"
              value={values.weight}
              label="Weight"
              variant="standard"
              onChange={(e) => handleChange(e, "weight")}
            />
          </Box>
        </Box>
        <Box sx={{ my: 4, width: "100%" }}>
          <ImageUpload />
        </Box>
        <Box className="form-details" sx={{ my: 3 }}>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontWeight: "600", fontSize: "20px" }}
          >
            Add Another Certificate
          </Typography>
          <Box
            className="form-details"
            sx={{
              my: 3,
              position: "absolute",
              padding: "20px",
              transform: "translate(-149px, -40px);",
              color: "#367BF5",
            }}
          >
            <AddIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VerifyPilot;
