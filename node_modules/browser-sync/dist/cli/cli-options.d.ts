import { Map } from "immutable";
import { BsErrors } from "../bin";
/**
 * @param {Object} input
 * @returns {Map}
 */
export declare type BsTempOptions = Map<string, any>;
export declare type TransformResult = [BsTempOptions, BsErrors];
export declare type TransformFn = (subject: BsTempOptions) => TransformResult;
export declare function merge(input: any): any[];
/**
 * @param string
 */
export declare function explodeFilesArg(string: any): string;
/**
 * @param value
 */
export declare function makeFilesArg(value: any): {
    globs: string[];
    objs: any[];
};
export declare function printErrors(errors: BsErrors): string;
