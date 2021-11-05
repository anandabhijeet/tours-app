import React, { useState, useEffect } from "react";
import Card from "./Card";
import {
  Grid,
  Typography,
  Container,
  Divider,
  List,
  Button,
  Box,
} from "@mui/material";
import "./App.css";
import Axios from "axios";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const removeTour = (id) => {
    const newData = data.filter((tour) => tour.id !== id);
    setData(newData);
  };

  const getData = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(url);
      console.log(response.data);

      setData(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <div>
        <Container className="content-container">
          <Typography paddingBottom="15px" fontSize="35px" fontW variant="h2">
            Our Tours
          </Typography>

          <Divider paddingTop="20" />
        </Container>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignitems="center"
          >
            <Box height={600} width={600} textAlign="center" padding="10">
              <Typography fontSize="40px" variant="h3">
                No more tours available!!!
              </Typography>
              <Button
                marginTop="20"
                variant="contained"
                color="primary"
                onClick={() => getData()}
              >
                Refresh
              </Button>
            </Box>
          </Grid>
        </Container>
      </div>
    );
  }

  return (
    <main>
      <Container className="content-container">
        <Typography paddingBottom="15px" fontSize="35px" fontW variant="h2">
          Our Tours
        </Typography>

        <Divider paddingTop="20" />
      </Container>

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <List>
          {data.map((tour) => {
            return <Card key={tour.id} {...tour} removeTour={removeTour} />;
          })}
        </List>
      </Grid>
    </main>
  );
};

export default App;
