import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CropFarm from "./../../../../assets/images/crop-farm.jpg";
import FruitFarm from "./../../../../assets/images/fruit-farm.webp";
import NurseryFarm from "./../../../../assets/images/nursery-farm.jpg";
import LivestockFarm from "./../../../../assets/images/livestockfarm.jpg";
import React from "react";

const FarmCatalog = () => {
  const [activeFarm, setActiveFarm] = React.useState<number>(-1);

  const handleClick = (ind: number) => {
    setActiveFarm(ind);
  };

  const mockFarm = [
    {
      id: 1,
      image: CropFarm,
    },
    {
      id: 2,
      image: FruitFarm,
    },
    {
      id: 3,
      image: NurseryFarm,
    },
    {
      id: 4,
      image: LivestockFarm,
    },
  ];
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
        Step 1: Farmland selection
      </Typography>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "300", mb: "2rem", fontSize: "20px" }}
      >
        Please select the farmland you would like your drone service on.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {mockFarm.map((item, index) => (
          <div
            key={item.id}
            className={`farm-catalog-item ${
              index === activeFarm ? "active" : ""
            }`}
            onClick={(e) => handleClick(index)}
          >
            <img src={item.image} />
          </div>
        ))}
        {/* <div className="farm-catalog-item">
          <img src={CropFarm} />
        </div>
        <div className="farm-catalog-item">
          <img src={FruitFarm} />
        </div>
        <div className="farm-catalog-item">
          <img src={NurseryFarm} />
        </div>
        <div className="farm-catalog-item">
          <img src={LivestockFarm} />
        </div> */}
      </Box>
    </Box>
  );
};

export default FarmCatalog;
