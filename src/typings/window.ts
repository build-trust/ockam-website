/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    rdt?: any;
    analytics?: any;
    lintrk?: any;
    gtag?: (...args: any[]) => void;
  }
}
