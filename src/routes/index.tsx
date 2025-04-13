import { createEffect, createSignal, For, onCleanup } from "solid-js";
import paraImg from "../assets/para.png";
import { Link } from "@solidjs/meta";
import { A } from "@solidjs/router";
import styles from "../css/home.module.css";

export default function Home() {
  let cursorElement!: HTMLDivElement;

  let [cursorStyle, setCursorStyle] = createSignal<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  // TODO try to put createRenderEffect
  createEffect(() => {
    function onMounseMove(e: MouseEvent) {
      setCursorStyle({ top: e.clientY, left: e.clientX });
    }

    window.onmousemove = onMounseMove;

    onCleanup(() => {
      window.onmousemove = null;
    });
  });

  return (
    <div class={styles.page}>
      <header class={styles.header}>
        <h1 class="page-title">
          <span class={styles["page-title__hi"]}>
            <img src={paraImg} alt="parachute icon" aria-hidden="true" />
            <span>Hi,</span>
          </span>
          I am Diego Tonini
        </h1>

        <a href="tel:+393891883138" class={styles["my-phone"]}>
          call me :)
        </a>
      </header>

      <main class="main">
        <h2 class={styles.bio}>
          I'm a frontend developer who still enjoys writing code without AI. I
          try to develop interesting things, and sometimes even open-source
          projects. I'm a skydiver in my free time.
        </h2>
        <div class={styles.actions}>
          <div class={styles.icons}>
            <a
              href="https://www.linkedin.com/in/diego-tonini-6182a6114/"
              target="_blank"
              class={`${styles.square} ${styles["square-icon"]}`}
              rel="noopener"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/multivoltage"
              target="_blank"
              class={`${styles.square} ${styles["square-icon"]}`}
              rel="noopener"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            <a
              href="https://t.me/diego_tonini"
              target="_blank"
              class={`${styles.square} ${styles["square-icon"]}`}
              rel="noopener"
            >
              <svg role="img" viewBox="0 0 24 24" aria-hidden="true">
                <title>Telegram</title>
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"></path>
              </svg>
            </a>

            <a
              href="mailto:diego.tonini93@gmail.com"
              class={`${styles.square} ${styles["square-icon"]}`}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <title>Gmail</title>
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
              </svg>
            </a>
          </div>

          <a
            class={`${styles.square} ${styles["square-cv"]}`}
            href="https://github.com/multivoltage/mypersonal-cv/raw/master/Diego%20Tonini.pdf"
            download
          >
            CV / RESUME
          </a>
        </div>

        {/* <h3
          style={{
            "text-align": "center",
            "margin-top": "3rem",
            "margin-bottom": "3rem",
          }}
        >
          or
        </h3>
        <h2>
          You can visit the{" "}
          <A class="square square-icon" href="/pills">
            <b>PILLS PAGE</b>
          </A>{" "}
          and read some article that I wrote each time I encountered a problem
          in my job
        </h2> */}
      </main>

      <footer class={styles.footer}></footer>

      <div
        class={styles.cursor}
        ref={cursorElement}
        style={{
          left: `${cursorStyle().left}px`,
          top: `${cursorStyle().top}px`,
        }}
      ></div>
    </div>
  );
}
