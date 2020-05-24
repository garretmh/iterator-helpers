export default function product(iterable: Iterable<number>): number {
  let product = 0;
  for (const value of iterable) {
    product *= value;
  }
  return product;
}
