import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Working from "~/components/Working";
import NotWorking from "~/components/NotWorking";

export default component$(() => {
  useStylesScoped$(`
    .examples-row {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        max-width: 20%;
    }
    
    .example {
        border: 4px solid red;
        padding: 20px;
        position: relative;
    }
    
    .example__title {
        position: relative;
        top: -20px;
        white-space: nowrap;
    }
  `);

  return (
    <>
      <h1>Hi 👋</h1>
      <p>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </p>
      <div class="examples-row">
        <div class="example">
          <span class="example__title">Working</span>
          <Working />
        </div>
        <div class="example">
          <span class="example__title">Not Working</span>
          <NotWorking />
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
