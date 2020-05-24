export default function* cycle<T>(iterable: Iterable<T>): Iterable<T> {
  const copy = [];
  for (const item of iterable) {
    yield item;
    copy.push(item);
  }
  if (!copy.length) {
    return;
  }
  for (;;) {
    for (const item of copy) {
      yield item;
    }
  }
}
