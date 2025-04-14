import { Meta, Title } from "@solidjs/meta";
import { createAsync, query } from "@solidjs/router";
import { getPills } from "~/lib/api";
import styles from "../../css/pills.module.css";
import { PillList } from "~/components/PillList";

const getPillsQuery = query(async () => {
  "use server";
  return getPills();
}, "pills");

export const route = {
  preload: () => getPills(),
};

export default function PillsPage() {
  const pillsAccessor = createAsync(() => getPillsQuery());

  return (
    <main>
      <Title>Diego Tonini | Pills</Title>
      <Meta
        name="description"
        content="A list of some problems I solved with code at my job."
      />
      <h1 class={styles["pageTitle"]}>
        During my work I encountered some problems that objectively made me lose
        time. It could be useful to someone even if AI exists
      </h1>

      <PillList pills={pillsAccessor} />
    </main>
  );
}
