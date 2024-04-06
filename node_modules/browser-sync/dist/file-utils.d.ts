export function getInjectFileInfo(data: any, options: any): {
    path: string;
    type: "reload" | "inject";
    ext: string;
    basename: string;
    event?: unknown;
    url?: string | undefined;
    log?: unknown;
};
