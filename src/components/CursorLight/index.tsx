import { createEffect, createSignal, For, onCleanup, onMount } from "solid-js";
import styles from "./style.module.css";

export default function CursorLight() {
  let cursorElement!: HTMLDivElement;

  let [cursorStyle, setCursorStyle] = createSignal<{
    top: number;
    left: number;
  }>({ top: -4000, left: -4000 }); // -4000 to hide the cursor

  // TODO try to put createRenderEffect
  createEffect(() => {
    setCursorStyle({
      top: window.screen.availHeight / 2,
      left: window.screen.availWidth / 2,
    });
    function onMounseMove(e: MouseEvent) {
      setCursorStyle({ top: e.clientY, left: e.clientX });
    }

    function onScrollMove(e: any) {
      console.log(document.querySelector("html")?.scrollTop);
      const sT = document.querySelector("html")?.scrollTop || 0;
      setCursorStyle((prev) => ({
        top: prev.top - (prev.top + sT) * -1,
        left: prev.left + (document.querySelector("html")?.scrollLeft || 0),
      }));
    }

    window.onmousemove = onMounseMove;
    window.onscroll = onScrollMove;

    onCleanup(() => {
      window.onmousemove = null;
    });
  });

  return (
    <div
      class={styles.cursor}
      ref={cursorElement}
      style={{
        left: `${cursorStyle().left}px`,
        top: `${cursorStyle().top}px`,
      }}
    ></div>
  );
}
