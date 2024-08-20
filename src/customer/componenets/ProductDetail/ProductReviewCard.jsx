import React from "react";
import { Avatar, Box, Grid, Rating } from "@mui/material";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p>Ram</p>
              <p>April 5, 1992</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating"></Rating>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Exercitationem, vitae!
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
