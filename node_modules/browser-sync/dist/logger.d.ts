export function getLogger(name: any): any;
export var callbacks: {
    /**
     * Log when file-watching has started
     * @param {import("./browser-sync")} bs
     * @param data
     */
    "file:watching": (bs: import("./browser-sync"), data: any) => void;
    /**
     * Log when a file changes
     * @param {import("./browser-sync")} bs
     * @param data
     */
    "file:reload": (bs: import("./browser-sync"), data: any) => any;
    /**
     *
     */
    "service:exit": () => void;
    /**
     *
     */
    "browser:reload": (bs: any, data?: {
        files: never[];
    }) => any;
    /**
     *
     */
    "browser:error": () => void;
    /**
     * @param {import("./browser-sync")} bs
     * @param data
     */
    "stream:changed": (bs: import("./browser-sync"), data: any) => void;
    /**
     * Client connected logging
     * @param {import("./browser-sync")} bs
     * @param data
     */
    "client:connected": (bs: import("./browser-sync"), data: any) => void;
    /**
     * Main logging when the service is running
     * @param {import("./browser-sync")} bs
     * @param data
     */
    "service:running": (bs: import("./browser-sync"), data: any) => void;
};
export function plugin(emitter: import("events").EventEmitter, bs: import("./browser-sync")): any;
export var logger: any;
