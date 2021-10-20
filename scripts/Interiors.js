import { getInteriors, setInterior } from "./database.js";


const interiors = getInteriors()

export const Interiors = () => {
    let html = `
    <select id="interiorOption">
    <option value="0">Select Interior Option</option>`
    for (const interiorObj of interiors) {
        html += `<option value="${interiorObj.id}">${interiorObj.interior}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "interiorOption") {
            setInterior(parseInt(changeEvent.target.value))
            // console.log(`Selected interior option: ${changeEvent.target.value}`)
        }
    }
)