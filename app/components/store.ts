import type { Editor } from "prosekit/core";
import { create } from "zustand";

type State = {
    // biome-ignore lint/suspicious/noExplicitAny: we don't care about the type of the editor
    editor: Editor<any> | undefined
}

type Action = {
    setEditor: (firstName: State['editor']) => void
}

export const useEditorStore = create<State & Action>((set) => ({
    editor: undefined,
    setEditor: (editor) => set({ editor }),
}))