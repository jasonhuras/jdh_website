import Grid from '@mui/material/Grid'
import Navbar from '../components/Navbar'

export default function HomeLayout() {
    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
        >

            <Grid item>
                <Navbar></Navbar>
            </Grid>
            <Grid item>
                <h1>content</h1>
            </Grid>
        </Grid>
    )
}
