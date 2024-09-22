"use client"
import Editor from "./components/editor";
import { useEditorStore } from "./components/store";

export default function Home() {
  const { editor } = useEditorStore();
  return <div className="lg:w-[600px] space-y-8 min-h-screen">
    <h1 className="text-2xl font-medium pt-16">
      What do you want to get done today?
    </h1>
    {/* biome-ignore lint/a11y/useKeyWithClickEvents: if we would add a key event, we would end in a loop */}
    <div className="cursor-text h-full" onClick={() => editor?.focus()}>
      <Editor />
    </div>
  </div>;
}