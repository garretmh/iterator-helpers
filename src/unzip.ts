import map from "./map.ts";
import iteratorFrom from "./utils/iteratorFrom.ts";

function unzip<T, U>(iterable: Iterable<[T, U]>): [Iterable<T>, Iterable<U>];
function unzip<T>(iterable: Iterable<T[]>): Iterable<T>[];
function unzip<T>(iterable: Iterable<T[]>): Iterable<T>[] {
  return unzipMany(iterable);
}
export default unzip;

export function unzip2<T, U>(
  iterable: Iterable<[T, U]>,
): [Iterable<T>, Iterable<U>] {
  return [
    map(iterable, (v) => v[0]),
    map(iterable, (v) => v[1]),
  ];
}

export function unzipMany<T>(iterable: Iterable<T[]>): Iterable<T>[] {
  const first = iteratorFrom(iterable).next();
  if (first.done) {
    return [];
  }
  return first.value.map((_, index) => map(iterable, (v) => v[index]));
}
