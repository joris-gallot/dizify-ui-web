import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SearchIcon from '@material-ui/icons/Search';
import InputBase from "@material-ui/core/InputBase";
import {fade} from "@material-ui/core";
import {BLACK, PRIMARY_COLOR} from "../../assets/theme/colors";

const useStyles = makeStyles(theme => ({
    appBar: {
        width: '100%',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: PRIMARY_COLOR,
        boxShadow: 'none',
    },
    toolBar: {
        flexDirection: 'initial',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: BLACK,
    },
    inputRoot: {
        color: BLACK,
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    navList: {
        position: 'relative',
        display: 'flex',
        '& > li': {
            listStyle: 'none',
            '& > a': {
                display: 'inline-block',
                color: '#333',
                fontWeight: 600,
                marginLeft: '40px',
                textDecoration: 'none',
            },
        },
    },
    a: {
        position: 'relative',
        '&:hover': {
            '&::after': {
                transform: 'scale(1, 1)',
            },
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '4px',
            background: BLACK,
            bottom: '-6px',
            left: 0,
            transform: 'scale(0, 1)',
            transition: '0.3s',
        },
    },
}))

const NavBar = () => {

    const classes = useStyles();

    return(
        <>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar className={classes.toolBar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <ul className={classes.navList}>
                        <li>
                            <a className={classes.a} href={'#'}>Se connecter</a>
                        </li>
                        <li>
                            <a className={classes.a} href={'#'}>S'inscrire</a>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default NavBar;