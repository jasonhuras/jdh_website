import { useState } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Typography, Box, Grid, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Login from './Login';
import theme from '../theme/jdh_theme.json'
const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (open: boolean) => () => {
        setDrawerOpen(open);
    };

    const handleNavigation = () => {
        navigate('#/'); // Navigate to the root
    };

    const pageLinks = {
        'Home': '#/',
        'Invest': '#/invest',
        'Trade History': '#/trade-history',
        'Contact us': '#/contact-us'
    };

    const drawerList = () => (
        <Box
            sx={{
                width: 200,
                bgcolor: 'background.secondary',
                borderBottom: `1px solid ${theme.palette.background.border}`
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {Object.entries(pageLinks).map(([text, link], index) => (
                    <ListItem button component={Link} href={link} key={index}>
                        <ListItemText primary={<Typography variant="h3">{text}</Typography>} sx={{ textAlign: 'left' }} />
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <Box sx={{ bgcolor: 'background.secondary', borderBottom: `1px solid ${theme.palette.background.border}`, position: 'sticky', top: 0, zIndex: 1100 }}>
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Grid item xs={6} md={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={toggleDrawer(true)}
                            sx={{ padding: '0 30px 0 30px' }}
                        >
                            <MenuIcon fontSize="large" style={{ 'color': theme.palette.primary.text }} />
                        </IconButton>
                        <a href="#" style={{ height: '80px' }}>
                            <img onClick={handleNavigation} src="logo_long.png" alt="image" width="120px" height="60px" style={{ padding: '10px', paddingLeft: '25px', borderLeft: `1px solid ${theme.palette.background.border}` }} />
                        </a>
                    </Box>
                </Grid>
                <Grid item xs={6} md={6}>
                    <Login />
                </Grid>
            </Grid>
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        bgcolor: 'background.default',
                        color: theme.palette.primary.text
                    }
                }}
            >
                {drawerList()}
            </Drawer>
        </Box>
    );
};

export default Navbar;
