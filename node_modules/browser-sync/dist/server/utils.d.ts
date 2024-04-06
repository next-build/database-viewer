export function getHttpsOptions(options: any): any;
export function getServer(app: any, options: any): {
    server: any;
    app: any;
};
export function getHttpModule(options: any): any;
export function getMiddlewares(bs: any): any[];
export function getBaseApp(bs: any): any;
export function getSnippetMiddleware(bs: any): any;
export function getCorsMiddlewware(): (req: any, res: any, next: any) => void;
export function getServeStaticMiddlewares(ssOption: any, serveStaticOptions: any): any;
