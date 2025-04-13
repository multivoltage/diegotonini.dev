import { createEffect, createSignal, For } from "solid-js";
import styles from "./style.module.css";

export default function ExagondlBackground() {
  let backgroundElement!: HTMLDivElement;

  let [rowsSettings, setRowSettings] = createSignal<{
    necessaryRow: number;
    necessaryItemsPerRow: number;
  }>({ necessaryRow: 0, necessaryItemsPerRow: 0 });

  createEffect(() => {
    const exagonSize = 24;
    const exagonHeiht = 27;
    const necessaryItemsPerRow = Math.round(
      window.screen.availWidth / exagonSize
    ); // not considering margin
    const necessaryRow =
      Math.round(window.screen.availHeight / exagonHeiht) + 2; // not considring margin
    setRowSettings({
      necessaryItemsPerRow,
      necessaryRow,
    });
  });

  return (
    <div class={styles.background} ref={backgroundElement}>
      <For
        each={[...Array(rowsSettings().necessaryRow).keys()]}
        fallback={<div>Loading...</div>}
      >
        {(item) => (
          <div class={styles.row}>
            <For
              each={[...Array(rowsSettings().necessaryItemsPerRow).keys()]}
              fallback={<div>Loading...</div>}
            >
              {(item) => <div class={styles.hexagon}></div>}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}
