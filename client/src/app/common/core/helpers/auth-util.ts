import {Auth} from "../models";
import * as JWT from 'jwt-decode';

export class AuthUtil {

    static isAdmin(currentUser: Auth): boolean {
        const tokenPayload = JWT(currentUser.accessToken);
        return !!tokenPayload.roles.includes('ROLE_ADMIN');

    }

}