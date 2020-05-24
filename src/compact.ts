export default function* compact<T>(
  iterable: Iterable<T | undefined>,
): Iterable<T> {
  for (const item of iterable) {
    if (typeof item !== "undefined") {
      yield item;
    }
  }
}
