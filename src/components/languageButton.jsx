export default function LanguageButton({clickFunction}) {
    return (
        <div id="input-controls">
            <button onClick={clickFunction}>Run Javascript</button>
        </div>
    );
}