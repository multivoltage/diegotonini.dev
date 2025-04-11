import { createScriptLoader } from "@solid-primitives/script-loader";

export function createGoogleTagManagerElement() {
  const tag = "UA-67132612-4";
  return createScriptLoader({
    src: `https://www.googletagmanager.com/gtag/js?id=${tag}`,
    async onLoad() {
      window.dataLayer = window.dataLayer || [];
      function gtag(a: any, b: any) {
        window.dataLayer.push(arguments);
      }

      gtag("js", new Date());

      gtag("config", tag);
    },
  });
}
