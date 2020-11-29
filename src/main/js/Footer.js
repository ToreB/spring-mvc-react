import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import PropTypes from 'prop-types'
import React from 'react'

const useStyles = makeStyles({
    boldText: {
        fontWeight: "bold"
    }
});

function TextElement({ name, value }) {
    const classes = useStyles();
    return <p>{name}: <span className={classes.boldText}>{value}</span></p>;
}

function Footer({ buildProperties }) {
    return (
        <footer>
            <AppBar position="static">
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item>
                            <TextElement name={"Application version"} value={buildProperties.version} />
                        </Grid>
                        <Grid item>
                            <TextElement name={"Build time"} value={buildProperties.time} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </footer>
    );
}

Footer.propTypes = {
    buildProperties: PropTypes.shape({
        version: PropTypes.string,
        time: PropTypes.string
    })
}

export default Footer;