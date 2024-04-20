import { $, QRL, useSignal } from "@builder.io/qwik";

export type Toggle<State> = {
  toggle: QRL<() => Promise<State>>;
  setState: QRL<(newState: State) => Promise<State>>;
  readonly currentState: Promise<State>;
};

export const createToggle = <State>(states: State[]): Toggle<State> => {
  // eslint-disable-next-line
  const state = useSignal(0);
  const getCurrentState = $((): State => states[state.value]);

  return {
    toggle: $((): Promise<State> => {
      console.log("=>(createToggle.ts:16) state.value", state.value);
      state.value = (state.value + 1) % states.length;
      console.log("=>(createToggle.ts:16) state.value", state.value);
      return getCurrentState();
    }),
    setState: $((newState: State): Promise<State> => {
      state.value =
        states.indexOf(newState) === -1
          ? state.value
          : states.indexOf(newState);
      return getCurrentState();
    }),
    get currentState(): Promise<State> {
      return getCurrentState();
    },
  };
};
