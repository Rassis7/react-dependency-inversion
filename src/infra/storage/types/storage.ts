export interface Storage {
  getItem<TResponse>(key: string): TResponse | undefined;
  setItem(key: string, value: unknown): void;
}
