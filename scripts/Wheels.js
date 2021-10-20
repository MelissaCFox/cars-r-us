import { getWheels, setWheel } from "./database.js";


const wheels = getWheels()

export const Wheels = () => {
    let html = `
    <select id="wheelOption">
    <option value="0">Select Wheel Option</option>`
    for (const wheelObj of wheels) {
        html += `<option value="${wheelObj.id}">${wheelObj.wheel}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "wheelOption") {
            setWheel(parseInt(changeEvent.target.value))
            // console.log(`Selected wheel option: ${changeEvent.target.value}`)
        }
    }
)