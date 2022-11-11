import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { BillingDetailsType, STATE } from "../../model/interfaces";
import TextField from "@mui/material/TextField";
import React from "react";
import ImageUpload from "../../common/ImageUpload/ImageUpload";
import AddIcon from "@mui/icons-material/Add";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import { addBillingInfo } from "../../state/slices/profileSlice";
import { useSelector, useDispatch } from "react-redux";

const BillingDetails: React.FC = (props) => {
  const { profile } = useSelector((state: STATE) => state);
  const [values, setValues] = useState<BillingDetailsType>(profile.billing);

  const dispatch = useDispatch();
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setValues({ ...values, [key]: event.target.value });
  };

  useEffect(() => {
    return () => {
      dispatch(addBillingInfo(values));
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
        Billing Information
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      >
        Fill in the billing information for your profile.
      </Typography>
      <Box className="form-details">
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", fontSize: "28px" }}
        >
          Payment Method
        </Typography>
        <TextField
          fullWidth
          id="standard-error"
          label="Name on Card"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "name")}
        />
        <TextField
          fullWidth
          id="standard-error"
          label="Card Number"
          variant="standard"
          margin="normal"
          onChange={(e) => handleChange(e, "cardNumber")}
        />

        <Box component="form" sx={{ width: "100%" }}>
          <FormControl required sx={{ m: 1, minWidth: 120, width: "33ch" }}>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              sx={{ width: "33ch" }}
            >
              <DatePicker
                label="Expiry"
                value={values.expiration}
                onChange={(newValue) => {
                  setValues({ ...values, expiration: newValue });
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </FormControl>
          <TextField
            sx={{ m: 1, width: "33ch", float: "right" }}
            id="standard-error"
            label="CVV"
            variant="standard"
            onChange={(e) => handleChange(e, "cvv")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default BillingDetails;
