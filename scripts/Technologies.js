import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies()

export const Technologies = () => {
    let html = `
    <select id="technologiesOption">
    <option value="0">Select Technologies Option</option>`
    for (const technologyObj of technologies) {
        html += `<option value="${technologyObj.id}">${technologyObj.technology}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "technologiesOption") {

            setTechnology(parseInt(changeEvent.target.value))
            // console.log(`Selected technology package: ${changeEvent.target.value}`)
        }
    }
)