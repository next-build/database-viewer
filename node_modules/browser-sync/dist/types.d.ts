import { Map } from "immutable";
import { z } from "zod";
export declare type ServerIncoming = string | string[] | IServerOption;
export interface IServerOption {
    baseDir: string[];
    index?: string;
    directory?: boolean;
    serveStaticOptions?: any;
    routes?: {
        [route: string]: string;
    };
    middleware?: MiddlewareInput;
}
export declare type MiddlewareInput = Function | Function[] | Middleware | Middleware[];
export interface Middleware {
    route: string;
    id?: string;
    handle: Function;
}
export declare type BrowsersyncProxyIncoming = string | BrowsersyncProxy;
export interface BrowsersyncProxy {
    target: string;
    url: Map<string, any>;
    middleware?: MiddlewareInput;
}
export declare type PortsOption = {
    min: number | null;
    max: number | null;
};
export declare type FilesObject = {
    match: string[];
    fn?: Function;
    options?: any;
};
export declare type FilesNamespace = {
    globs: string[];
    objs: FilesObject[];
    index?: number;
};
export declare type FilesNamespaces = {
    [name: string]: FilesNamespace;
};
export declare type RunnerOption = {
    at: "startup";
    run: Runner[];
} | {
    at: "runtime";
    files: string[];
    run: Runner[];
};
export declare type Runner = {
    sh: {
        cmd: string;
    };
} | {
    sh: string;
} | {
    bs: "reload";
} | {
    bs: "inject";
    files: string[];
} | {
    npm: string[];
    parallel?: boolean;
};
export declare const startupRunnerOption: z.ZodObject<{
    at: z.ZodLiteral<"startup">;
    run: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        sh: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sh: string;
    }, {
        sh: string;
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"reload">;
    }, "strip", z.ZodTypeAny, {
        bs: "reload";
    }, {
        bs: "reload";
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"inject">;
        files: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        files: string[];
        bs: "inject";
    }, {
        files: string[];
        bs: "inject";
    }>, z.ZodObject<{
        npm: z.ZodArray<z.ZodString, "many">;
        parallel: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        npm: string[];
        parallel?: boolean | undefined;
    }, {
        npm: string[];
        parallel?: boolean | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    at: "startup";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}, {
    at: "startup";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}>;
export declare const runtimeRunnerOption: z.ZodObject<{
    at: z.ZodLiteral<"runtime">;
    files: z.ZodArray<z.ZodString, "many">;
    run: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        sh: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sh: string;
    }, {
        sh: string;
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"reload">;
    }, "strip", z.ZodTypeAny, {
        bs: "reload";
    }, {
        bs: "reload";
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"inject">;
        files: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        files: string[];
        bs: "inject";
    }, {
        files: string[];
        bs: "inject";
    }>, z.ZodObject<{
        npm: z.ZodArray<z.ZodString, "many">;
        parallel: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        npm: string[];
        parallel?: boolean | undefined;
    }, {
        npm: string[];
        parallel?: boolean | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    files: string[];
    at: "runtime";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}, {
    files: string[];
    at: "runtime";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}>;
