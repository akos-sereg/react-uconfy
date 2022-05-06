declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.ico';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
