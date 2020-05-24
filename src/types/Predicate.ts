export type Predicate<T, S extends T = T> = (value: T) => value is S;

export function predicateIdentity<T, S extends T = T>(value: T): value is S {
  return !!value;
}
