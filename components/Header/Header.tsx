import React, { useState } from "react";
import { AppBar, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, Contacts as ContactsIcon, Home as HomeIcon, Help as HelpIcon, Menu as MenuIcon } from '@material-ui/icons';

import clsx from "clsx";
import appStyles from "../Styles";
import Flag from 'react-world-flags';

import {HeaderMenuItem} from "./HeaderMenuItem";
import {Meta} from "../../type/meta";

interface HeaderProps {
    translations: { [key: string]: string };
    user?: any;
    selectedLanguage: string;
    changeLanguage?: (language: string) => void;
    meta: Meta
}
export const Header = ({ translations, user, selectedLanguage, changeLanguage, meta }: HeaderProps) => {
    const classes = appStyles();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);

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
        changeLanguage("pt");
        handleLanguageMenuClose();
    }
    function handleLanguageGB() {
        changeLanguage("en");
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
                            {translations['welcome']}: {user.name}
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
                        {selectedLanguage === "pt" && (
                            <Flag code="br" height="22" />
                        )}
                        {selectedLanguage === "en" && (
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
                <HeaderMenuItem title={translations["home"]} name={"menu_home"} endpoint={"/"} icon={<HomeIcon/>} />
                <HeaderMenuItem title={translations["about"]} name={"menu_about"} endpoint={"/about"} icon={<HelpIcon/>} />
                <HeaderMenuItem title={translations["contact"]} name={"menu_contact"} endpoint={"/contact"} icon={<ContactsIcon/>} />
                {meta.page !== "login" && !user && (
                    <React.Fragment>
                        <Divider />
                        <ListItem button key={"DrawerLoginItem"} component="a" href="/login">
                            <ListItemIcon><HelpIcon/></ListItemIcon>
                            <ListItemText primary={translations['login']} />
                        </ListItem>
                    </React.Fragment>
                )}
            </Drawer>
        </div>
    );
};