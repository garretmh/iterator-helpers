export default function* take<T>(
  iterable: Iterable<T>,
  number: number,
): Iterable<T> {
  let i = 0;
  for (const item of iterable) {
    if (i >= number) {
      return;
    }
    yield item;
    i++;
  }
}
