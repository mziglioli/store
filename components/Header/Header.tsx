import React from "react";
import Styles from "./Header.style";

interface HeaderProps {
    user: any;
}

export const Header = ({ user }: HeaderProps) => {
    return (
        <div className="header" data-testid="header">
            {user && (
                <p>Welcome: {user.name}</p>
            )}
            {!user && (
                <p>Please sign in here: todo</p>
            )}
            <style jsx>{Styles}</style>
        </div>
    );
};
