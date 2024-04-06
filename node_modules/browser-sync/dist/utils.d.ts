import { BsTempOptions } from "./cli/cli-options";
import * as devIp from "dev-ip";
import * as UAParser from "ua-parser-js";
import * as Immutable from "immutable";
import { List } from "immutable";
/**
 * @param {Object} options
 * @returns {String|boolean} - the IP address
 * @param devIp
 */
export declare function getHostIp(options: BsTempOptions, devIp: string[]): any;
/**
 * Set URL Options
 */
export declare function getUrlOptions(options: BsTempOptions): Map<string, string>;
/**
 * Append a start path if given in options
 * @param {String} url
 * @param {Object} options
 * @returns {String}
 */
export declare function getUrl(url: string, options: BsTempOptions): string;
/**
 * @param {String} external
 * @param {String} local
 * @param {String} scheme
 * @param {Object} options
 * @returns {{local: string, external: string}}
 */
export declare function getUrls(external: any, local: any, scheme: any, options: any): {
    [index: string]: string;
};
/**
 * @param {String} scheme
 * @param {String} host
 * @param {Number} port
 * @returns {String}
 * @private
 */
export declare function _makeUrl(scheme: any, host: any, port: any): string;
export declare type PortLookupCb = (error: null | Error, port: number) => void;
/**
 * Get ports
 * @param {Object} options
 * @param {Function} cb
 */
export declare function getPorts(options: BsTempOptions, cb: PortLookupCb): void;
export declare function getPort(host: string, port: number | string, max: number | string | null, cb: PortLookupCb): void;
/**
 * @param {String} ua
 * @returns {Object}
 */
export declare function getUaString(ua: any): any;
/**
 * Open the page in browser
 * @param {String} url
 * @param {Object} options
 * @param {import("./browser-sync")} bs
 */
export declare function openBrowser(url: any, options: any, bs: any): void;
/**
 * Wrapper for opn module
 * @param url
 * @param name
 * @param bs
 */
export declare function opnWrapper(url: any, name: any, bs: any): void;
/**
 * @param {Boolean} kill
 * @param {String|Error} [errMessage]
 * @param {Function} [cb]
 */
export declare function fail(kill: any, errMessage: any, cb: any): void;
/**
 * Add support for xip.io urls
 * @param {String} host
 * @param {Object} options
 * @returns {String}
 */
export declare function xip(host: any, options: any): any;
/**
 * Determine if an array of file paths will cause a full page reload.
 * @param {Array} needles - filepath such as ["core.css", "index.html"]
 * @param {Array} haystack
 * @returns {Boolean}
 */
export declare function willCauseReload(needles: any, haystack: any): any;
export declare const isList: typeof List.isList;
export declare const isMap: typeof Immutable.Map.isMap;
/**
 * @param {Map} options
 * @returns {Array}
 */
export declare function getConfigErrors(options: any): never[];
/**
 * @param {Map} options
 * @param {Function} [cb]
 */
export declare function verifyConfig(options: any, cb: any): boolean;
export declare function eachSeries(arr: any, iterator: any, callback: any): void;
/**
 * @param {Immutable.List|Array|String} incoming
 * @returns {Array}
 */
export declare function arrayify(incoming: any): any;
export declare function defaultCallback(err?: Error): void;
export declare const portscanner: any;
export declare const connect: any;
export declare const serveStatic: any;
export declare const easyExtender: any;
export { UAParser, devIp };
/**
 * Just for backwards compat around old argument styles
 */
export declare function parseParams(search: string): Record<string, any>;
/**
 * Also for backwards compat around old argument styles
 */
export declare function serializeParams(args?: Record<string, any>): URLSearchParams;
