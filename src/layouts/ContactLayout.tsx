import Navbar from '../components/Navbar'; // Use your Navbar component
import { Container, Box, Typography, Link, Grid, Button } from '@mui/material';

const ContactLayout = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="xl">
                <Grid
                    container
                    alignItems="center"
                    justifyContent="flex-end"
                    sx={{ padding: '15px 0 15px 0' }}
                >
                    <Grid item md={6} xs={12}>
                        <Grid container justifyContent="center">
                            <Grid item md={12} xs={12} sx={{ display: "flex", justifyContent: "center", padding: "15px" }}>
                                <img style={{ borderRadius: "20px" }} src="headshot.png" alt="image" />
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography align="center" variant="h2" gutterBottom><Link href="https://www.linkedin.com/in/jason-huras-0999b1202/">LinkedIn</Link></Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography align="center" variant="h2" gutterBottom><Link href="https://github.com/jasonhuras">GitHub</Link> </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography align="center" variant="h2" gutterBottom>Email: <Link>jason.dhuras@gmail.com</Link> </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography align="center" variant="h2" gutterBottom>Call: <Link>647-969-6257</Link> </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={6} xs={12} style={{ paddingTop: '10px' }}>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • Computer Engineer
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • 5+ Years of Software Development
                            </Typography>
                        </Box>
                        <Box my={2}>
                            <Typography align="center" variant="body1">
                                • 3+ Years of AI & Machine Learning
                            </Typography>
                        </Box>
                        <Box style={{ display: "flex", justifyContent: "center" }}>
                            <Button style={{ fontSize: '2.0rem' }} href="#/invest">
                                Invest Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
};

export default ContactLayout;

