import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import React from "react";

// item tag
const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  background: "transparent",
  border: "0xp",
  boxShadow: "none",
}));

function ExpertAdvisor() {
  return (
    <>
      <Box className="expert_section">
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 }, // Responsive padding-y
          }}
        >
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0, xxl: 0 }, // Responsive order
                display: "flex",
                alignItems: "center", // Align center
              }}
            >
              <Item>
                <Box
                  sx={{
                    display: {
                      xs: "block",
                      sm: "block",
                      md: "block",
                      lg: "block",
                      xl: "block",
                      xxl: "block",
                    },
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5, xxl: 5 },
                  }}
                >
                  <Typography variant="h5" className="main_title">
                    Our expert <b>art</b> <br /> advisors
                  </Typography>

                  <Box
                    className="expert_caption"
                    sx={{
                      my: { xs: 3, sm: 3, md: 5, lg: 5, xl: 5, xxl: 5 },
                    }}
                  >
                    <Typography variant="h6">
                      Personalized art advisory
                    </Typography>
                    <Typography variant="body1">
                      We know buying art is personal. Our art advisors make it
                      simple and seamless.
                    </Typography>
                    <br />
                    <Typography variant="h6">
                      Personalized art advisory
                    </Typography>
                    <Typography variant="body1">
                      We know buying art is personal. Our art advisors make it
                      simple and seamless.
                    </Typography>
                  </Box>

                  <Button variant="contained" className="commn_btn">
                    Contact our art advisors
                  </Button>
                </Box>
              </Item>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                order: { xs: 2, sm: 2, md: 0, lg: 0, xl: 0, xxl: 0 }, // Responsive order
                display: "flex",
                alignItems: "center", // Align center
              }}
            >
              <Item className="exper_right_row">
                <img src="/images/wall.jpg" alt="expert image" />

                <ul className="expert_frame">
                  <li>
                    <div class="outerBorder">
                      <div class="innerBorder">
                        <img
                          src="../images/slider-4.jpg"
                          alt="fonferek falls"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
              </Item>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ExpertAdvisor;
