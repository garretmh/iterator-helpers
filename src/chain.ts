export default function* chain<T>(...iterables: Iterable<T>[]): Iterable<T> {
  for (const iterable of iterables) {
    for (const item of iterable) {
      yield item;
    }
  }
}
