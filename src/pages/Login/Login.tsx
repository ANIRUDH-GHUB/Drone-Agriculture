import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import Grid from "@material-ui/core/Grid";
import { useState } from "react";
import InputBox from "../../common/InputBox/InputBox";
import { FormControl, Hidden } from "@mui/material";
import Typography from "@mui/material/Typography";
// import "./Signup.scss";
import Button from "../../common/Button/Button";
import { login, singup } from "../../services/userService";
import { SignupState } from "../../model/interfaces";
import { useNavigate } from "react-router";
import { alertMessage } from "../../utils/util";

const Login = () => {
  const [values, setValues] = useState<SignupState>({
    email: "",
    password: "",
    showPassword: false,
  });
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange =
    (prop: keyof SignupState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleSignup = async (event: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    const res = await login(values);
    console.log(res);
    setLoading(false);
    if (res?.status === 200) {
      alertMessage("Logged In Succesfully");
      navigate("/");
    } else {
      alertMessage(res?.data, "error");
    }
  };

  return (
    <div data-testid="signup">
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", height: "100vh" }}
      >
        <Hidden only="xs">
          <Grid container item md={7} sm={5} direction="column">
            <div className="drone-home-right"></div>
          </Grid>
        </Hidden>
        <Grid container item md={5} sm={7} xs={12} direction="column">
          <Typography variant="h4" gutterBottom mb={4}>
            Log In
          </Typography>
          <Box alignItems="center">
            <FormControl>
              <InputBox
                value={values?.email || ""}
                label="Email"
                onChange={handleChange}
                icon={<EmailIcon />}
              />
              <InputBox
                value={values?.password || ""}
                label="Password"
                onChange={handleChange}
                icon={<Visibility />}
                iconHide={<VisibilityOff />}
              />
              <Button onClick={handleSignup} loading={isLoading}>
                Log In
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
