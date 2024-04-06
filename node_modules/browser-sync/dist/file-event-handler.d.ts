/**
 * Apply the operators that apply to the 'file:changed' event
 * @param {import("rxjs").Observable} subject
 * @param options
 */
export function fileChanges(subject: import("rxjs").Observable<any>, options: any): any;
/**
 * Apply the operators that apply to the 'browser:reload' event
 * @param {import("rxjs").Observable} subject
 * @param options
 */
export function applyReloadOperators(subject: import("rxjs").Observable<any>, options: any): any;
