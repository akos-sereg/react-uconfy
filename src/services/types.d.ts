declare module 'MyTypes' {
  export type Services = typeof import('./index').default;

  export type PathItem = {
      name: string,
      path?: string
  };
}
