import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const pages = ["Home", "Contact", "Profile"];

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ backgroundColor: "#1A3447" }}>
        <Toolbar sx={{ height: { xs: "70px", md: "90px" } }}></Toolbar>
      </AppBar>
      <AppBar position="fixed" sx={{ backgroundColor: "#1A3447" }}>
        <Toolbar sx={{ height: { xs: "70px", md: "90px" } }}>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <SearchIcon />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
