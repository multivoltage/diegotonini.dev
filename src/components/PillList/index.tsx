import { For } from "solid-js";
import { Pill } from "~/types";
import styles from "./style.module.css";
import { formatDate } from "~/lib/utils";
import { A, AccessorWithLatest } from "@solidjs/router";

interface Props {
  pills: AccessorWithLatest<Omit<Pill, "descriptionProblems">[] | undefined>;
}

export function PillList({ pills }: Props) {
  return (
    <ul class={styles["list"]}>
      <For each={pills()}>
        {(pill) => {
          return (
            <li>
              <p class={styles["date"]}>
                {formatDate(new Date(pill.writedAt))}
              </p>
              <A href={`/pills/${pill.id}`}>
                <h2 class={styles["pillTitle"]}>{pill.title}</h2>
              </A>

              <p class={styles["smallDescription"]}>{pill.smallDescription}</p>
            </li>
          );
        }}
      </For>
    </ul>
  );
}
