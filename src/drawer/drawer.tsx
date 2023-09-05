import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// material ui icon import
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import DvrOutlinedIcon from '@mui/icons-material/DvrOutlined';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

// Component immport

import InfoTable from '../table/InfoTable'

const drawerWidth = 240;

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{
            backgroundColor: "black",
            color: "white"
        }}>
            <Toolbar>
                <Typography variant='h4' color={"white"}><em>MediAge</em></Typography>
            </Toolbar>
            <Divider />
            <List>
                {['home', 'Registration Information', 'List of given items', 'List of persons in charge', 'Opportunity Management', 'Media List', 'Favourite Media', 'notice'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton
                            selected={index === 5 ? true : false}
                            sx={{
                                "&$selected": {
                                    background: "#494949",
                                },
                                '&:hover': {
                                    background: "#494949",
                                    fontSize: 1
                                },
                                borderRadius: 1,
                                marginRight: 0.5,
                            }}
                        >
                            <ListItemIcon >
                                {index === 0 ? <HomeOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 1 ? <AccountCircleOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 2 ? <DescriptionOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 3 ? <SupervisorAccountOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 4 ? <ChatBubbleOutlineOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 5 ? <DvrOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 6 ? <StarOutlineOutlinedIcon style={{ color: "white" }} /> : <></>}
                                {index === 7 ? <NotificationsNoneOutlinedIcon style={{ color: "white" }} /> : <></>}
                            </ListItemIcon>
                            <ListItemText primaryTypographyProps={{fontSize:14}} primary={text} />
                            <ListItemIcon >
                                <KeyboardArrowRightOutlinedIcon style={{ color: "white", marginLeft: "30px" }} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor: "white",
                    color : "black"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Media List
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { md: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <InfoTable />
            </Box>
        </Box>
    );
}