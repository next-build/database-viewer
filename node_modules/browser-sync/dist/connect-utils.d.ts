export function enabled(options: import("immutable").Map<any, any>): boolean;
export function scriptTags(options: import("immutable").Map<any, any>): string;
export function socketConnector(options: import("immutable").Map<string, any>): string;
export function getNamespace(socketOpts: any, options: import("immutable").Map<string, any>): string | Function;
export function getConnectionUrl(options: import("immutable").Map<string, any>): string;
export function clientScript(options?: any, both?: boolean | undefined): string | {
    path: string;
    versioned: string;
};
