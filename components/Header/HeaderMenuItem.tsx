import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

interface HeaderMenuItemProps {
    title: string;
    name: string;
    endpoint: string;
    icon: any;
}
export const HeaderMenuItem = ({ title, name, endpoint, icon }: HeaderMenuItemProps) => {
    return (
        <ListItem button key={`Drawer_${name}_Item`} component="a" href={endpoint}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title}/>
        </ListItem>
    );
};