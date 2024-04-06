/// <reference types="node" />
export function emitChangeEvent(emitter: import("events").EventEmitter, path: string, log?: boolean | undefined): void;
export function emitBrowserReload(emitter: import("events").EventEmitter): void;
export function emitStreamChangedEvent(emitter: import("events").EventEmitter, changed: any[]): void;
export function isStreamArg(name: any, args: any): boolean;
