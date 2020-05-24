export default function* repeat<T>(
  value: T,
  times: number = Infinity,
): Iterable<T> {
  for (let i = 0; i < times; i++) {
    yield value;
  }
}
