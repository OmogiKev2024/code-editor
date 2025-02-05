export default function RunButton({ runCode }) {
    return (
        <button className="output-controls" onClick={runCode}>Run</button>
    );
}