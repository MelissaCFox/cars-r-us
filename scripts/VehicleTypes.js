import { getTypes } from "./database.js";
import { setVehicleType } from "./database.js";

const vehicleTypes = getTypes()

export const VehicleTypes = () => {
    let html = `
    <select id="vehicleTypeOption">
    <option value="0">Select Vehicle Type</option>`
    for (const vehicleTypeObj of vehicleTypes) {
        html += `<option value="${vehicleTypeObj.id}">${vehicleTypeObj.type}</option>`
    }
    html += `</select>`
    return html
}

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "vehicleTypeOption") {
            setVehicleType(parseInt(changeEvent.target.value))
            // console.log(`Selected vehicleType option: ${changeEvent.target.value}`)
        }
    }
)