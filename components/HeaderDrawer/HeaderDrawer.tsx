import React  from "react";
import { useIntl } from "react-intl";
import { Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { ChevronLeft as ChevronLeftIcon, Contacts as ContactsIcon, Home as HomeIcon, Help as HelpIcon } from '@material-ui/icons';

import appStyles from "../Styles";

import { HeaderMenuItem } from "../HeaderMenuItem";
import { HeaderDrawerProps } from "../../type";

export const HeaderDrawer = ({ user, meta, open, handleDrawerClose }: HeaderDrawerProps) => {
    const classes = appStyles();
    const { formatMessage } = useIntl();

    return (
        <Drawer data-testid="Header__Component-drawer" className={ classes.drawer } variant="persistent" anchor="left" open={open} classes={{paper:  classes.drawerPaper}}>
            <div className={ classes.drawerHeader }>
                <IconButton data-testid="Header__Component-drawer--close_button" onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <HeaderMenuItem title={formatMessage({id:"menu_home"})} name={"menu_home"} endpoint={"/"} icon={<HomeIcon/>} />
            <HeaderMenuItem title={formatMessage({id:"menu_about"})} name={"menu_about"} endpoint={"/about"} icon={<HelpIcon/>} />
            <HeaderMenuItem title={formatMessage({id:"menu_contact"})} name={"menu_contact"} endpoint={"/contact"} icon={<ContactsIcon/>} />
            {meta.page !== "login" && !user && (
                <>
                    <Divider />
                    <ListItem data-testid="Header__Component-drawer--login_button" button key={"DrawerLoginItem"} component="a" href="/login">
                        <ListItemIcon><HelpIcon/></ListItemIcon>
                        <ListItemText primary={formatMessage({id:"menu_login"})} />
                    </ListItem>
                </>
            )}
        </Drawer>
    );
};