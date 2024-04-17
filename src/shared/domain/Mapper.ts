export interface Mapper<T, R> {
  to(a: T): R;
  from(b: R): T;
}
