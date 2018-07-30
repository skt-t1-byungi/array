declare type Finder<T> = (value: T, index: number, arr: T[]) => boolean;
declare const _default: <T>(arr: T[], finder: Finder<T>) => T | undefined;
export = _default;
