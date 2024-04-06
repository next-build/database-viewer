export function plugin(bs: any): {
    server: any;
    app: any;
};
/**
 * Launch the server for serving the client JS plus static files
 * @param {import("../browser-sync")} bs
 */
export function createServer(bs: import("../browser-sync")): any;
