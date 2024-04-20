import { component$ } from "@builder.io/qwik";
import { useToggle } from "~/utils/useToggle";
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
