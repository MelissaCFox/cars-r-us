const database = {
    colors: [
        {
            id: 1,
            color: "Silver",
            price: 35
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 45
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 50
        },
        {
            id: 4,
            color: "Spring Green",
            price: 40
        }
    ],
    interiors: [
        {
            id: 1,
            interior: "Beige Fabric",
            price: 40
        },
        {
            id: 2,
            interior: "Charcoal Fabric",
            price: 65
        },
        {
            id: 3,
            interior: "White Leather",
            price: 80
        },
        {
            id: 4,
            interior: "Black Leather",
            price: 90
        }
    ],
    technologies: [
        {
            id: 1,
            technology: "Basic Package",
            price: 100
        },
        {
            id: 2,
            technology: "Navigation Package",
            price: 150
        },
        {
            id: 3,
            technology: "Visibility Package",
            price: 150
        },
        {
            id: 4,
            technology: "Ultra Package",
            price: 250
        }
    ],
    wheels: [
        {
            id: 1,
            wheel: "17-inch Pair Radial",
            price: 70
        },
        {
            id: 2,
            wheel: "17-inch Pair Radial Black",
            price: 80
        },
        {
            id: 3,
            wheel: "18-inch Pair Spoke Silver",
            price: 90
        },
        {
            id: 4,
            wheel: "18-inch Pair Spoke Black",
            price: 100
        }
    ],
    vehicleType: [
        {
            id: 1,
            type: "Car",
            priceMultiplier: 1
        },
        {
            id: 2,
            type: "SUV",
            priceMultiplier: 1.5
        },
        {
            id: 3,
            type: "Truck",
            priceMultiplier: 2.25
        }
    ],
    customOrders: [
        // {
        //     id: 1,
        //     colorId: 2,
        //     interiorId: 4,
        //     wheelId: 3,
        //     technologyId: 4,
        //     timestamp: 1614659931693
        // }

    ],
    orderBuilder: {}

}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTechnologies = () => {
    return database.technologies.map(technologie => ({...technologie}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getTypes = () => {
    return database.vehicleType.map(type => ({...type}))
}


export const getOrders = () => {
    return database.customOrders.map(customOrders => ({...customOrders}))
}

//Setting values for custom order through select options
export const setColor = (id) => {
    database.orderBuilder.colorId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}

export const setWheel = (id) => {
    database.orderBuilder.wheelId = id
}

export const setVehicleType = (id) => {
    database.orderBuilder.vehicleTypeId = id
}

export const addCustomOrder = () => {
    const newOrder = {...database.orderBuilder}
    if (database.customOrders.length === 0) {
        newOrder.id = 1
    } else {
        const lastIndex = database.customOrders.length - 1
        newOrder.id = database.customOrders[lastIndex].id + 1
    }
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
    console.log(database.customOrders)
}