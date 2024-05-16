export default class Util {
    public static inRange(val: number, range: number[]) {
        return range.includes(val);
    }

    public static clamp(val: number, min: number, max?: number) {
        if (max === undefined) {
            max = min;
            min = 0;
        }

        return Math.min(Math.max(val, min), max);
    }

    public static range(start: number, end?: number) {
        if (end === undefined) {
            end = start;
            start = 0;
        }
        return Array.from({ length: end - start }, (_, i) => i + start);
    }
}