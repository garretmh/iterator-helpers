export default function* unique<T>(
  iterable: Iterable<T>,
  keyFn?: (value: T) => any,
): Iterable<T> {
  const seen = new Set();
  for (const item of iterable) {
    const key = keyFn ? keyFn(item) : item;
    if (!seen.has(key)) {
      seen.add(key);
      yield item;
    }
  }
}
