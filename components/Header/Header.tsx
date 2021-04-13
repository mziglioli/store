import React, { useState } from "react";
import { AppBar, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, Contacts as ContactsIcon, Home as HomeIcon, Help as HelpIcon, Menu as MenuIcon } from '@material-ui/icons';

import clsx from "clsx";
import appStyles from "../Styles";
import Flag from 'react-world-flags';

import {HeaderMenuItem} from "./HeaderMenuItem";
import {Meta} from "../../type/meta";
import {modifyLanguage} from "../utils/LanguageClient";
import {FormattedMessage, useIntl} from "react-intl";

interface HeaderProps {
    user?: any;
    meta: Meta
}
export const Header = ({ user, meta }: HeaderProps) => {
    const classes = appStyles();
    const { formatMessage } = useIntl();
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
        <div className="header" data-testid="header">
            <AppBar color="primary" position="static" className={clsx( classes.appBar, {[ classes.appBarShift]: open,})}>
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx( classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.grow} />
                    {user && (
                        <Typography noWrap>
                            <FormattedMessage id="welcome" />: {user.name}
                        </Typography>
                    )}
                    <IconButton
                        edge="end"
                        aria-label="select language"
                        aria-controls="primary-search-account-menu"
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
                id="primary-search-account-menu"
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={handleLanguageMenuClose}
            >
                <MenuItem onClick={handleLanguagePT}> <Flag code="br" height="22" /></MenuItem>
                <MenuItem onClick={handleLanguageGB}> <Flag code="gb" height="16" /></MenuItem>
            </Menu>
            <Drawer className={ classes.drawer} variant="persistent" anchor="left" open={open} classes={{paper:  classes.drawerPaper,}}>
                <div className={ classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <HeaderMenuItem title={formatMessage({id:"menu_home"})} name={"menu_home"} endpoint={"/"} icon={<HomeIcon/>} />
                <HeaderMenuItem title={formatMessage({id:"menu_about"})} name={"menu_about"} endpoint={"/about"} icon={<HelpIcon/>} />
                <HeaderMenuItem title={formatMessage({id:"menu_contact"})} name={"menu_contact"} endpoint={"/contact"} icon={<ContactsIcon/>} />
                {meta.page !== "login" && !user && (
                    <React.Fragment>
                        <Divider />
                        <ListItem button key={"DrawerLoginItem"} component="a" href="/login">
                            <ListItemIcon><HelpIcon/></ListItemIcon>
                            <ListItemText primary={formatMessage({id:"menu_login"})} />
                        </ListItem>
                    </React.Fragment>
                )}
            </Drawer>
        </div>
    );
};