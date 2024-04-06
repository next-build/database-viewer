/**
 * @param {import("./types").RunnerOption} runner
 */
export function execRunner(runner: import("./types").RunnerOption): any;
/**
 * @param {import("./types").Runner} runner
 */
export function bsRunner(runner: import("./types").Runner): any;
/**
 * @param {import("./types").Runner} runner
 * @param {object} params
 * @param {string} params.cmd
 */
export function shRunner(runner: import("./types").Runner, params: {
    cmd: string;
}): any;
/**
 * @param {import("./types").Runner} runner
 */
export function npmRunner(runner: import("./types").Runner): any;
