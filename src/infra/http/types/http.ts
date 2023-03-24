export interface Http {
  get<TResponse>(url: string): Promise<TResponse>;
  post<TBody extends BodyInit, TResponse>(
    url: string,
    body: TBody
  ): Promise<TResponse>;
}
