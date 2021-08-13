declare module '@lskjs/utils/sizes' {
  export interface Sizes {
    [key: string]: string;
  }
  export function is(size1: string, size2: string): boolean;
}
