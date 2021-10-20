import { addCustomOrder, getColors, getInteriors, getOrders, getTechnologies, getTypes, getWheels } from "./database.js";



document.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        if (buttonClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)


const buildOrderListItem = (order) => {
    const colorsArray = getColors()
    const foundColor = colorsArray.find(
        (color) => {
            return color.id === order.colorId
        }
    )
    const interiorsArray = getInteriors()
    const foundInterior = interiorsArray.find(
        (interior) => {
            return interior.id === order.interiorId
        }
    )
    const technologiesArray = getTechnologies()
    const foundTechnology = technologiesArray.find(
        (technology) => {
            return technology.id === order.technologyId
        }
    )
    const wheelsArray = getWheels()
    const foundWheels = wheelsArray.find(
        (wheel) => {
            return wheel.id === order.wheelId
        }
    )
    const vehicleTypeArray = getTypes()
    const foundVehicleType = vehicleTypeArray.find(
        (type) => {
            return type.id === order.vehicleTypeId
        }
    )

    const initialCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheels.price
    const totalCost = initialCost * foundVehicleType.priceMultiplier
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    ${foundColor.color} ${foundVehicleType.type} with ${foundWheels.wheel} wheels, ${foundInterior.interior} interior, and the ${foundTechnology.technology} for a total cost of ${costString}
    </li>`

}

export const Orders = () => {
    const orders = getOrders()
    let html = "<ul>"
    const listItems = orders.map(buildOrderListItem)
    html += listItems.join("")
    html += "</ul>"
    return html
}