import Editor from "@monaco-editor/react";
import LanguageButton from "./languageButton";
import { useRef } from "react";
import runCode from "./output";


export default function InputEditor({ outputFunction }) {
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;
        editor.focus();
    }

    // function handleChange() {
    //     console.log(editorRef.current.getValue());
    // }

    function handleClick(event) {
        runCode(editorRef.current.getValue(), "javascript", outputFunction);
    }


    return (
        <div id="input-container">
            <LanguageButton clickFunction={handleClick}/>
            <Editor
            height="95%"
            width="100%"
            defaultLanguage="javascript"
            defaultValue="// some code"
            theme="vs-dark"
            onMount={handleEditorDidMount}
            // onChange={handleChange}
            />
        </div>
    );
}