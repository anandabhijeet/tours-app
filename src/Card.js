import React, { useState } from "react";
import {
  Button,
  Box,
  Container,
  Grid,
  Typography,
  Badge,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    color: "dodgerblue",
    backgroundColor: "aliceblue",
    right: 10,
    padding: "4px",
    borderRadius: "5px",
  },
}));

const Card = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  const shorten = info ? info.substring(0, 200) : "";

  return (
    <div>
      <Box
        // height={630}
        width={660}
        boxShadow={10}
        marginTop={5}
        backgroundColor={"white"}
        borderRadius={1}
      >
        <Box height="360" width="660">
          <img
            className="poster-img"
            src={image}
            alt="img"
            height="360"
            width="660"
          />
        </Box>
        <Container className="content-container">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="20px" fontWeight="bold" variant="h3">
              {name}
            </Typography>
            <IconButton aria-label="cart">
              <StyledBadge
                badgeContent={`$${price}`}
                color="secondary"
              ></StyledBadge>
            </IconButton>
          </Grid>
        </Container>

        <Container paddingTop="10px">
          <Typography
            className="info"
            textAlign="start"
            color="bluegrey"
            variant="body"
          >
            {readMore ? info : `${shorten}...`}
            <Button variant="text" onClick={() => setReadMore(!readMore)}>
              {readMore ? "showless" : "read more"}
            </Button>
          </Typography>
        </Container>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          paddingBottom="25px"
          textAlign="center"
        >
          <Container>
            <Button
              variant="outlined"
              color="error"
              onClick={() => removeTour(id)}
            >
              Not Intrested
            </Button>
          </Container>
        </Grid>
      </Box>
    </div>
  );
};

export default Card;
