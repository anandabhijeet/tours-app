import React from "react";
import { Container, Typography } from "@mui/material";

const Loading = () => {
  return (
    <div>
      <Container className="content-container">
        <Typography fontSize="30px" variant="h3">
          Loading, Please wait----
        </Typography>
      </Container>
    </div>
  );
};

export default Loading;
