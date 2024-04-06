import { BsTempOptions, TransformResult } from "./cli/cli-options";
/**
 * Move top-level ws options to proxy.ws
 * This is to allow it to be set from the CLI
 * @param incoming
 */
export declare function setProxyWs(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 */
export declare function setOpen(incoming: BsTempOptions): TransformResult;
/**
 * Set the running mode
 * @param incoming
 */
export declare function setMode(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 */
export declare function setScheme(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 */
export declare function setStartPath(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 */
export declare function setNamespace(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 */
export declare function setServerOpts(incoming: BsTempOptions): TransformResult;
export declare function liftExtensionsOptionFromCli(incoming: BsTempOptions): TransformResult;
/**
 * Back-compat fixes for rewriteRules being set to a boolean
 */
export declare function fixRewriteRules(incoming: BsTempOptions): TransformResult;
export declare function fixSnippetIgnorePaths(incoming: BsTempOptions): TransformResult;
export declare function fixSnippetIncludePaths(incoming: BsTempOptions): TransformResult;
/**
 *
 */
export declare function setMiddleware(incoming: BsTempOptions): TransformResult;
/**
 * @param incoming
 * @returns {*}
 */
export declare function setUiPort(incoming: BsTempOptions): TransformResult;
