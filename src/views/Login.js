import React, { useState } from "react";
import { Grid, Paper, Typography, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary[900],
        height: "100%"
    },
    margin: {
        marginBottom: 10,
    },
    loginFrame: {
        minHeight: 500,
        minWidth: 400,
        display: "flex",
        justify: "center",
        alignItems: "center"
    }
}));

export default function Login() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async () => {
        console.log({ username, password });
        await axios
            .post("http://localhost:3001/login", { username, password })
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
            <Grid item>
                <Paper elevation={3} className={classes.loginFrame}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <Grid item className={classes.margin}>
                            <Typography> LOGIN </Typography>
                        </Grid>
                        <Grid item className={classes.margin}>
                            <TextField onChange={handleUsername} label="Username" />
                        </Grid>
                        <Grid item className={classes.margin}>
                            <TextField onChange={handlePassword} label="Senha" type="password" />
                        </Grid>
                        <Grid item className={classes.margin}>
                            <Button variant="contained" color="secondary" onClick={handleSubmit}>Login</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}