import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { DroneType } from "../../../../model/interfaces";

const DroneItem: React.FC<{ item?: DroneType; onSelect?: Function }> = (
  props
) => {
  const [select, setSelect] = React.useState(false);
  const selectHandler = () => {
    setSelect(true);
    if (props.onSelect) props.onSelect(props?.item);
  };
  const selectRemove = () => {
    setSelect(false);

    if (props.onSelect) props.onSelect(props?.item);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <Box sx={{ display: "flex" }}>
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {props.item?.drone_maker} {props.item?.drone_model}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ID# {props.item?.drone_id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3-Axis Gimble
            </Typography>
            <Typography variant="body2" color="text.secondary">
              30min flight time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              1375 grams
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            height="140"
            image="https://www.pngplay.com/wp-content/uploads/1/Camera-Drone-Transparent-Free-PNG.png"
            alt="green iguana"
            sx={{ width: "50%", objectFit: "contain", pt: 5 }}
          />
        </Box>

        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">
            ${Math.floor(Math.random() * 100)} / hour
          </Typography>
          {select ? (
            <Button variant="contained" onClick={selectRemove}>
              Remove
            </Button>
          ) : (
            <Button variant="contained" onClick={selectHandler}>
              Select
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default DroneItem;
