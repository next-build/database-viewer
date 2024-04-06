#!/usr/bin/env node
export declare enum BsErrorLevels {
    Fatal = "Fatal"
}
export declare enum BsErrorTypes {
    PathNotFound = "PathNotFound",
    HostAndListenIncompatible = "HostAndListenIncompatible"
}
export declare type BsErrors = BsError[];
export interface BsError {
    type: BsErrorTypes;
    level: BsErrorLevels;
    errors: BsErrorItem[];
}
export interface BsErrorItem {
    error: Error;
    meta?(...args: any[]): string[];
}
/**
 * @param {{cli: object, [whitelist]: array, [cb]: function}} opts
 * @returns {*}
 */
declare function handleCli(opts: any): any;
export default handleCli;
