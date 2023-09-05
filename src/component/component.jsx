import React from 'react'
import Card from '@mui/material/Card/Card'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';

//import hooks

//chart import
import ApexCharts from 'apexcharts'
import { ApexOptions } from "apexcharts";

//logo import
import logo from "../images/logo.png"

//icon import
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import StarIcon from '@mui/icons-material/Star';

//chart import
import Chart from '../chart/barchart'







export default function cardContent() {

  return (
    <>
      <Card sx={{ my: 3 }}>
        <Grid container>
          <Grid item id='checkbox' xs={12} lg={1} sx={{ bgcolor: "#DBDBE0", display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <CheckBoxIcon />
            <Button color='inherit'>
              MPARIS
            </Button>
          </Grid>
          <Grid container item xs={12} lg={11} spacing={2} sx={{ p: 2 }}>
            {/* <Grid container > */}
            {/* <Grid container> */}
            <Grid item xs={10} sm={6} xl={3} lg={6} md={5}>
              <Toolbar sx={{ height: "50px", backgroundColor: '#F3F3F3', }}>
                <img src={logo} height={'56'} width={'226.01'} />
              </Toolbar>
            </Grid>
            <Grid item xs={10} sm={6} xl={9} lg={6} md={7}>

              <Chip label="primary" color="primary" variant="outlined" />
              <Typography sx={{ mt: 2 }}>
                MediaTitleMediaTitle
              </Typography>

            </Grid>
            <Grid item xs={12} md={3}>
              <Typography sx={{ fontSize: 14, fontWeight: 'medium' }}>
                Key demographics
              </Typography>
              <div id="chart">
                {/* <ApexCharts options={chartData.options} series={chartData.series} type="bar" height={350} /> */}
                <Chart />
              </div>

            </Grid>
            <Grid item xs={12} md={9}>
              <div style={{ width: '100%' }}>
                <List>
                  <Divider />
                  <ListItem disablePadding sx={{}}>
                    <Grid container>
                      <Grid container item xs={12} md={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} py={{ xs: 0, md: 2 }}>
                          Media Overview
                        </Typography>
                      </Grid>
                      <Grid container item justifyContent="flex-start" alignItems="center" xs={12} md={9}>
                        <Typography sx={{ fontSize: "14px" }}>Summary textoverview textoverview text</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{}}>
                    <Grid container>
                      <Grid container item justifyContent="flex-start" alignItems="center" xs={12} md={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} py={{ xs: 0, md: 2 }}>
                          Correspondence Funnel
                        </Typography>
                      </Grid>
                      <Grid container item xs={12} md={9}>
                        <div style={{ flexWrap: 'wrap', width: "80%" }}>
                          <Chip label="cognition" variant="" sx={{ marginTop: 1, bgcolor: "black", color: "white" }} />
                          <Chip label="interest" variant="" sx={{ margin: 1 }} />
                          <Chip label="understanding" variant="" sx={{ margin: 1 }} />
                          <Chip label="Purchase/Store Visit Promotion" variant="" sx={{ margin: 1, bgcolor: "black", color: "white" }} />
                          <Chip label="repeat" variant="" sx={{ margin: 1 }} />
                          <Chip label="recommedation" variant="" sx={{ margin: 1 }} />
                        </div>
                      </Grid>
                    </ Grid>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{}}>
                    <Grid container>
                      <Grid container item justifyContent="flex-start" alignItems="center" xs={12} md={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} py={{ xs: 0, md: 2 }}>
                          Top 3 Advertiser Industries <br />
                          / Products
                        </Typography>
                      </Grid>
                      <Grid container item xs={12} md={9} justifyContent="flex-start" alignItems="center">
                        <div style={{}}>
                          <ol style={{ fontSize: "14px", padding:0, marginLeft:"15px" }}>
                            <li>Food & Bevarage 00%</li>
                            <li>Household goods and toiletries 00%</li>
                            <li>Cosmetics 00%</li>
                          </ol>
                        </div>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{}}>
                    <Grid container>
                      <Grid container item justifyContent="flex-start" alignItems="center" xs={12} md={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} py={{ xs: 0, md: 2 }}>
                          Media Type
                        </Typography>
                      </Grid>
                      <Grid container item xs={12} md={9} justifyContent="flex-start" alignItems="center">
                        <Typography sx={{ fontSize: "14px" }}>Portal Media</Typography>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                  <ListItem disablePadding sx={{}}>
                    <Grid container>
                      <Grid container item justifyContent="flex-start" alignItems="center" xs={12}  md={12} lg={3}>
                        <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} py={{ xs: 0, md: 2 }}>
                          BROWSE/VIEW/READER <br />
                          TARGET
                        </Typography>
                      </Grid>
                      <Grid container item xs={12} md={12} lg={9} justifyContent="flex-start" alignItems="center">
                        <div>
                          <Typography sx={{ fontSize: "14px" }}>Female , Social Worker</Typography>
                        </div>
                      </Grid>
                    </Grid>
                  </ListItem>
                  <Divider />
                </List>
                <div style={{ display: "flex", justifyContent: "end", alignItems: "end" }}>
                  <Button variant="contained" size="small" sx={{ bgcolor: '#F2F2F2', color: "black", boxShadow: "none", m: 1 }}><StarIcon sx={{ color: "orange" }} />&nbsp; Favourite <span style={{ color: "#DBDBE0" }}>&nbsp;|&nbsp;</span> 10</Button>
                  <Button variant='contained' size='small' sx={{ bgcolor: "#BD0017", color: "white", boxShadow: "none", m: 1 }}>CONTACT US</Button>
                </div>
              </div>
            </Grid>
            {/* </Grid> */}
          </Grid>
        </Grid>
        {/* </Grid> */}
      </Card>
    </>
  )
}