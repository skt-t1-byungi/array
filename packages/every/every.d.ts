declare type Tester<T> = (value: T, index: number, array: T[]) => boolean;
declare const _default: <T>(arr: T[], tester: Tester<T>) => boolean;
export = _default;
