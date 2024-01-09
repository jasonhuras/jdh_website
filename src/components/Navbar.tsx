import Grid from '@mui/material/Grid'

export default function HomeLayout() {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
        >
            <Grid item>
                <h1>Home</h1>
            </Grid>
            <Grid item>
                <h1>Invest</h1>
            </Grid>
            <Grid item>
                <h1>Trade History</h1>
            </Grid>
            <Grid item>
                <h1>Contact us</h1>
            </Grid>
        </Grid>
    )
}
