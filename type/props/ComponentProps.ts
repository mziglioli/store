import { Meta } from "../meta";

export interface LoginProps {
    onSubmitLogin: (email: string, password: string) => void;
    showError: boolean;
}
export interface HeaderMenuItemProps {
    title: string;
    name: string;
    endpoint: string;
    icon: any;
}
export interface HeaderDrawerProps {
    user?: any;
    meta: Meta;
    open: boolean
    handleDrawerClose: () => void;
}