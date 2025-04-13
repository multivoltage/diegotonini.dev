import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "./css/app.css";
import { createGoogleTagManagerElement } from "./lib/createGoogleTagManagerElement";
import ExagondlBackground from "./components/ExagondlBackground";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Link
            href="https://fonts.googleapis.com/css?family=Indie+Flower&display=block"
            rel="stylesheet"
          />
          <Title>Diego Tonini | Software developer</Title>
          <Meta charset="utf-8" />
          <Meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta
            name="description"
            content="I am a Software Developer. Currently interested in web app development, mainly with React ecosystem with international team and Agile methodology."
          />

          <Meta property="og:type" content="webstie" />
          <Meta property="og:url" content="https://diegotonini.dev/" />
          <Meta
            property="og:title"
            content="Diego Tonini | Frontend developer"
          />
          <Meta property="twitter:card" content="summary_large_image" />
          <Meta property="twitter:url" content="https://diegotonini.dev/" />
          <Meta
            property="twitter:title"
            content="Diego Tonini | Frontend developer"
          />

          <Meta name="theme-color" content="black" />
          <Meta name="msapplication-navbutton-color" content="black" />
          <Meta name="apple-mobile-web-app-status-bar-style" content="black" />

          <ExagondlBackground />
          <Suspense>{props.children}</Suspense>
          <Suspense>{createGoogleTagManagerElement()}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
