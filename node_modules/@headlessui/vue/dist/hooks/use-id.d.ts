export declare function useId(): string;
/**
 * This function allows users to provide a custom ID generator
 * as a workaround for the lack of stable SSR IDs in Vue 3.x.
 *
 * This Nuxt users use the Nuxt provided `useId` function
 * which is stable across SSR and client.
 */
export declare function provideUseId(fn: () => string): void;
