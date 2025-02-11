export default function SelectLanguage ({ languages, languageChanger }) {

    function handleChange(event) {
        languageChanger(event.target.value);
    }

    return (
        <div className="select-container">
            <select id="languages" name="languages" onChange={handleChange}>
                {Object.keys(languages).map((item, index) => <option key={index} value={item}>{item[0].toUpperCase() + item.slice(1)}</option>)}
            </select>
        </div>
    );
}