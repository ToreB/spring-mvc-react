import { IconButton, Toolbar, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { AccountCircle } from "@material-ui/icons";
import React from 'react';

const useStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
    },
    username: {
        paddingRight: 10
    }
});

function Header({ appName, username, logoutLink }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleLogout = () => {
        handleClose();
        window.location.href = logoutLink;
    }

    return (
        <header className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.title} variant="h6">{appName}</Typography>

                    <div>
                        <IconButton color="inherit" onClick={handleMenu}>
                            <Typography className={classes.username} variant="button">{username}</Typography>
                            <AccountCircle />
                        </IconButton>
                        <Menu keepMounted
                              anchorEl={anchorEl}
                              getContentAnchorEl={null}
                              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                              transformOrigin={{ vertical: "top", horizontal: "right" }}
                              open={open} onClose={handleClose}>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header;