export declare const runnerOption: z.ZodDiscriminatedUnion<"at", [z.ZodObject<{
    at: z.ZodLiteral<"startup">;
    run: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        sh: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sh: string;
    }, {
        sh: string;
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"reload">;
    }, "strip", z.ZodTypeAny, {
        bs: "reload";
    }, {
        bs: "reload";
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"inject">;
        files: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        files: string[];
        bs: "inject";
    }, {
        files: string[];
        bs: "inject";
    }>, z.ZodObject<{
        npm: z.ZodArray<z.ZodString, "many">;
        parallel: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        npm: string[];
        parallel?: boolean | undefined;
    }, {
        npm: string[];
        parallel?: boolean | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    at: "startup";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}, {
    at: "startup";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}>, z.ZodObject<{
    at: z.ZodLiteral<"runtime">;
    files: z.ZodArray<z.ZodString, "many">;
    run: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        sh: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sh: string;
    }, {
        sh: string;
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"reload">;
    }, "strip", z.ZodTypeAny, {
        bs: "reload";
    }, {
        bs: "reload";
    }>, z.ZodObject<{
        bs: z.ZodLiteral<"inject">;
        files: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        files: string[];
        bs: "inject";
    }, {
        files: string[];
        bs: "inject";
    }>, z.ZodObject<{
        npm: z.ZodArray<z.ZodString, "many">;
        parallel: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        npm: string[];
        parallel?: boolean | undefined;
    }, {
        npm: string[];
        parallel?: boolean | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    files: string[];
    at: "runtime";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}, {
    files: string[];
    at: "runtime";
    run: ({
        sh: string;
    } | {
        bs: "reload";
    } | {
        files: string[];
        bs: "inject";
    } | {
        npm: string[];
        parallel?: boolean | undefined;
    })[];
}>]>;
export declare function toRunnerOption(input: unknown): RunnerOption | null;
export declare type BsSideEffect = {
    type: "reload";
    files: any[];
} | {
    type: "inject";
    files: {
        path: string;
        event: string;
    }[];
};
export declare function toSideEffect(sideEffect: BsSideEffect): BsSideEffect;
export declare type RunnerNotification = {
    status: 'start';
    effects: BsSideEffect[];
    runner: Runner;
} | {
    status: 'end';
    effects: BsSideEffect[];
    runner: Runner;
};
export declare function toRunnerNotification(input: RunnerNotification): RunnerNotification;
declare const fileChangedEventParser: z.ZodObject<{
    event: z.ZodString;
    path: z.ZodString;
    log: z.ZodOptional<z.ZodBoolean>;
    namespace: z.ZodString;
    index: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    path: string;
    event: string;
    namespace: string;
    log?: boolean | undefined;
    index?: number | undefined;
}, {
    path: string;
    event: string;
    namespace: string;
    log?: boolean | undefined;
    index?: number | undefined;
}>;
export declare type FileChangedEvent = z.infer<typeof fileChangedEventParser>;
export declare function toChangeEvent(evt: FileChangedEvent): FileChangedEvent;
declare const browserReloadEvent: z.ZodObject<{
    files: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        event: z.ZodString;
        path: z.ZodString;
        log: z.ZodOptional<z.ZodBoolean>;
        namespace: z.ZodString;
        index: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        path: string;
        event: string;
        namespace: string;
        log?: boolean | undefined;
        index?: number | undefined;
    }, {
        path: string;
        event: string;
        namespace: string;
        log?: boolean | undefined;
        index?: number | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    files: (string | {
        path: string;
        event: string;
        namespace: string;
        log?: boolean | undefined;
        index?: number | undefined;
    })[];
}, {
    files: (string | {
        path: string;
        event: string;
        namespace: string;
        log?: boolean | undefined;
        index?: number | undefined;
    })[];
}>;
export declare type ReloadEvent = z.infer<typeof browserReloadEvent>;
export declare function toReloadEvent(reload: ReloadEvent): ReloadEvent;
declare const injectFileInfo: z.ZodObject<{
    ext: z.ZodString;
    path: z.ZodString;
    basename: z.ZodString;
    event: z.ZodUnknown;
    type: z.ZodEnum<["inject", "reload"]>;
    url: z.ZodOptional<z.ZodString>;
    log: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    path: string;
    type: "reload" | "inject";
    ext: string;
    basename: string;
    event?: unknown;
    url?: string | undefined;
    log?: unknown;
}, {
    path: string;
    type: "reload" | "inject";
    ext: string;
    basename: string;
    event?: unknown;
    url?: string | undefined;
    log?: unknown;
}>;
export declare type InjectFileInfo = z.infer<typeof injectFileInfo>;
export {};
