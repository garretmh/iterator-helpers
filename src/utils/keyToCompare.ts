import { Primitive } from "../types/Primative.ts";

type CompareFunction<T> = (a: T, b: T) => number;

export function keyToCompare<T>(
  keyFn: (value: T) => Primitive,
): CompareFunction<T> {
  return (a: T, b: T): number => {
    let ka = keyFn(a);
    let kb = keyFn(b);
    if (typeof ka === "boolean" && typeof kb === "boolean") {
      return ka === kb ? 0 : !ka && kb ? -1 : 1;
    }
    if (typeof ka === "number" && typeof kb === "number") {
      return ka - kb;
    }
    if (typeof ka === "string" && typeof kb === "string") {
      return ka === kb ? 0 : ka < kb ? -1 : 1;
    }
    return -1;
  };
}
