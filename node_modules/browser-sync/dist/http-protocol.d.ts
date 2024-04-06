/**
 * Use BrowserSync options + querystring to create a
 * full HTTP/HTTTPS url.
 *
 * Eg. http://localhost:3000/__browser_sync__?method=reload
 * Eg. http://localhost:3000/__browser_sync__?method=reload&args=core.css
 * Eg. http://localhost:3000/__browser_sync__?method=reload&args=core.css&args=core.min
 *
 * @param args
 * @param url
 * @returns {string}
 */
export function getUrl(args: any, url: any): string;
/**
 * Return a middleware for handling the requests
 * @param {import("./browser-sync")} bs
 * @returns {Function}
 */
export function middleware(bs: import("./browser-sync")): Function;
