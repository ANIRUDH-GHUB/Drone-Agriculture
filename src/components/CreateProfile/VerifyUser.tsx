import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { DrivingLicenceType, STATE } from "../../model/interfaces";
import TextField from "@mui/material/TextField";
import React from "react";
import ImageUpload from "../../common/ImageUpload/ImageUpload";
import { addDrivingLicence } from "../../state/slices/profileSlice";
import { useSelector, useDispatch } from "react-redux";

const VerifyUser: React.FC = (props) => {
  const { profile } = useSelector((state: STATE) => state);
  const [values, setValues] = useState<DrivingLicenceType>(
    profile.drivingLicence
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
      dispatch(addDrivingLicence(values));
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
        Let’s verify your identity.
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      >
        Please upload your driver’s license.
      </Typography>
      <Box className="form-details">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", fontSize: "28px" }}
        >
          Driver’s License
        </Typography>
        <TextField
          fullWidth
          id="standard-error"
          value={values.name}
          label="Name"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "name")}
        />
        <TextField
          fullWidth
          id="standard-error"
          value={values.licenceId}
          label="Licence ID"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "licenceId")}
        />
      </Box>
      <Box sx={{ my: 4 }}>
        <ImageUpload />
      </Box>
    </Box>
  );
};

export default VerifyUser;
