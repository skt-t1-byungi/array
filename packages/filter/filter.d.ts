declare type Filterer<T> = (value: T, index: number, array: T[]) => boolean;
declare const _default: <T>(arr: T[], filterer: Filterer<T>) => T[];
export = _default;
