declare type ForEachCallback<T> = (value: T, index: number, array: T[]) => void;
declare const _default: <T>(arr: T[], callback: ForEachCallback<T>) => void;
export = _default;
