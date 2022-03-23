declare module 'MyModels' {
  export type Article = {
    id: string;
    title: string;
    content: string;
  };

  export type Device = {
    deviceID: string,
    name: string,
    platform: string,
    userID: number
  };
}
