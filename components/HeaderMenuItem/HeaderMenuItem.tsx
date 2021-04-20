import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { HeaderMenuItemProps } from "../../type";

export const HeaderMenuItem = ({ title, name, endpoint, icon }: HeaderMenuItemProps) => {
    return (
        <ListItem button key={`Drawer_${name}_Item`} data-testid={`HeaderMenuItem__Component-${name}`} component="a" href={endpoint}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>
    );
};