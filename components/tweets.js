import * as React from 'react';
import { Paper, Box, Grid } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import Styles from './tweets.module.css'

const Item = styled(Paper)(({}) => ({
    padding: 20,
    backgroundColor: 'aliceblue',
    margin: 20,
     
}));

function FormRow(props) {
    return (
        <React.Fragment>
            <Grid className={Styles.main.Item} item xs={12}>
                <Item>Tweet #{props.number}:</Item>
            </Grid>
            <Grid item xs={12}>
                <Item>Picture (Optional):</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Author:</Item>
            </Grid>
            <Grid item xs={4}>
                <Item>Date:</Item>
            </Grid>
        </React.Fragment>
    );
}

export default function NestedGrid() {
    return (

        <Box className={Styles.main} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid container item spacing={1}>
                    <FormRow number="1" />
                </Grid>
                <Grid container item spacing={1}>
                    <FormRow number="2" />
                </Grid>
                <Grid container item spacing={1}>
                    <FormRow number="3" />
                </Grid>
                <Grid container item spacing={1}>
                    <FormRow number="4" />
                </Grid>
                <Grid container item spacing={1}>
                    <FormRow number="5" />
                </Grid>
            </Grid>
        </Box>
    );
}