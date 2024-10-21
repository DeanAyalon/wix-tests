import { Permissions, webMethod } from "wix-web-module";

export const echoMessage = webMethod(Permissions.Anyone, 
    message => message ? 'The message is received' : 'No message found...');