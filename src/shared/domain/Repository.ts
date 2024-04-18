export interface Repository<T> {
  find(): Array<T>;
  findById(id: string): T | null;
  save(it: T): void;
  update(it: T): void;
  delete(id: string): void;
}
