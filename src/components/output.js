const API = "https://emkc.org/api/v2/piston/execute";
// const RUNTIMES = "https://emkc.org/api/v2/piston/runtimes";

// export default function runCode(code, language) {
//     fetch("https://emkc.org/api/v2/piston/runtimes")
//     .then(res => res.json().then(data => console.log(data)))
//     .catch(error => console.error(error)
//     )
// }

export default function runCode(code, language, outputFunction) {
    fetch(API, {
        method: "POST",
        body: JSON.stringify({
            language,
            version: "18.15.0",
            files: [
                {
                    content: code
                }
            ]
        })
    })
    .then(res => res.json().then(data => outputFunction(data.run.stdout)))
    .catch(error => console.log(error))
}