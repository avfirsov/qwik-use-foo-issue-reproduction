import {component$, QRL, useStylesScoped$} from "@builder.io/qwik";

export default component$<{ onClick$: QRL<() => void> }>(({ onClick$ }) => {
  useStylesScoped$(`
    .btn {
        width: 60px;
        height: 32px;
        background-color: #373D4A;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
  `);

  return (
    <div class="btn" onClick$={() => onClick$()}>
      Bar
    </div>
  );
});
