import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Card } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';

//material icons
import AddIcon from '@mui/icons-material/Add';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

//import component
import CardContent from '../component/component'

//css import 
import '../global.css'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    // 'label + &': {
    //   marginTop: theme.spacing(3),
    // },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}));

export default function RowsGrid() {
    return (
        <>
            <Card sx={{ p: 2 }} id="cardContent">
                <div style={{ width: '100%' }}>
                    <List>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Genre</Typography>
                            </Toolbar>

                            {/* <Paper elevation={0}  sx={{ width: "20%", background: '#F2F2F2' }}><Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Genre</Typography></Paper> */}
                            <Button sx={{ fontSize: 14 }}><AddIcon sx={{ fontSize: 18 }} /> &nbsp; CHOOSING A TARGET</Button>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Media Type</Typography>
                            </Toolbar>
                            <Button sx={{ fontSize: 14 }}><AddIcon sx={{ fontSize: 18 }} /> &nbsp; CHOOSING A MEDIA TYPE</Button>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0" }}>

                            <Toolbar variant='dense' sx={{ width: "20%", background: '#F2F2F2', flexWrap: "wrap" }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', height: "100%", overflowWrap: 'anywhere' }} >Correspondence funnel</Typography>
                            </Toolbar>

                            <div style={{ flexWrap: 'wrap', width: "80%" }}>
                                <Chip label="cognition" variant="outlined" sx={{ margin: 1 }} />
                                <Chip label="interest" variant="outlined" sx={{ margin: 1 }} />
                                <Chip label="understanding" variant="outlined" sx={{ margin: 1 }} />
                                <Chip label="Purchase/Store Visit Promotion" variant="outlined" sx={{ margin: 1 }} />
                                <Chip label="repeat" variant="outlined" sx={{ margin: 1 }} />
                                <Chip label="recommedation" variant="outlined" sx={{ margin: 1 }} />
                            </div>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >target</Typography>
                            </Toolbar>
                            <Button sx={{ fontSize: 14 }}><AddIcon sx={{ fontSize: 18 }} /> &nbsp; CHOOSING A TARGET</Button>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ minHeight: 54, width: "20%", background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Target type</Typography>
                            </Toolbar>
                            &nbsp; &nbsp;
                            <Chip label="toC" variant="outlined" /> &nbsp;
                            <Chip label="toB" variant="outlined" /> &nbsp;
                            <Chip label="both sides" variant="outlined" /> &nbsp;
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', overflowWrap: 'anywhere' }} >Demogra</Typography>
                            </Toolbar>
                            <Button sx={{ fontSize: 14 }}><AddIcon sx={{ fontSize: 18 }} /> &nbsp; CHOOSE DEMOGRA</Button>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2', }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold', overflowWrap: 'anywhere' }} >Industry/product of major advertisers</Typography>
                            </Toolbar>
                            <div style={{width:"80%"}}>
                                <Button sx={{ fontSize: 14 }}><AddIcon sx={{ fontSize: 18 }} /> &nbsp; SELECT THE INDUSTRY/PRODUCT OF THE MAIN ADVERTISER</Button>
                            </div>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ width: "20%", minHeight: 54, background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Lower cost</Typography>
                            </Toolbar>
                            &nbsp; &nbsp;
                            <FormControl sx={{ minWidth: 250 }}>
                                <InputLabel id="demo-simple-select-helper-label" sx={{ fontSize: [16, "!important"] }}>Please Select</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    // value={age}
                                    label="Please Select"
                                    // onChange={handleChange}
                                    sx={{ height: 45 }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem disablePadding sx={{ border: "1px solid #DBDBE0", height: 56 }}>
                            <Toolbar variant='dense' sx={{ minHeight: 54, width: "20%", background: '#F2F2F2' }}>
                                <Typography sx={{ fontSize: 14, fontWeight: 'bold' }} >Free Words</Typography>
                            </Toolbar>
                            &nbsp; &nbsp;
                            <FormControl sx={{ minWidth: 250 }} variant="standard">
                                <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
                                <BootstrapInput id="demo-customized-textbox" />
                            </FormControl>
                        </ListItem>
                    </List>
                    <div style={{ display: "flex", alignItems: "end", justifyContent: "end", }}>
                        <Button variant="outlined" color='inherit' sx={{ m: 1 }}>CLEAR SEARCH CRITERIA</Button>
                        <Button variant="contained" sx={{ m: 1 }}>LOOK UP</Button>
                    </div>
                </div>
            </Card>
            <Button variant="contained" sx={{ bgcolor: "black", mt: 3}}>
                COMPARE MEDIA <OpenInNewIcon />
            </Button>

            <CardContent />
            <CardContent />
        </>
    );
}