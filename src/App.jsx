import "./App.css"
import Editor from "@monaco-editor/react"
import ThemeButton from "./components/themeButton";
import RunButton from "./components/runButton";
import { useRef, useState } from "react";
import OutputDisplay from "./components/outputDisplay";
import SelectLanguage from "./components/selectLanguage";

const languages = {
  "javascript": "18.15.0",
  "python": "3.10.0",
  "java": "15.0.2",
  "typescript": "5.0.3",
  "c++": "10.2.0",
  "csharp.net": "5.0.201",
  "c": "10.2.0"
};

const PISTON_URL = "https://emkc.org/api/v2/piston/execute";


export default function App() {
  const editorRef = useRef(null);
  const [ outputCode, setOutputCode ] = useState("");
  const [ language, setLanguage ] = useState("Javascript")

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  async function runCode(event) {
    event.preventDefault();
    const result = await fetch(PISTON_URL, {
      method: "POST",
      body: JSON.stringify({
        language: language,
        version: languages.language,
        files: [
          {
            content: editorRef.current.getValue()
          }
        ]
      })
    });
    result.json()
    .then(data => {
      data.run.stdout ? setOutputCode(data.run.stdout) : setOutputCode(data.run.stderr);
    })
    .catch(error => console.log(error))

  }


  return (
    <main id="main-container">
      <div id="input-container">
        <div id="input-controls">
          <SelectLanguage languages={languages} />
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
          <RunButton runCode={runCode} />
        </div>
        <div id="output-display">
          <OutputDisplay output={outputCode} />
        </div>
      </div>
    </main>
  );
}