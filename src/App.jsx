import "./App.css";
import InputEditor from "./components/inputEditor";
import { useState, useEffect } from "react";
import OutputContainer from "./components/outputContainer";

export default function App() {
  const [ output, setOutput] = useState("");

  return (
    <main id="main-container">
      <InputEditor outputFunction={setOutput} />
      <div id="output-container">
        <div id="output-controls">Controls</div>
        <OutputContainer output={output} />
      </div>
    </main>
  );
}