import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";

// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

import { RiHomeLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import styled from "styled-components";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid transparent`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AiOutlinePlus sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, .05)",

  //   flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    // marginLeft: "10px",
  },
}));

function Dogg() {
  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item sx={12} lg={3}>
          <Sidebar />
        </Grid>
        <Grid item sx={12} lg={8}>
          <Header />
          <ImageGridDog />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "50px 0px",
            }}
            align="center"
          >
            <Pagination count={10} color="secondary" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dogg;

function Sidebar() {
  const data1 = ["puppies", "adults", "studs", "breedings"];
  const data2 = ["search", "bully", "boerboel", "breedings"];
  const data3 = ["male", "female"];
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "20px",
        }}
      >
        ilio
      </Typography>

      <ListSection data={data1} />
      <ListSection data={data2} />
      <ListSection data={data3} />

      <SimpleAccordion />
    </Box>
  );
}

function SimpleAccordion() {
  return (
    <div style={{ marginTop: "40px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Registery</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Health Test</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Color</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AiOutlinePlus />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

function ListSection({ data }) {
  const [selected, setSelected] = useState(data[0]);
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          marginTop: "50px",
        }}
      >
        listing
      </Typography>
      <Grid container>
        {data.map((item) => (
          <Grid item xs={6}>
            <Button
              rounded="md"
              onClick={() => setSelected(item)}
              sx={{
                border: `1px solid ${selected === item ? "#666" : "#e6e6e6"}`,
                borderRadius: "25px",
                padding: "3px 20px 0px",
                color: `${selected === item ? "#666" : "#e6e6e6"} `,
                align: "center",
                width: "96%",
                margin: "5px 0px",
              }}
            >
              {item}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{
          border: "1px solid transparent",
          color: "#000",
          "&:hover": {
            border: "1px solid #666",
            color: "#000",
          },
        }}
        variant="outlined"
        startIcon={<RiHomeLine />}
      >
        Home
      </Button>
      <Button
        sx={{
          border: "1px solid transparent",
          color: "#000",
          "&:hover": {
            border: "1px solid #666",
            color: "#000",
          },
        }}
        variant="outlined"
        startIcon={<FiLogOut />}
      >
        Logout
      </Button>
    </Box>
  );
}

function ImageGridDog() {
  return (
    <Grid container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <Grid item sm={6} xs={12} lg={4}>
          <Box m={1}>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src="https://images.unsplash.com/photo-1670680307288-dae87434670e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <Typography sx={{ mt: 2 }}>eliteboerboel</Typography>
            <small>boerboel</small>
            <Typography variant="h6" sx={priceStyle}>
              $ 12,600
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

const priceStyle = {
  fontFamily: "arial",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "16px",
  lineHeight: "19px",
  marginTop: "10px",
  textTransform: "capitalize",

  color: "#2CA551",
};
