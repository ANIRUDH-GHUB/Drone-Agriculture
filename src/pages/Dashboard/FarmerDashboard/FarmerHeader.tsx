import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface FarmerHeaderProps {
  header: string;
  description: string;
  profileIcon: string;
}

const FarmerHeader: React.FC<FarmerHeaderProps> = (props) => {
  const { header, description, profileIcon } = props;
  return (
    <Box
      sx={{
        textAlign: "start",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
      id="create-profile"
    >
      <Box>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "600", mb: "2rem", fontSize: "36px" }}
        >
          {header}
        </Typography>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
        >
          {description}
        </Typography>
      </Box>
      <img src={profileIcon} alt="profile" />
    </Box>
  );
};

export default FarmerHeader;
