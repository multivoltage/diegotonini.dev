import { Meta, MetaProvider, Title } from "@solidjs/meta";
import {
  createAsync,
  query,
  RouteDefinition,
  useParams,
} from "@solidjs/router";
import { onMount } from "solid-js";
import { getPillById } from "~/lib/api";
import { render } from "datocms-structured-text-to-html-string";
import Prism from "prismjs";

const getPillQuery = query(async (id: string) => {
  "use server";
  return getPillById(id);
}, "pill");

export const route = {
  load: ({ params }) => {
    return getPillById(params.id);
  },
} satisfies RouteDefinition;

export default function PillPage() {
  const { id } = useParams();
  const pill = createAsync(() => getPillQuery(id));

  let mainElement: HTMLDivElement | undefined;

  onMount(async () => {
    if (mainElement) {
      await import("prismjs/components/prism-typescript" as any);
      // await import("prismjs/plugins/line-numbers/prism-line-numbers" as any);
      // await import("prismjs/plugins/line-numbers/prism-line-numbers.css");

      const preBlocks = mainElement.querySelectorAll("pre");

      preBlocks.forEach((preBlock) => {
        const language = preBlock.getAttribute("data-language");
        preBlock.classList.add(`language-${language}`, "line-numbers");
        const codeBlocks = preBlock.querySelectorAll("code");
        codeBlocks.forEach((codeBlock) => {
          Prism.highlightElement(codeBlock);
        });
      });
    }
  });

  return (
    <main ref={mainElement}>
      <Title>{pill()?.title}</Title>
      <MetaProvider>
        <Meta name="description" content={pill()?.smallDescription} />
      </MetaProvider>
      <h2>The problem:</h2>
      <div
        innerHTML={render(pill()?.descriptionProblem) as string}
        class="structured-text"
      ></div>
      <hr />
      <h2>The solution (my solution):</h2>
      <div
        innerHTML={render(pill()?.descriptionSolution) as string}
        class="structured-text"
      ></div>
    </main>
  );
}
