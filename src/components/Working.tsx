import { component$ } from "@builder.io/qwik";
import Btn from "~/components/Btn";
import { createToggle } from "~/utils/createToggle";

export default component$(() => {
  const toggle = createToggle(["Foo", "Bar"]);

  return (
    <>
      <span>{toggle.currentState}</span>
      <Btn onClick$={() => toggle.toggle()} />
    </>
  );
});
