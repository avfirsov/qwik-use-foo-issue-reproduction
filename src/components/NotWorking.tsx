import { component$ } from "@builder.io/qwik";
import { createToggle as useToggle } from "~/utils/createToggle";
import Btn from "~/components/Btn";

export default component$(() => {
  const toggle = useToggle(["Foo", "Bar"]);

  return (
    <>
      <span>{toggle.currentState}</span>
      <Btn onClick$={() => toggle.toggle()} />
    </>
  );
});
