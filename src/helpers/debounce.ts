export function debounce<
  T extends unknown[]
>(
  func: (...args: T) => void,
  delay: number,
):
  (...args: T) => void
{
  let timer: number | null = null ;
  return (...args: T) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.call(null, ...args);
    }, delay);
  };
}