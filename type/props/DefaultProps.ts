import { Meta } from "../meta";
import { UserResponse } from "../response";

export interface DefaultProps {
    meta: Meta;
    user: UserResponse;
    children?: any;
}