export { snippetUtils as utils };
declare namespace snippetUtils {
    function isExcluded(url: string, excludeList: any[]): boolean;
    function getRegex(snippet: string, options: any): {
        match: RegExp;
        fn: Function;
        once: boolean;
        id: string;
    };
    function getSnippetMiddleware(snippet: any, options: any, rewriteRules: any): any;
    function getRules(snippet: any, options: any, rewriteRules: any): {
        rules: {
            match: RegExp;
            fn: Function;
            once: boolean;
            id: string;
        }[];
        blacklist: any;
        whitelist: any;
    };
    function isOldIe(excludeList?: any[] | undefined): any;
    function getClientJs(port: number, options: import("immutable").Map<string, any>): () => string;
}
