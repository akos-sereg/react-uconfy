declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.ico';
declare module '*.txt';
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}
