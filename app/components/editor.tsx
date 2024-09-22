"use client"
import 'prosekit/basic/style.css'

import { type NodeJSON, createEditor, jsonFromNode } from 'prosekit/core'
import type { ProseMirrorNode } from 'prosekit/pm/model'
import { ProseKit, useDocChange } from 'prosekit/react'
import { useCallback, useEffect, useState } from 'react'

import { defineBasicExtension } from "prosekit/basic"
import { useEditorStore } from "./store"

export default function Editor({
    defaultContent,
    onDocUpdate,
}: {
    defaultContent?: NodeJSON
    onDocUpdate?: (doc: NodeJSON) => void
}) {
    const { setEditor } = useEditorStore()
    const extension = defineBasicExtension()

    // Use useState to ensure the editor is only created once
    const [editor] = useState(() => createEditor({ extension, defaultContent }))

    useEffect(() => {
        setEditor(editor)
        // Only run once when editor is set
    }, [editor, setEditor])

    const handleDocChange = useCallback(
        (doc: ProseMirrorNode) => onDocUpdate?.(jsonFromNode(doc)),
        [onDocUpdate]
    )

    useDocChange(handleDocChange, { editor })

    return (
        <ProseKit editor={editor}>
            <div className="">
                <div className=''>
                    <div ref={editor.mount} className='ProseMirro outline-none autofocus' />
                </div>
            </div>
        </ProseKit>
    )
}
