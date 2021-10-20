import { CarsRUS } from "./CarsRUsHTML.js"


const mainContainer = document.querySelector("#container")

const renderHTML = () => {
    mainContainer.innerHTML = CarsRUS()
}

renderHTML()

document.addEventListener("stateChanged", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderHTML()
})