import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { Menu as MenuIcon } from '@material-ui/icons';
import clsx from "clsx";
import appStyles from "../Styles";
import Flag from 'react-world-flags';
import { DefaultProps } from "../../type";
import { modifyLanguage } from "../utils/LanguageClient";
import { HeaderDrawer } from "../HeaderDrawer";

export const Header = ({ user, meta }: DefaultProps) => {
    const classes = appStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const modifyLanguageApi = (language) => {
        modifyLanguage(language)
            .then(result => {
                console.log("modifyLanguageApi", result);
                // need to reload to better SEO, server side language handler
                window.location.reload();
            })
            .catch(error => console.error("modifyLanguageApi", error))
    }

    function handleDrawerOpen() {
        setOpen(true);
    }
    function handleDrawerClose() {
        setOpen(false);
    }
    function handleLanguageMenuOpen(event) {
        setAnchorEl(event.currentTarget);
    }
    function handleLanguageMenuClose() {
        setAnchorEl(null);
    }
    function handleLanguagePT() {
        // changeLanguage("pt");
        modifyLanguageApi("pt");
        handleLanguageMenuClose();
    }
    function handleLanguageGB() {
        // changeLanguage("en");
        modifyLanguageApi("en");
        handleLanguageMenuClose();
    }
    function handleLogoutClick() {
       // TODO
    }

    return (
        <div className="header" data-testid="Header__Component">
            <AppBar data-testid="Header__Component-AppBar" color="primary" position="static" className={clsx( classes.appBar, {[ classes.appBarShift]: open,})}>
                <Toolbar className={classes.toolbar}>
                    <IconButton data-testid="Header__Component-Toolbar--menu" color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx( classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    {user && (
                        <Typography noWrap data-testid="Header__Component-Toolbar--welcome">
                            <FormattedMessage id="welcome" />: {user.name}
                        </Typography>
                    )}
                    <IconButton
                        data-testid="Header__Component-Toolbar--flag"
                        edge="end"
                        aria-label="select language"
                        aria-controls="Header__Component-Menu"
                        aria-haspopup="true"
                        onClick={handleLanguageMenuOpen}
                        color="inherit"
                    >
                        {meta.language === "pt" && (
                            <Flag code="br" height="22" />
                        )}
                        {meta.language === "en" && (
                            <Flag code="gb" height="16" />
                        )}
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                id="Header__Component-Menu"
                data-testid="Header__Component-Menu"
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleLanguageMenuClose}
            >
                <MenuItem data-testid="Header__Component-Menu--flag-br" onClick={handleLanguagePT}> <Flag code="br" height="22" /></MenuItem>
                <MenuItem data-testid="Header__Component-Menu--flag-gb" onClick={handleLanguageGB}> <Flag code="gb" height="16" /></MenuItem>
            </Menu>
            <HeaderDrawer user={user} meta={meta} open={open} handleDrawerClose={handleDrawerClose} />
        </div>
    );
};