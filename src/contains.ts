export default function contains<T>(haystack: Iterable<T>, needle: T): boolean {
  for (const item of haystack) {
    if (item === needle) {
      return true;
    }
  }
  return false;
}
