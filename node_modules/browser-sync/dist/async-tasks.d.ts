declare const _exports: {
    [n: number]: {
        step: string;
        fn: (bs: any, done: any) => any;
    };
    length: number;
    toString(): string;
    toLocaleString(): string;
    pop(): {
        step: string;
        fn: (bs: any, done: any) => any;
    } | undefined;
    push(...items: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]): number;
    concat(...items: ConcatArray<{
        step: string;
        fn: (bs: any, done: any) => any;
    }>[]): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    concat(...items: ({
        step: string;
        fn: (bs: any, done: any) => any;
    } | ConcatArray<{
        step: string;
        fn: (bs: any, done: any) => any;
    }>)[]): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    join(separator?: string | undefined): string;
    reverse(): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    shift(): {
        step: string;
        fn: (bs: any, done: any) => any;
    } | undefined;
    slice(start?: number | undefined, end?: number | undefined): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    sort(compareFn?: ((a: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, b: {
        step: string;
        fn: (bs: any, done: any) => any;
    }) => number) | undefined): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    splice(start: number, deleteCount?: number | undefined): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    splice(start: number, deleteCount: number, ...items: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    unshift(...items: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]): number;
    indexOf(searchElement: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, fromIndex?: number | undefined): number;
    lastIndexOf(searchElement: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, fromIndex?: number | undefined): number;
    every<S extends {
        step: string;
        fn: (bs: any, done: any) => any;
    }>(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => value is S, thisArg?: any): this is S[];
    every(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => unknown, thisArg?: any): boolean;
    some(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => unknown, thisArg?: any): boolean;
    forEach(callbackfn: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => void, thisArg?: any): void;
    map<U>(callbackfn: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => U, thisArg?: any): U[];
    filter<S_1 extends {
        step: string;
        fn: (bs: any, done: any) => any;
    }>(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => value is S_1, thisArg?: any): S_1[];
    filter(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => unknown, thisArg?: any): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    reduce(callbackfn: (previousValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => {
        step: string;
        fn: (bs: any, done: any) => any;
    }): {
        step: string;
        fn: (bs: any, done: any) => any;
    };
    reduce(callbackfn: (previousValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => {
        step: string;
        fn: (bs: any, done: any) => any;
    }, initialValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }): {
        step: string;
        fn: (bs: any, done: any) => any;
    };
    reduce<U_1>(callbackfn: (previousValue: U_1, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => U_1, initialValue: U_1): U_1;
    reduceRight(callbackfn: (previousValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => {
        step: string;
        fn: (bs: any, done: any) => any;
    }): {
        step: string;
        fn: (bs: any, done: any) => any;
    };
    reduceRight(callbackfn: (previousValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => {
        step: string;
        fn: (bs: any, done: any) => any;
    }, initialValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }): {
        step: string;
        fn: (bs: any, done: any) => any;
    };
    reduceRight<U_2>(callbackfn: (previousValue: U_2, currentValue: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, currentIndex: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => U_2, initialValue: U_2): U_2;
    find<S_2 extends {
        step: string;
        fn: (bs: any, done: any) => any;
    }>(predicate: (this: void, value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, obj: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => value is S_2, thisArg?: any): S_2 | undefined;
    find(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, obj: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => unknown, thisArg?: any): {
        step: string;
        fn: (bs: any, done: any) => any;
    } | undefined;
    findIndex(predicate: (value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, obj: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => unknown, thisArg?: any): number;
    fill(value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, start?: number | undefined, end?: number | undefined): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    copyWithin(target: number, start: number, end?: number | undefined): {
        step: string;
        fn: (bs: any, done: any) => any;
    }[];
    entries(): IterableIterator<[number, {
        step: string;
        fn: (bs: any, done: any) => any;
    }]>;
    keys(): IterableIterator<number>;
    values(): IterableIterator<{
        step: string;
        fn: (bs: any, done: any) => any;
    }>;
    includes(searchElement: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, fromIndex?: number | undefined): boolean;
    flatMap<U_3, This = undefined>(callback: (this: This, value: {
        step: string;
        fn: (bs: any, done: any) => any;
    }, index: number, array: {
        step: string;
        fn: (bs: any, done: any) => any;
    }[]) => U_3 | readonly U_3[], thisArg?: This | undefined): U_3[];
    flat<A, D extends number = 1>(this: A, depth?: D | undefined): FlatArray<A, D>[];
    [Symbol.iterator](): IterableIterator<{
        step: string;
        fn: (bs: any, done: any) => any;
    }>;
    [Symbol.unscopables](): {
        copyWithin: boolean;
        entries: boolean;
        fill: boolean;
        find: boolean;
        findIndex: boolean;
        keys: boolean;
        values: boolean;
    };
};
export = _exports;
