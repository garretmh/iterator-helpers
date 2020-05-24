export default function* count(
  start: number = 0,
  step: number = 1,
): Iterable<number> {
  let i = start;
  for (;;) {
    yield i;
    i += step;
  }
}
