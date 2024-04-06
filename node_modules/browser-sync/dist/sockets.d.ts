import { Server } from "socket.io";
/**
 * Plugin interface
 * @returns {*|function(this:exports)}
 */
export declare function plugin(server: any, clientEvents: any, bs: any): any;
/**
 * @param {http.Server} server
 * @param clientEvents
 * @param {import("./browser-sync")} bs
 */
export declare function init(server: any, clientEvents: any, bs: any): Server<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap, any>;
