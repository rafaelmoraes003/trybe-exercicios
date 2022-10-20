export interface IModel<T> {
  create(obj: T): Promise<T>,
  readOne(_id: string): Promise<T | null>,
  read(): Promise<T[]>,
  destroy(_id: string): Promise<void | null>,
}