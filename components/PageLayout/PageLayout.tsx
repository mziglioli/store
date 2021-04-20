import React from "react";
import { Header } from "../Header";
import { DefaultProps } from "../../type";

export const PageLayout = ({ meta, children, user }: DefaultProps) => {
    return (
        <div className="page" data-testid="PageLayout__Component">
            <Header meta={meta} user={user} />
            {children}
        </div>
    );
};