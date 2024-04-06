export function rewriteLinks(userServer: any): {
    match: RegExp;
    fn: (req: any, res: any, match: any) => any;
};
export function checkCookies(res: any): void;
/**
 * Remove the domain from any cookies.
 * @param rawCookie
 * @returns {string}
 */
export function rewriteCookies(rawCookie: any): string;
