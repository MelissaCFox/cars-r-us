

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
            technology: "Basic Package <em>(basic sound system)</em>",
            price: 100
        },
        {
            id: 2,
            technology: "Navigation Package <em>(includes integrated navigation controls)</em>",
            price: 150
        },
        {
            id: 3,
            technology: "Visibility Package <em>(includes side and rear cameras)</em>",
            price: 150
        },
        {
            id: 4,
            technology: "Ultra Package <em>(includes navigation and visibility packages)</em>",
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
    customOrder: {}

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


