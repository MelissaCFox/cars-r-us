import { getColors, setColor } from "./database.js";

const colors = getColors()


export const Colors = () => {
    let html = `
    <select id="colorOption">
    <option value="0">Select Color Option</option>`
    for (const colorObj of colors) {
        html += `<option value="${colorObj.id}">${colorObj.color}</option>`
    }
    html += `</select>`
    return html
}


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "colorOption") {
            setColor(parseInt(changeEvent.target.value))
            // console.log(`Selected color option: ${changeEvent.target.value}`)
        }
    }
)
