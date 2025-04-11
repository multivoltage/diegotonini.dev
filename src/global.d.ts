/// <reference types="@solidjs/start/env" />

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export {};
