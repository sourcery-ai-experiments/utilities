/**
 * @type T
 * @param value
 * @returns value as T
 */
export function cast<T>(value: any): T {
  return value as T;
}
