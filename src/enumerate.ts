export default function* enumerate<T>(
  iterable: Iterable<T>,
  start: number = 0,
): Iterable<[number, T]> {
  let i = start;
  for (const item of iterable) {
    yield [i++, item];
  }
}
