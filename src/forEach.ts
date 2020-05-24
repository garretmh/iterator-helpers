export default function forEach<T>(
  iterable: Iterable<T>,
  callback: (value: T) => any,
): void {
  for (const item of iterable) {
    callback(item);
  }
}
