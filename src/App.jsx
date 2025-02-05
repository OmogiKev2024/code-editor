import "./App.css"
import Editor from "@monaco-editor/react"
import LanguageButton from "./components/languageButton";
import ThemeButton from "./components/themeButton";
import RunButton from "./components/runButton";
import { useRef } from "react";
import OutputDisplay from "./components/outputDisplay";


export default function App() {
  const editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue(event) {
    event.preventDefault();
    console.log(editorRef.current.getValue());
  }


  return (
    <main id="main-container">
      <div id="input-container">
        <div id="input-controls">
          <LanguageButton />
          <ThemeButton />
        </div>
        <div id="input-display">
          <Editor
          height="100%"
          width="100%"
          language="javascript"
          theme="vs-dark"
          onMount={handleEditorDidMount}
          />
        </div>
      </div>
      <div id="output-container">
        <div id="output-controls">
          <RunButton runCode={showValue} />
        </div>
        <div id="output-display">
          <OutputDisplay />
        </div>
      </div>
    </main>
  );
}