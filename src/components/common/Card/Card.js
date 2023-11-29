import React from "react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import ImagesComponent from "../../../assets/Images/ImageComponent/Index";
const CardComponent = () => {
  return (
    <Card sx={{marginTop: "6rem"}}>
      <CardContent>
        <img src={ImagesComponent.Person} alt="lazanya" height= {"180px"}/>
        <Typography variant="h3"> title</Typography>
        <Typography variant="h5">description </Typography>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography variant="h4">$12.06</Typography>
          <Button variant="contained">Add to Cart</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
