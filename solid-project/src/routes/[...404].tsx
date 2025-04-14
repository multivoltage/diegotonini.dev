import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        I am so sorry but the page you are looking for does not exist. It may
        have been removed, had its name changed, or is temporarily unavailable.
      </p>
    </main>
  );
}
