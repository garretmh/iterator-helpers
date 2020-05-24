export default function* range(start: number, stop?: number, step: number = 1) {
  const _start = stop != null ? start : 0;
  const _stop = stop != null ? stop : start;
  for (let i = _start; i < _stop; i += step) {
    yield i;
  }
}
